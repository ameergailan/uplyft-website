/**
 * Test page to verify booking success page works
 */

'use client'

import Link from 'next/link'

const TestBookingSuccess = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Test Booking Success Page</h1>
        <p className="text-gray-300 mb-8">
          Click the button below to test the booking success page:
        </p>
        <Link 
          href="/booking-success"
          className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Go to Booking Success Page
        </Link>
      </div>
    </div>
  )
}

export default TestBookingSuccess



