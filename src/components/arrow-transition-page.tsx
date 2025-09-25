/**
 * Arrow transition page between "Why 3 services" and "2 problems"
 * Contains the growing arrow and limiting beliefs
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import OptimizedArrow from './optimized-arrow'

const ArrowTransitionPage = () => {
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
      style={{ height: '100vh' }} // Minimal height for arrow extension
    >
      {/* Sticky container that locks in place */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white relative">
        
        
        {/* Optimized animated arrow with beliefs */}
        <OptimizedArrow />
        
      </div>
    </section>
  )
}

export default ArrowTransitionPage
