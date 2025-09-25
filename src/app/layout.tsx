/**
 * Root layout component for the DSGNLAB website recreation
 * Provides the base HTML structure and global styling
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/custom-cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UpLyft - Scale Your Agency Beyond Limits',
  description: 'Transform your agency with proven systems, processes, and strategies that drive consistent growth and profitability. From client acquisition to team management, we help agencies achieve sustainable scale.',
  keywords: 'agency growth, agency scaling, business consulting, agency operations, revenue growth, team management, client retention',
  authors: [{ name: 'UpLyft' }],
  openGraph: {
    title: 'UpLyft - Scale Your Agency Beyond Limits',
    description: 'Transform your agency with proven systems, processes, and strategies that drive consistent growth and profitability.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UpLyft - Scale Your Agency Beyond Limits',
    description: 'Transform your agency with proven systems, processes, and strategies that drive consistent growth and profitability.',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          <CustomCursor />
          {children}
        </div>
      </body>
    </html>
  )
}