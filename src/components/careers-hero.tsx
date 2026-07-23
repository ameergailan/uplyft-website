'use client'

import { SlidingEaseVerticalBars } from '@/components/ui/sliding-ease'

export function CareersHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/10">
      <SlidingEaseVerticalBars
        backgroundColor="#111318"
        lineColor="rgba(255, 255, 255, 0.08)"
        barColor="#c9a030"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 50% 48%, rgba(17, 19, 24, 0.92) 0%, rgba(17, 19, 24, 0.55) 45%, transparent 75%)',
        }}
        aria-hidden
      />
      <div className="container-page relative z-10 flex min-h-[400px] flex-col items-center justify-center gap-6 pt-10 text-center sm:min-h-[460px] sm:gap-8 sm:pt-14 lg:min-h-[500px] lg:pt-16">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl">
          Join a team built to scale SaaS
        </h1>
        <a
          href="#openings"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black bg-primary px-10 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20"
        >
          View Job Openings
        </a>
        <p className="mx-auto max-w-2xl text-lg font-bold leading-relaxed text-white">
          We are seeking teammates who lead with trust, work with discipline, and play to win as
          a team.
        </p>
      </div>
    </section>
  )
}
