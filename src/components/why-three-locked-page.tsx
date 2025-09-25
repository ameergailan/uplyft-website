/**
 * "Why 3" page with same scroll locking mechanism as services page
 * Uses the exact same reliable system
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const WhyThreeLockedPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number
    
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      
      rafId = requestAnimationFrame(() => {
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
          
          console.log('Why 3 page scroll progress:', Math.round(progress * 100) + '%')
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: '150vh' }} // Shorter height to be closer to services page
    >
      {/* Sticky container that locks in place - SAME AS SERVICES */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white relative">
        
        {/* Debug indicator */}
        <div className="fixed top-4 right-4 bg-purple-500 text-white p-4 rounded z-50">
          Why 3 Progress: {Math.round(scrollProgress * 100)}%
        </div>

        {/* Dot grid background */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        {/* "Why 3" content - tweens out when scrolling */}
        <motion.div 
          className="text-center relative z-10"
          animate={{
            opacity: scrollProgress > 0.1 ? 0 : 1,
            y: scrollProgress > 0.1 ? -50 : 0,
            scale: scrollProgress > 0.1 ? 0.8 : 1
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-sm uppercase tracking-wider text-gray-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Strategy
          </motion.h2>
          
          <motion.h1 
            className="text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Why 3 different<br />services?
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            just focus on one?
          </motion.p>
          
          <motion.p 
            className="text-base text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>

        {/* Letter "A" that pops in when text tweens out */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 0, scale: 0.3, rotateZ: -20 }}
          animate={{
            opacity: scrollProgress > 0.1 ? 1 : 0,
            scale: scrollProgress > 0.1 ? 1 : 0.3,
            rotateZ: scrollProgress > 0.1 ? 0 : -20
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="text-center">
            <h1 className="text-9xl lg:text-[12rem] font-bold text-black mb-8">
              A
            </h1>
            <p className="text-2xl text-gray-600">
              This is where the journey begins
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyThreeLockedPage
