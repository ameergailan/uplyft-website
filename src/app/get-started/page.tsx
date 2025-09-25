/**
 * Get Started Landing Page - Lead Funneling Page
 * Dedicated page for all traffic sources: website, ads, cold outreach
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Zap, Target, TrendingUp, CheckCircle, Calendar, Users } from 'lucide-react'

const GetStartedPage = () => {
  // Ensure normal cursor on this page
  useEffect(() => {
    document.body.classList.remove('custom-cursor-active')
    document.body.style.cursor = 'default'
    
    return () => {
      // Restore when leaving page
      document.body.classList.add('custom-cursor-active')
      document.body.style.cursor = 'none'
    }
  }, [])

  const benefits = [
    {
      icon: TrendingUp,
      title: "Predictable Revenue Growth",
      description: "Install systems that generate consistent $50K-$250K in new MRR"
    },
    {
      icon: Target,
      title: "Proven Lead Generation",
      description: "Access our tested systems that deliver qualified prospects daily"
    },
    {
      icon: Zap,
      title: "Advanced Automations",
      description: "Streamline operations and free up 20+ hours per month"
    }
  ]

  const socialProof = [
    "Trusted by 100+ agencies",
    "Average 3.2x revenue increase",
    "90-day implementation timeline"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white" data-page="landing">
      {/* Header */}
      <motion.header 
        className="bg-black/20 backdrop-blur-md border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to UpLyft</span>
            </Link>
            <div className="text-xl font-bold">
              UpLyft
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        
        {/* Main Headline */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We Help Agencies Add<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              $50K–$250K in New MRR
            </span><br />
            <span className="text-3xl lg:text-5xl text-gray-300">in 90 Days — Without Paid Ads</span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Plug Into a Proven Growth System Trusted by 100+ Agencies
          </motion.p>

          {/* Social Proof */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {socialProof.map((proof, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-gray-300">{proof}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <benefit.icon className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Agency?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book a free strategy session to discover how we can scale your agency to new heights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} />
                <span>Book Free Strategy Call</span>
              </motion.button>
              
              <motion.button
                className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg border border-white/30 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users size={20} />
                <span>Join Our Community</span>
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              No commitment required • Free 30-minute consultation
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <p className="text-gray-400">
            Questions? Email us at{' '}
            <a href="mailto:hello@uplyft.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              hello@uplyft.com
            </a>
          </p>
        </motion.div>
      </main>
    </div>
  )
}

export default GetStartedPage
