/**
 * Horizontal scrolling "Why 3 services?" section
 * Simple approach that doesn't break normal scrolling
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const HorizontalWhySection = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Beliefs animation sequence with scroll locking
  const startBeliefsAnimation = () => {
    console.log('Starting beliefs animation')
    
    // Lock scrolling until all bubbles appear
    document.body.style.overflow = 'hidden'
    
    // Show beliefs one by one with delays - 6 seconds total
    const intervalTime = 6000 / beliefs.length // 1000ms between each belief (6s ÷ 6 beliefs)
    
    beliefs.forEach((_, index) => {
      setTimeout(() => {
        console.log(`Showing belief ${index + 1}`)
        setScrollProgress((index + 1) / beliefs.length)
      }, index * intervalTime)
    })
    
    // After all beliefs appear (6 seconds), unlock scrolling
    setTimeout(() => {
      console.log('All beliefs shown, unlocking scroll')
      setScrollProgress(1) // Complete
      setIsAutoScrolling(false)
      document.body.style.overflow = 'auto' // Unlock scrolling
    }, 6000) // Exactly 6 seconds
  }

  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight
      
      // Check if section is in view
      const isInView = rect.top <= 0 && rect.bottom >= viewportHeight
      
      if (isInView) {
        // Calculate scroll progress within this section
        const scrollInSection = Math.abs(rect.top)
        const maxScroll = sectionHeight - viewportHeight
        const progress = Math.min(scrollInSection / maxScroll, 1)
        
        setScrollProgress(progress)
        
        // Communicate with header about black page visibility
        const isOnBlackPage = progress > 0.8 // When black page is visible
        if (isOnBlackPage) {
          document.body.setAttribute('data-on-black-page', 'true')
        } else {
          document.body.removeAttribute('data-on-black-page')
        }
      } else {
        // When not in view, ensure header is visible
        document.body.removeAttribute('data-on-black-page')
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current || !containerRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100
      
      if (!isInView) return

      // We're in the section, check if we should go horizontal
      const currentScroll = containerRef.current.scrollLeft
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth
      
      // Allow some scrolling during beliefs animation - don't block completely
      
      // If scrolling down and haven't reached the end horizontally
      if (e.deltaY > 0 && currentScroll < maxScroll) {
        e.preventDefault()
        
        if (rafId) cancelAnimationFrame(rafId)
        
        rafId = requestAnimationFrame(() => {
          if (!containerRef.current) return
          
          // Scroll horizontally
          const newScrollLeft = currentScroll + e.deltaY * 2
          const clampedScroll = Math.max(0, Math.min(newScrollLeft, maxScroll))
          containerRef.current.scrollLeft = clampedScroll
          
          // Update progress
          const progress = maxScroll > 0 ? clampedScroll / maxScroll : 0
          setScrollProgress(progress)
          
          // Trigger beliefs animation when "Why" text is completely gone (15%)
          if (progress > 0.15 && !isAutoScrolling) {
            setIsAutoScrolling(true)
            startBeliefsAnimation()
          }
          
          // Communicate with header about black page visibility during horizontal scroll
          const isOnBlackPage = progress > 0.8 // When black page is visible
          if (isOnBlackPage) {
            document.body.setAttribute('data-on-black-page', 'true')
          } else {
            document.body.removeAttribute('data-on-black-page')
          }
        })
      }
      // If scrolling up and we're at the start horizontally
      else if (e.deltaY < 0 && currentScroll <= 0) {
        // Allow normal vertical scrolling up
      }
      // If we've reached the end horizontally, allow vertical scrolling down
      else if (e.deltaY > 0 && currentScroll >= maxScroll) {
        // Allow normal vertical scrolling down
      }
      // If we're in the middle of horizontal scroll and scrolling up
      else if (e.deltaY < 0 && currentScroll > 0) {
        e.preventDefault()
        
        if (rafId) cancelAnimationFrame(rafId)
        
        rafId = requestAnimationFrame(() => {
          if (!containerRef.current) return
          
          // Scroll horizontally backwards
          const newScrollLeft = currentScroll + e.deltaY * 2
          const clampedScroll = Math.max(0, Math.min(newScrollLeft, maxScroll))
          containerRef.current.scrollLeft = clampedScroll
          
          // Update progress
          const progress = maxScroll > 0 ? clampedScroll / maxScroll : 0
          setScrollProgress(progress)
          
          // Communicate with header about black page visibility during horizontal scroll
          const isOnBlackPage = progress > 0.8 // When black page is visible
          if (isOnBlackPage) {
            document.body.setAttribute('data-on-black-page', 'true')
          } else {
            document.body.removeAttribute('data-on-black-page')
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('wheel', handleWheel)
      if (rafId) cancelAnimationFrame(rafId)
      // Cleanup: remove black page indicator and unlock scrolling
      document.body.removeAttribute('data-on-black-page')
      document.body.style.overflow = 'auto'
    }
  }, [isAutoScrolling])

  const beliefs = [
    "Full-stack agencies are generalists",
    "Our offer is unique—you won't get our niche", 
    "Quality over quantity—we're tired of junk leads",
    "Agencies overpromise, then disappear",
    "Automation will break our current ops",
    "Sales is our brand voice—outsourcing risks reputation"
  ]

  return (
    <section 
      ref={sectionRef}
      data-section="horizontal"
      className="relative bg-white"
      style={{ height: '120vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div 
          ref={containerRef}
          className="h-full overflow-x-auto overflow-y-hidden horizontal-scroll-container"
          style={{ 
            width: '100vw',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth'
          }}
        >
          {/* Beliefs that pop up everywhere on screen one by one */}
            {beliefs.map((belief, index) => {
              // Random positions across the entire screen
              const positions = [
                { left: '15%', top: '20%' },   // Top left
                { left: '75%', top: '15%' },   // Top right  
                { left: '25%', top: '70%' },   // Bottom left
                { left: '65%', top: '75%' },   // Bottom right
                { left: '45%', top: '25%' },   // Center top
                { left: '85%', top: '60%' }    // Far right
              ]
              
              const position = positions[index] || { left: '50%', top: '50%' }
              const shouldShow = scrollProgress > (index + 1) / beliefs.length
              
              return (
                <motion.div
                  key={index}
                  className="absolute max-w-md p-6 z-20"
                  style={{
                    left: position.left,
                    top: position.top,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.3,
                    rotateZ: -20
                  }}
                  animate={{ 
                    opacity: shouldShow ? 1 : 0,
                    scale: shouldShow ? 1 : 0.3,
                    rotateZ: shouldShow ? 0 : -20,
                    y: shouldShow ? [0, -8, 0] : 0 // Floating animation
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    y: {
                      repeat: Infinity,
                      repeatType: "reverse", 
                      duration: 3 + index * 0.3,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-gray-200">
                    <p className="text-lg text-gray-800 italic mb-3 leading-relaxed">
                      "{belief}"
                    </p>
                    <div className="text-sm text-gray-500 font-medium">
                      This is what they think... but we prove them wrong.
                    </div>
                  </div>
                </motion.div>
              )
            })}

        </div>
        
        
        
        {/* DEBUG PANEL - ALWAYS SHOW WHEN HORIZONTAL COMPONENT IS ACTIVE */}
        <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded z-50">
          Progress: {Math.round(scrollProgress * 100)}%
          <br />
          Auto: {isAutoScrolling ? 'YES' : 'NO'}
          <br />
          Trigger at: 15%
        </div>
        
        {/* "WHY 3" TEXT - ALWAYS SHOW WHEN HORIZONTAL COMPONENT IS ACTIVE */}
        <div 
          className="fixed pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 30
          }}
        >
          <motion.div 
            className="text-center"
            animate={{ 
              opacity: scrollProgress > 0.15 ? 0 : 1,
              scale: scrollProgress > 0.15 ? 0.8 : 1
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              Strategy
            </h2>
            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold text-black mb-3 leading-tight">
              Why 3 different<br />services?
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-600">
              just focus on one?
            </p>
          </motion.div>
        </div>
        
        
        {/* Progress indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-black/70 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="flex items-center space-x-2">
              <div className="text-white text-sm font-medium">
                {Math.round(scrollProgress * 100)}%
              </div>
              <div className="w-32 h-2 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-200 ease-out"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
              <div className="text-white text-xs">
                Horizontal Mode
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HorizontalWhySection