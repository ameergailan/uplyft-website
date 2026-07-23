import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LiquidMetalBackground } from '@/components/ui/liquid-metal-bg'
import { GradientBackground } from '@/components/ui/noisy-gradient-backgrounds'
// AuroraBackground kept at @/components/ui/aurora-background for later reuse

export const metadata: Metadata = {
  title: 'About the Firm | UpLyft',
  description:
    'Meet the team behind UpLyft and the systems we use to scale SaaS companies to 7 figures through paid acquisition.',
}

const leadership: {
  name: string
  title: string
  initials: string
  image?: string
  /** CSS scale for object-cover crop (1 = default). */
  zoom?: number
  objectPosition?: string
  /** Horizontal pan after zoom (%). Negative shifts subject right in frame. */
  panX?: number
}[] = [
  {
    name: 'Abed',
    title: 'Managing Partner, Founder',
    initials: 'A',
    image: '/team/abed.png',
    zoom: 1.2,
    objectPosition: 'center 18%',
  },
  {
    name: 'Ameer',
    title: 'Managing Partner, Founder',
    initials: 'A',
    image: '/team/ameer.png',
    zoom: 1.05,
    objectPosition: 'center 22%',
  },
  {
    name: 'Ayham',
    title: 'Chief Operating Officer',
    initials: 'A',
    image: '/team/ayham.png',
    zoom: 1.35,
    objectPosition: 'center 15%',
  },
  {
    name: 'Abdullah',
    title: 'Chief Growth Officer',
    initials: 'A',
    image: '/team/abdullah.png',
    zoom: 1.98,
    objectPosition: 'center 18%',
    panX: 6,
  },
]

const timeline: {
  period: string
  heading: string
  body: string
  image?: string
  caption?: string
  imageFit?: 'cover' | 'contain' | 'natural'
  imageBackground?: string
}[] = [
  {
    period: '2024 - 2025',
    heading: 'The First Build',
    image: '/firm/first-build.png',
    caption: '(ameer fixing a bug during an exam)',
    body: 'Ameer and Abed started by scaling a SaaS application of their own through paid acquisition. While they were in college for engineering, they spent thousands of dollars of their own money, nearly going broke, learning the craft. This is where they learned to run paid ads for real, testing offers, creative, and funnels across live campaigns until they understood what actually moved growth. Every lesson got documented into a framework they could repeat.',
  },
  {
    period: '2025 - 2026',
    heading: 'The First Channels',
    image: '/firm/first-channels.png',
    imageFit: 'natural',
    imageBackground: 'linear-gradient(to bottom, #ffffff 0%, #d4af37 100%)',
    body: "Next, they partnered with a SaaS company doing six figures in ARR that had never run a single paid ad. Over eight months, UpLyft launched their first-ever paid acquisition channels from scratch: Meta, Google, and TikTok, building the tracking, creative, and funnel structure behind each one. The company went on to hit 7 figures in ARR. It proved the systems worked on someone else's business, not just their own.",
  },
  {
    period: '2025 - Present',
    heading: 'A Portfolio of Scale',
    image: '/firm/portfolio-scale.png',
    body: "That brings us to now: a portfolio of SaaS companies UpLyft works with to install the exact systems, processes, and playbooks needed to scale through paid acquisition. The team operates like a firm, not a one-off agency, partnering closely with each company and treating every account like it's our own.",
  },
]

export default function FirmPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <SiteHeader />

      {/* Leadership */}
      <section className="relative isolate overflow-hidden border-b border-black/10 py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <GradientBackground
            gradientOrigin="bottom-middle"
            colors={[
              { color: 'rgba(212,175,55,1)', stop: '0%' },
              { color: 'rgba(224,190,90,1)', stop: '25%' },
              { color: 'rgba(232,210,140,1)', stop: '50%' },
              { color: 'rgba(240,230,200,1)', stop: '75%' },
              { color: 'rgba(236,236,234,1)', stop: '100%' },
            ]}
            noiseIntensity={1.0}
            noisePatternSize={90}
            noisePatternRefreshInterval={2}
            noisePatternAlpha={40}
          />
        </div>
        {/* Soft veil so dark type stays readable on the noisy gradient */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 35%, rgba(236,236,234,0.55) 0%, rgba(236,236,234,0.2) 55%, transparent 100%)',
          }}
        />

        <div className="container-page relative text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            About the Firm
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
            Meet Our Leadership Team
          </h1>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-5 sm:mt-14 sm:gap-8">
            {leadership.map((person) => (
              <div key={person.name} className="mx-auto w-full max-w-[150px] text-center sm:max-w-none sm:text-left">
                {/* Frame: thick dark border + gold accent bar peeking at the bottom */}
                <div className="relative mx-auto w-full max-w-[150px] sm:max-w-none">
                  <div className="absolute -bottom-1.5 left-1 right-1 h-3 rounded-sm bg-[#d4af37] sm:-bottom-2 sm:h-4" />
                  <div className="relative aspect-square overflow-hidden border-[5px] border-[#14161d] bg-gradient-to-br from-[#e4e3df] to-[#cfceca] sm:aspect-[4/5] sm:border-[6px]">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                        style={{
                          objectPosition: person.objectPosition ?? 'center 20%',
                          transform: person.zoom
                            ? `scale(${person.zoom})${person.panX ? ` translateX(${person.panX}%)` : ''}`
                            : undefined,
                        }}
                        sizes="(max-width: 640px) 150px, 50vw"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center select-none text-6xl font-extrabold leading-none text-black/5 sm:text-[9rem]">
                        {person.initials}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="mt-5 text-sm font-extrabold uppercase tracking-tight text-[var(--ink)] sm:mt-6 sm:text-xl">
                  {person.name}
                </h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--ink)] sm:text-xs sm:tracking-[0.15em]">
                  {person.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Experience: black mid section */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[var(--dark)] py-20 lg:py-28">
        <div className="container-page relative z-10">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            Our Experience
          </h2>

          <div className="mx-auto mt-16 max-w-5xl space-y-16 lg:space-y-24">
            {timeline.map((item, i) => (
              <div
                key={item.period}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    {item.imageBackground && (
                      <div
                        className="absolute inset-0"
                        style={{ background: item.imageBackground }}
                        aria-hidden="true"
                      />
                    )}
                    <div
                      className={`relative px-4 py-8 ${
                        item.imageFit === 'natural'
                          ? item.imageBackground
                            ? ''
                            : 'bg-white'
                          : 'aspect-[16/10] bg-gradient-to-br from-[#1c1e24] to-[#0e1014]'
                      }`}
                    >
                    {item.image ? (
                      item.imageFit === 'natural' ? (
                        <Image
                          src={item.image}
                          alt={item.caption ?? item.heading}
                          width={721}
                          height={255}
                          className="relative z-10 h-auto w-full"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : (
                        <Image
                          src={item.image}
                          alt={item.caption ?? item.heading}
                          fill
                          className={
                            item.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'
                          }
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      )
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center select-none text-6xl font-extrabold text-white/5 sm:text-7xl">
                        UpLyft
                      </span>
                    )}
                    </div>
                  </div>
                  {item.caption && (
                    <p className="mt-3 text-center text-xs italic text-white/40 sm:text-left">
                      {item.caption}
                    </p>
                  )}
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                    {item.heading}
                  </h3>
                  <p className="mt-5 leading-relaxed text-white/60">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band: liquid metal */}
      <section className="relative isolate overflow-hidden border-t border-white/10 py-20 text-center lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <LiquidMetalBackground variant="dark" />
        </div>
        <div className="container-page relative">
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Want Us to Help You{' '}
            <span className="text-[#d4af37]">Scale Your SaaS?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/60">
            See how UpLyft can install the systems behind predictable, profitable growth.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/partner" className="btn-gold border-2 border-black px-10 py-4">
              Work With Us
            </Link>
            <Link
              href="/partner"
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
