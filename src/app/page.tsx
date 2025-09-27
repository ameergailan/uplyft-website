/**
 * Main page component for the DSGNLAB website recreation
 * Assembles all sections to create the complete landing page
 */

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
        <CTAOverlaySection />
        <Footer />
      </SlideOverEffect>
      
      {/* Spacer for case study slide-over trigger */}
      <div className="h-screen" />
      
      {/* Case study section with independent slide-over */}
      <CaseStudySection />
      
      {/* Global question marks that detect correct page */}
      <PageSpecificQuestionMarks />
      
      {/* Global scroll lock system */}
      <GlobalScrollLock />
    </main>
  )
}