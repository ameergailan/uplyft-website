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

      {/* Booking Widget Container */}
      <main className="container mx-auto px-6 py-8 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-4xl">
          {/* LeadConnector Booking Widget */}
          <div className="w-full h-screen bg-black rounded-lg overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/X2R834MdELL4Zw1DQeGl"
              className="w-full h-full border-0"
              title="Book a Call with David - UpLyft Team"
              allow="camera; microphone; geolocation"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default BookCallPage
