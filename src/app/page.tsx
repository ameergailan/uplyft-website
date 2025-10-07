/**
 * Main page component for the DSGNLAB website recreation
 * Assembles all sections to create the complete landing page
 */

'use client'

import { useEffect } from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import EfficiencySection from '@/components/efficiency-section'
import MetricsSection from '@/components/metrics-section'
import SolutionsSplitSection from '@/components/solutions-split-section'
import CTAOverlaySection from '@/components/cta-overlay-section'
import CaseStudySection from '@/components/case-study-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import SlideOverEffect from '@/components/slide-over-effect'
import ServicesCardsSection from '@/components/services-cards-section'
import WhyThreeLockedPage from '@/components/why-three-locked-page'
import PageSpecificQuestionMarks from '@/components/page-specific-question-marks'
import GlobalScrollLock from '@/components/global-scroll-lock'
import { trackPageViewWithContent } from '@/lib/facebook-analytics'

export default function HomePage() {
  useEffect(() => {
    // Track homepage view with Facebook Pixel
    trackPageViewWithContent(
      'UpLyft Homepage',
      'Landing Page',
      undefined,
      {
        page_type: 'homepage',
        sections: ['hero', 'services', 'metrics', 'solutions', 'case_study', 'cta', 'contact']
      }
    )
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Spacer to enable scrolling */}
      <div className="h-screen" />
      
      <SlideOverEffect>
        <ServicesCardsSection />
        <MetricsSection />
        <SolutionsSplitSection />
        <CaseStudySection />
        <CTAOverlaySection />
        <Footer />
      </SlideOverEffect>
      
      {/* Global question marks that detect correct page */}
      <PageSpecificQuestionMarks />
      
      {/* Global scroll lock system */}
      <GlobalScrollLock />
    </main>
  )
}