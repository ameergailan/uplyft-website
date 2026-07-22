import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { CTASection } from '@/components/ui/hero-dithering-card'
import { DitheringBackground } from '@/components/ui/dithering-bg'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const faqs = [
  {
    q: 'What is the UpLyft Scaling Workshop?',
    a: "It's not a motivational event, it's a working session. We get tactical. We break down exactly how we launch and scale SaaS campaigns through paid acquisition: the ad frameworks, funnel structure, and tracking we use to turn spend into profitable growth. You leave with the actual playbook, not a highlight reel.",
  },
  {
    q: 'How do I register?',
    a: "Registration is by application only. Fill out the application and our team will reach out if you're a fit. Not everyone who applies gets in. The room is kept small on purpose.",
  },
  {
    q: 'Who is the right fit?',
    a: "Founders with a real software product already built or in market. You don't need to be at a specific revenue number, but this isn't for idea-stage or pre-product founders. If you've got live software and you're serious about scaling it through paid acquisition, apply. We keep the room tight so every seat goes to someone we can actually move the needle for.",
  },
  {
    q: 'Who runs it?',
    a: (
      <>
        You&apos;ll work directly with the{' '}
        <Link href="/firm" className="font-semibold text-[var(--ink)] underline underline-offset-2 hover:text-[#d4af37]">
          UpLyft team
        </Link>{' '}
        that runs paid acquisition for our clients, plus focused breakouts on creative, funnels, and tracking, so you leave with your specific questions answered.
      </>
    ),
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Animated dithering background (light background instead of black) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <DitheringBackground />
        </div>

        {/* Soften the effect behind the text */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 58% 52% at 50% 44%, var(--bg) 0%, rgba(236,236,234,0.78) 38%, rgba(236,236,234,0.35) 60%, transparent 78%)',
          }}
        />

        <div className="container-page relative py-24 text-center lg:py-32">
          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
            Do You Want to Scale Your SaaS?
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            Learn from the team that has scaled software to over{' '}
            <span className="font-semibold text-[var(--ink)]">7 figures</span> in annual
            revenue through paid ads.
          </p>
          <div className="mt-10">
            <a
              href="#roadmap"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black bg-primary px-12 py-5 text-lg font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20 sm:text-xl"
            >
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
            backgroundImage: 'radial-gradient(#d4af37 1.1px, transparent 1.2px)',
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
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-extrabold text-[var(--ink)] sm:text-xl">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[var(--muted)] transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="relative mt-4 bg-[var(--bg)] leading-relaxed text-[var(--muted)]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Founders */}
      <section className="border-t border-black/10 py-20 lg:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-[#e4e3df] to-[#cfceca] sm:max-w-lg lg:order-1 lg:max-w-xl">
            <Image
              src="/team/abed-ameer.png"
              alt="Abed and Ameer, co-founders of UpLyft"
              fill
              className="object-cover"
              style={{ objectPosition: 'center 38%' }}
              sizes="(max-width: 640px) 448px, (max-width: 1024px) 512px, 576px"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-5 pt-12 text-center text-xs uppercase tracking-[0.25em] text-white/90">
              Abed &amp; Ameer
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
              About Our Founders
            </p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
              Abed &amp; Ameer
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[var(--muted)]">
              <p>
                Abed and Ameer are the co-founders of UpLyft. In 2024 they bootstrapped
                their own SaaS from zero and scaled it through paid ads, testing offers,
                creative, funnels, and tracking until they had a repeatable way to grow
                profitably.
              </p>
              <p>
                Once those systems worked inside their own product, they built UpLyft to
                give other SaaS founders the same playbooks: the exact processes they use
                to turn ad spend into sustainable, profitable scale. Every framework UpLyft
                teaches is one they run in their own stack first.
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
