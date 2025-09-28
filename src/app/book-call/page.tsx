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
      <main className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row">
        {/* Left Side - UpLyft Branding & Info - HIDDEN ON MOBILE */}
        <div className="hidden lg:flex lg:w-1/2 bg-black lg:pl-12 lg:pr-6 lg:py-12 flex-col justify-center">
          <div className="max-w-md lg:ml-auto">
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

        {/* Calendar - FULL VIEWPORT ON MOBILE */}
        <div className="w-full lg:w-1/2 bg-black">
          <div className="h-[calc(100vh-80px)] lg:h-full p-0 lg:px-6 lg:py-6 lg:pl-6 lg:pr-12 lg:flex lg:justify-start">
            <div className="w-full h-full lg:max-w-lg">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/X2R834MdELL4Zw1DQeGl"
                className="w-full h-full border-0 lg:rounded-lg"
                title="Book a Call with David - UpLyft Team"
                allow="camera; microphone; geolocation"
                onLoad={() => {
                  // Listen for booking completion messages
                  const handleMessage = (event: MessageEvent) => {
                    console.log('Booking widget message:', event.data);
                    if (event.data && (
                      event.data.type === 'booking_complete' ||
                      event.data.type === 'booking_confirmed' ||
                      event.data.action === 'booked' ||
                      (typeof event.data === 'string' && event.data.includes('book'))
                    )) {
                      console.log('Booking detected, redirecting to success page');
                      window.location.href = '/booking-success/';
                    }
                  };
                  
                  window.addEventListener('message', handleMessage);
                  return () => window.removeEventListener('message', handleMessage);
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BookCallPage
