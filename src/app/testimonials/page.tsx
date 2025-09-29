/**
 * Testimonials Page - Detailed case studies and client testimonials
 * Individual sections for each main client with video placeholders and analysis
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Play, ExternalLink, TrendingUp, Users, DollarSign, Target, CheckCircle } from 'lucide-react'

const TestimonialsPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [showNav, setShowNav] = useState(true)

  // Set cursor for this page
  useEffect(() => {
    document.body.classList.remove('custom-cursor-active')
    document.body.style.cursor = 'default'
    
    return () => {
      document.body.classList.add('custom-cursor-active')
      document.body.style.cursor = 'none'
    }
  }, [])

  // Handle scroll to hide/show navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowNav(scrollY < 100) // Hide nav after scrolling 100px
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper function to get logo path
  const getLogoPath = (title: string) => {
    switch (title) {
      case 'Amplify Sound Agency':
        return 'ASALOGO.png'
      case 'Zealous Granite & Tile':
        return 'ZEALOUSLOGO.png'
      case 'Vault Mastery Mentorship':
        return 'VAULTLOGO.png'
      default:
        return 'UPLYFTLOGO.png'
    }
  }

  // Check for section parameter in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const section = urlParams.get('section')
    if (section) {
      setActiveSection(section)
      // Scroll to section after a brief delay
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  const testimonials = [
    {
      id: 'amplify-sound',
      title: 'Amplify Sound Agency',
      client: 'Olu',
      industry: 'Music Production',
      description: 'Music production agency that generated 220 qualified leads and $102K revenue in August 2025',
      metrics: [
        { label: 'Monthly Revenue', value: '$102,000', growth: '+10,000%' },
        { label: 'Total Leads', value: '220', growth: '+2,100%' },
        { label: 'Website Visits', value: '34,892', growth: '+3,400%' }
      ],
      services: ['Lead Generation', 'Sales Systems', 'Paid Advertising'],
      logo: 'ASA',
      analysis: {
        challenge: 'Amplify Sound Agency was struggling to generate consistent leads and revenue in the competitive music production industry.',
        solution: 'We implemented a comprehensive lead generation system with targeted paid advertising campaigns, optimized sales funnels, and automated follow-up sequences.',
        results: 'The agency saw a massive transformation with 220 qualified leads and $102K revenue in just one month, representing a 10,000% increase in monthly revenue.',
        keyStrategies: [
          'Multi-channel lead generation campaigns',
          'Optimized landing page conversion rates',
          'Automated email nurturing sequences',
          'Strategic paid advertising on social platforms'
        ]
      }
    },
    {
      id: 'zealous-granite',
      title: 'Zealous Granite & Tile',
      client: 'Hashim',
      industry: 'Kitchen Remodeling',
      description: 'Kitchen remodeling business that booked 185 consultations and generated $95K revenue in August 2025',
      metrics: [
        { label: 'Monthly Revenue', value: '$95,000', growth: '+217%' },
        { label: 'Consultations', value: '185', growth: '+517%' },
        { label: 'Landing Page CVR', value: '5.9%', growth: '+295%' }
      ],
      services: ['Lead Generation', 'Sales Funnels', 'Conversion Optimization'],
      logo: 'ZEA',
      analysis: {
        challenge: 'Zealous Granite & Tile needed to scale their consultation bookings and improve their conversion rates in the home improvement market.',
        solution: 'We developed targeted lead generation campaigns specifically for kitchen remodeling prospects, optimized their sales funnel, and implemented conversion rate optimization strategies.',
        results: 'The business achieved 185 consultations and $95K revenue with a 5.9% landing page conversion rate, representing a 217% increase in monthly revenue.',
        keyStrategies: [
          'Local SEO optimization for kitchen remodeling',
          'High-converting landing page design',
          'Automated consultation booking system',
          'Retargeting campaigns for warm leads'
        ]
      }
    },
    {
      id: 'vault-mastery',
      title: 'Vault Mastery Mentorship',
      client: 'Abdullah',
      industry: 'ATM Business Coaching',
      description: 'ATM mentorship program that achieved 110 strategy calls and $42.2K MRR in September 2025',
      metrics: [
        { label: 'Monthly Revenue', value: '$42,200', growth: '+322%' },
        { label: 'Strategy Calls', value: '110', growth: '+1,000%' },
        { label: 'New Students', value: '34', growth: '+240%' }
      ],
      services: ['Lead Generation', 'Sales Systems', 'Backend Automations'],
      logo: 'VM',
      analysis: {
        challenge: 'Vault Mastery Mentorship needed to scale their student acquisition and increase strategy call bookings for their ATM business coaching program.',
        solution: 'We implemented a comprehensive lead generation system with automated backend processes, optimized sales systems, and strategic marketing campaigns targeting aspiring entrepreneurs.',
        results: 'The mentorship program achieved 110 strategy calls and $42.2K MRR with 34 new students, representing a 322% increase in monthly revenue.',
        keyStrategies: [
          'Automated lead nurturing sequences',
          'Strategic content marketing campaigns',
          'Optimized sales call booking system',
          'Backend automation for student onboarding'
        ]
      }
    }
  ]

  const socialProof = [
    {
      type: 'Instagram Story',
      content: 'Client testimonial screenshot from Instagram',
      platform: 'Instagram'
    },
    {
      type: 'Discord Screenshot',
      content: 'Client feedback from Discord community',
      platform: 'Discord'
    },
    {
      type: 'Email Testimonial',
      content: 'Client success story via email',
      platform: 'Email'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Interactive Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated Waves */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Wave 1 */}
            <motion.path
              d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
              fill="url(#waveGradient1)"
              initial={{ d: "M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z" }}
              animate={{ 
                d: [
                  "M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z",
                  "M0,400 Q300,500 600,400 T1200,400 L1200,800 L0,800 Z",
                  "M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Wave 2 */}
            <motion.path
              d="M0,600 Q400,500 800,600 T1200,600 L1200,800 L0,800 Z"
              fill="url(#waveGradient2)"
              initial={{ d: "M0,600 Q400,500 800,600 T1200,600 L1200,800 L0,800 Z" }}
              animate={{ 
                d: [
                  "M0,600 Q400,500 800,600 T1200,600 L1200,800 L0,800 Z",
                  "M0,600 Q400,700 800,600 T1200,600 L1200,800 L0,800 Z",
                  "M0,600 Q400,500 800,600 T1200,600 L1200,800 L0,800 Z"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </svg>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      {/* Header */}
      <motion.header 
        className="bg-black border-b border-gray-800 sticky top-0 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to UpLyft</span>
            </Link>
            <div className="text-xl font-bold text-white">
              <img src="/UPLYFTLOGO.png" alt="UpLyft" className="h-8" />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Navigation */}
      <motion.nav 
        className={`bg-black/95 backdrop-blur-md border-b border-gray-800 sticky top-16 z-30 transition-all duration-300 ${
          showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex flex-wrap gap-3 justify-center">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => {
                  setActiveSection(testimonial.id)
                  document.getElementById(testimonial.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                  activeSection === testimonial.id 
                    ? 'bg-white text-black shadow-lg' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {testimonial.title}
              </button>
            ))}
            <button
              onClick={() => {
                setActiveSection('social-proof')
                document.getElementById('social-proof')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                activeSection === 'social-proof' 
                  ? 'bg-white text-black shadow-lg' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              Social Proof
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Testimonials */}
        {testimonials.map((testimonial, index) => (
          <motion.section
            key={testimonial.id}
            id={testimonial.id}
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Client Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 p-2">
                  <img 
                    src={`/${getLogoPath(testimonial.title)}`}
                    alt={`${testimonial.title} Logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to initials if logo fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.className = 'w-20 h-20 rounded-xl bg-gray-800 flex items-center justify-center mr-4';
                        parent.innerHTML = `<span class="text-white font-bold text-lg">${testimonial.logo}</span>`;
                      }
                    }}
                  />
                </div>
                <div className="text-left">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {testimonial.title}
                  </h1>
                  <p className="text-gray-400 text-lg">
                    {testimonial.client} • {testimonial.industry}
                  </p>
                </div>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {testimonial.description}
              </p>
            </div>

            {/* Video Placeholder */}
            <div className="mb-12">
              <div className="relative w-full max-w-4xl mx-auto" style={{ aspectRatio: '16/9' }}>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl cursor-pointer overflow-hidden group">
                  {/* Video Thumbnail Placeholder */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900"
                    style={{ 
                      backgroundImage: `
                        linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.3) 50%, rgba(0, 0, 0, 0.8) 100%),
                        radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)
                      `
                    }}
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Video Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white text-xl font-bold mb-2">
                      {testimonial.title} - Success Story
                    </h4>
                    <p className="text-gray-200 text-sm">
                      Watch how we transformed {testimonial.client}'s business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {testimonial.metrics.map((metric, metricIndex) => (
                <motion.div
                  key={metricIndex}
                  className="bg-gray-900 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: metricIndex * 0.1 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-green-400 font-medium">
                    {metric.growth}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Analysis Section */}
            <div className="bg-gray-900 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                How We Did It
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Challenge & Solution */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-red-400" />
                      The Challenge
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {testimonial.analysis.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                      Our Solution
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {testimonial.analysis.solution}
                    </p>
                  </div>
                </div>

                {/* Results & Strategies */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                      The Results
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {testimonial.analysis.results}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-yellow-400" />
                      Key Strategies
                    </h3>
                    <ul className="space-y-2">
                      {testimonial.analysis.keyStrategies.map((strategy, strategyIndex) => (
                        <li key={strategyIndex} className="text-gray-300 flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          {strategy}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        ))}

        {/* Social Proof Section */}
        <motion.section
          id="social-proof"
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Social Proof & Testimonials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from our clients across different platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialProof.map((proof, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {proof.type}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {proof.platform}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">
                  {proof.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default TestimonialsPage
