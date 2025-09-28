/**
 * Booking Success Page - Post-booking confirmation and next steps
 * Displays after successful call booking via LeadConnector redirect
 */

'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Calendar, Clock, Mail, ArrowLeft } from 'lucide-react'

const BookingSuccessPage = () => {
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

  return (
    <div className="min-h-screen bg-black text-white" data-page="booking-success">
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
              href="/book-call"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back</span>
            </Link>
            <div className="text-xl font-bold text-white">
              <img src="/UPLYFTLOGO.png" alt="UpLyft" className="h-8" />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Success Content */}
      <main className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
        <div className="text-center">
          
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            🎉 Call Booked Successfully!
          </motion.h1>

          {/* Confirmation Message */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Your 1-on-1 strategy session with David has been confirmed. 
            Get ready to scale your agency to new heights!
          </motion.p>

          {/* Next Steps */}
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 mb-12 text-left max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              What happens next?
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Check Your Email</h3>
                  <p className="text-gray-300 text-sm">You'll receive a calendar invite and confirmation email within the next few minutes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Prepare for Success</h3>
                  <p className="text-gray-300 text-sm">Think about your current challenges and growth goals. David will create a custom strategy for your agency.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Join the Call</h3>
                  <p className="text-gray-300 text-sm">David will share proven strategies to scale your agency and discuss how UpLyft can accelerate your growth.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call Details */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Duration</h3>
              <p className="text-gray-300">30-minute strategy session</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Calendar className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Format</h3>
              <p className="text-gray-300">Video call with David</p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 text-center">
              Need to reschedule or have questions?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@uplyft.com?subject=Booking%20Question"
                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <Mail size={18} />
                <span>Email Us</span>
              </a>
              <Link
                href="/book-call"
                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
              >
                Book Different Time
              </Link>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p className="text-gray-400 mb-4">
              Join 100+ agencies that have scaled with UpLyft
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>Average 3.2x revenue increase</span>
              <span>•</span>
              <span>90-day implementation</span>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  )
}

export default BookingSuccessPage
