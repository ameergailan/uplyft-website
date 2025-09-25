/**
 * CTA Overlay Section - Slides over previous page with portal effects
 * Contains the main call-to-action with moving background designs
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const CTAOverlaySection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [isBeingShadowed, setIsBeingShadowed] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    let rafId: number
    
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse updates for performance
      if (rafId) cancelAnimationFrame(rafId)
      
      rafId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isMounted])

  if (!isMounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <section id="cta-section" className="bg-black text-white relative overflow-hidden min-h-screen flex items-center justify-center w-full" style={{ padding: '0', margin: '0' }}>
      {/* High-quality wave background that moves with mouse */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base wave pattern */}
        <div className="absolute inset-0">
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 1200 800" 
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            
             {/* Main wave - optimized mouse response */}
             <motion.path
               fill="url(#waveGradient1)"
               animate={{
                 d: [
                   `M0,${Math.round(400 + (mousePos.y / (window.innerHeight || 800)) * 30)} Q300,${Math.round(200 + (mousePos.x / (window.innerWidth || 1200)) * 50)} 600,350 T1200,300 L1200,800 L0,800 Z`,
                   `M0,${Math.round(350 + (mousePos.y / (window.innerHeight || 800)) * 25)} Q300,${Math.round(250 + (mousePos.x / (window.innerWidth || 1200)) * 40)} 600,300 T1200,350 L1200,800 L0,800 Z`,
                   `M0,${Math.round(400 + (mousePos.y / (window.innerHeight || 800)) * 30)} Q300,${Math.round(200 + (mousePos.x / (window.innerWidth || 1200)) * 50)} 600,350 T1200,300 L1200,800 L0,800 Z`
                 ]
               }}
               transition={{
                 duration: 6,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
             />
            
             {/* Secondary wave - optimized */}
             <motion.path
               fill="url(#waveGradient2)"
               animate={{
                 d: [
                   `M0,${Math.round(500 - (mousePos.y / (window.innerHeight || 800)) * 20)} Q400,${Math.round(300 + (mousePos.x / (window.innerWidth || 1200)) * 30)} 800,450 T1200,400 L1200,800 L0,800 Z`,
                   `M0,${Math.round(450 - (mousePos.y / (window.innerHeight || 800)) * 15)} Q400,${Math.round(350 + (mousePos.x / (window.innerWidth || 1200)) * 25)} 800,400 T1200,450 L1200,800 L0,800 Z`,
                   `M0,${Math.round(500 - (mousePos.y / (window.innerHeight || 800)) * 20)} Q400,${Math.round(300 + (mousePos.x / (window.innerWidth || 1200)) * 30)} 800,450 T1200,400 L1200,800 L0,800 Z`
                 ]
               }}
               transition={{
                 duration: 8,
                 repeat: Infinity,
                 ease: "easeInOut",
                 delay: 1
               }}
             />
          </svg>
        </div>
        
         {/* Optimized mouse-responsive overlay */}
         {isMounted && (
           <div 
             className="absolute inset-0"
             style={{
               background: `radial-gradient(circle at ${Math.round((mousePos.x / (window.innerWidth || 1200)) * 100)}% ${Math.round((mousePos.y / (window.innerHeight || 800)) * 100)}%, rgba(255,255,255,0.08) 0%, transparent 40%)`,
               transition: 'background 0.2s ease-out'
             }}
           />
         )}
        
        {/* Floating light particles */}
        <motion.div
          className="absolute w-2 h-2 bg-white rounded-full opacity-60"
          style={{
            left: '20%',
            top: '25%'
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-40"
          style={{
            right: '30%',
            top: '40%'
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <motion.div
          className="absolute w-1 h-1 bg-white rounded-full opacity-50"
          style={{
            left: '60%',
            bottom: '30%'
          }}
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

       {/* Main content */}
       <div className="w-full px-6 relative z-10">
         <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-6">
              Ready to Scale?
            </h2>
             <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
               Scale Your Agency to<br />
               <span className="text-6xl lg:text-8xl">6 FIGURES</span><br />
               <span className="text-4xl lg:text-6xl text-gray-300">Without Hiring a Huge Team</span>
             </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              We partner with growth-focused agencies to install predictable lead generation, 
              sales systems, and automations that scale revenue fast.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <Link
              href="/get-started"
              className="get-started-button inline-flex items-center space-x-4 bg-white text-black px-16 py-8 rounded-2xl transition-all duration-300 font-bold text-2xl shadow-2xl hover:shadow-white/30 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight size={28} className="relative z-10" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTAOverlaySection
