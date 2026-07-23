import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SystemsHero } from '@/components/systems-hero'
import { GoldGradientBackground } from '@/components/ui/gold-gradient-background'

export const metadata: Metadata = {
  title: 'Our Systems | UpLyft',
  description:
    'The UpLyft systems for launching, scaling, and iterating paid acquisition for SaaS.',
}

const systems = [
  {
    id: 'launch',
    title: 'LAUNCH',
    tagline: 'Launch your first paid channel the right way.',
    description:
      'Offer structure, tracking setup, and your first creative tests. Everything you need before you spend a dollar on ads.',
    cta: 'Get Started',
    href: '/workshops',
  },
  {
    id: 'scaling-spend',
    title: 'Scaling Spend',
    tagline: 'Turn winning campaigns into predictable growth.',
    description:
      'Budget allocation, creative iteration, funnel optimization, and the payback windows we use to scale spend profitably.',
    cta: 'Learn More',
    href: '/partner',
  },
  {
    id: 'iteration',
    title: 'Iteration',
    tagline: 'Keep improving what already works.',
    description:
      'Testing frameworks for creative, audiences, and landing pages so growth compounds instead of plateauing.',
    cta: 'Learn More',
    href: '/partner',
  },
]

export default function SystemsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <SiteHeader />

      <SystemsHero />

      {/* Three system cards — book grid layout */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {systems.map((system) => (
              <article key={system.id} id={system.id} className="flex flex-col items-center text-center">
                <div className="relative aspect-[2/3] w-full max-w-[280px] overflow-hidden rounded-sm border border-black/10 bg-gradient-to-br from-[#14161d] via-[#1c1e24] to-[#0e1014] shadow-lg">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1.2px)',
                      backgroundSize: '18px 18px',
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                      UpLyft
                    </p>
                    <h2 className="mt-4 text-2xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-3xl">
                      {system.title}
                    </h2>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]" />
                </div>

                <Link
                  href={system.href}
                  className="btn-gold mt-8 w-full max-w-[280px] border-2 border-black py-3.5 text-xs sm:text-sm"
                >
                  {system.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:min-h-[400px]">
        <GoldGradientBackground />
      </section>

      <SiteFooter />
    </div>
  )
}
