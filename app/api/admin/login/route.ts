import { NextRequest, NextResponse } from 'next/server'
import { checkAdminCredentials, createAdminToken, ADMIN_COOKIE } from '@/lib/admin-auth'

// Simple in-memory rate limiter — 5 attempts per 15 minutes per IP
const attempts = new Map<string, { count: number; resetAt: number }>()
const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000

function getIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = attempts.get(ip)
  if (!record || record.resetAt < now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  if (record.count >= MAX_ATTEMPTS) return true
  record.count++
  return false
}

function clearAttempts(ip: string) {
  attempts.delete(ip)
}

export async function POST(req: NextRequest) {
  const ip = getIp(req)

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many login attempts. Please try again after 15 minutes.' },
      { status: 429 }
    )
  }

  let body: { username?: string; password?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { username, password } = body

  if (!username || !password) {
    return NextResponse.json({ error: 'Username and password are required' }, { status: 400 })
  }

  if (typeof username !== 'string' || typeof password !== 'string') {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  // Trim to avoid accidental whitespace issues
  const isValid = await checkAdminCredentials(username.trim(), password.trim())

  if (!isValid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  // Successful login — clear rate limit record
  clearAttempts(ip)

  const token = await createAdminToken()

  const res = NextResponse.json({ success: true })
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 8 * 60 * 60,
    path: '/',
  })

  return res
}
