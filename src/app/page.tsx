/**
 * Main page component for the DSGNLAB website recreation
 * Assembles all sections to create the complete landing page
 */

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import EfficiencySection from '@/components/efficiency-section'
import MetricsSection from '@/components/metrics-section'
import SolutionsSplitSection from '@/components/solutions-split-section'
import SlideOverEffect from '@/components/slide-over-effect'
import ServicesCardsSection from '@/components/services-cards-section'
import PageSpecificQuestionMarks from '@/components/page-specific-question-marks'
import GlobalScrollLock from '@/components/global-scroll-lock'
import UnifiedOverlaySection from '@/components/unified-overlay-section'

export default function HomePage() {
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
      </SlideOverEffect>
      
      {/* Unified overlay containing Latest Projects + CTA + Footer */}
      <UnifiedOverlaySection />
      
      {/* Global question marks that detect correct page */}
      <PageSpecificQuestionMarks />
      
      {/* Global scroll lock system */}
      <GlobalScrollLock />
    </main>
  )
}