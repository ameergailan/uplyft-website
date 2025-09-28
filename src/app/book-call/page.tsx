/**
 * Booking Page - LeadConnector Widget Integration
 * Full black page with booking widget
 */

'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const BookCallPage = () => {
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
    <div className="min-h-screen bg-black text-white" data-page="booking">
      {/* Header with back button */}
      <header className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/get-started"
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
      </header>

      {/* Booking Page Layout */}
      <main className="min-h-[calc(100vh-80px)] flex">
        {/* Left Side - UpLyft Branding & Info */}
        <div className="w-1/2 bg-black pl-12 pr-6 py-12 flex flex-col justify-center">
          <div className="max-w-md ml-auto">
            {/* Logo */}
            <div className="mb-8">
              <img src="/UPLYFTLOGO.png" alt="UpLyft" className="h-16 mb-6" />
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl font-bold text-white mb-6">
              Ready to Scale Your Agency?
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Book your free 1-on-1 strategy session with David and discover how we can scale your agency to new heights.
            </p>
            
            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-gray-300">Personalized growth strategy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-gray-300">No commitment required</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-gray-300">30-minute consultation</span>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                Questions? Email us at{' '}
                <a href="mailto:hello@uplyft.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  hello@uplyft.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Booking Calendar */}
        <div className="w-1/2 bg-black">
          <div className="h-full pl-6 pr-12 py-6 flex justify-start">
            <div className="w-full max-w-lg">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/X2R834MdELL4Zw1DQeGl"
                className="w-full h-full border-0 rounded-lg"
                title="Book a Call with David - UpLyft Team"
                allow="camera; microphone; geolocation"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BookCallPage
