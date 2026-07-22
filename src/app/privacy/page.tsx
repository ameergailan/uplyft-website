import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | UpLyft',
  description: 'How UpLyft collects, uses, and protects your personal information.',
}

const sections = [
  {
    title: '1. Who we are',
    body: [
      'UpLyft ("UpLyft," "we," "us," or "our") operates uplyftdigital.co and related pages, workshops, and partner applications. This Privacy Policy explains what information we collect, how we use it, and the choices you have.',
    ],
  },
  {
    title: '2. Information we collect',
    body: [
      'Information you provide: name, email address, phone number, company name, website, revenue stage, and any other details you submit through forms, applications, booking flows, or email.',
      'Automatically collected information: device type, browser, IP address, pages viewed, referring URLs, and approximate location. We may use cookies, pixels, and similar technologies for analytics and advertising.',
      'Communications: if you contact us, we keep records of that correspondence.',
    ],
  },
  {
    title: '3. How we use your information',
    body: [
      'To respond to applications, workshop registrations, and partner inquiries.',
      'To contact you by email, phone, SMS, or messaging about UpLyft services, workshops, and follow-ups you requested (or that reasonably relate to your inquiry).',
      'To operate, improve, and secure our website and marketing systems.',
      'To run analytics and measure advertising performance (including retargeting where permitted).',
      'To comply with law, enforce our Terms, and protect our rights and users.',
    ],
  },
  {
    title: '4. Sharing of information',
    body: [
      'We do not sell your personal information.',
      'We may share information with service providers who help us run the business (for example: form and CRM tools such as GoHighLevel, email/SMS platforms, analytics providers, hosting, and payment processors). They are only allowed to use your data to perform services for us.',
      'We may disclose information if required by law, legal process, or to protect safety, rights, or property.',
      'If UpLyft is involved in a merger, acquisition, or asset sale, your information may transfer as part of that transaction.',
    ],
  },
  {
    title: '5. Marketing and communications',
    body: [
      'By submitting a form, you may consent to be contacted by UpLyft or our partners using the contact details you provide, including automated dialing or messaging systems where applicable. You can withdraw consent or opt out of marketing at any time by following unsubscribe links or contacting us.',
      'Consent is not a condition of purchase.',
    ],
  },
  {
    title: '6. Cookies and tracking',
    body: [
      'We use cookies and similar technologies to remember preferences, understand site usage, and support advertising. You can control cookies through your browser settings. Disabling cookies may affect how some parts of the site work.',
    ],
  },
  {
    title: '7. Data retention',
    body: [
      'We keep personal information only as long as needed for the purposes described in this policy, unless a longer period is required by law or for legitimate business records (for example, applications and client communications).',
    ],
  },
  {
    title: '8. Security',
    body: [
      'We take reasonable administrative and technical measures to protect personal information. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '9. Your rights and choices',
    body: [
      'Depending on where you live, you may have rights to access, correct, delete, or restrict use of your personal information, or to object to certain processing. To make a request, contact us using the details below. We may need to verify your identity before responding.',
    ],
  },
  {
    title: '10. Children',
    body: [
      'Our services are directed to business professionals and are not intended for children under 16. We do not knowingly collect personal information from children.',
    ],
  },
  {
    title: '11. International visitors',
    body: [
      'If you access our site from outside the country where we operate, your information may be processed in countries with different data protection laws than your own.',
    ],
  },
  {
    title: '12. Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will change when we do. Continued use of the site after changes means you accept the updated policy.',
    ],
  },
  {
    title: '13. Contact',
    body: [
      'Questions about privacy? Email us at privacy@uplyftdigital.co or contact us through uplyftdigital.co.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <SiteHeader />

      <section className="border-b border-black/10 py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-extrabold uppercase tracking-tight text-[var(--ink)] sm:text-5xl">
            Privacy Policy
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
            <Link href="/terms" className="font-semibold text-[var(--ink)] underline underline-offset-2 hover:text-[#d4af37]">
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
