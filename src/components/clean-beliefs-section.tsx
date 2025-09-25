/**
 * Clean, optimized beliefs section
 * Simple and reliable implementation
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CleanBeliefsSection = () => {
  const [phase, setPhase] = useState(0) // 0: Why text, 1: Bubbles appearing, 2: Tour mode, 3: Complete
  const [activeBelief, setActiveBelief] = useState(0)
  const [scrollLocked, setScrollLocked] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const beliefs = [
    "Full-stack agencies are generalists",
    "Our offer is unique—you won't get our niche", 
    "Quality over quantity—we're tired of junk leads",
    "Agencies overpromise, then disappear",
    "Automation will break our current ops"
  ]

  const beliefPositions = [
    { x: 15, y: 25 }, // Top left - moved further left
    { x: 55, y: 30 }, // Top right - moved left
    { x: 20, y: 70 }, // Bottom left - moved further left
    { x: 50, y: 75 }, // Bottom right - moved left
    { x: 35, y: 45 }  // Center - moved left
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const isOnPage = rect.top <= 100 && rect.bottom >= window.innerHeight - 100
      
      if (isOnPage && !scrollLocked && phase === 0) {
        // Lock page when user reaches it
        setScrollLocked(true)
        document.body.style.overflow = 'hidden'
        console.log('Page locked')
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (!scrollLocked) return
      
      e.preventDefault()
      
      if (phase === 0) {
        // Start bubble sequence
        setPhase(1)
        console.log('Starting bubble sequence')
        
        // Show bubbles quickly
        setTimeout(() => setPhase(2), 2000) // 2 seconds for all bubbles
        
      } else if (phase === 2) {
        // Navigate between beliefs
        if (e.deltaY > 0 && activeBelief < beliefs.length - 1) {
          setActiveBelief(prev => prev + 1)
        } else if (e.deltaY < 0 && activeBelief > 0) {
          setActiveBelief(prev => prev - 1)
        } else if (e.deltaY > 0 && activeBelief >= beliefs.length - 1) {
          // Complete - unlock
          setPhase(3)
          setScrollLocked(false)
          document.body.style.overflow = 'auto'
          console.log('Tour complete - unlocked')
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('wheel', handleWheel)
      document.body.style.overflow = 'auto'
    }
  }, [phase, activeBelief, scrollLocked, beliefs.length])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gray-50"
      style={{ height: '100vh', marginTop: '0' }}
    >
      {/* Simple dot grid background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Main content container with zoom effect */}
      <motion.div 
        className="relative w-full h-full"
        animate={{
          scale: phase === 2 ? 1.5 : 1,
          x: phase === 2 ? (50 - beliefPositions[activeBelief]?.x) * 8 : 0,
          y: phase === 2 ? (50 - beliefPositions[activeBelief]?.y) * 8 : 0
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        
        {/* "Why 3" text */}
        <AnimatePresence>
          {phase === 0 && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center z-30"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                  Strategy
                </h2>
                <h1 className="text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
                  Why 3 different<br />services?
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  just focus on one?
                </p>
                <p className="text-base text-gray-400 animate-pulse">
                  Scroll to explore
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Beliefs */}
        {beliefs.map((belief, index) => {
          const position = beliefPositions[index]
          const isVisible = phase >= 1
          const isActive = phase === 2 && activeBelief === index
          
          return (
            <motion.div
              key={index}
              className="absolute z-20"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0.5, rotateZ: -10 }}
              animate={{ 
                opacity: isVisible ? (isActive ? 1 : 0.7) : 0,
                scale: isVisible ? 1 : 0.5,
                rotateZ: isVisible ? 0 : -10,
                y: isVisible ? [0, -5, 0] : 0
              }}
              transition={{ 
                duration: 0.6,
                delay: phase === 1 ? index * 0.3 : 0,
                y: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2 + index * 0.2,
                  ease: "easeInOut"
                }
              }}
            >
              <div className={`bg-white p-6 rounded-xl shadow-lg border-2 max-w-sm ${
                isActive ? 'border-blue-500 shadow-xl' : 'border-gray-200'
              } transition-all duration-300`}>
                <p className="text-base text-gray-800 italic mb-3 leading-relaxed">
                  "{belief}"
                </p>
                <div className="text-sm text-gray-500">
                  This is what they think... but we prove them wrong.
                </div>
                {isActive && (
                  <div className="mt-3 text-center">
                    <div className="text-xs text-blue-600 font-semibold">
                      {index + 1} of {beliefs.length}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Simple progress indicator */}
      {phase >= 1 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-black/80 text-white px-4 py-2 rounded-full text-sm">
            {phase === 1 ? 'Loading beliefs...' : 
             phase === 2 ? `Belief ${activeBelief + 1} of ${beliefs.length}` :
             'Complete - scroll to continue'}
          </div>
        </div>
      )}
    </section>
  )
}

export default CleanBeliefsSection
