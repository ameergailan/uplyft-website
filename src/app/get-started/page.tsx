/**
 * Get Started Landing Page - Lead Funneling Page
 * Dedicated page for all traffic sources: website, ads, cold outreach
 */

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Zap, Target, TrendingUp, CheckCircle, Calendar, Users, X, Play } from 'lucide-react'

const GetStartedPage = () => {
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

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

  const handlePlayClick = () => {
    setShowVideoModal(true)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally submit the form data
    console.log('Form submitted:', formData)
    setShowVideoModal(false)
    setShowVideo(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
    <div className="min-h-screen bg-black text-white" data-page="landing">
      {/* Header */}
      <motion.header 
        className="bg-black border-b border-gray-800"
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

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-8 max-w-6xl">
        
        {/* Main Headline */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top Badge */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-2xl lg:text-3xl font-bold text-white">
              👑 Agency Owners 👑
            </p>
          </motion.div>

          <motion.h1 
            className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-4xl lg:text-5xl text-white" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)' }}>Free:</span>{' '}
            <span className="text-white">Get the exact </span>
            <span className="text-white" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)' }}>UpLyft Growth System™</span>
            <br />
            <span className="text-white text-4xl lg:text-5xl">
              that scaled agencies to{' '}
            </span>
            <span className="text-5xl lg:text-6xl text-white" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)' }}>
              $100k+/Mo
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            While Removing Yourself From Operations and Keeping A 70% Profit Margin*
          </motion.p>

          {/* Video Section - MASSIVE */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="w-full">
              <div className="relative w-full">
                <div 
                  className="w-full relative cursor-pointer group overflow-hidden rounded-3xl" 
                  style={{ width: '100%' }}
                  onClick={handlePlayClick}
                >
                  {showVideo ? (
                    <div className="w-full bg-black rounded-3xl overflow-hidden">
                      {/* Your Agency Growth Video */}
                      <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-3xl"
                          src="https://www.youtube.com/embed/HZynJ1uQLYQ?autoplay=1&rel=0&modestbranding=1"
                          title="UpLyft Agency Growth System Video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '400px' }}>
                      {/* Real Video Thumbnail - Blurred */}
                      <video 
                        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                        muted
                        playsInline
                        preload="metadata"
                        style={{ 
                          filter: 'blur(4px) brightness(0.6)',
                          pointerEvents: 'none'
                        }}
                        onLoadedData={(e) => {
                          console.log('Thumbnail loaded successfully');
                          const video = e.target as HTMLVideoElement;
                          video.currentTime = 2; // Seek to 2 seconds for better frame
                          setThumbnailLoaded(true);
                        }}
                        onError={(e) => {
                          console.error('Thumbnail failed to load:', e);
                          console.log('Video file not found or not accessible');
                          setThumbnailLoaded(false);
                        }}
                        onCanPlay={() => console.log('Thumbnail video ready')}
                        onLoadStart={() => console.log('Thumbnail loading started')}
                      >
                        <source src="/agency-growth-video.mp4" type="video/mp4" />
                      </video>
                      
                      {/* Fallback gradient (shows if video fails to load) */}
                      {!thumbnailLoaded && (
                        <div 
                          className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black"
                          style={{ 
                            backgroundImage: `
                              linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%),
                              radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
                            `
                          }}
                        />
                      )}
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 rounded-3xl" />
                      
                      {/* Play Button - Center Only */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className="group-hover:scale-110 transition-transform duration-300 z-10"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="bg-white/25 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center hover:bg-white/35 transition-all duration-300 shadow-2xl">
                            <Play className="text-white w-8 h-8 ml-1" fill="white" />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Single CTA Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/book-call">
              <motion.button
                className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg border border-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -8, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold">I Want To Scale Faster!</div>
                  <div className="text-sm font-medium mt-1 text-gray-700">Apply For 1 on 1 Mentorship w/ David</div>
                </div>
              </motion.button>
            </Link>
          </motion.div>
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

      {/* LeadConnector Form Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowVideoModal(false)
            }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-lg w-full relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Form Header */}
              <div className="text-center p-6 pb-4">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Fill Out The Form Below To Get The <span className="text-green-600">FREE</span> Training
                </h3>
                <p className="text-gray-600 text-lg">
                  Watch the exclusive video after submitting
                </p>
              </div>

              {/* LeadConnector Form Embed */}
              <div className="px-6 pb-6">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/XiLsnN6JR8vJ81UozoBN"
                  className="w-full border-0"
                  style={{ height: '400px' }}
                  title="Lead Capture Form"
                  onLoad={() => {
                    // Listen for form submission (you may need to adjust this based on LeadConnector's postMessage events)
                    const handleMessage = (event: MessageEvent) => {
                      if (event.data && event.data.type === 'form_submitted') {
                        setShowVideoModal(false);
                        setShowVideo(true);
                      }
                    };
                    window.addEventListener('message', handleMessage);
                    return () => window.removeEventListener('message', handleMessage);
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GetStartedPage
