const SECRET_KEY = process.env.ADMIN_SECRET || 'kotibox-admin-secret-change-in-production'
const TOKEN_EXPIRY_MS = 8 * 60 * 60 * 1000 // 8 hours

async function getHmacKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(SECRET_KEY),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

function toBase64Url(bytes: Uint8Array<ArrayBuffer>): string {
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

// Returns Uint8Array<ArrayBuffer> — valid BufferSource in Edge Runtime + Node
function fromBase64Url(str: string): Uint8Array<ArrayBuffer> {
  const base64 = str
    .replace(/-/g, '+')
    .replace(/_/g, '/')
    .padEnd(str.length + (4 - (str.length % 4)) % 4, '=')
  const chars = atob(base64)
  const buf = new ArrayBuffer(chars.length)
  const view = new Uint8Array(buf)
  for (let i = 0; i < chars.length; i++) view[i] = chars.charCodeAt(i)
  return view
}

// Constant-time buffer comparison — prevents timing attacks
function bufferEqual(a: ArrayBuffer, b: ArrayBuffer): boolean {
  if (a.byteLength !== b.byteLength) return false
  const va = new Uint8Array(a)
  const vb = new Uint8Array(b)
  let diff = 0
  for (let i = 0; i < va.length; i++) diff |= va[i] ^ vb[i]
  return diff === 0
}

async function hmacOf(value: string): Promise<ArrayBuffer> {
  const key = await getHmacKey()
  return crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value))
}

export async function createAdminToken(): Promise<string> {
  const payload = JSON.stringify({ role: 'admin', exp: Date.now() + TOKEN_EXPIRY_MS })
  const key = await getHmacKey()
  const payloadBytes = new TextEncoder().encode(payload)
  const sig = await crypto.subtle.sign('HMAC', key, payloadBytes)
  return `${toBase64Url(payloadBytes)}.${toBase64Url(new Uint8Array(sig))}`
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const parts = token.split('.')
    if (parts.length !== 2) return false
    const [encodedPayload, encodedSig] = parts
    const payloadBytes = fromBase64Url(encodedPayload)
    const payload = JSON.parse(new TextDecoder().decode(payloadBytes))
    if (payload.role !== 'admin') return false
    if (!payload.exp || payload.exp < Date.now()) return false
    const key = await getHmacKey()
    const sigBytes = fromBase64Url(encodedSig)
    return crypto.subtle.verify('HMAC', key, sigBytes, payloadBytes)
  } catch {
    return false
  }
}

// Timing-safe credential check — always runs all comparisons regardless of early mismatches
export async function checkAdminCredentials(username: string, password: string): Promise<boolean> {
  const adminUser = process.env.ADMIN_USERNAME || 'admin'
  const adminPass = process.env.ADMIN_PASSWORD || 'kotibox@2024'

  const [expectedUser, actualUser, expectedPass, actualPass] = await Promise.all([
    hmacOf(adminUser),
    hmacOf(username),
    hmacOf(adminPass),
    hmacOf(password),
  ])

  return bufferEqual(expectedUser, actualUser) && bufferEqual(expectedPass, actualPass)
}

export const ADMIN_COOKIE = 'admin_session'
