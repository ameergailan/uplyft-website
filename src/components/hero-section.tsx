/**
 * Hero section component for the DSGNLAB website recreation
 * Contains the main headline and value proposition
 */

'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  
  // Direct click handler for hero section
  const handleHeroClick = () => {
    console.log('HERO CLICKED - GOING TO GET STARTED PAGE')
    
    // Use Next.js router for better navigation
    if (typeof window !== 'undefined') {
      window.location.href = '/get-started/'
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Calculate scroll progress for the first viewport
      const progress = Math.min(scrollY / windowHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section 
      className="h-screen flex items-center justify-center pt-20 bg-black text-white fixed inset-0 overflow-hidden hero-section" 
      id="hero"
      onClick={handleHeroClick}
      style={{ cursor: 'none' }}
    >
      {/* Multi-layer throbbing gradients - never resets */}
      <div className="absolute inset-0 throb-layer-1" />
      <div className="absolute inset-0 throb-layer-2" />
      <div className="absolute inset-0 throb-layer-3" />
      
      {/* Breathing overlay */}
      <div className="absolute inset-0 throb-overlay" />
      
      {/* Scroll shadow overlay */}
      <div 
        className="absolute inset-0 bg-black transition-opacity duration-300"
        style={{ 
          opacity: scrollProgress * 0.6,
          pointerEvents: 'none'
        }}
      />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Main Headline */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-12 leading-tight tracking-tight transition-transform duration-300"
            style={{
              transform: `scale(${1 - scrollProgress * 0.2})`,
              opacity: 1 - scrollProgress * 0.3
            }}
          >
            Scale your agency
            <br />
            <span className="text-balance">beyond limits</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg lg:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-300"
            style={{
              transform: `scale(${1 - scrollProgress * 0.15})`,
              opacity: 1 - scrollProgress * 0.4
            }}
          >
            Transform your agency with proven systems, processes, and strategies that drive consistent growth and profitability.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-300"
            style={{
              transform: `scale(${1 - scrollProgress * 0.1})`,
              opacity: 1 - scrollProgress * 0.5
            }}
          >
            From client acquisition to team management, we help agencies achieve sustainable scale and operational excellence.
          </motion.p>

          {/* Scroll to explore text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="transition-all duration-300"
            style={{
              transform: `scale(${1 - scrollProgress * 0.1})`,
              opacity: 1 - scrollProgress * 0.6
            }}
          >
            <p className="text-white text-lg lg:text-xl font-medium tracking-wide">
              Scroll to explore
            </p>
            <div className="flex justify-center mt-4">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-white text-2xl"
              >
                ↓
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
