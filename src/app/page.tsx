import { ChevronDown } from 'lucide-react'
import { CTASection } from '@/components/ui/hero-dithering-card'
import { DitheringBackground } from '@/components/ui/dithering-bg'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const faqs = [
  {
    q: 'What is the UpLyft Scaling Workshop?',
    a: "It's not an event — it's a workshop. Expect zero motivational talks; we get tactical. On day one, we break down how we fast-track growth, recruit top talent, and the frameworks we use for high-return decision making. On day two, we get hands-on in small groups, meeting with our team across marketing, sales, people, and profit to get personalized help.",
  },
  {
    q: 'How do I register for a workshop?',
    a: 'To register for the UpLyft Scaling Workshop, we require you to meet a few minimum requirements. Book a call with our team and we will walk you through them.',
  },
  {
    q: 'Who is the right fit for a workshop?',
    a: 'Book a call to speak with our concierge team. We require you to meet some minimum entry requirements to be in the room — including being active in business, meeting a revenue threshold, and operating in an industry where we are confident we can provide value.',
  },
  {
    q: 'Who are the main speakers?',
    a: 'You will be introduced to the team that actively runs our portfolio, plus breakout sessions with UpLyft subject-matter experts so no question is left unanswered by the time you leave.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Animated dithering background (light background instead of black) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <DitheringBackground />
        </div>

        {/* Soften the effect behind the text */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              'radial-gradient(ellipse 58% 52% at 50% 44%, var(--bg) 0%, rgba(236,236,234,0.78) 38%, rgba(236,236,234,0.35) 60%, transparent 78%)',
          }}
        />

        <div className="container-page relative z-10 py-24 text-center lg:py-32">
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
            Do You Want to Scale Your SaaS?
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            Learn from the team that has scaled software to over{' '}
            <span className="font-semibold text-[var(--ink)]">7 figures</span> in annual
            revenue through paid ads.
          </p>
          <div className="mt-10">
            <a href="#roadmap" className="btn-gold border-2 border-black px-12 py-5 text-lg sm:text-xl">
              I&apos;m Ready to Scale
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative overflow-hidden border-t border-black/10 py-20 lg:py-28">
        {/* Dotted-paper background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#c4c4be 1.1px, transparent 1.2px)',
            backgroundSize: '22px 22px',
          }}
        />

        <div className="container-page relative z-10 max-w-3xl">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            FAQs
          </h2>
          <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[var(--muted)] transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Founders */}
      <section className="border-t border-black/10 py-20 lg:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-[#e4e3df] to-[#cfceca] lg:order-1">
            <div className="absolute bottom-5 left-0 right-0 text-center text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Ameer &amp; Abed
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
              About Our Founders
            </p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
              Ameer &amp; Abed
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[var(--muted)]">
              <p>
                Ameer and Abed are the co-founders of UpLyft. They built the company around
                a simple idea: give founders the exact systems, processes, and playbooks
                needed to scale a business without guesswork.
              </p>
              <p>
                Their mission is to make real business education accessible to everyone —
                from first user to sustainable, profitable scale. Every framework UpLyft
                teaches is one they use inside their own portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dithering CTA card */}
      <CTASection />

      <SiteFooter />
    </div>
  )
}
