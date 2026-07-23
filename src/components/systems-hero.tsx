'use client'

import { BackgroundPathsLayer } from '@/components/ui/background-paths'

export function SystemsHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 bg-[var(--dark)] py-16 text-center sm:py-20 lg:py-24">
      <BackgroundPathsLayer />
      <div className="container-page relative z-10 -mt-1">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
          Our Systems
        </h1>
      </div>
    </section>
  )
}
