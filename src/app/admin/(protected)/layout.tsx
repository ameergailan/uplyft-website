import { redirect } from 'next/navigation'

import { isAdminUser } from '@/lib/admin'
import { createClient } from '@/lib/supabase/server'

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  if (!isAdminUser(user)) {
    await supabase.auth.signOut()
    redirect('/login?error=unauthorized')
  }

  return (
    <div className="min-h-screen bg-[#111318] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              UpLyft Admin
            </p>
            <p className="mt-1 text-sm text-white/60">{user.email}</p>
          </div>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">{children}</main>
    </div>
  )
}
