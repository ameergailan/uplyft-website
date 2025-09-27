/**
 * Case Study section component for the DSGNLAB website recreation
 * Features the TASQA project showcase with services and description
 */

'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { CaseStudyProject, CaseStudyMetric } from '@/types'

const CaseStudySection = () => {
  const [isBeingShadowed, setIsBeingShadowed] = useState(false)
  const [slideProgress, setSlideProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Case studies should start sliding when we're past the solutions section
      // Solutions section is roughly at 2-3 viewport heights, so start at 2.5vh
      const triggerPoint = windowHeight * 2.5
      const endPoint = windowHeight * 3.5
      
      // Calculate slide progress (0 = hidden below, 1 = fully visible)
      const progress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / (endPoint - triggerPoint)))
      setSlideProgress(progress)
      
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
      className="section-padding bg-black text-white fixed inset-0 overflow-hidden case-study-section z-25"
      style={{
        transform: `translateY(${(1 - slideProgress) * 100}vh)`,
        opacity: slideProgress,
        pointerEvents: slideProgress > 0.5 ? 'auto' : 'none'
      }}
    >
      {/* Multi-layer throbbing gradients - same as hero */}
      <div className="absolute inset-0 throb-layer-1" />
      <div className="absolute inset-0 throb-layer-2" />
      <div className="absolute inset-0 throb-layer-3" />
      
      {/* Breathing overlay */}
      <div className="absolute inset-0 throb-overlay" />
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
              <div 
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 h-full flex flex-col relative z-10"
                style={{
                  transform: isBeingShadowed ? 'scale(0.9)' : 'scale(1)',
                  filter: isBeingShadowed ? 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))' : 'drop-shadow(0 10px 25px rgba(0,0,0,0.3))',
                  transition: 'transform 0.5s ease-out, filter 0.5s ease-out'
                }}
              >
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
                        // Fallback to initials if image fails to load
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
  )
}

export default CaseStudySection
