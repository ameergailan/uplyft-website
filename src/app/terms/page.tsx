import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Terms of Service | UpLyft',
  description: 'Terms governing use of the UpLyft website, workshops, and related services.',
}

const sections = [
  {
    title: '1. Agreement',
    body: [
      'These Terms of Service ("Terms") govern your use of uplyftdigital.co and any related pages, forms, workshops, partner applications, or services offered by UpLyft ("UpLyft," "we," "us," or "our"). By accessing or using the site or submitting information to us, you agree to these Terms and our Privacy Policy.',
      'If you do not agree, do not use the site or submit information.',
    ],
  },
  {
    title: '2. Who we serve',
    body: [
      'UpLyft provides education, workshops, and growth services primarily for software founders and businesses. You represent that you are at least 18 years old and have authority to enter into these Terms on behalf of yourself or your company.',
    ],
  },
  {
    title: '3. No guarantees of results',
    body: [
      'Any examples, case studies, frameworks, or testimonials on this site describe outcomes that are not typical and are not a guarantee of your success. Your results will vary based on your product, offer, market, budget, execution, experience, and other factors outside our control.',
      'We do not guarantee revenue, profit, customer acquisition, or any specific business outcome from using our content, workshops, or services.',
    ],
  },
  {
    title: '4. Workshops and applications',
    body: [
      'Workshop seats and partner opportunities may require an application. Submission of an application does not guarantee acceptance. We may accept or decline any application at our sole discretion and may keep the room size limited.',
      'If a workshop or service requires payment, pricing, refund rules, and attendance requirements will be provided at checkout or in a separate agreement. Unless stated otherwise in writing, fees are non-refundable once paid.',
    ],
  },
  {
    title: '5. Communications consent',
    body: [
      'By providing your contact information, you consent to UpLyft (and service providers acting on our behalf) contacting you by email, phone, SMS, or other channels about your inquiry, application, or related offerings. Message and data rates may apply. You can opt out of marketing communications at any time. Opting out of marketing may not stop transactional messages related to an active application or purchase.',
    ],
  },
  {
    title: '6. Intellectual property',
    body: [
      'All content on this site (including text, branding, logos, graphics, frameworks, and materials) is owned by UpLyft or our licensors and is protected by intellectual property laws. You may not copy, redistribute, sell, or create derivative works from our materials without prior written permission, except for personal, non-commercial viewing of the public website.',
      'Workshop packets and proprietary playbooks shared with accepted participants remain UpLyft property and are licensed for your internal business use only unless we agree otherwise in writing.',
    ],
  },
  {
    title: '7. Acceptable use',
    body: [
      'You agree not to misuse the site, including by attempting to disrupt systems, scrape content at scale without permission, submit false information, harass our team or other participants, or use the site for unlawful purposes.',
    ],
  },
  {
    title: '8. Third-party tools and links',
    body: [
      'Our site may link to third-party sites or embed tools (for example form providers or video hosts). We are not responsible for third-party content, policies, or practices. Your use of those services is subject to their terms.',
    ],
  },
  {
    title: '9. Disclaimer of warranties',
    body: [
      'THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.',
    ],
  },
  {
    title: '10. Limitation of liability',
    body: [
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, UPLYFT AND ITS FOUNDERS, TEAM MEMBERS, AND AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITY, ARISING FROM YOUR USE OF THE SITE OR SERVICES.',
      'Our total liability for any claim relating to the site or these Terms will not exceed the greater of (a) the amount you paid us for the specific service giving rise to the claim in the 12 months before the claim, or (b) one hundred US dollars (USD $100).',
    ],
  },
  {
    title: '11. Indemnification',
    body: [
      'You agree to indemnify and hold harmless UpLyft and its team from claims, damages, losses, and expenses (including reasonable attorneys\' fees) arising out of your misuse of the site, violation of these Terms, or infringement of any rights of another person or entity.',
    ],
  },
  {
    title: '12. Changes',
    body: [
      'We may update these Terms at any time. The "Last updated" date will change when we do. Continued use of the site after updates constitutes acceptance of the revised Terms.',
    ],
  },
  {
    title: '13. Governing law',
    body: [
      'These Terms are governed by the laws of England and Wales, without regard to conflict of law principles, unless mandatory local consumer law requires otherwise. Courts in that jurisdiction will have exclusive venue for disputes, subject to applicable law.',
    ],
  },
  {
    title: '14. Contact',
    body: [
      'Questions about these Terms? Email legal@uplyftdigital.co or contact us through uplyftdigital.co.',
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <SiteHeader />

      <section className="border-b border-black/10 py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-extrabold uppercase tracking-tight text-[var(--ink)] sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-[var(--muted)]">Last updated: July 22, 2026</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-extrabold uppercase tracking-tight text-[var(--ink)]">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 leading-relaxed text-[var(--muted)]">
                  {section.body.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 text-sm text-[var(--muted)]">
            See also our{' '}
            <Link href="/privacy" className="font-semibold text-[var(--ink)] underline underline-offset-2 hover:text-[#d4af37]">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
