/**
 * Root layout component for the DSGNLAB website recreation
 * Provides the base HTML structure and global styling
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/custom-cursor'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://uplyftinc.com'),
  title: 'UpLyft - Scale Your Agency Beyond Limits',
  description: 'Transform your agency with proven systems, processes, and strategies that drive consistent growth and profitability. From client acquisition to team management, we help agencies achieve sustainable scale.',
  keywords: 'agency growth, agency scaling, business consulting, agency operations, revenue growth, team management, client retention',
  authors: [{ name: 'UpLyft' }],
  icons: {
    icon: '/LLogoo.png',
    shortcut: '/LLogoo.png',
    apple: '/LLogoo.png',
  },
  openGraph: {
    title: 'UpLyft - Scale Your Agency Beyond Limits',
    description: 'Transform your agency with proven systems, processes, and strategies that drive consistent growth and profitability.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/LLogoo.png',
        width: 1200,
        height: 630,
        alt: 'UpLyft Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UpLyft - Scale Your Agency Beyond Limits',
    description: 'Transform your agency with proven systems, processes, and strategies that drive consistent growth and profitability.',
    images: ['/LLogoo.png'],
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
      <head>
        {/* Favicon */}
        <link rel="icon" href="/LLogoo.png" type="image/png" />
        <link rel="shortcut icon" href="/LLogoo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/LLogoo.png" />
        
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2113688009157991');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=2113688009157991&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          <CustomCursor />
          {children}
        </div>
        <GoogleAnalytics gaId="G-WSWP8K1C9V" />
      </body>
    </html>
  )
}