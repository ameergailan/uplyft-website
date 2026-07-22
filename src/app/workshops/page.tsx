import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Play } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { FlickeringGrid } from '@/components/ui/flickering-grid'
import { ShaderAnimation } from '@/components/ui/shader-animation'

export const metadata: Metadata = {
  title: 'Scaling Workshop | UpLyft',
  description:
    'Join the UpLyft Scaling Workshop: the exact frameworks we use to launch and scale SaaS through paid acquisition.',
}

const outcomes = [
  {
    num: '#1',
    title: 'UpLyft Operators',
    body: (
      <>
        Work directly with the team that runs paid acquisition for our clients.
        Get <strong className="font-semibold text-[var(--ink)]">personalized help</strong> across
        creative, funnels, tracking, and offer structure.
      </>
    ),
  },
  {
    num: '#2',
    title: 'UpLyft Scaling Framework',
    body: (
      <>
        We break down how we think, operate, and scale SaaS through paid ads: the same
        systems behind <strong className="font-semibold text-[var(--ink)]">predictable, profitable growth</strong>.
      </>
    ),
  },
  {
    num: '#3',
    title: '3-5 Tactical Next Steps',
    body: (
      <>
        Leave with clear, actionable next steps tailored to your product, not a highlight
        reel. Walk out with a playbook you can run Monday morning.
      </>
    ),
  },
]

const details = [
  {
    q: 'What actually happens during the workshop?',
    a: "It's not a motivational event. It's a working session. We get tactical. We break down exactly how we launch and scale SaaS campaigns through paid acquisition: the ad frameworks, funnel structure, and tracking we use to turn spend into profitable growth. You leave with the actual playbook, not a highlight reel.",
  },
  {
    q: 'What do I walk away with?',
    a: "The aim: you walk away with 3-5 tactical next steps specific to your biggest constraint. You spend time with our team. We tailor the advice to your software, stage, and goals. Hands-on help, plus a packet of key takeaways and frameworks you can keep running.",
  },
  {
    q: 'Is this right for my business?',
    a: "Founders with a real software product already built or in market. You don't need a specific revenue number, but this isn't for idea-stage or pre-product founders. If you've got live software and you're serious about scaling it through paid acquisition, apply. We keep the room tight so every seat goes to someone we can actually move the needle for.",
  },
  {
    q: 'How do I register?',
    a: "Registration is by application only. Fill out the application and our team will reach out if you're a fit. Not everyone who applies gets in. The room is kept small on purpose.",
  },
]

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Logo only: dedicated VSL page, no full site header */}
      <div className="border-b border-black/10 bg-[var(--dark)]">
        <div className="container-page flex items-center justify-center py-5">
          <Link href="/">
            <Image src="/UPLYFTLOGO.png" alt="UpLyft" width={130} height={34} className="h-8 w-auto" priority />
          </Link>
        </div>
      </div>

      {/* Hero / VSL */}
      <section className="relative isolate overflow-hidden border-b border-black/10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FlickeringGrid
            className="absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#d4af37"
            maxOpacity={0.55}
            flickerChance={0.14}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 55% 48% at 50% 38%, rgba(236,236,234,0.78) 0%, rgba(236,236,234,0.4) 42%, rgba(236,236,234,0.12) 72%, transparent 100%)',
          }}
        />

        <div className="container-page relative py-16 text-center lg:py-24">
          <p className="flex justify-center">
            <span className="rounded-sm bg-[#c1121f] px-2 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Lyfted
            </span>
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
            Still guessing your way through paid ads?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Join the UpLyft Scaling Workshop: the exact frameworks we use to launch and scale
            SaaS.
          </p>

          {/* VSL placeholder: clean, no grid overlay */}
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-black/10 bg-[var(--dark)] shadow-lg">
            <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#1a1c22] to-[#0e1014]">
              <button
                type="button"
                className="group relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                aria-label="Play workshop video"
              >
                <Play className="ml-1 h-8 w-8 fill-white text-white" />
              </button>
              <p className="absolute bottom-5 left-0 right-0 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Video coming soon
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[var(--muted)]">
            An interactive workshop where you get personalized,{' '}
            <strong className="font-semibold text-[var(--ink)]">actionable insights</strong> from
            the team that scales SaaS through paid acquisition.
          </p>

          <div className="mt-8">
            <Link
              href="/partner"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black bg-primary px-12 py-5 text-lg font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20"
            >
              I&apos;m Ready to Scale
            </Link>
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section className="border-t border-black/10 py-20 lg:py-28">
        <div className="container-page max-w-3xl">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            What you&apos;ll get at the workshop
          </h2>

          <div className="mt-14 space-y-12">
            {outcomes.map((item) => (
              <div key={item.num} className="border-t border-black/10 pt-10 first:border-t-0 first:pt-0">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                  {item.num}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/partner"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black bg-primary px-12 py-5 text-lg font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20"
            >
              I&apos;m Ready to Scale
            </Link>
          </div>
        </div>
      </section>

      {/* Details / FAQ accordion */}
      <section className="relative isolate overflow-hidden border-t border-black/10 bg-black py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
          <ShaderAnimation />
        </div>
        {/* Soft veil so FAQ text stays readable */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 50% 40%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.15) 100%)',
          }}
        />

        <div className="container-page relative max-w-3xl">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            Workshop details
          </h2>
          <div className="mt-12 divide-y divide-white/15 border-y border-white/15">
            {details.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white">
                  {item.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-white/50 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="relative mt-4 rounded-md bg-black/70 px-3 py-2 leading-relaxed text-white/70 backdrop-blur-sm">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/partner"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black bg-primary px-12 py-5 text-lg font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20"
            >
              I&apos;m Ready to Scale
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
