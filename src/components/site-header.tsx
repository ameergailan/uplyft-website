'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const navLinks: { label: string; href: string; caret?: boolean }[] = [
  { label: 'Workshops', href: '/workshops' },
  { label: 'Courses', href: '#', caret: true },
  { label: 'Media', href: '#', caret: true },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'About the Firm', href: '/firm' },
  { label: 'Careers', href: '#' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[var(--dark)]">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-2.5 text-center text-xs sm:text-sm">
          <span className="rounded-sm bg-[#d4af37] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
            New
          </span>
          <span className="font-semibold text-white">
            Lyfted 2026: Free live workshop for SaaS founders:{' '}
            <Link href="/#roadmap" className="font-normal text-white/70 hover:text-white">
              find out if you&apos;re a fit &nbsp;&rarr;
            </Link>
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className="relative z-50 bg-[var(--dark)]">
        <nav className="container-page flex items-center justify-between py-4">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
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

          <div className="flex items-center gap-3">
            <Link
              href="/#roadmap"
              className="hidden rounded-full bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/20 sm:inline-flex"
            >
              Get Started
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-white/10 bg-[var(--dark)] lg:hidden">
            <ul className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-3 text-base font-medium text-white/90"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                    {link.caret && <ChevronDown className="h-4 w-4 text-white/50" />}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/#roadmap"
                  className="flex w-full items-center justify-center rounded-full bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wide text-white"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}
