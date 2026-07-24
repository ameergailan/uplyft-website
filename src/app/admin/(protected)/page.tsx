export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-2 max-w-2xl text-white/60">
          Internal admin area for UpLyft. This is only available on the admin
          subdomain and requires a Supabase account with the admin role.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'Leads', detail: 'Partner and workshop inquiries' },
          { title: 'Content', detail: 'Pages, media, and announcements' },
          { title: 'Team', detail: 'Careers and internal updates' },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm text-white/55">{card.detail}</p>
            <p className="mt-4 text-xs uppercase tracking-wide text-[#d4af37]">
              Coming soon
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
