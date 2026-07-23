import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CareersHero } from '@/components/careers-hero'
import { DelicateAsciiDots } from '@/components/ui/delicate-ascii-dots'
import { WarpBackground } from '@/components/ui/warp-background'

export const metadata: Metadata = {
  title: 'Careers | UpLyft',
  description:
    'Join UpLyft and help SaaS companies scale through paid acquisition. We hire disciplined team players who trust and win together.',
}

const cultureBlocks: {
  title: string
  body: string[]
  image?: string
  imageAlt?: string
  reverse?: boolean
}[] = [
  {
    title: 'You build with the long game in mind.',
    body: [
      'You are not here for shortcuts. You care about building systems that compound over years, not months.',
      'That means focusing on fundamentals, documenting what works, and making decisions that stand the test of time.',
    ],
    image: '/team/careers/team-4.png',
    imageAlt: 'UpLyft team member',
    reverse: true,
  },
  {
    title: 'You hold a high standard.',
    body: [
      'Excellence is not optional. You take ownership, sweat the details, and deliver work you are proud of.',
      'More than that, you raise the bar for the people around you, because high standards pull the whole team forward.',
    ],
    image: '/team/careers/team-1.png',
    imageAlt: 'UpLyft team members',
  },
  {
    title: 'You thrive in disciplined execution.',
    body: [
      'Big ideas matter, but execution wins. You bring focus, structure, and accountability to your work.',
      'You know consistency beats intensity, and disciplined execution is how great SaaS companies get scaled.',
    ],
    image: '/team/careers/team-2.png',
    imageAlt: 'UpLyft team member',
    reverse: true,
  },
  {
    title: 'You win together.',
    body: [
      'You are competitive, but not at the expense of the team. You share credit, support others, and play to win as one.',
      'Because when the team succeeds, everyone does.',
    ],
    image: '/team/careers/team-3.png',
    imageAlt: 'UpLyft team collaborating',
  },
]

const workPrinciples = [
  {
    num: '1',
    title: 'Remote-first, high-trust',
    body: 'Work is about impact, not geography. We operate remote-first with async discipline and clear ownership. Show up focused, communicate clearly, and deliver work that moves client accounts forward.',
  },
  {
    num: '2',
    title: 'Solving for scale',
    body: 'We do not just talk about growth. We build it. Externally, we install paid acquisition systems inside SaaS companies. Internally, same standard: smarter processes, stronger leverage, results that compound.',
  },
  {
    num: '3',
    title: 'Culture of growth',
    body: 'Culture is behavior, not a buzzword. High bar, constant feedback, full accountability. Trust, integrity, ownership. No politics, shortcuts, or excuses. We win by focusing on fundamentals and raising standards daily.',
  },
]

const values = [
  { label: 'Ownership', detail: 'You treat every account, campaign, and teammate like it is yours.' },
  { label: 'Direct feedback', detail: 'Clear, honest communication beats comfortable silence.' },
  { label: 'Disciplined execution', detail: 'Systems over vibes. Data over opinions.' },
  { label: 'Client-first results', detail: 'We measure ourselves by the growth we help founders create.' },
]

function CultureVisual({
  image,
  imageAlt,
  reverse,
  dark,
}: {
  image: string
  imageAlt: string
  reverse?: boolean
  dark?: boolean
}) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-2xl border sm:aspect-[5/4] ${
        dark ? 'border-white/10' : 'border-black/10'
      } ${reverse ? 'lg:order-2' : ''}`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  )
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <SiteHeader />

      <CareersHero />

      {/* Intro */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-[#e4e3df] to-[#cfceca]">
              <Image
                src="/team/abed-ameer.png"
                alt="The UpLyft team"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 42%' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                We want disciplined team players who trust and win together.
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-[var(--muted)]">
                <p>
                  At UpLyft, you will help SaaS founders build real businesses with strong
                  foundations, scalable systems, and lasting growth through paid acquisition.
                </p>
                <p>
                  Our mission is straightforward: install the playbooks and processes that turn
                  ad spend into profitable scale. We set a high bar, move with urgency, and measure
                  ourselves by results. If you want to build and work with a team that plays to
                  win, you will fit right in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture blocks */}
      {cultureBlocks.map((block) => (
        <section
          key={block.title}
          className={`relative overflow-hidden py-14 sm:py-16 lg:py-20 ${block.reverse ? 'bg-[var(--dark)] text-white' : ''}`}
        >
          {block.reverse && (
            <DelicateAsciiDots backgroundColor="#111318" vignette vignetteFocus="left" />
          )}
          <div className="container-page relative z-10">
            {block.image ? (
              <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <CultureVisual
                  image={block.image}
                  imageAlt={block.imageAlt!}
                  reverse={block.reverse}
                  dark={block.reverse}
                />
                <div className={block.reverse ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                    {block.title}
                  </h3>
                  <div
                    className={`mt-5 space-y-4 leading-relaxed ${block.reverse ? 'text-white/65' : 'text-[var(--muted)]'}`}
                  >
                    {block.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mx-auto max-w-3xl">
                <h3 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                  {block.title}
                </h3>
                <div
                  className={`mt-5 space-y-4 leading-relaxed ${block.reverse ? 'text-white/65' : 'text-[var(--muted)]'}`}
                >
                  {block.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* How we work together */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[var(--dark)] py-16 text-white sm:py-20 lg:py-28">
        <DelicateAsciiDots backgroundColor="#111318" vignette vignetteFocus="center" />
        <div className="container-page relative z-10">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            How we work together
          </h2>
          <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-3 lg:gap-8">
            {workPrinciples.map((item) => (
              <article key={item.title} className="border-t-2 border-[#d4af37] pt-6">
                <p className="text-4xl font-extrabold text-[#d4af37]/40">{item.num}</p>
                <h3 className="mt-4 text-xl font-extrabold uppercase tracking-tight">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-white/65">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#openings" className="btn-gold border-2 border-black px-10 py-4">
              View Job Openings
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
              What are our values?
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--muted)]">
              Our values are not words on a wall. We make hiring and operating decisions through
              them. High bar for character and results: no ego, disciplined execution, and
              measuring ourselves by impact.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.label}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-extrabold uppercase tracking-tight">{value.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{value.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="openings" className="overflow-hidden">
        <WarpBackground
          className="rounded-none border-0 bg-[var(--dark)] p-0"
          gridColor="rgba(255, 255, 255, 0.18)"
          gridColorVertical="rgba(255, 255, 255, 0.07)"
          beamsPerSide={2}
          beamSize={6}
          beamDuration={4.5}
          perspective={120}
          beamSides={['left', 'right', 'bottom']}
        >
          <div className="container-page py-20 text-center lg:py-28">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
              Ready to build with us?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/60">
              See open roles or reach out to start a conversation with the team.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#openings" className="btn-gold border-2 border-black px-10 py-4">
                View Job Openings
              </a>
              <Link
                href="/firm"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
              >
                About the Firm
              </Link>
            </div>
          </div>
        </WarpBackground>
      </section>

      <SiteFooter />
    </div>
  )
}
