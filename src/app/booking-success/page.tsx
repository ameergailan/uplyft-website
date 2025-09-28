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

  // Completely disable custom cursor on this page
  useEffect(() => {
    // Remove custom cursor class and set normal cursor
    document.body.classList.remove('custom-cursor-active')
    document.body.style.cursor = 'default'
    
    // Hide the custom cursor component if it exists
    const customCursor = document.querySelector('[data-custom-cursor]')
    if (customCursor) {
      (customCursor as HTMLElement).style.display = 'none'
    }
    
    return () => {
      // Restore when leaving page
      document.body.classList.add('custom-cursor-active')
      document.body.style.cursor = 'none'
      
      // Show the custom cursor component again
      if (customCursor) {
        (customCursor as HTMLElement).style.display = 'block'
      }
    }
  }, [])

  const handlePlayClick = () => {
    setShowVideo(true)
  }

  return (
    <div className="min-h-screen bg-black text-white" data-page="booking-success">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        
        {/* STOP DON'T LEAVE THIS PAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-sky-400 text-lg sm:text-xl font-bold uppercase">
            🛑 STOP DON'T LEAVE THIS PAGE
          </p>
        </motion.div>

        {/* YOUR CALL IS BOOKED! */}
        <motion.h1 
          className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          YOUR CALL IS BOOKED!
        </motion.h1>

        {/* FOLLOW THE NEXT 2 STEPS */}
        <motion.h2 
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          FOLLOW THE NEXT 2 STEPS
        </motion.h2>

        {/* Follow the steps or your call will be cancelled */}
        <motion.p 
          className="text-lg sm:text-xl text-gray-300 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          ⚠️ (follow the steps or your call will be cancelled)
        </motion.p>

        {/* Dividing Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent mb-8"
        />

        {/* Step 1: CONFIRM YOUR CALL */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            ✅ 1. CONFIRM YOUR CALL
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

        {/* Dividing Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent mb-8"
        />

        {/* Step 2: LEARN MORE ABOUT THE UPLYFT SYSTEM */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            🎥 2. LEARN MORE ABOUT THE UPLYFT SYSTEM
          </h3>
          
          {/* Video Section */}
          <div className="relative w-full max-w-4xl mx-auto" style={{ aspectRatio: '16/9' }}>
            {!showVideo ? (
              <div 
                className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl cursor-pointer overflow-hidden group"
                onClick={handlePlayClick}
              >
                {/* YouTube Thumbnail */}
                <img 
                  src="https://img.youtube.com/vi/HZynJ1uQLYQ/maxresdefault.jpg"
                  alt="UpLyft Agency Growth System Video"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  style={{ 
                    filter: 'blur(2px) brightness(0.7)',
                    pointerEvents: 'none'
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
                    👇 Business Owners 👇
                  </h4>
                  <p className="text-gray-200 text-sm">
                    Watch this video to learn about the UpLyft System
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-black rounded-3xl overflow-hidden">
                <iframe
                  className="w-full h-full rounded-3xl"
                  src="https://www.youtube.com/embed/HZynJ1uQLYQ?autoplay=1&rel=0&modestbranding=1"
                  title="UpLyft Agency Growth System Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </motion.div>

      </main>
    </div>
  )
}

export default BookingSuccessPage