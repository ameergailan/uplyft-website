/**
 * Global scroll lock that prevents ALL scrolling
 * Activates when "Why 3" page is fully visible
 */

'use client'

import { useEffect } from 'react'

const GlobalScrollLock = () => {
  useEffect(() => {
    let isLocked = false

    const checkForLock = () => {
      // Look for the slide-over element
      const slideOverElement = document.querySelector('[data-slide-over="why-three"]')
      
      if (slideOverElement) {
        const rect = slideOverElement.getBoundingClientRect()
        const isFullyVisible = rect.top <= 5 && rect.bottom >= window.innerHeight - 5
        const hasWhyText = slideOverElement.textContent?.includes('Why 3 different')
        
        if (isFullyVisible && hasWhyText && !isLocked) {
          // LOCK EVERYTHING - only when "Why 3" text is actually visible
          isLocked = true
          document.body.style.overflow = 'hidden'
          document.body.style.position = 'fixed'
          document.body.style.width = '100%'
          document.body.style.height = '100%'
          document.body.style.top = '0'
          document.body.style.left = '0'
          console.log('🔒 GLOBAL SCROLL LOCK ACTIVATED ON WHY 3 PAGE')
        } else if ((!isFullyVisible || !hasWhyText) && isLocked) {
          // UNLOCK
          isLocked = false
          document.body.style.overflow = 'auto'
          document.body.style.position = 'static'
          document.body.style.width = 'auto'
          document.body.style.height = 'auto'
          document.body.style.top = 'auto'
          document.body.style.left = 'auto'
          console.log('🔓 GLOBAL SCROLL LOCK DEACTIVATED')
        }
      }
    }

    const preventAllScrolling = (e: Event) => {
      if (isLocked) {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        console.log('🚫 SCROLL ATTEMPT BLOCKED')
        return false
      }
    }

    // Disable the global scroll lock for now
    // const checkInterval = setInterval(checkForLock, 100)

    // Block ALL possible scroll events
    document.addEventListener('wheel', preventAllScrolling, { passive: false, capture: true })
    document.addEventListener('scroll', preventAllScrolling, { passive: false, capture: true })
    document.addEventListener('touchmove', preventAllScrolling, { passive: false, capture: true })
    document.addEventListener('keydown', (e) => {
      if (isLocked && ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
        e.preventDefault()
        e.stopPropagation()
        console.log('🚫 KEYBOARD SCROLL BLOCKED')
      }
    }, { passive: false, capture: true })

    return () => {
      // clearInterval(checkInterval)
      // document.removeEventListener('wheel', preventAllScrolling, { capture: true })
      // document.removeEventListener('scroll', preventAllScrolling, { capture: true })
      // document.removeEventListener('touchmove', preventAllScrolling, { capture: true })
    }
  }, [])

  return null // This component doesn't render anything
}

export default GlobalScrollLock
