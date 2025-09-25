/**
 * Header component for the DSGNLAB website recreation
 * Contains navigation, logo, location, and primary CTA button
 */

'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Start with dark mode for hero

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleCollaborateClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogoClick = () => {
    // Scroll to top of page (hero section)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Check if we're on any white background page
      const isOnLegalPage = window.location.pathname.includes('/privacy-policy') || 
                           window.location.pathname.includes('/terms-of-service')
      const isOnGetStartedPage = window.location.pathname.includes('/get-started')
      
      if (isOnLegalPage || isOnGetStartedPage) {
        // White background pages, use black text
        setIsDarkMode(false)
        return
      }
      
      
      // Check for white sections on main page
      const whiteSections = document.querySelectorAll('section.bg-white, section.bg-gray-50, [data-slide-over="why-three"]')
      for (const section of whiteSections) {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top <= 100 && rect.bottom >= 100
        
        if (isVisible) {
          // White section visible, use black text
          setIsDarkMode(false)
          return
        }
      }
      
      // Check if we're in the contact section (dark background)
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect()
        const isInContact = contactRect.top <= 100 && contactRect.bottom >= 100
        
        if (isInContact) {
          // Contact section has dark background, use white text
          setIsDarkMode(true)
          return
        }
      }
      
      // Check if we're in the metrics section (black background)
      const metricsSection = document.querySelector('[data-section="metrics"]')
      if (metricsSection) {
        const metricsRect = metricsSection.getBoundingClientRect()
        const isInMetrics = metricsRect.top <= 100 && metricsRect.bottom >= 100
        
        if (isInMetrics) {
          // Metrics section has black background, use white text
          setIsDarkMode(true)
          return
        }
      }
      
      // Check if we're in the solutions section (black background)
      const solutionsSection = document.querySelector('section.bg-black')
      if (solutionsSection) {
        const solutionsRect = solutionsSection.getBoundingClientRect()
        const isInSolutions = solutionsRect.top <= 100 && solutionsRect.bottom >= 100
        
        if (isInSolutions) {
          // Solutions section has black background, use white text
          setIsDarkMode(true)
          return
        }
      }
      
      // Check for white slide-over page (Why 3 different services)
      const slideOverElement = document.querySelector('[data-slide-over="why-three"]')
      if (slideOverElement) {
        const slideRect = slideOverElement.getBoundingClientRect()
        const slideProgress = Math.max(0, Math.min(1, (window.innerHeight - slideRect.top) / window.innerHeight))
        
        if (slideProgress >= 0.9) {
          // On white "Why 3" page, use black text
          setIsDarkMode(false)
          return
        }
      }
      
      // Switch to light mode when in white sections
      if (scrollY > windowHeight * 0.9) {
        setIsDarkMode(false)
      } else {
        setIsDarkMode(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Hide header completely when on black page
  const [isOnBlackPage, setIsOnBlackPage] = useState(false)
  
  useEffect(() => {
    const checkBlackPage = () => {
      const hasAttribute = document.body.hasAttribute('data-on-black-page')
      setIsOnBlackPage(hasAttribute)
    }
    
    // Check immediately
    checkBlackPage()
    
    // Set up observer to watch for attribute changes
    const observer = new MutationObserver(checkBlackPage)
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['data-on-black-page'] 
    })
    
    return () => {
      observer.disconnect()
    }
  }, [])
  
  if (isOnBlackPage) {
    return null // Hide header completely
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Location */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <button
                onClick={handleLogoClick}
                className="transition-opacity duration-300 hover:opacity-80"
                aria-label="Go to homepage"
              >
                <Image
                  src={isDarkMode ? "/UPLYFTLOGO.png" : "/UPLYFTLOGO2.png"}
                  alt="UpLyft Logo"
                  width={120}
                  height={40}
                  className="h-8 lg:h-10 w-auto"
                  priority
                />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <span className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Agency Growth Solutions
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'}`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 py-4 animate-fade-in bg-black/95">
            <div className="flex flex-col space-y-4">
              <span className="text-gray-300 font-medium px-4">
                Agency Growth Solutions
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
