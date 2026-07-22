import Image from 'next/image'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[var(--dark)] py-12 text-white">
      <div className="container-page flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Link href="/">
            <Image src="/UPLYFTLOGO.png" alt="UpLyft" width={120} height={30} className="h-7 w-auto" />
          </Link>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {['Workshops', 'Courses', 'Books', 'Careers', 'Privacy', 'Terms'].map((l) => (
              <li key={l}>
                <a href="#" className="text-[13px] text-white/70 transition-colors hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="max-w-4xl text-xs leading-relaxed text-white/40">
          Results are not typical and are not a guarantee of success. Your results will
          vary depending on education, effort, application, experience, and background.
          © {new Date().getFullYear()} UpLyft. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
