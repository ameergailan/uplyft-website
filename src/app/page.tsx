/**
 * Main page component for the DSGNLAB website recreation
 * Assembles all sections to create the complete landing page
 */

'use client'

import { useEffect, lazy, Suspense } from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import { trackPageViewWithContent } from '@/lib/facebook-analytics'

// Lazy load below-the-fold components for better initial load performance
const SlideOverEffect = lazy(() => import('@/components/slide-over-effect'))
const ServicesCardsSection = lazy(() => import('@/components/services-cards-section'))
const MetricsSection = lazy(() => import('@/components/metrics-section'))
const SolutionsSplitSection = lazy(() => import('@/components/solutions-split-section'))
const CTAOverlaySection = lazy(() => import('@/components/cta-overlay-section'))
const Footer = lazy(() => import('@/components/footer'))
const PageSpecificQuestionMarks = lazy(() => import('@/components/page-specific-question-marks'))
const GlobalScrollLock = lazy(() => import('@/components/global-scroll-lock'))

export default function HomePage() {
  useEffect(() => {
    // Track homepage view with Facebook Pixel
    trackPageViewWithContent(
      'UpLyft Homepage',
      'Landing Page',
      undefined,
      {
        page_type: 'homepage',
        sections: ['hero', 'services', 'metrics', 'solutions', 'cta', 'contact']
      }
    )
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Spacer to enable scrolling */}
      <div className="h-screen" />
      
      <Suspense fallback={null}>
        <SlideOverEffect>
          <Suspense fallback={null}>
            <ServicesCardsSection />
          </Suspense>
          <Suspense fallback={null}>
            <MetricsSection />
          </Suspense>
          <Suspense fallback={null}>
            <SolutionsSplitSection />
          </Suspense>
          <Suspense fallback={null}>
            <CTAOverlaySection />
          </Suspense>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </SlideOverEffect>
        
        {/* Global question marks that detect correct page */}
        <PageSpecificQuestionMarks />
        
        {/* Global scroll lock system */}
        <GlobalScrollLock />
      </Suspense>
    </main>
  )
}