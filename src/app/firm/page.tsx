import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'About the Firm — UpLyft',
  description:
    'Meet the team behind UpLyft and the systems we use to scale SaaS companies to 7 figures through paid acquisition.',
}

const leadership = [
  {
    name: 'Ameer',
    title: 'Managing Partner, Founder',
    initials: 'A',
  },
  {
    name: 'Abed',
    title: 'Managing Partner, Founder',
    initials: 'A',
  },
  {
    name: 'Ayham',
    title: 'Chief Operating Officer',
    initials: 'A',
  },
  {
    name: 'Abdullah',
    title: 'Chief Operating Officer',
    initials: 'A',
  },
]

const timeline = [
  {
    period: '2019 — Present',
    heading: 'The First Systems',
    body: "Ameer and Abed started by running paid acquisition for a handful of early-stage SaaS companies. After dozens of campaigns across search and social, they realized the winners weren't the ones with the biggest budgets — they were the ones with the tightest systems. They began documenting every framework: offer, creative, funnel, and follow-up.",
  },
  {
    period: '2021 — Present',
    heading: 'The Acquisition Engine',
    body: 'Rather than sell one-off services, they packaged their playbooks into a repeatable acquisition engine — the same structure for tracking, creative testing, and payback windows that they use across every account. The model let SaaS founders realize predictable growth without rebuilding their marketing from scratch.',
  },
  {
    period: '2023 — Present',
    heading: 'A Portfolio of Scale',
    body: 'Today UpLyft operates like a firm, not an agency. The team partners with SaaS companies to install the exact systems, processes, and playbooks needed to scale to 7 figures in annual revenue — sharing in the upside and treating every partner like a portfolio company.',
  },
]

export default function FirmPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <SiteHeader />

      {/* Leadership */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Dotted-paper background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#c4c4be 1.1px, transparent 1.2px)',
            backgroundSize: '22px 22px',
          }}
        />

        <div className="container-page relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            About the Firm
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
            Meet Our Leadership Team
          </h1>

          <div className="mx-auto mt-14 grid max-w-3xl gap-8 sm:grid-cols-2">
            {leadership.map((person) => (
              <div key={person.name} className="text-left">
                <div className="relative flex aspect-[4/5] items-end justify-center overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-[#e4e3df] to-[#cfceca]">
                  <span className="mb-0 select-none text-[9rem] font-extrabold leading-none text-black/5">
                    {person.initials}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold uppercase tracking-tight text-[var(--ink)]">
                  {person.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                  {person.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Experience */}
      <section className="border-t border-black/10 py-20 lg:py-28">
        <div className="container-page">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Our Experience
          </h2>

          <div className="mx-auto mt-16 max-w-5xl space-y-16 lg:space-y-24">
            {timeline.map((item, i) => (
              <div
                key={item.period}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-[#e4e3df] to-[#cfceca] ${
                    i % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <span className="absolute inset-0 flex items-center justify-center select-none text-6xl font-extrabold text-black/5 sm:text-7xl">
                    UpLyft
                  </span>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-[var(--ink)] sm:text-3xl">
                    {item.heading}
                  </h3>
                  <p className="mt-5 leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-black/10 bg-[var(--dark)] py-20 text-center lg:py-28">
        <div className="container-page">
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Want Us to Help You{' '}
            <span className="text-[#d4af37]">Scale Your SaaS?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/60">
            See how UpLyft can install the systems behind predictable, profitable growth.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/#roadmap" className="btn-gold border-2 border-black px-10 py-4">
              Work With Us
            </Link>
            <Link
              href="/#roadmap"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
