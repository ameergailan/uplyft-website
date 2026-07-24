import { type NextRequest, NextResponse } from 'next/server'

import {
  updateSession,
  updateSessionWithRewrite,
} from '@/lib/supabase/middleware'

const ADMIN_HOST =
  process.env.NEXT_PUBLIC_ADMIN_HOST?.toLowerCase() ?? 'admin.uplyftdigital.co'

function getHost(request: NextRequest) {
  return (request.headers.get('host') ?? '').split(':')[0].toLowerCase()
}

function isAdminHost(host: string) {
  return host === ADMIN_HOST || host.startsWith('admin.')
}

export async function middleware(request: NextRequest) {
  const host = getHost(request)
  const adminHost = isAdminHost(host)
  const { pathname } = request.nextUrl

  if (!adminHost && (pathname.startsWith('/admin') || pathname.startsWith('/auth'))) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (adminHost) {
    if (pathname === '/' || pathname === '') {
      return updateSessionWithRewrite(request, '/admin')
    }

    if (pathname === '/login' || pathname === '/login/') {
      return updateSessionWithRewrite(request, '/admin/login')
    }

    if (
      !pathname.startsWith('/admin') &&
      !pathname.startsWith('/auth') &&
      !pathname.startsWith('/_next') &&
      !pathname.startsWith('/favicon.ico')
    ) {
      return updateSessionWithRewrite(request, `/admin${pathname}`)
    }
  }

  return updateSession(request)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
