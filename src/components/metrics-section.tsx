/**
 * Metrics section component for the DSGNLAB website recreation
 * Contains metrics numbers, statistics with sources, and data-driven content
 */

'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Target, RotateCcw, Zap } from 'lucide-react'
import type { MetricItem, StatisticItem } from '@/types'

const MetricsSection = () => {
  const metrics: MetricItem[] = [
    {
      title: 'Revenue Growth',
      description: 'Accelerated agency income'
    },
    {
      title: 'Client Retention',
      description: 'Long-term partnerships'
    },
    {
      title: 'Team Productivity',
      description: 'Optimized workflows'
    },
    {
      title: 'Profit Margins',
      description: 'Enhanced profitability'
    },
    {
      title: 'Scale Velocity',
      description: 'Faster growth trajectory'
    }
  ]

  const statistics: StatisticItem[] = [
    {
      percentage: '3.2x',
      title: 'Revenue increase in first 12 months',
      description: 'Agencies implementing our systems see dramatic revenue growth',
      source: 'UpLyft Client Study (2024)'
    },
    {
      percentage: '89%',
      title: 'Client retention rate improvement',
      description: 'Better processes lead to stronger client relationships',
      source: 'Agency Growth Report'
    },
    {
      percentage: '156%',
      title: 'Team productivity boost',
      description: 'Streamlined operations free up time for strategic growth',
      source: 'UpLyft Performance Analytics'
    },
    {
      percentage: '67%',
      title: 'Reduction in operational overhead',
      description: 'Optimized systems reduce costs while increasing output quality',
      source: 'Operational Efficiency Study'
    }
  ]

  const getMetricIcon = (index: number) => {
    const icons = [Zap, Users, Target, RotateCcw, TrendingUp]
    const IconComponent = icons[index] || TrendingUp
    return <IconComponent size={24} className="text-black" />
  }

  return (
    <section 
      className="relative bg-black h-screen flex items-center justify-center"
      data-section="metrics"
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

      {/* Main black page content */}
      <div className="text-center text-white relative z-10">
        <motion.h1 
          className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          You're only on this page<br />
          for one of two reasons...
        </motion.h1>
        
        <motion.p 
          className="text-2xl text-gray-400 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          or both.
        </motion.p>
      </div>
    </section>
  )
}

export default MetricsSection
