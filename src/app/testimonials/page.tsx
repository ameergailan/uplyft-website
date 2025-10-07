/**
 * Testimonials Page - Detailed case studies and client testimonials
 * Individual sections for each main client with video placeholders and analysis
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Play, ExternalLink, TrendingUp, Users, DollarSign, Target, CheckCircle } from 'lucide-react'
import { trackPageViewWithContent } from '@/lib/facebook-analytics'

const TestimonialsPage = () => {
  const [roadmapOpen, setRoadmapOpen] = useState(false)
  const [roadmapStep, setRoadmapStep] = useState(1) // Start with step 1 instead of 0
  const [roadmapZoom, setRoadmapZoom] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Set cursor for this page and ensure component is mounted
  useEffect(() => {
    setIsMounted(true)
    document.body.classList.remove('custom-cursor-active')
    document.body.style.cursor = 'default'
    
    // Track Facebook events for testimonials page
    trackPageViewWithContent(
      'UpLyft Testimonials Page',
      'Social Proof',
      undefined,
      {
        page_type: 'testimonials',
        case_studies: ['amplify-sound', 'zealous-granite', 'vault-mastery'],
        social_proof_count: 4
      }
    )
    
    return () => {
      document.body.classList.add('custom-cursor-active')
      document.body.style.cursor = 'none'
    }
  }, [])

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }


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

  // Get roadmap steps for each testimonial
  const getRoadmapSteps = (title: string) => {
    const baseSteps = [
      {
        id: 1,
        title: 'Offer Creation',
        description: 'We crafted a compelling offer that resonates with your target audience and drives conversions.',
        icon: Target
      },
      {
        id: 2,
        title: 'Funnel Construction',
        description: 'Built a high-converting sales funnel that guides prospects through the customer journey.',
        icon: TrendingUp
      },
      {
        id: 3,
        title: 'Facebook Ad Creation & Optimization',
        description: 'Created and optimized Facebook ad campaigns to reach your ideal customers at scale.',
        icon: Users
      },
      {
        id: 4,
        title: 'Sales Training',
        description: 'Trained your team on proven sales techniques to maximize conversion rates.',
        icon: CheckCircle
      },
      {
        id: 5,
        title: 'UGC Ad Creation',
        description: 'Developed user-generated content ads that build trust and drive authentic engagement.',
        icon: ExternalLink
      },
      {
        id: 6,
        title: 'Creative Editing',
        description: 'Produced high-quality video and image content that captures attention and converts.',
        icon: Play
      }
    ]

    // Customize steps based on the testimonial
    switch (title) {
      case 'Amplify Sound Agency':
        return baseSteps.map(step => ({
          ...step,
          description: step.description.replace('your', 'Amplify Sound Agency\'s').replace('your team', 'Olu\'s team')
        }))
      case 'Zealous Granite & Tile':
        return baseSteps.map(step => ({
          ...step,
          description: step.description.replace('your', 'Zealous Granite & Tile\'s').replace('your team', 'Hashim\'s team')
        }))
      case 'Vault Mastery Mentorship':
        return baseSteps.map(step => ({
          ...step,
          description: step.description.replace('your', 'Vault Mastery\'s').replace('your team', 'Abdullah\'s team')
        }))
      default:
        return baseSteps
    }
  }


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
      type: 'Client Testimonial',
      content: 'Real feedback from our satisfied clients',
      platform: 'Social Media',
      image: 'pic1.png'
    },
    {
      type: 'Success Story',
      content: 'Another amazing client transformation',
      platform: 'Instagram',
      image: 'pic2.png'
    },
    {
      type: 'Results Showcase',
      content: 'Proof of our system working',
      platform: 'Discord',
      image: 'pic3.png'
    },
    {
      type: 'Client Review',
      content: 'Detailed feedback on our services',
      platform: 'Email',
      image: 'pic4.png'
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
           {[...Array(20)].map((_, i) => {
             // Use completely deterministic positioning for SSR compatibility
             const positions = [
               { left: 10, top: 20 }, { left: 25, top: 80 }, { left: 40, top: 15 }, { left: 60, top: 70 },
               { left: 75, top: 30 }, { left: 85, top: 90 }, { left: 15, top: 60 }, { left: 35, top: 40 },
               { left: 50, top: 85 }, { left: 70, top: 25 }, { left: 90, top: 55 }, { left: 5, top: 75 },
               { left: 30, top: 10 }, { left: 55, top: 50 }, { left: 80, top: 65 }, { left: 20, top: 35 },
               { left: 45, top: 95 }, { left: 65, top: 5 }, { left: 95, top: 45 }, { left: 12, top: 85 }
             ]
             const pos = positions[i] || { left: 50, top: 50 }
             const duration = 3 + (i % 3) * 0.5
             const delay = (i % 5) * 0.4
             
             return (
               <motion.div
                 key={i}
                 className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
                 style={{
                   left: `${pos.left}%`,
                   top: `${pos.top}%`,
                 }}
                 animate={{
                   y: [0, -30, 0],
                   opacity: [0.3, 0.8, 0.3],
                 }}
                 transition={{
                   duration,
                   repeat: Infinity,
                   delay,
                   ease: "easeInOut"
                 }}
               />
             )
           })}
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

      {/* Live Counter */}
      <motion.div 
        className="bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-16 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                13
              </div>
              <div className="text-sm text-gray-400">Agencies Scaled</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                $2.2M+
              </div>
              <div className="text-sm text-gray-400">Revenue Generated</div>
            </div>
          </div>
        </div>
      </motion.div>

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


             {/* Mini Roadmap Section */}
             <motion.div 
               className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6"
               animate={roadmapZoom ? {
                 scale: 1.2,
                 y: -50,
                 zIndex: 100
               } : {
                 scale: 1,
                 y: 0,
                 zIndex: 10
               }}
               transition={{ duration: 0.6, ease: "easeInOut" }}
             >
               <div className="text-center mb-6">
                 <h2 className="text-xl font-bold text-white mb-4">
                   Our Process
                 </h2>
                 
                 {/* Mini Roadmap Steps */}
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                   {getRoadmapSteps(testimonial.title).map((step, stepIndex) => (
                     <motion.div
                       key={step.id}
                       className="bg-gray-800/50 rounded-xl p-3 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 group"
                       initial={{ opacity: 0, scale: 0.8 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: stepIndex * 0.1 }}
                       whileHover={{ scale: 1.05 }}
                       onClick={() => {
                         setRoadmapStep(step.id)
                         setRoadmapZoom(true)
                       }}
                     >
                       <div className="text-center">
                         <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-500 transition-colors">
                           <step.icon className="w-4 h-4 text-white" />
                         </div>
                         <h3 className="text-white font-medium text-xs mb-1 leading-tight">
                           {step.title}
                         </h3>
                         <p className="text-gray-400 text-xs">
                           Step {step.id}
                         </p>
                       </div>
                     </motion.div>
                   ))}
                 </div>
                 
                 <button
                   onClick={() => {
                     setRoadmapStep(1) // Start from first step
                     setRoadmapZoom(true)
                   }}
                   className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm"
                 >
                   View Detailed Process
                 </button>
               </div>
             </motion.div>
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
               Instagram Social Proof
             </h1>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
               Real feedback from our clients on Instagram
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialProof.map((proof, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                 <div className="aspect-[3/4] relative">
                  <img 
                    src={`/${proof.image}`}
                    alt={proof.type}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gray-800 flex items-center justify-center">
                            <div class="text-center">
                              <ExternalLink class="w-8 h-8 text-gray-400 mx-auto mb-2" />
                              <p class="text-gray-400 text-sm">${proof.type}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {proof.type}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {proof.platform}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {proof.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Zoomed Roadmap Detail View */}
      {roadmapZoom && (
        <motion.div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setRoadmapZoom(false)}
        >
          <motion.div
            className="bg-gray-900 rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-hidden relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setRoadmapZoom(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Roadmap Content */}
            <div className="h-full flex flex-col">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Our Process Roadmap
              </h2>
              
              <div className="flex-1 flex items-center justify-center">
                {/* Detailed view - Single step zoomed */}
                <motion.div
                  className="w-full max-w-2xl mx-auto text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  {(() => {
                    const currentStep = getRoadmapSteps('Amplify Sound Agency').find(step => step.id === roadmapStep)
                    if (!currentStep) return null
                    
                    return (
                      <>
                        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <currentStep.icon className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {currentStep.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                          {currentStep.description}
                        </p>
                        
                        {/* Navigation */}
                        <div className="flex justify-center gap-4">
                          <button
                            onClick={() => setRoadmapStep(roadmapStep - 1)}
                            disabled={roadmapStep === 1}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                              roadmapStep === 1
                                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                : 'bg-gray-700 text-white hover:bg-gray-600'
                            }`}
                          >
                            Previous
                          </button>
                          
                          <button
                            onClick={() => setRoadmapZoom(false)}
                            className="px-6 py-2 rounded-full font-medium bg-white text-black hover:bg-gray-100 transition-all duration-300"
                          >
                            Back to Overview
                          </button>
                          
                          <button
                            onClick={() => setRoadmapStep(roadmapStep + 1)}
                            disabled={roadmapStep === 6}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                              roadmapStep === 6
                                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )
                  })()}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default TestimonialsPage
