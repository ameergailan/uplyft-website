/**
 * Fresh beliefs page - completely clean slate
 * Simple, reliable implementation
 */

'use client'

import { useState, useEffect, useRef } from 'react'

const FreshBeliefsPage = () => {
  const [showText, setShowText] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const isOnPage = rect.top <= 50 && rect.bottom >= window.innerHeight - 50
      
      if (isOnPage) {
        // Lock page when user reaches it
        document.body.style.overflow = 'hidden'
        console.log('On fresh beliefs page - locked')
      } else {
        document.body.style.overflow = 'auto'
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const isOnPage = rect.top <= 50 && rect.bottom >= window.innerHeight - 50
      
      if (!isOnPage) return
      
      e.preventDefault()
      
      if (showText) {
        // First scroll - hide text
        setShowText(false)
        console.log('Text hidden')
        
        // After 3 seconds, unlock scrolling
        setTimeout(() => {
          document.body.style.overflow = 'auto'
          console.log('Scrolling unlocked')
        }, 3000)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('wheel', handleWheel)
      document.body.style.overflow = 'auto'
    }
  }, [showText])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white h-screen flex items-center justify-center"
    >
      
      {/* Debug */}
      <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded z-50">
        Show Text: {showText ? 'YES' : 'NO'}
      </div>

      {/* Main content */}
      {showText && (
        <div className="text-center">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            Strategy
          </h2>
          <h1 className="text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Why 3 different<br />services?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            just focus on one?
          </p>
          <p className="text-base text-gray-400">
            Scroll to continue
          </p>
        </div>
      )}

      {/* After text disappears */}
      {!showText && (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            Beliefs will appear here
          </h1>
          <p className="text-gray-600">
            This is the clean slate - we can build whatever you want here
          </p>
        </div>
      )}
    </section>
  )
}

export default FreshBeliefsPage





