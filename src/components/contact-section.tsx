/**
 * Contact section component for the DSGNLAB website recreation
 * Contains contact form with validation and CTA messaging
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ContactSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section id="contact" className="section-padding bg-black text-white relative overflow-hidden">
      {/* Subtle white portal effect that follows mouse */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 30%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.3s ease-out'
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              Ready to Scale?
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Scale Your Agency to 6 FIGURES<br />
              <span className="text-white">Without Hiring a Huge Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              We partner with growth-focused agencies to install predictable lead generation, 
              sales systems, and automations that scale revenue fast.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mb-16"
            >
              <Link
                href="/get-started"
                className="get-started-button inline-flex items-center space-x-3 bg-white text-black px-12 py-6 rounded-lg transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-white/20 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight size={24} className="relative z-10" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
