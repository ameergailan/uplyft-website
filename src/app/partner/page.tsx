import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SiteFooter } from '@/components/site-footer'
import { PartnerPageBackground } from '@/components/partner-page-background'

export const metadata: Metadata = {
  title: 'Partner With Us | UpLyft',
  description:
    'Apply to partner with UpLyft. We scale great software through paid acquisition.',
}

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Logo only: no full site header on this apply page */}
      <div className="border-b border-black/10 bg-[var(--dark)]">
        <div className="container-page flex items-center justify-center py-5">
          <Link href="/">
            <Image src="/UPLYFTLOGO.png" alt="UpLyft" width={130} height={34} className="h-8 w-auto" priority />
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-black/10">
        <PartnerPageBackground />

        <div className="container-page relative z-10 mx-auto max-w-2xl py-16 text-center lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">
            Step 1
          </p>
          <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
            We <em className="font-serif italic font-medium">scale</em> great software.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            Apply to partner with UpLyft. If you&apos;re a fit, our team will reach out to walk
            you through next steps.
          </p>

          {/* GHL embed slot: paste embed into #ghl-form */}
          <div
            id="ghl-form"
            className="mt-10 min-h-[420px] rounded-2xl border border-black/10 bg-white p-6 text-left shadow-sm sm:p-8"
          >
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                Application
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                Form loads here. Paste your GoHighLevel embed into{' '}
                <code className="rounded bg-black/5 px-1.5 py-0.5 text-[11px] text-[var(--ink)]">
                  #ghl-form
                </code>
                .
              </p>
            </div>
          </div>

          <p className="mt-5 text-left text-[11px] leading-relaxed text-white">
            By providing your information today, you are giving consent for us or our partners
            to contact you by mail, phone, text, or email using the data provided. We do not sell
            your personal information to other companies, and you can withdraw consent at any
            time. Consent is not a condition of any purchase. By submitting this form, you agree
            to our{' '}
            <Link href="/privacy" className="text-white/90 underline underline-offset-2 hover:text-white">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" className="text-white/90 underline underline-offset-2 hover:text-white">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
