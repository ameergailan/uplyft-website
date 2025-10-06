/**
 * Services cards section with scroll-triggered card animations
 * Creates floating cards that pop up as user scrolls through the section
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, Users, Zap } from 'lucide-react'
import HoverDots from './hover-dots'
import LimitingBeliefs from './limiting-beliefs'
import TranslucentQuestionMarks from './translucent-question-marks'

// Lead Generation Animation Component
const LeadGenerationAnimation = () => {
  const [currentStage, setCurrentStage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const stages = ['Awareness', 'Interest', 'Consideration', 'Conversion']
  
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobileDevice = /iphone|ipad|ipod|android|blackberry|windows phone|mobile/.test(userAgent) || 
                          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
                          ('ontouchstart' in window) ||
                          (navigator.maxTouchPoints > 0)
    setIsMobile(isMobileDevice)
  }, [])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage(prev => (prev + 1) % stages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-full h-full flex items-center justify-center ${isMobile ? 'space-x-3 pt-1' : 'space-x-6 pt-2'}`}>
      {/* Animated Funnel */}
      <div className={`relative ${isMobile ? 'w-16 h-12' : 'w-24 h-20'}`}>
        {stages.map((stage, index) => (
          <motion.div
            key={stage}
            className={`absolute w-full bg-white/20 rounded-sm border border-white/30 ${isMobile ? 'h-2' : 'h-4'}`}
            style={{
              top: `${index * (isMobile ? 10 : 16)}px`,
              width: `${100 - index * 15}%`,
              left: `${index * 7.5}%`
            }}
            animate={{
              backgroundColor: currentStage === index ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)',
              scale: currentStage === index ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
        
        {/* Flowing leads */}
        {[...Array(isMobile ? 1 : 2)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute bg-white rounded-full ${isMobile ? 'w-1 h-1' : 'w-1.5 h-1.5'}`}
            style={{ top: `${i * (isMobile ? 6 : 8) + 2}px`, left: '10%' }}
            animate={{
              x: [0, isMobile ? 60 : 90, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Conversion Rate */}
      <motion.div 
        className="text-center"
        animate={{ scale: currentStage === 3 ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`font-bold text-white ${isMobile ? 'text-lg' : 'text-xl'}`}>+47%</div>
        <div className={`text-white/70 ${isMobile ? 'text-xs' : 'text-xs'}`}>Conversion</div>
      </motion.div>
    </div>
  )
}

// Sales Team Animation Component
const SalesTeamAnimation = () => {
  const [activeMetric, setActiveMetric] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const metrics = [
    { label: 'Revenue', value: '+$2.4M', icon: TrendingUp },
    { label: 'Deals', value: '127', icon: Users },
    { label: 'Team', value: '54', icon: Users }
  ]
  
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobileDevice = /iphone|ipad|ipod|android|blackberry|windows phone|mobile/.test(userAgent) || 
                          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
                          ('ontouchstart' in window) ||
                          (navigator.maxTouchPoints > 0)
    setIsMobile(isMobileDevice)
  }, [])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center ${isMobile ? 'space-y-2' : 'space-y-4'}`}>
      {/* Metrics Boxes - Side by Side */}
      <div className={`flex ${isMobile ? 'space-x-2' : 'space-x-3'}`}>
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={metric.label}
              className={`bg-white/10 rounded-lg text-center border border-white/20 ${isMobile ? 'p-1 min-w-[45px]' : 'p-2 min-w-[60px]'}`}
              animate={{
                backgroundColor: activeMetric === index ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                scale: activeMetric === index ? 1.05 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon size={isMobile ? 10 : 12} className={`mx-auto text-white ${isMobile ? 'mb-0.5' : 'mb-1'}`} />
              <div className={`text-white/80 ${isMobile ? 'text-xs' : 'text-xs'}`}>{metric.label}</div>
              <div className={`font-bold text-white ${isMobile ? 'text-xs' : 'text-xs'}`}>{metric.value}</div>
            </motion.div>
          )
        })}
      </div>
      
      {/* Performance Chart with Background */}
      <div className={`relative bg-white/5 rounded-lg border border-white/10 ${isMobile ? 'w-24 h-8 p-1' : 'w-32 h-12 p-2'}`}>
        {/* Chart Grid Lines */}
        <svg viewBox="0 0 100 40" className="w-full h-full">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="40" fill="url(#grid)" />
          
          {/* Animated Performance Line */}
          <motion.polyline
            points="0,30 20,25 40,20 60,15 80,10 100,5"
            fill="none"
            stroke="white"
            strokeWidth={isMobile ? "1.5" : "2"}
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Data Points */}
          {[0, 20, 40, 60, 80, 100].map((x, i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={30 - i * 5}
              r={isMobile ? "1" : "1.5"}
              fill="white"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}

// Automation System Animation Component
const AutomationSystemAnimation = () => {
  const [currentPlatform, setCurrentPlatform] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const platforms = [
    { name: 'Discord', color: '#5865F2' },
    { name: 'Zapier', color: '#FF4A00' },
    { name: 'Gmail', color: '#EA4335' },
    { name: 'Slack', color: '#4A154B' },
    { name: 'HubSpot', color: '#FF7A59' }
  ]
  
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobileDevice = /iphone|ipad|ipod|android|blackberry|windows phone|mobile/.test(userAgent) || 
                          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
                          ('ontouchstart' in window) ||
                          (navigator.maxTouchPoints > 0)
    setIsMobile(isMobileDevice)
  }, [])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform(prev => (prev + 1) % platforms.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-full h-full flex items-center justify-center ${isMobile ? 'space-x-4' : 'space-x-6'}`}>
      {/* UpLyft Logo */}
      <div className="relative">
        <motion.div
          className={`bg-white rounded-lg flex items-center justify-center ${isMobile ? 'w-8 h-8' : 'w-10 h-10'}`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className={`text-black font-bold ${isMobile ? 'text-xs' : 'text-sm'}`}>U</span>
        </motion.div>
        
        {/* Signal waves */}
        {[...Array(isMobile ? 1 : 2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-white/30 rounded-lg"
            animate={{
              scale: [1, isMobile ? 1.5 : 1.8, isMobile ? 2 : 2.5],
              opacity: [0.8, 0.4, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>
      
      {/* Connection Line */}
      <div className={`relative bg-white/30 ${isMobile ? 'w-8 h-0.5' : 'w-12 h-0.5'}`}>
        <motion.div
          className="absolute inset-0 bg-white"
          animate={{
            scaleX: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Platform Logo */}
      <motion.div
        key={currentPlatform}
        className={`rounded-lg flex items-center justify-center text-white font-bold ${isMobile ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-xs'}`}
        style={{ backgroundColor: platforms[currentPlatform].color }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {platforms[currentPlatform].name.charAt(0)}
      </motion.div>
    </div>
  )
}

const ServicesCardsSection = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [slideOverProgress, setSlideOverProgress] = useState(0)
  const [blackPageProgress, setBlackPageProgress] = useState(0) // 0 to 1 smooth transition
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const cards = [
    {
      id: 1,
      title: "Lead Generation",
      subtitle: "Automated Pipeline",
      description: "Transform your lead generation with proven systems that consistently deliver qualified prospects.",
      features: ["AI-Powered Targeting", "Automated Outreach", "Quality Scoring"],
      color: "from-gray-700 to-gray-800",
      shadowColor: "shadow-gray-700/25"
    },
    {
      id: 2,
      title: "Sales Team",
      subtitle: "Performance Optimization",
      description: "Build and optimize high-performing sales teams with proven frameworks and processes.",
      features: ["Sales Training", "CRM Optimization", "Performance Tracking"],
      color: "from-gray-800 to-gray-900", 
      shadowColor: "shadow-gray-800/25"
    },
    {
      id: 3,
      title: "Backend Automations",
      subtitle: "Operational Excellence",
      description: "Streamline operations with intelligent automation systems that scale with your agency.",
      features: ["Workflow Automation", "Data Integration", "Process Optimization"],
      color: "from-gray-900 to-black",
      shadowColor: "shadow-gray-900/25"
    }
  ]

  useEffect(() => {
    // Detect mobile devices
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobileDevice = /iphone|ipad|ipod|android|blackberry|windows phone|mobile/.test(userAgent) || 
                          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
                          ('ontouchstart' in window) ||
                          (navigator.maxTouchPoints > 0)
    setIsMobile(isMobileDevice)
    
    let rafId: number
    
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current || isMobile) return // Skip complex scroll logic on mobile

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
          
          // Calculate slide-over progress for third page effect - delayed to see all cards
          const slideProgress = Math.max(0, (progress - 0.7) / 0.3) // Starts at 70% scroll, full transition by 100%
          setSlideOverProgress(slideProgress)
          
          // Just track when we're on the "Why 3" page - don't mess with body overflow
          if (slideProgress >= 0.95 && isInView) {
            console.log('Why 3 slide-over active - letter cycling enabled')
          }
          
          // Determine which card should be active based on scroll progress - ensure all cards are seen
          const cardIndex = Math.floor(progress * cards.length * 1.2) // 1.2x faster to see all cards before slide-over
          const clampedIndex = Math.min(Math.max(cardIndex, 0), cards.length - 1)
          setActiveCard(clampedIndex)
        }
      })
    }

    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current || isMobile) return // Skip on mobile
      
      const rect = sectionRef.current.getBoundingClientRect()
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight
      
      if (isInView && slideOverProgress >= 1.0) {
        // On "Why 3" slide-over - cycle through letters
        e.preventDefault()
        
        if (e.deltaY > 0) {
          // Scroll down - gradually increase black page progress
          setBlackPageProgress(prev => {
            const newProgress = Math.min(1, prev + 0.15) // Increase by 15% each scroll
            console.log('Black page progress:', newProgress)
            return newProgress
          })
        } else if (e.deltaY < 0) {
          // Scroll up - gradually decrease black page progress
          setBlackPageProgress(prev => {
            const newProgress = Math.max(0, prev - 0.15) // Decrease by 15% each scroll
            console.log('Black page progress:', newProgress)
            return newProgress
          })
        }
        
        return false
      }
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (slideOverProgress >= 1.0 && !isMobile) { // Skip on mobile
        // Block keyboard scrolling too
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
          e.preventDefault()
          e.stopPropagation()
          console.log('Keyboard scroll blocked')
        }
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (slideOverProgress >= 1.0 && !isMobile) { // Skip on mobile
        // Block touch scrolling on mobile
        e.preventDefault()
        console.log('Touch scroll blocked')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('wheel', handleWheel, { passive: false })
    document.addEventListener('keydown', handleKeydown, { passive: false })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('wheel', handleWheel)
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('touchmove', handleTouchMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [cards.length, slideOverProgress])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gray-50"
      style={{ height: isMobile ? 'auto' : '400vh', marginBottom: '0' }} // Auto height on mobile
    >
      {/* Sticky container that locks in place */}
      <div className={`${isMobile ? 'relative py-16' : 'sticky top-0 h-screen'} flex items-center justify-center overflow-hidden bg-gray-50 relative`}>
        
        {/* Individual hover-responsive dots - Hidden on mobile */}
        {!isMobile && <HoverDots />}
        <div className="container-custom relative">
          
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4 px-4"
          >
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Services
            </h2>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Here's what we do
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Three core systems that transform agencies into scalable powerhouses
            </p>
          </motion.div>

           {/* Cards container with navigation arrows */}
           <div className={`relative flex items-center justify-center ${isMobile ? 'h-auto flex-col space-y-8 px-4' : 'h-[400px] sm:h-[550px]'}`}>
            
            {/* Navigation Arrows - HIDDEN ON MOBILE */}
            <AnimatePresence>
              {(activeCard === 1 || activeCard === 2) && slideOverProgress < 0.3 && (
                <motion.button
                  initial={{ 
                    opacity: 0, 
                    x: -30, 
                    scale: 0.8,
                    rotate: -10
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    rotate: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: -30, 
                    scale: 0.8,
                    rotate: -10
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 200
                  }}
                  onClick={() => setActiveCard(Math.max(0, activeCard - 1))}
                  className="hidden lg:block absolute z-40 bg-black/80 backdrop-blur-sm hover:bg-black/90 text-white p-5 rounded-full transition-all duration-300 shadow-xl"
                   style={{ 
                     left: `calc(50% - 750px - 50px)`,
                     top: '40%',
                     transform: 'translateY(-50%)'
                   }}
                  aria-label="Previous service"
                >
                  <ChevronLeft size={32} />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {(activeCard === 0 || activeCard === 1) && slideOverProgress < 0.3 && (
                <motion.button
                  initial={{ 
                    opacity: 0, 
                    x: 30, 
                    scale: 0.8,
                    rotate: 10
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    rotate: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: 30, 
                    scale: 0.8,
                    rotate: 10
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 200
                  }}
                  onClick={() => setActiveCard(Math.min(cards.length - 1, activeCard + 1))}
                  className="hidden lg:block absolute z-40 bg-black/80 backdrop-blur-sm hover:bg-black/90 text-white p-5 rounded-full transition-all duration-300 shadow-xl"
                   style={{ 
                     right: `calc(50% - 750px - 50px)`,
                     top: '40%',
                     transform: 'translateY(-50%)'
                   }}
                  aria-label="Next service"
                >
                  <ChevronRight size={32} />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8, 
                    rotateY: -15,
                    z: -100
                  }}
                   animate={{ 
                     opacity: isMobile ? 1 : (1 - slideOverProgress * 0.6), // Always show on mobile
                     scale: isMobile ? 1 : ((activeCard === index ? 1 : 0.9) * (1 - slideOverProgress * 0.3)), // Full scale on mobile
                     rotateY: isMobile ? 0 : (activeCard === index ? 0 : -3),
                     z: isMobile ? 0 : (activeCard === index ? 0 : -20),
                     x: 0, // All cards centered
                     y: isMobile ? 0 : ((index - activeCard) * 20 + slideOverProgress * 50) // No stacking on mobile
                   }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 100
                  }}
                   className={`${isMobile ? 'relative w-full max-w-md mx-auto' : 'absolute w-[300px] sm:w-[600px] lg:w-[1000px] xl:w-[1500px]'} ${isMobile ? 'h-[280px]' : 'h-[300px] sm:h-[400px] lg:h-[500px]'} rounded-2xl sm:rounded-3xl ${isMobile ? 'p-6' : 'p-6 sm:p-10 lg:p-16'} text-white shadow-2xl relative overflow-hidden`}
                   style={{
                     transform: isMobile ? 'none' : `perspective(1000px) ${activeCard === index ? 'rotateY(0deg)' : 'rotateY(-3deg)'}`,
                     filter: isMobile ? 'none' : (activeCard === index 
                       ? `brightness(${1 - slideOverProgress * 0.4}) contrast(${1 - slideOverProgress * 0.3})`
                       : `brightness(${0.5 - slideOverProgress * 0.3}) contrast(${0.7 - slideOverProgress * 0.2})`),
                     zIndex: isMobile ? 0 : (activeCard === index ? 30 : 25 - index),
                     boxShadow: isMobile ? '0 10px 30px rgba(0, 0, 0, 0.3)' : (activeCard === index 
                       ? `0 ${25 + slideOverProgress * 25}px ${50 + slideOverProgress * 30}px rgba(0, 0, 0, ${0.4 + slideOverProgress * 0.4})` 
                       : `0 ${10 + slideOverProgress * 20}px ${30 + slideOverProgress * 20}px rgba(0, 0, 0, ${0.6 + slideOverProgress * 0.3})`)
                   }}
                >
                  {/* Throbbing layers - only active on current card (desktop) or all cards (mobile) */}
                  {(isMobile || activeCard === index) ? (
                    <>
                      <div 
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          background: index === 0 
                            ? `radial-gradient(ellipse 140% 140% at 40% 60%, #4b5563 0%, #374151 30%, #1f2937 60%, #6b7280 100%)`
                            : index === 1
                            ? `radial-gradient(ellipse 140% 140% at 60% 40%, #374151 0%, #1f2937 30%, #111827 60%, #4b5563 100%)`
                            : `radial-gradient(ellipse 140% 140% at 50% 80%, #1f2937 0%, #111827 30%, #000000 60%, #374151 100%)`,
                          animation: `cardThrobPhase1 ${6 + index * 1.3}s ease-in-out infinite`
                        }}
                      />
                      <div 
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          background: index === 0 
                            ? `radial-gradient(ellipse 140% 140% at 80% 20%, #6b7280 0%, #4b5563 30%, #374151 60%, #1f2937 100%)`
                            : index === 1
                            ? `radial-gradient(ellipse 140% 140% at 20% 80%, #4b5563 0%, #374151 30%, #1f2937 60%, #111827 100%)`
                            : `radial-gradient(ellipse 140% 140% at 30% 30%, #374151 0%, #1f2937 30%, #111827 60%, #000000 100%)`,
                          animation: `cardThrobPhase2 ${7.5 + index * 0.7}s ease-in-out infinite`
                        }}
                      />
                      <div 
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          background: index === 0 
                            ? `radial-gradient(ellipse 140% 140% at 20% 40%, #374151 0%, #1f2937 30%, #6b7280 60%, #4b5563 100%)`
                            : index === 1
                            ? `radial-gradient(ellipse 140% 140% at 70% 70%, #1f2937 0%, #111827 30%, #374151 60%, #4b5563 100%)`
                            : `radial-gradient(ellipse 140% 140% at 60% 20%, #111827 0%, #000000 30%, #1f2937 60%, #374151 100%)`,
                          animation: `cardThrobPhase3 ${9 + index * 0.5}s ease-in-out infinite`
                        }}
                      />
                    </>
                  ) : (
                    /* Static background for inactive cards */
                    <div 
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: index === 0 
                          ? `linear-gradient(135deg, #4b5563 0%, #374151 50%, #1f2937 100%)`
                          : index === 1
                          ? `linear-gradient(135deg, #374151 0%, #1f2937 50%, #111827 100%)`
                          : `linear-gradient(135deg, #1f2937 0%, #111827 50%, #000000 100%)`
                      }}
                    />
                  )}
                  
                  <div className="h-full flex flex-col justify-between relative z-10">
                    {/* Text Content - Top Half */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="text-sm uppercase tracking-wider opacity-80 mb-2">
                        {card.subtitle}
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                        {card.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                        {card.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-2">
                        {card.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Animated Content - Bottom Half */}
                    <div className="flex-1 flex items-center justify-center pt-4">
                      {!isMobile && card.id === 1 && <LeadGenerationAnimation />}
                      {!isMobile && card.id === 2 && <SalesTeamAnimation />}
                      {!isMobile && card.id === 3 && <AutomationSystemAnimation />}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Dots - Hidden on mobile since all cards are shown */}
          {!isMobile && (
            <div className="flex justify-center mt-8 space-x-3">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-500 lg:pointer-events-none ${
                    activeCard === index ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View service ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Mobile Swipe Hint / Desktop Scroll Hint */}
          {!isMobile && (
            <div className="text-center mt-6">
              <p className="text-gray-500 text-sm animate-pulse lg:hidden">
                Tap dots above to explore services
              </p>
              <p className="text-gray-500 text-sm animate-pulse hidden lg:block">
                Scroll to explore services
              </p>
            </div>
          )}
        </div>
        
        {/* Third page slide-over effect - "Why 3" positioned higher - Hidden on mobile */}
        {!isMobile && (
          <div 
            className="absolute inset-0 bg-white z-40"
            style={{ 
              transform: `translateY(${(1 - slideOverProgress) * 100}vh)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
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

          {/* Translucent question marks that follow mouse */}
          <TranslucentQuestionMarks />

          {/* "Why 3" content */}
          <motion.div 
            className="text-center relative z-10"
            animate={{
              opacity: 1 - blackPageProgress,
              y: blackPageProgress * -50,
              scale: 1 - (blackPageProgress * 0.2)
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-sm uppercase tracking-wider text-gray-500 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: slideOverProgress > 0.2 ? 1 : 0,
                y: slideOverProgress > 0.2 ? 0 : 30
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Strategy
            </motion.h2>
            
            <motion.h1 
              className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ 
                opacity: slideOverProgress > 0.3 ? 1 : 0,
                y: slideOverProgress > 0.3 ? 0 : 50,
                scale: slideOverProgress > 0.3 ? 1 : 0.9
              }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="letter-glow-1">W</span>
              <span className="letter-glow-2">h</span>
              <span className="letter-glow-3">y</span>
              <span> </span>
              <span className="letter-glow-4">3</span>
              <span> </span>
              <span className="letter-glow-5">d</span>
              <span className="letter-glow-1">i</span>
              <span className="letter-glow-2">f</span>
              <span className="letter-glow-3">f</span>
              <span className="letter-glow-4">e</span>
              <span className="letter-glow-5">r</span>
              <span className="letter-glow-1">e</span>
              <span className="letter-glow-2">n</span>
              <span className="letter-glow-3">t</span>
              <br />
              <span className="letter-glow-4">s</span>
              <span className="letter-glow-5">e</span>
              <span className="letter-glow-1">r</span>
              <span className="letter-glow-2">v</span>
              <span className="letter-glow-3">i</span>
              <span className="letter-glow-4">c</span>
              <span className="letter-glow-5">e</span>
              <span className="letter-glow-1">s</span>
              <span className="letter-glow-2">?</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: slideOverProgress > 0.5 ? 1 : 0,
                y: slideOverProgress > 0.5 ? 0 : 20
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              just focus on one?
            </motion.p>
            
            <motion.p 
              className="text-base text-gray-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: slideOverProgress > 0.7 ? 1 : 0,
                x: slideOverProgress > 0.7 ? 0 : -20
              }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Scroll to continue
            </motion.p>
          </motion.div>

          {/* Black page overlay with animated reveal */}
          <motion.div
            className="absolute inset-0 bg-black flex items-center justify-center z-30"
            animate={{
              opacity: blackPageProgress
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              clipPath: `circle(${blackPageProgress * 150}% at 50% 50%)`
            }}
          >
            {/* Smooth background designs */}
            <div className="absolute inset-0">
              <div 
                className="absolute w-96 h-96 rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
                  top: '20%',
                  left: '10%',
                  animation: 'float 8s ease-in-out infinite'
                }}
              />
              <div 
                className="absolute w-64 h-64 rounded-full opacity-15"
                style={{
                  background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
                  bottom: '30%',
                  right: '15%',
                  animation: 'float 6s ease-in-out infinite reverse'
                }}
              />
              <div 
                className="absolute w-80 h-80 rounded-full opacity-8"
                style={{
                  background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
                  top: '60%',
                  left: '70%',
                  animation: 'float 10s ease-in-out infinite'
                }}
              />
            </div>

            {/* Black page content */}
            <motion.div 
              className="text-center text-white relative z-10"
              animate={{ 
                opacity: blackPageProgress,
                y: 50 - (blackPageProgress * 50),
                scale: 0.8 + (blackPageProgress * 0.2)
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
                animate={{ 
                  opacity: blackPageProgress,
                  scale: 0.9 + (blackPageProgress * 0.1)
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                You're only on this page<br />
                for one of two reasons...
              </motion.h1>
              
              <motion.p 
                className="text-2xl text-gray-400 mt-8"
                animate={{ 
                  opacity: blackPageProgress,
                  y: 20 - (blackPageProgress * 20)
                }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              >
                or both.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        )}
      </div>
    </section>
  )
}

export default ServicesCardsSection
