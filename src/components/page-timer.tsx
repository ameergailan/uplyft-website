/**
 * Page Timer Component
 * Tracks time spent on page and sends analytics events
 */

'use client'

import { useEffect, useRef } from 'react'
import { trackTimeOnPage } from '@/lib/analytics'

interface PageTimerProps {
  pageName?: string
  trackInterval?: number // Track every X seconds (default: 30)
}

const PageTimer = ({ pageName, trackInterval = 30 }: PageTimerProps) => {
  const startTimeRef = useRef<number>(Date.now())
  const lastTrackTimeRef = useRef<number>(Date.now())
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Start tracking time on page
    startTimeRef.current = Date.now()
    lastTrackTimeRef.current = Date.now()

    // Track time periodically while user is on page
    intervalRef.current = setInterval(() => {
      const currentTime = Date.now()
      const timeSpent = Math.floor((currentTime - lastTrackTimeRef.current) / 1000)
      
      if (timeSpent >= trackInterval) {
        trackTimeOnPage(timeSpent, pageName)
        lastTrackTimeRef.current = currentTime
      }
    }, trackInterval * 1000)

    // Track total time when user leaves page
    const handleBeforeUnload = () => {
      const totalTimeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000)
      if (totalTimeSpent > 0) {
        // Use sendBeacon for reliable tracking on page unload
        trackTimeOnPage(totalTimeSpent, pageName)
      }
    }

    // Track time on page visibility change (tab switch, minimize, etc.)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Math.floor((Date.now() - lastTrackTimeRef.current) / 1000)
        if (timeSpent > 0) {
          trackTimeOnPage(timeSpent, pageName)
        }
      } else {
        lastTrackTimeRef.current = Date.now()
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      
      // Track final time on page
      const totalTimeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000)
      if (totalTimeSpent > 0) {
        trackTimeOnPage(totalTimeSpent, pageName)
      }
    }
  }, [pageName, trackInterval])

  // This component doesn't render anything
  return null
}

export default PageTimer


