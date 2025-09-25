/**
 * Custom cursor component that follows the mouse everywhere
 * Shows a dot with "click to collaborate" text to increase conversion
 */

'use client'

import { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isOverInteractive, setIsOverInteractive] = useState(false)

  // Only render on client side to prevent hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isDisabled) {
        setIsVisible(true)
        // Add class to hide default cursor
        document.body.classList.add('custom-cursor-active')
        
        // Check if cursor is over interactive elements - be more aggressive
        const target = e.target as Element
        const isOverSolutions = target?.closest('section.bg-black') !== null ||
                               target?.closest('[data-interactive="true"]') !== null ||
                               document.elementFromPoint(e.clientX, e.clientY)?.closest('section.bg-black') !== null
        setIsOverInteractive(isOverSolutions)
      }
    }

    const handleMouseLeave = () => {
      if (!isDisabled) {
        setIsVisible(false)
        // Restore default cursor
        document.body.classList.remove('custom-cursor-active')
      }
    }

    const handleMouseEnter = () => {
      if (!isDisabled) {
        setIsVisible(true)
        document.body.classList.add('custom-cursor-active')
      }
    }

    // Listen on window to capture all mouse movement
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      // Clean up on unmount
      document.body.classList.remove('custom-cursor-active')
    }
  }, [isMounted, isDisabled])

  const handleClick = () => {
    if (isDisabled) return
    
    setIsClicked(true)
    
    // Reset animation after a short delay
    setTimeout(() => {
      setIsClicked(false)
      
      // Navigate to contact section with slide-over compensation
      if (typeof window !== 'undefined') {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          // Account for the slide-over effect - need to scroll more to reach contact
          const slideOverOffset = window.innerHeight // Full viewport height for slide effect
          const contactOffset = contactSection.offsetTop
          const totalScroll = slideOverOffset + contactOffset - 100 // Small buffer
          
          window.scrollTo({
            top: totalScroll,
            behavior: 'smooth'
          })
        }
      }
      
      // Disable custom cursor and restore normal cursor
      setTimeout(() => {
        setIsDisabled(true)
        setIsVisible(false)
        document.body.classList.remove('custom-cursor-active')
      }, 1000)
    }, 300)
  }

  const handleCursorClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleClick()
  }

  // Don't render anything during SSR
  if (!isMounted) return null

  if (!isVisible || isDisabled) {
    return null
  }

  return (
    <div
      className={`custom-cursor ${isClicked ? 'cursor-clicked' : ''}`}
      style={{
        left: mousePosition.x + 10,
        top: mousePosition.y,
        pointerEvents: isOverInteractive ? 'none' : 'auto',
        display: isOverInteractive ? 'none' : 'block'
      }}
      onClick={handleCursorClick}
    >
      <div className="cursor-dot" />
      <div className="cursor-text">
        click to collaborate
      </div>
    </div>
  )
}

export default CustomCursor
