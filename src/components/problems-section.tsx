/**
 * Problems section - black page with white text
 * Explains the two problems agencies face
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ProblemsSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [slideOverProgress, setSlideOverProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
        
        // Calculate slide-over progress for black page effect
        const slideProgress = Math.max(0, progress / 1) // Starts immediately
        setSlideOverProgress(slideProgress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: '200vh' }} // Extra height to ensure full screen coverage
    >
      {/* Sticky container that locks in place */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white relative">
        
        {/* Black page that covers entire screen */}
        <div 
          className="absolute inset-0 bg-black z-30 flex items-center justify-center"
          style={{ 
            transform: `translateY(${Math.max(0, (1 - slideOverProgress) * 100)}vh)`,
            transition: 'none', // Remove transition for instant response
            width: '100%',
            height: '100%'
          }}
        >
          
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: slideOverProgress > 0.2 ? 1 : 0,
                y: slideOverProgress > 0.2 ? 0 : 50
              }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: slideOverProgress > 0.3 ? 1 : 0,
                  scale: slideOverProgress > 0.3 ? 1 : 0.9
                }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                You're only on this page
                <br />
                cause you have one of 2 problems.
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-gray-400 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: slideOverProgress > 0.5 ? 1 : 0,
                  y: slideOverProgress > 0.5 ? 0 : 20
                }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                or both
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
