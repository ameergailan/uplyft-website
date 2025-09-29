/**
 * Get Started Landing Page - Lead Funneling Page
 * Dedicated page for all traffic sources: website, ads, cold outreach
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Target, TrendingUp, CheckCircle, Calendar, Users, Play } from 'lucide-react'

const GetStartedPage = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false)

  // Set cursor and auto-unlock video
  useEffect(() => {
    document.body.classList.remove('custom-cursor-active')
    document.body.style.cursor = 'default'
    
    // Auto-unlock video - no form required
    console.log('VIDEO AUTO-UNLOCKED - NO FORM REQUIRED')
    setShowVideo(true)
    
    return () => {
      // Restore when leaving page
      document.body.classList.add('custom-cursor-active')
      document.body.style.cursor = 'none'
    }
  }, [])

  const handlePlayClick = () => {
    // Video is always unlocked, just play it
    setShowVideo(true)
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
          <div className="flex items-center justify-center">
            <div className="text-xl font-bold text-white">
              <img src="/UPLYFTLOGO.png" alt="UpLyft" className="h-8" />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 py-4 sm:py-8 max-w-6xl">
        
        {/* Main Headline */}
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top Badge */}
          <motion.div 
            className="mb-4 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">
              👇 Business Owners 👇
            </p>
          </motion.div>

          <motion.h1 
            className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white px-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-2xl sm:text-4xl lg:text-5xl text-sky-400">Free:</span>{' '}
            <span className="text-white">Get the exact </span>
            <span className="text-sky-400">UpLyft Growth System™</span>
            <br />
            <span className="text-white text-2xl sm:text-4xl lg:text-5xl">
              that scaled agencies to{' '}
            </span>
            <span className="text-3xl sm:text-5xl lg:text-6xl text-sky-400">
              $100k+/Mo
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-xl lg:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4"
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
                  className="w-full relative cursor-pointer group overflow-hidden rounded-2xl sm:rounded-3xl" 
                  style={{ width: '100%', minHeight: '250px', aspectRatio: '16/9' }}
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
                    <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '250px' }}>
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
            className="text-center mt-8 sm:mt-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/book-call">
              <motion.button
                className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg border border-gray-200 w-full sm:w-auto"
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
                  <div className="text-lg sm:text-xl font-bold">I Want To Scale Faster!</div>
                  <div className="text-xs sm:text-sm font-medium mt-1 text-gray-700">Apply For 1 on 1 Mentorship w/ David</div>
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

      </main>

    </div>
  )
}

export default GetStartedPage
