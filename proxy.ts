import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminToken, ADMIN_COOKIE } from '@/lib/admin-auth'

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Protect /admin/* routes except /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = req.cookies.get(ADMIN_COOKIE)?.value

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    const isValid = await verifyAdminToken(token)
    if (!isValid) {
      const res = NextResponse.redirect(new URL('/admin/login', req.url))
      res.cookies.set(ADMIN_COOKIE, '', { maxAge: 0, path: '/' })
      return res
    }
  }

  // Already logged-in admin visiting /admin/login → redirect to dashboard
  if (pathname === '/admin/login') {
    const token = req.cookies.get(ADMIN_COOKIE)?.value
    if (token) {
      const isValid = await verifyAdminToken(token)
      if (isValid) {
        return NextResponse.redirect(new URL('/admin/dashboard', req.url))
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
