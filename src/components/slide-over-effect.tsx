/**
 * Slide over effect component that makes sections slide over the hero
 * instead of traditional scrolling
 */

'use client'

import { useState, useEffect } from 'react'

const SlideOverEffect = ({ children }: { children: React.ReactNode }) => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Calculate how much the content should slide up
      const progress = Math.min(scrollY / windowHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div 
      className="relative z-20 bg-white"
      style={{
        transform: `translateY(${(1 - scrollProgress) * 100}vh)`,
        transition: 'transform 0.1s ease-out',
        marginTop: '0',
        paddingTop: '0'
      }}
    >
      {children}
    </div>
  )
}

export default SlideOverEffect
