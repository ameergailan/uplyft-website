import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const navLinks: { label: string; href: string; caret?: boolean }[] = [
  { label: 'Workshops', href: '#' },
  { label: 'Courses', href: '#', caret: true },
  { label: 'Books', href: '#' },
  { label: 'Media', href: '#', caret: true },
  { label: 'Partner With Us', href: '#' },
  { label: 'About the Firm', href: '/firm' },
  { label: 'Careers', href: '#' },
]

export function SiteHeader() {
  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[var(--dark)]">
        <div className="container-page flex items-center justify-center gap-2 py-2.5 text-center text-xs sm:text-sm">
          <span className="rounded-sm bg-[#d4af37] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
            New
          </span>
          <span className="font-semibold text-white">
            2026 Scaling Workshop Dates Announced:{' '}
            <Link href="/#roadmap" className="font-normal text-white/70 hover:text-white">
              Find out if you are a fit &nbsp;&rarr;
            </Link>
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className="bg-[var(--dark)]">
        <nav className="container-page flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image src="/UPLYFTLOGO.png" alt="UpLyft" width={130} height={34} className="h-8 w-auto" priority />
          </Link>
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[13px] font-medium text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                  {link.caret && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#roadmap" className="hidden rounded-full bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/20 sm:inline-flex">
            Get Started
          </Link>
        </nav>
      </header>
    </>
  )
}
