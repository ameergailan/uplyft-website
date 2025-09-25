/**
 * Beliefs tour section - guided zoom tour through beliefs
 * User scrolls to progress through each belief with zoom effect
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import StaticDots from './static-dots'
import SimpleQuestionMarks from './simple-question-marks'

const BeliefsTourSection = () => {
  const [currentBelief, setCurrentBelief] = useState(-1) // -1 = showing "Why 3" text
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isInTourMode, setIsInTourMode] = useState(false)
  const [allBubblesShown, setAllBubblesShown] = useState(false)
  const [isPageLocked, setIsPageLocked] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const beliefs = [
    "Full-stack agencies are generalists",
    "Our offer is unique—you won't get our niche", 
    "Quality over quantity—we're tired of junk leads",
    "Agencies overpromise, then disappear",
    "Automation will break our current ops",
    "Sales is our brand voice—outsourcing risks reputation"
  ]

  const beliefPositions = [
    { left: '25%', top: '30%' },   // Belief 1 - Top left (away from edge)
    { left: '75%', top: '25%' },   // Belief 2 - Top right (away from edge)
    { left: '30%', top: '70%' },   // Belief 3 - Bottom left (away from edge)
    { left: '70%', top: '75%' },   // Belief 4 - Bottom right (away from edge)
    { left: '50%', top: '35%' },   // Belief 5 - Center top (more centered)
    { left: '80%', top: '55%' }    // Belief 6 - Right center (not corner)
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const isInView = rect.top <= 50 && rect.bottom >= window.innerHeight - 50
      
      if (isInView && !isPageLocked) {
        // Lock page as soon as user reaches "Why 3" page
        setIsPageLocked(true)
        document.body.style.overflow = 'hidden'
        console.log('Locked on Why 3 page')
      } else if (!isInView && isPageLocked && !isInTourMode) {
        // Only unlock if not in tour mode
        setIsPageLocked(false)
        document.body.style.overflow = 'auto'
        console.log('Unlocked from Why 3 page')
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const isInView = rect.top <= 50 && rect.bottom >= window.innerHeight - 50
      
      if (!isInView) return

      e.preventDefault()

      // Accumulate scroll to trigger tour mode
      const scrollAmount = Math.abs(e.deltaY)
      setScrollProgress(prev => Math.min(prev + scrollAmount * 0.01, 1))
      
      if (scrollProgress < 0.3) {
        // Need 30% scroll progress to start tour
        console.log(`Scroll progress: ${Math.round(scrollProgress * 100)}%`)
        return
      }
      
      if (!isInTourMode) {
        // First scroll - enter tour mode and show all bubbles
        setIsInTourMode(true)
        document.body.style.overflow = 'hidden' // Lock scrolling
        console.log('Entering tour mode - showing all bubbles')
        
        // Show all bubbles one by one quickly
        beliefs.forEach((_, index) => {
          setTimeout(() => {
            setCurrentBelief(index)
            console.log(`Showing bubble ${index + 1}`)
          }, index * 200) // 0.2 seconds between each bubble - much faster
        })
        
        // After all bubbles appear, mark as complete and start camera tour
        setTimeout(() => {
          setAllBubblesShown(true)
          setCurrentBelief(0) // Start camera tour at first bubble
          console.log('All bubbles shown, starting camera tour')
        }, beliefs.length * 200 + 500) // Faster timing
        
      } else {
        // Camera tour - navigate between bubbles
        if (e.deltaY > 0 && currentBelief < beliefs.length - 1) {
          // Scroll down - camera to next belief
          const nextBelief = currentBelief + 1
          setCurrentBelief(nextBelief)
          console.log(`Camera zooming to belief ${nextBelief + 1}`)
        } else if (e.deltaY < 0 && currentBelief > 0) {
          // Scroll up - camera to previous belief
          const prevBelief = currentBelief - 1
          setCurrentBelief(prevBelief)
          console.log(`Camera zooming to belief ${prevBelief + 1}`)
        } else if (e.deltaY > 0 && currentBelief >= beliefs.length - 1) {
          // Completed tour - unlock scrolling and allow progression
          console.log('Tour complete - unlocking scroll')
          setIsPageLocked(false)
          document.body.style.overflow = 'auto'
          // Allow user to continue to next page
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
  }, [isInTourMode, currentBelief, beliefs.length, isPageLocked, scrollProgress])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: '100vh' }}
    >
      <div 
        className="sticky top-0 h-screen bg-white overflow-hidden relative"
        style={{
          transform: isInTourMode && allBubblesShown && currentBelief >= 0 
            ? `scale(1.8) translate(${(50 - parseFloat(beliefPositions[currentBelief]?.left || '50%')) * 0.8}%, ${(50 - parseFloat(beliefPositions[currentBelief]?.top || '50%')) * 0.8}%)`
            : 'scale(1) translate(0%, 0%)',
          transition: 'transform 1s ease-in-out',
          transformOrigin: 'center center'
        }}
      >
        
        {/* Static dot grid background - no hover effects */}
        <StaticDots />
        
        {/* Question marks hover effect */}
        <SimpleQuestionMarks />
        {/* "Why 3" text - visible until 30% scroll progress */}
        {!isInTourMode && scrollProgress < 0.3 && (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="text-center">
              <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                Strategy
              </h2>
              <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold text-black mb-6 leading-tight">
                Why 3 different<br />services?
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-600 mb-8">
                just focus on one?
              </p>
              <p className="text-lg text-gray-400">
                Scroll to explore →
              </p>
            </div>
          </div>
        )}

        {/* Debug panel */}
        <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded z-50">
          Page Locked: {isPageLocked ? 'YES' : 'NO'}
          <br />
          Scroll Progress: {Math.round(scrollProgress * 100)}%
          <br />
          Tour Mode: {isInTourMode ? 'YES' : 'NO'}
          <br />
          Current Belief: {currentBelief + 1}
        </div>

        {/* All beliefs positioned across screen */}
      {beliefs.map((belief, index) => {
        const position = beliefPositions[index]
        const isActive = currentBelief === index
        const isVisible = allBubblesShown || (isInTourMode && currentBelief >= index)
        
        return (
          <motion.div
            key={index}
            className="absolute max-w-lg p-8 z-20"
            style={{
              left: position.left,
              top: position.top,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.3,
              rotateZ: -15
            }}
            animate={{ 
              opacity: isVisible ? (isActive ? 1 : 0.6) : 0,
              scale: isVisible ? 1 : 0.3, // No zoom on bubbles - camera zooms instead
              rotateZ: isVisible ? 0 : -15,
              y: isVisible ? [0, -10, 0] : 0
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              y: {
                repeat: Infinity,
                repeatType: "reverse", 
                duration: 3 + index * 0.2,
                ease: "easeInOut"
              }
            }}
          >
            <div className={`bg-white p-8 rounded-2xl shadow-2xl border-4 ${isActive ? 'border-blue-500' : 'border-gray-200'} transition-all duration-500`}>
              <p className="text-xl text-gray-800 italic mb-4 leading-relaxed font-medium">
                "{belief}"
              </p>
              <div className="text-base text-gray-500 font-medium">
                This is what they think... but we prove them wrong.
              </div>
              {isActive && (
                <div className="mt-4 text-center">
                  <div className="text-sm text-blue-600 font-bold">
                    Belief {index + 1} of {beliefs.length}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )
        })}
      </div>
    </section>
  )
}

export default BeliefsTourSection
