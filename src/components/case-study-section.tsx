/**
 * Case Study section component for the DSGNLAB website recreation
 * Features the TASQA project showcase with services and description
 */

'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { CaseStudyProject } from '@/types'

const CaseStudySection = () => {
  const [isBeingShadowed, setIsBeingShadowed] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  // Check if being overlaid by CTA section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      // Check if the next section (CTA) is sliding over us
      const ctaSection = document.querySelector('section[class*="z-30"]')
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect()
        const shadowProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
        setIsBeingShadowed(shadowProgress > 0.1)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const project: CaseStudyProject = {
    title: 'GrowthFlow Agency',
    description: 'A creative agency that scaled from $500K to $2.8M ARR in 18 months using our proven systems and methodologies',
    features: [
      'Strategic. Systematic. Scalable.',
      'Custom workflows, automated processes, and data-driven optimization'
    ],
    services: [
      { label: 'Operations Optimization', variant: 'primary' },
      { label: 'Revenue Systems', variant: 'primary' },
      { label: 'Team Scaling', variant: 'primary' }
    ]
  }

  const handleMoreAboutClick = () => {
    // Placeholder for project details navigation
    console.log('Navigate to TASQA project details')
  }

  const handleMoreCasesClick = () => {
    // Placeholder for cases page navigation
    console.log('Navigate to more cases')
  }

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gray-50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{
            transform: isBeingShadowed ? 'scale(0.9)' : 'scale(1)',
            filter: isBeingShadowed ? 'drop-shadow(0 10px 25px rgba(0,0,0,0.3))' : 'drop-shadow(0 0 0px rgba(0,0,0,0))',
            transition: 'transform 0.4s ease-out, filter 0.4s ease-out'
          }}
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            Cases
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-black mb-8">
            Latest projects
          </h3>
        </motion.div>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div 
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100"
            style={{
              transform: isBeingShadowed ? 'scale(0.85)' : 'scale(1)',
              filter: isBeingShadowed ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' : 'drop-shadow(0 5px 15px rgba(0,0,0,0.1))',
              transition: 'transform 0.5s ease-out, filter 0.5s ease-out'
            }}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <h4 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                  {project.title}
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-8">
                  {project.features.map((feature, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {feature}
                    </p>
                  ))}
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full"
                    >
                      {service.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Logo/Icon */}
              <div className="ml-8 hidden lg:block">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <div className="text-white font-bold text-xl">
                    {project.title.split('').map((letter, index) => (
                      <span key={index} className={index < 3 ? 'block text-xs leading-none' : 'hidden'}>
                        {letter}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleMoreAboutClick}
                className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-300 group"
              >
                More about {project.title}
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={handleMoreCasesClick}
                className="flex items-center justify-center gap-2 border border-black text-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors duration-300 group"
              >
                More cases
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            More than just
            <br />
            <span className="text-gray-700">agency consulting</span>
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudySection
