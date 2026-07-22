'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PaperDesignBackground } from '@/components/ui/neon-dither'
import {
  defaultPlatforms,
  getPlatformLabel,
  SocialPlatformIcon,
  type SocialPlatform,
} from '@/components/ui/social-platform-icons'

type PersonMedia = {
  name: string
  image: string
  zoom?: number
  objectPosition?: string
  panX?: number
  links: Partial<Record<SocialPlatform, string>>
}

const people: PersonMedia[] = [
  {
    name: 'Abed',
    image: '/team/abed.png',
    zoom: 1.2,
    objectPosition: 'center 18%',
    links: {},
  },
  {
    name: 'Ameer',
    image: '/team/ameer.png',
    zoom: 1.05,
    objectPosition: 'center 22%',
    links: {},
  },
  {
    name: 'Ayham',
    image: '/team/ayham.png',
    zoom: 1.35,
    objectPosition: 'center 15%',
    links: {},
  },
  {
    name: 'Abdullah',
    image: '/team/abdullah.png',
    zoom: 1.98,
    objectPosition: 'center 18%',
    panX: 6,
    links: {},
  },
]

const uplyftLinks: Partial<Record<SocialPlatform, string>> = {}

function SocialLogoLink({
  platform,
  href,
  label,
}: {
  platform: SocialPlatform
  href: string
  label: string
}) {
  const isExternal = href.startsWith('http')

  return (
    <Link
      href={href}
      aria-label={label}
      title={getPlatformLabel(platform)}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group text-[var(--ink)] transition-transform duration-200 hover:scale-110 hover:text-[#d4af37]"
    >
      <SocialPlatformIcon
        platform={platform}
        className="h-8 w-8 sm:h-9 sm:w-9"
      />
    </Link>
  )
}

function SocialCard({
  platform,
  href,
  personName,
}: {
  platform: SocialPlatform
  href: string
  personName: string
}) {
  const isExternal = href.startsWith('http')
  const label = `${personName} on ${getPlatformLabel(platform)}`

  return (
    <Link
      href={href}
      aria-label={label}
      title={getPlatformLabel(platform)}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex h-[70px] w-[70px] items-center justify-center rounded-lg border border-black/10 bg-white/90 p-1 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-[#d4af37] hover:bg-white hover:shadow-md sm:h-[74px] sm:w-[74px]"
    >
      <SocialPlatformIcon
        platform={platform}
        className="h-12 w-12 text-[var(--ink)] transition-transform duration-200 group-hover:scale-110 sm:h-[53px] sm:w-[53px]"
      />
    </Link>
  )
}

export function MediaPageContent() {
  return (
    <div className="relative min-h-screen">
      <PaperDesignBackground themeMode="light" intensity={0.72} parallax />

      <div className="relative z-10">
        <SiteHeader />

        <section className="py-16 sm:py-20 lg:py-28">
          <div className="container-page">
            <h1 className="text-center text-4xl font-extrabold uppercase tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              Our Media.
            </h1>

            <div className="mx-auto mt-8 max-w-md sm:mt-10">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
                {defaultPlatforms.map((platform) => (
                  <SocialLogoLink
                    key={`uplyft-${platform}`}
                    platform={platform}
                    href={uplyftLinks[platform] ?? '#'}
                    label={`UpLyft on ${getPlatformLabel(platform)}`}
                  />
                ))}
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-4xl space-y-16 sm:mt-20 sm:space-y-20 lg:space-y-24">
              {people.map((person) => (
                <div key={person.name}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-[3px] border-[#14161d] bg-gradient-to-br from-[#e4e3df] to-[#cfceca] shadow-md sm:h-24 sm:w-24">
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
                        sizes="96px"
                      />
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-[0.15em] text-[var(--ink)] sm:text-4xl lg:text-5xl">
                      {person.name}
                    </h2>
                  </div>

                  <div className="mx-auto mt-8 grid w-fit grid-cols-3 gap-1.5 sm:gap-2">
                    {defaultPlatforms.map((platform) => (
                      <SocialCard
                        key={`${person.name}-${platform}`}
                        platform={platform}
                        href={person.links[platform] ?? '#'}
                        personName={person.name}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  )
}
