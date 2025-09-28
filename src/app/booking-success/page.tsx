/**
 * Booking Success Page - Post-booking confirmation and next steps
 * Displays after successful call booking via LeadConnector redirect
 */

'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const BookingSuccessPage = () => {
  const [showVideo, setShowVideo] = useState(false)

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
    setShowVideo(true)
  }

  return (
    <div className="min-h-screen bg-black text-white" data-page="booking-success">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
        
        {/* STOP DON'T LEAVE THIS PAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-red-500 text-lg sm:text-xl font-bold uppercase">
            STOP DON'T LEAVE THIS PAGE
          </p>
        </motion.div>

        {/* YOUR CALL IS BOOKED! */}
        <motion.h1 
          className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          YOUR CALL IS BOOKED!
        </motion.h1>

        {/* FOLLOW THE NEXT 2 STEPS */}
        <motion.h2 
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          FOLLOW THE NEXT 2 STEPS
        </motion.h2>

        {/* Follow the steps or your call will be cancelled */}
        <motion.p 
          className="text-lg sm:text-xl text-gray-300 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          (follow the steps or your call will be cancelled)
        </motion.p>

        {/* Step 1: CONFIRM YOUR CALL */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            1. CONFIRM YOUR CALL
          </h3>
          
          {/* Booking Success Image */}
          <div className="flex justify-center">
            <img 
              src="/booking success image.png" 
              alt="Booking Confirmation" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>

        {/* Step 2: LEARN MORE ABOUT THE UPLYFT SYSTEM */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            2. LEARN MORE ABOUT THE UPLYFT SYSTEM
          </h3>
          
          {/* Video Section */}
          <div className="relative w-full max-w-4xl mx-auto" style={{ aspectRatio: '16/9' }}>
            {!showVideo ? (
              <div 
                className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl cursor-pointer overflow-hidden group"
                onClick={handlePlayClick}
              >
                {/* Video Thumbnail */}
                <video 
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  muted
                  playsInline
                  preload="metadata"
                  style={{ 
                    filter: 'blur(2px) brightness(0.7)',
                    pointerEvents: 'none'
                  }}
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.currentTime = 2; // Seek to 2 seconds for better frame
                  }}
                >
                  <source src="/agency-growth-video.mp4" type="video/mp4" />
                </video>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Video Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white text-xl font-bold mb-2">
                    👇 Business Owners 👇
                  </h4>
                  <p className="text-gray-200 text-sm">
                    Watch this video to learn about the UpLyft System
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-black rounded-3xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                >
                  <source src="/agency-growth-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </motion.div>

      </main>
    </div>
  )
}

export default BookingSuccessPage