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
                      {!videoError ? (
                        <video
                          className="w-full rounded-3xl"
                          controls
                          autoPlay
                          muted
                          playsInline
                          preload="auto"
                          onError={(e) => {
                            console.error('Video error:', e);
                            setVideoError(true);
                          }}
                          onLoadStart={() => console.log('Video loading started')}
                          onCanPlay={() => console.log('Video can play')}
                        >
                          <source src="/agency-growth-video.mp4" type="video/mp4" />
                          <p className="text-white text-xl p-8">
                            Your browser does not support the video tag or the video file could not be loaded.
                          </p>
                        </video>
                      ) : (
                        <div className="w-full h-96 bg-gray-900 rounded-3xl flex items-center justify-center">
                          <div className="text-center text-white p-8">
                            <h3 className="text-2xl font-bold mb-4">Video Temporarily Unavailable</h3>
                            <p className="text-gray-300 mb-6">
                              We're working on optimizing the video delivery. 
                            </p>
                            <a 
                              href="mailto:hello@uplyft.com?subject=Video%20Access%20Request"
                              className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                            >
                              Contact Us for Video Access
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '400px' }}>
                      {/* Video Thumbnail - Blurred Preview */}
                      <video 
                        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                        muted
                        playsInline
                        preload="metadata"
                        poster=""
                        style={{ 
                          filter: 'blur(6px) brightness(0.7)',
                          pointerEvents: 'none'
                        }}
                        onLoadedData={(e) => {
                          // Seek to 1 second to get a good frame
                          const video = e.target as HTMLVideoElement;
                          video.currentTime = 1;
                        }}
                        onError={(e) => {
                          console.log('Thumbnail video failed, using fallback');
                          // Hide the video element and show gradient fallback
                          (e.target as HTMLVideoElement).style.display = 'none';
                        }}
                      >
                        <source src="/agency-growth-video.mp4" type="video/mp4" />
                      </video>
                      
                      {/* Fallback gradient background (shows if video fails) */}
                      <div 
                        className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black"
                        style={{ 
                          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 100%)',
                          zIndex: -1
                        }}
                      />
                      
                      {/* Additional Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 rounded-3xl" />
                      
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
                <p className="text-center text-gray-400 mt-8 text-xl">
                  See real results from agencies we've scaled
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
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
          className="grid md:grid-cols-3 gap-6 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgb(31, 41, 55)' }}
            >
              <div className="p-3 bg-gray-800 rounded-lg w-fit mb-4">
                <benefit.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
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
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          <div className="bg-gray-900 rounded-3xl p-12 border border-gray-700">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Agency?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book a free strategy session to discover how we can scale your agency to new heights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} />
                <span>Book Free Strategy Call</span>
              </motion.button>
              
              <motion.button
                className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 font-semibold text-lg border border-gray-600 flex items-center justify-center space-x-2"
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

      {/* Video Access Modal */}
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
              className="bg-white rounded-2xl max-w-lg w-full p-8 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Fill Out The Form Below To Get The <span className="text-green-600">FREE</span> Training
                </h3>
                <p className="text-gray-600 text-lg">
                  We'll <span className="font-semibold">SMS</span> You Access 📱
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-gray-900"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-gray-900"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-gray-900"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-gray-900"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit
                </motion.button>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-3 text-sm">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 h-4 w-4 text-black focus:ring-black border-gray-300 rounded flex-shrink-0"
                  />
                  <label htmlFor="terms" className="text-gray-600 leading-relaxed">
                    I agree to the{' '}
                    <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-700">
                      privacy policy
                    </Link>{' '}
                    &{' '}
                    <Link href="/terms-of-service" className="text-blue-600 underline hover:text-blue-700">
                      terms & conditions
                    </Link>{' '}
                    provided by the company. By providing my phone number, I agree to receive text messages from the business. Text{' '}
                    <span className="font-semibold">HELP</span> to +1 415-993-5456 for assistance. You can reply{' '}
                    <span className="font-semibold">STOP</span> to unsubscribe at any time.
                  </label>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GetStartedPage
