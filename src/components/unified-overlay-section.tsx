/**
 * Unified Overlay Section - Contains Latest Projects, CTA, and Footer
 * Slides over the previous section as one cohesive unit
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Users } from 'lucide-react'
import type { CaseStudyProject, CaseStudyMetric } from '@/types'

const UnifiedOverlaySection = () => {
  const [slideProgress, setSlideProgress] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle slide-over effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Start sliding after Time vs Money section (around 3.5 viewport heights)
      const triggerPoint = windowHeight * 3.5
      const endPoint = windowHeight * 4.5
      
      const progress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / (endPoint - triggerPoint)))
      setSlideProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse tracking for CTA background effects
  useEffect(() => {
    if (!isMounted) return
    
    let rafId: number
    
    const handleMouseMove = (e: MouseEvent) => {
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

  // Case study projects data
  const projects: CaseStudyProject[] = [
    {
      title: 'Amplify Sound Agency',
      client: 'Olu',
      industry: 'Music Production',
      description: 'Music production agency that generated 220 qualified leads and $102K revenue in August 2025',
      metrics: [
        { label: 'Monthly Revenue', value: '$102,000', growth: '+18%' },
        { label: 'Total Leads', value: '220', growth: '+21%' },
        { label: 'Website Visits', value: '34,892', growth: '+21%' }
      ],
      services: [
        { label: 'Lead Generation', variant: 'primary' },
        { label: 'Sales Systems', variant: 'primary' },
        { label: 'Paid Advertising', variant: 'primary' }
      ],
      logo: 'ASA'
    },
    {
      title: 'Zealous Granite & Tile',
      client: 'Hashim',
      industry: 'Kitchen Remodeling',
      description: 'Kitchen remodeling business that booked 185 consultations and generated $95K revenue in August 2025',
      metrics: [
        { label: 'Monthly Revenue', value: '$95,000', growth: '+18%' },
        { label: 'Consultations', value: '185', growth: '+21%' },
        { label: 'Landing Page CVR', value: '5.9%', growth: '+3.6%' }
      ],
      services: [
        { label: 'Lead Generation', variant: 'primary' },
        { label: 'Sales Funnels', variant: 'primary' },
        { label: 'Conversion Optimization', variant: 'primary' }
      ],
      logo: 'ZEA'
    },
    {
      title: 'Vault Mastery Mentorship',
      client: 'Abdullah',
      industry: 'ATM Business Coaching',
      description: 'ATM mentorship program that achieved 110 strategy calls and $42.2K MRR in September 2025',
      metrics: [
        { label: 'Monthly Revenue', value: '$42,200', growth: '+24%' },
        { label: 'Strategy Calls', value: '110', growth: '+26%' },
        { label: 'New Students', value: '34', growth: '+38.6%' }
      ],
      services: [
        { label: 'Lead Generation', variant: 'primary' },
        { label: 'Sales Systems', variant: 'primary' },
        { label: 'Backend Automations', variant: 'primary' }
      ],
      logo: 'VM'
    }
  ]

  if (!isMounted) {
    return null
  }

  return (
    <div
      ref={sectionRef}
      className="fixed inset-0 z-30 unified-overlay-section"
      style={{
        transform: `translateY(${(1 - slideProgress) * 100}vh)`,
        opacity: slideProgress > 0 ? 1 : 0,
        pointerEvents: slideProgress > 0.5 ? 'auto' : 'none'
      }}
    >
      {/* Latest Projects Section */}
      <section className="section-padding bg-black text-white relative overflow-hidden case-study-section">
        {/* Multi-layer throbbing gradients - same as hero */}
        <div className="absolute inset-0 throb-layer-1" />
        <div className="absolute inset-0 throb-layer-2" />
        <div className="absolute inset-0 throb-layer-3" />
        
        {/* Breathing overlay */}
        <div className="absolute inset-0 throb-overlay" />

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              Cases
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Latest projects
            </h3>
          </motion.div>

          {/* Case Study Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.15,
                  zIndex: 50,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="hover-sensitive relative"
              >
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 h-full flex flex-col relative z-10">
                  {/* Client Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-black mb-1">
                        {project.client}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {project.industry}
                      </p>
                    </div>
                    
                    {/* Profile Picture */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200">
                      <img 
                        src={`/${project.client.toLowerCase()}-profile.png`}
                        alt={`${project.client} profile`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.className = 'w-20 h-20 bg-black rounded-xl flex items-center justify-center';
                            parent.innerHTML = `<span class="text-white font-bold text-lg">${project.logo}</span>`;
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <h5 className="text-xl font-bold text-black mb-4">
                    {project.title}
                  </h5>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-lg lg:text-xl font-bold text-black">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 mb-1">
                          {metric.label}
                        </div>
                        {metric.growth && (
                          <div className="text-xs text-green-600 font-medium">
                            {metric.growth}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                      >
                        {service.label}
                      </span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => console.log(`View details for ${project.client}`)}
                    className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-300 group flex items-center justify-center gap-2"
                  >
                    View Case Study
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              More than just
              <br />
              <span className="text-gray-300">agency consulting</span>
            </h3>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center"
        id="cta-section"
        style={{ padding: '0', margin: '0' }}
      >
        {/* High-quality SVG wave background */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="waveGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
              </radialGradient>
            </defs>
            
            <motion.path
              d={`M0,400 Q${Math.round(mousePos.x / 5) || 240},${Math.round(mousePos.y / 3) || 300} 600,350 T1200,400 L1200,800 L0,800 Z`}
              fill="url(#waveGradient)"
              animate={{
                d: `M0,400 Q${Math.round(mousePos.x / 5) || 240},${Math.round(mousePos.y / 3) || 300} 600,350 T1200,400 L1200,800 L0,800 Z`
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            <motion.path
              d={`M0,450 Q${Math.round(mousePos.x / 4) || 300},${Math.round(mousePos.y / 2) || 350} 600,400 T1200,450 L1200,800 L0,800 Z`}
              fill="url(#waveGradient)"
              animate={{
                d: `M0,450 Q${Math.round(mousePos.x / 4) || 300},${Math.round(mousePos.y / 2) || 350} 600,400 T1200,450 L1200,800 L0,800 Z`
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Scale Your Agency to 6 FIGURES
          </motion.h1>
          
          <motion.p
            className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We partner with growth-focused agencies to install predictable lead generation, sales systems, and automations that scale revenue fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/get-started'}
            >
              <Calendar size={20} />
              <span>Get Started Now</span>
            </motion.button>
            
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users size={20} />
              <span>Learn More</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 footer-section">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/UPLYFTLOGO.png" alt="UpLyft" className="h-8" />
                <span className="text-xl font-bold text-white">UpLyft</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Transforming agencies with proven systems, processes, and strategies that drive consistent growth and profitability.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lead Generation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sales Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Backend Automations</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 UpLyft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default UnifiedOverlaySection
