/**
 * Optimized animated arrow component
 * Uses pure CSS animations for maximum performance
 */

'use client'

import { useEffect, useState } from 'react'
import LimitingBeliefs from './limiting-beliefs'

const OptimizedArrow = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300) // Small delay for smoother entrance

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Arrow container */}
      <div className="relative">
        {/* Arrow shaft */}
        <div 
          className={`arrow-shaft ${isVisible ? 'arrow-animate' : ''}`}
          style={{
            width: '8px',
            backgroundColor: '#000000',
            transformOrigin: 'top center',
            position: 'relative'
          }}
        >
          {/* Arrow head - always at the bottom */}
          <div 
            className="arrow-head"
            style={{
              position: 'absolute',
              bottom: '-16px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '0',
              height: '0',
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderTop: '16px solid #000000'
            }}
          />
        </div>
      </div>

      {/* Limiting beliefs that appear alongside arrow */}
      <LimitingBeliefs scrollProgress={1} />
    </div>
  )
}

export default OptimizedArrow
