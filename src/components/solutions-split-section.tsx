/**
 * Solutions Split Section - Time vs Money with blur effects and central stamp
 * Displays two main problem categories with hover-to-reveal blur effects
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, DollarSign, Zap, Target, TrendingUp, Users } from 'lucide-react'

const SolutionsSplitSection = () => {
  const [hoveredSide, setHoveredSide] = useState<'time' | 'money' | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [animatedValue, setAnimatedValue] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  const handleTimeHover = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log('TIME HOVERED - PRODUCTION')
    setHoveredSide('time')
    // Force update for production
    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-hover-section', 'time')
    }
  }
  
  const handleTimeLeave = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log('TIME LEFT - PRODUCTION')
    setHoveredSide(null)
    if (typeof document !== 'undefined') {
      document.body.removeAttribute('data-hover-section')
    }
  }
  
  const handleMoneyHover = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log('MONEY HOVERED - PRODUCTION')
    setHoveredSide('money')
    // Force update for production
    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-hover-section', 'money')
    }
  }
  
  const handleMoneyLeave = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log('MONEY LEFT - PRODUCTION')
    setHoveredSide(null)
    if (typeof document !== 'undefined') {
      document.body.removeAttribute('data-hover-section')
    }
  }

  // Animated counter effect
  useEffect(() => {
    if (hoveredCard !== null) {
      const targetValue = hoveredCard < 3 ? timeDetails[hoveredCard].metric : moneyDetails[hoveredCard - 3].metric
      const duration = 1000 // 1 second
      const steps = 60 // 60fps
      const increment = targetValue / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= targetValue) {
          setAnimatedValue(targetValue)
          clearInterval(timer)
        } else {
          setAnimatedValue(Math.floor(current * 10) / 10) // Round to 1 decimal
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    } else {
      setAnimatedValue(0)
    }
  }, [hoveredCard])

  const timeDetails = [
    {
      icon: Zap,
      title: "Advanced Automations",
      description: "Streamline your entire workflow with intelligent automation systems that eliminate manual tasks and accelerate your operations.",
      metric: 20,
      metricLabel: "hours saved/month"
    },
    {
      icon: Target,
      title: "Precision Data Tracking",
      description: "Real-time analytics and performance monitoring that provides actionable insights to optimize every aspect of your agency.",
      metric: 95,
      metricLabel: "% accuracy increase"
    },
    {
      icon: TrendingUp,
      title: "Strategic Nurture Sequencing",
      description: "Sophisticated lead nurturing campaigns that convert prospects into high-value clients through personalized touchpoints.",
      metric: 3.5,
      metricLabel: "x conversion rate"
    }
  ]

  const moneyDetails = [
    {
      icon: Users,
      title: "Elite Sales Team Integration",
      description: "Deploy battle-tested sales professionals who understand your market and consistently close high-ticket deals.",
      metric: 85,
      metricLabel: "% close rate"
    },
    {
      icon: Target,
      title: "Premium Lead Generation",
      description: "Access our proven lead generation systems that deliver qualified prospects ready to invest in your services.",
      metric: 150,
      metricLabel: "qualified leads/month"
    },
    {
      icon: DollarSign,
      title: "Revenue Optimization",
      description: "Maximize your profit margins through strategic pricing, upselling frameworks, and client lifetime value enhancement.",
      metric: 40,
      metricLabel: "% profit increase"
    }
  ]

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden solutions-section" data-interactive="true">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #fff 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[80vh]">
          
          {/* LEFT SIDE - TIME */}
          <div
            className="relative p-8 lg:p-16 flex flex-col justify-center border-r border-gray-700 cursor-pointer"
            onMouseEnter={handleTimeHover}
            onMouseLeave={handleTimeLeave}
          >
             {/* Blur overlay */}
             <div
               className="absolute inset-0 bg-black/70 backdrop-blur-md pointer-events-none blur-overlay"
               style={{
                 opacity: hoveredSide === 'time' ? 0 : 0.9,
                 transition: 'opacity 0.4s ease-out'
               }}
             />
            
            <div className="relative z-10">
               <div
                 className="mb-8"
                 style={{
                   filter: hoveredSide === 'time' ? 'blur(0px)' : 'blur(4px)',
                   transition: 'filter 0.4s ease-out'
                 }}
               >
                <motion.div
                  animate={{
                    scale: hoveredSide === 'time' ? 1.4 : 1,
                    filter: hoveredSide === 'time' ? 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.8))' : 'drop-shadow(0 0 0px rgba(96, 165, 250, 0))'
                  }}
                  transition={{ 
                    scale: { duration: 0.4, ease: "easeOut" },
                    filter: { duration: 0.4, ease: "easeOut" }
                  }}
                  className={`mb-6 clock-animated ${hoveredSide === 'time' ? 'clock-rotating' : ''}`}
                >
                  <Clock size={80} className="text-blue-400" />
                </motion.div>
                <motion.h2 
                  className="text-4xl lg:text-5xl font-bold text-white mb-4"
                  animate={{
                    scale: hoveredSide === 'time' ? 1.05 : 1,
                    textShadow: hoveredSide === 'time' ? '0 0 20px rgba(96, 165, 250, 0.5)' : '0 0 0px rgba(96, 165, 250, 0)'
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  TIME
                </motion.h2>
                <p className="text-xl text-gray-300 mb-8">
                  Reclaim your most valuable resource
                </p>
              </div>

               <div
                 className="space-y-6"
                 style={{
                   filter: hoveredSide === 'time' ? 'blur(0px)' : 'blur(4px)',
                   transition: 'filter 0.4s ease-out 0.1s'
                 }}
               >
                {timeDetails.map((detail, index) => (
                  <div key={index} className="relative">
                    <motion.div
                      className="flex items-start space-x-4 p-4 rounded-lg bg-white/80 cursor-pointer relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                        backgroundColor: 'rgba(255,255,255,0.95)'
                      }}
                      transition={{ 
                        opacity: { duration: 0.6, delay: index * 0.1 },
                        scale: { duration: 0.2, ease: "easeOut" },
                        boxShadow: { duration: 0.2 },
                        backgroundColor: { duration: 0.2 }
                      }}
                      onMouseEnter={(e) => {
                        e.stopPropagation()
                        console.log('TIME CARD HOVERED:', index)
                        setHoveredCard(index)
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation()
                        console.log('TIME CARD LEFT:', index)
                        setHoveredCard(null)
                      }}
                    >
                    <detail.icon size={24} className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {detail.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Animated metric - large text parallel to the left */}
                  <motion.div
                    className="absolute top-1/2 transform -translate-y-1/2 z-50"
                    style={{ right: '100%', marginRight: '2.5rem' }}
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0,
                      x: hoveredCard === index ? 0 : 50,
                      scale: hoveredCard === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="text-right whitespace-nowrap">
                      <div className="text-5xl font-bold text-blue-400 leading-none">
                        {hoveredCard === index ? (detail.metric % 1 === 0 ? Math.floor(animatedValue) : animatedValue.toFixed(1)) : detail.metric}
                      </div>
                      <div className="text-base text-blue-300 mt-1 font-medium">
                        {detail.metricLabel}
                      </div>
                    </div>
                  </motion.div>
                </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - MONEY */}
          <div
            className="relative p-8 lg:p-16 flex flex-col justify-center cursor-pointer"
            onMouseEnter={handleMoneyHover}
            onMouseLeave={handleMoneyLeave}
          >
             {/* Blur overlay */}
             <div
               className="absolute inset-0 bg-black/70 backdrop-blur-md pointer-events-none blur-overlay"
               style={{
                 opacity: hoveredSide === 'money' ? 0 : 0.9,
                 transition: 'opacity 0.4s ease-out'
               }}
             />
            
            <div className="relative z-10">
               <div
                 className="mb-8 text-right"
                 style={{
                   filter: hoveredSide === 'money' ? 'blur(0px)' : 'blur(4px)',
                   transition: 'filter 0.4s ease-out'
                 }}
               >
                <div className="flex justify-end mb-6 relative h-20 w-full">
                  {/* Main dollar sign - expanded like clock */}
                  <motion.div
                    className="absolute top-0 right-0"
                    animate={{
                      scale: hoveredSide === 'money' ? 1.4 : 1,
                      filter: hoveredSide === 'money' ? 'drop-shadow(0 0 20px rgba(74, 222, 128, 0.8))' : 'drop-shadow(0 0 0px rgba(74, 222, 128, 0))'
                    }}
                    transition={{ 
                      scale: { duration: 0.4, ease: "easeOut" },
                      filter: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    <DollarSign size={80} className="text-green-400" />
                  </motion.div>
                  
                  {/* Floating dollar sign - left close */}
                  <motion.div
                    className="absolute top-0 right-0"
                    animate={{
                      x: hoveredSide === 'money' ? -60 : -120,
                      y: hoveredSide === 'money' ? [0, -8, 0] : -20,
                      opacity: hoveredSide === 'money' ? 0.7 : 0,
                      scale: hoveredSide === 'money' ? 0.7 : 0.3,
                      rotate: hoveredSide === 'money' ? [0, 5, -5, 0] : 0
                    }}
                    transition={{ 
                      x: { duration: 0.5, ease: "easeOut", delay: 0.1 },
                      opacity: { duration: 0.5, ease: "easeOut", delay: 0.1 },
                      scale: { duration: 0.5, ease: "easeOut", delay: 0.1 },
                      y: { duration: 2, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" },
                      rotate: { duration: 3, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" }
                    }}
                  >
                    <DollarSign size={48} className="text-green-400" />
                  </motion.div>
                  
                  {/* Floating dollar sign - right close */}
                  <motion.div
                    className="absolute top-0 right-0"
                    animate={{
                      x: hoveredSide === 'money' ? 60 : 120,
                      y: hoveredSide === 'money' ? [0, -12, 0] : 20,
                      opacity: hoveredSide === 'money' ? 0.7 : 0,
                      scale: hoveredSide === 'money' ? 0.7 : 0.3,
                      rotate: hoveredSide === 'money' ? [0, -5, 5, 0] : 0
                    }}
                    transition={{ 
                      x: { duration: 0.5, ease: "easeOut", delay: 0.2 },
                      opacity: { duration: 0.5, ease: "easeOut", delay: 0.2 },
                      scale: { duration: 0.5, ease: "easeOut", delay: 0.2 },
                      y: { duration: 2.5, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" },
                      rotate: { duration: 3.5, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" }
                    }}
                  >
                    <DollarSign size={48} className="text-green-400" />
                  </motion.div>
                  
                  {/* Floating dollar sign - far left */}
                  <motion.div
                    className="absolute top-0 right-0"
                    animate={{
                      x: hoveredSide === 'money' ? -100 : -180,
                      y: hoveredSide === 'money' ? [-15, -25, -15] : -30,
                      opacity: hoveredSide === 'money' ? 0.5 : 0,
                      scale: hoveredSide === 'money' ? 0.5 : 0.2,
                      rotate: hoveredSide === 'money' ? [0, 10, -10, 0] : 0
                    }}
                    transition={{ 
                      x: { duration: 0.6, ease: "easeOut", delay: 0.3 },
                      opacity: { duration: 0.6, ease: "easeOut", delay: 0.3 },
                      scale: { duration: 0.6, ease: "easeOut", delay: 0.3 },
                      y: { duration: 3, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" },
                      rotate: { duration: 4, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" }
                    }}
                  >
                    <DollarSign size={36} className="text-green-400" />
                  </motion.div>
                  
                  {/* Floating dollar sign - far right */}
                  <motion.div
                    className="absolute top-0 right-0"
                    animate={{
                      x: hoveredSide === 'money' ? 100 : 180,
                      y: hoveredSide === 'money' ? [10, 20, 10] : 30,
                      opacity: hoveredSide === 'money' ? 0.5 : 0,
                      scale: hoveredSide === 'money' ? 0.5 : 0.2,
                      rotate: hoveredSide === 'money' ? [0, -10, 10, 0] : 0
                    }}
                    transition={{ 
                      x: { duration: 0.6, ease: "easeOut", delay: 0.4 },
                      opacity: { duration: 0.6, ease: "easeOut", delay: 0.4 },
                      scale: { duration: 0.6, ease: "easeOut", delay: 0.4 },
                      y: { duration: 3.5, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" },
                      rotate: { duration: 4.5, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" }
                    }}
                  >
                    <DollarSign size={36} className="text-green-400" />
                  </motion.div>
                  
                  {/* Floating dollar sign - top left */}
                  <motion.div
                    className="absolute top-0 right-0"
                    animate={{
                      x: hoveredSide === 'money' ? -80 : -150,
                      y: hoveredSide === 'money' ? [-40, -50, -40] : -60,
                      opacity: hoveredSide === 'money' ? 0.4 : 0,
                      scale: hoveredSide === 'money' ? 0.4 : 0.1,
                      rotate: hoveredSide === 'money' ? [0, 15, -15, 0] : 0
                    }}
                    transition={{ 
                      x: { duration: 0.7, ease: "easeOut", delay: 0.5 },
                      opacity: { duration: 0.7, ease: "easeOut", delay: 0.5 },
                      scale: { duration: 0.7, ease: "easeOut", delay: 0.5 },
                      y: { duration: 4, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" },
                      rotate: { duration: 5, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" }
                    }}
                  >
                    <DollarSign size={28} className="text-green-400" />
                  </motion.div>
                  
                  {/* Floating dollar sign - top right */}
                  <motion.div
                    className="absolute top-0 right-0"
                    animate={{
                      x: hoveredSide === 'money' ? 80 : 150,
                      y: hoveredSide === 'money' ? [-35, -45, -35] : -50,
                      opacity: hoveredSide === 'money' ? 0.4 : 0,
                      scale: hoveredSide === 'money' ? 0.4 : 0.1,
                      rotate: hoveredSide === 'money' ? [0, -15, 15, 0] : 0
                    }}
                    transition={{ 
                      x: { duration: 0.7, ease: "easeOut", delay: 0.6 },
                      opacity: { duration: 0.7, ease: "easeOut", delay: 0.6 },
                      scale: { duration: 0.7, ease: "easeOut", delay: 0.6 },
                      y: { duration: 4.5, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" },
                      rotate: { duration: 5.5, ease: "easeInOut", repeat: hoveredSide === 'money' ? Infinity : 0, repeatType: "reverse" }
                    }}
                  >
                    <DollarSign size={28} className="text-green-400" />
                  </motion.div>
                </div>
                <motion.h2 
                  className="text-4xl lg:text-5xl font-bold text-white mb-4"
                  animate={{
                    scale: hoveredSide === 'money' ? 1.05 : 1,
                    textShadow: hoveredSide === 'money' ? '0 0 20px rgba(74, 222, 128, 0.5)' : '0 0 0px rgba(74, 222, 128, 0)'
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  MONEY
                </motion.h2>
                <p className="text-xl text-gray-300 mb-8">
                  Maximize your revenue potential
                </p>
              </div>

               <div
                 className="space-y-6"
                 style={{
                   filter: hoveredSide === 'money' ? 'blur(0px)' : 'blur(4px)',
                   transition: 'filter 0.4s ease-out 0.1s'
                 }}
               >
                {moneyDetails.map((detail, index) => (
                  <div key={index} className="relative">
                    <motion.div
                      className="flex items-start space-x-4 p-4 rounded-lg bg-white/80 cursor-pointer relative"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                        backgroundColor: 'rgba(255,255,255,0.95)'
                      }}
                      transition={{ 
                        opacity: { duration: 0.6, delay: index * 0.1 },
                        scale: { duration: 0.2, ease: "easeOut" },
                        boxShadow: { duration: 0.2 },
                        backgroundColor: { duration: 0.2 }
                      }}
                      onMouseEnter={() => setHoveredCard(index + 3)} // Offset by 3 for money cards
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                    <detail.icon size={24} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {detail.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Animated metric - large text parallel to the right */}
                  <motion.div
                    className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 z-50"
                    style={{ left: '100%', marginLeft: '2rem' }}
                    animate={{
                      opacity: hoveredCard === index + 3 ? 1 : 0,
                      x: hoveredCard === index + 3 ? 0 : -50,
                      scale: hoveredCard === index + 3 ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="text-left whitespace-nowrap">
                      <div className="text-5xl font-bold text-green-400 leading-none">
                        {hoveredCard === index + 3 ? (detail.metric % 1 === 0 ? Math.floor(animatedValue) : animatedValue.toFixed(1)) : detail.metric}
                      </div>
                      <div className="text-base text-green-300 mt-1 font-medium">
                        {detail.metricLabel}
                      </div>
                    </div>
                  </motion.div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gray-700 rounded-full opacity-20" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-gray-700 rounded-full opacity-20" />
      <div className="absolute top-1/4 right-20 w-12 h-12 border-2 border-gray-700 rounded opacity-20 transform rotate-45" />
    </section>
  )
}

export default SolutionsSplitSection
