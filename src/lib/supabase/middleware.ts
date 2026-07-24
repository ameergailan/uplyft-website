import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

function copyCookies(from: NextResponse, to: NextResponse) {
  from.cookies.getAll().forEach(({ name, value }) => {
    to.cookies.set(name, value)
  })
}

export async function updateSession(
  request: NextRequest,
  response?: NextResponse
) {
  let supabaseResponse = response ?? NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value)
          })
          supabaseResponse = response ?? NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  await supabase.auth.getUser()

  return supabaseResponse
}

export async function updateSessionWithRewrite(
  request: NextRequest,
  rewritePath: string
) {
  const rewriteResponse = NextResponse.rewrite(new URL(rewritePath, request.url))
  const sessionResponse = await updateSession(request, rewriteResponse)
  copyCookies(sessionResponse, rewriteResponse)
  return rewriteResponse
}
