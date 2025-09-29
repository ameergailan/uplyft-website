/**
 * Services cards section with scroll-triggered card animations
 * Creates floating cards that pop up as user scrolls through the section
 */

'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const ServicesCardsSection = () => {
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


  return (
    <section 
      ref={sectionRef}
      className="relative bg-gray-50 py-20"
      style={{ marginBottom: '0' }}
    >
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

           {/* Cards container - Simple sequential layout */}
           <div className="space-y-8 max-w-4xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-full h-[300px] sm:h-[400px] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden"
                style={{
                  background: index === 0 
                    ? `linear-gradient(135deg, #4b5563 0%, #374151 50%, #1f2937 100%)`
                    : index === 1
                    ? `linear-gradient(135deg, #374151 0%, #1f2937 50%, #111827 100%)`
                    : `linear-gradient(135deg, #1f2937 0%, #111827 50%, #000000 100%)`
                }}
              >
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className="text-sm uppercase tracking-wider opacity-80 mb-2">
                      {card.subtitle}
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      {card.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {card.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="space-y-2">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

      </div>
    </section>
  )
}

export default ServicesCardsSection
