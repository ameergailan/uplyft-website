/**
 * Video Tracker Component
 * Tracks YouTube iframe video interactions and watch time
 */

'use client'

import { useEffect, useRef, useState } from 'react'
import { trackYouTubeEvent, trackVideoEvent } from '@/lib/analytics'
import { trackVideoView, trackVideoComplete } from '@/lib/facebook-analytics'

interface VideoTrackerProps {
  videoId: string
  videoTitle?: string
  iframeRef?: React.RefObject<HTMLIFrameElement>
}

const VideoTracker = ({ videoId, videoTitle = 'UpLyft Agency Growth System Video', iframeRef }: VideoTrackerProps) => {
  const [isTracking, setIsTracking] = useState(false)
  const watchTimeRef = useRef<number>(0)
  const lastTrackTimeRef = useRef<number>(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Set up YouTube iframe API tracking
    const setupYouTubeTracking = () => {
      if (!window.YT || !window.YT.Player) {
        // YouTube API not loaded yet, retry
        setTimeout(setupYouTubeTracking, 1000)
        return
      }

      // Find the iframe element
      const iframe = iframeRef?.current || document.querySelector('iframe[src*="youtube.com"]')
      if (!iframe) return

      // Create YouTube player instance for tracking
      const player = new window.YT.Player(iframe, {
        events: {
          onReady: (event: any) => {
            console.log('YouTube player ready for tracking')
            setIsTracking(true)
          },
          onStateChange: (event: any) => {
            const state = event.data
            const currentTime = event.target.getCurrentTime()
            
            switch (state) {
              case window.YT.PlayerState.PLAYING:
                trackYouTubeEvent('video_play', videoId, currentTime)
                // Track Facebook video view event
                trackVideoView({
                  event: 'VideoView',
                  content_name: videoTitle,
                  content_category: 'Educational Content',
                  content_ids: [videoId],
                  content_type: 'video',
                  value: 0
                })
                startWatchTimeTracking()
                break
              case window.YT.PlayerState.PAUSED:
                trackYouTubeEvent('video_pause', videoId, currentTime)
                stopWatchTimeTracking()
                break
              case window.YT.PlayerState.ENDED:
                trackYouTubeEvent('video_complete', videoId, currentTime)
                stopWatchTimeTracking()
                // Track total watch time
                trackVideoEvent({
                  event: 'video_complete',
                  video_id: videoId,
                  video_title: videoTitle,
                  watch_time: watchTimeRef.current,
                  page: window.location.pathname,
                  element: 'youtube_iframe'
                })
                // Track Facebook video completion event
                trackVideoComplete({
                  event: 'VideoComplete',
                  content_name: videoTitle,
                  content_category: 'Educational Content',
                  content_ids: [videoId],
                  content_type: 'video',
                  value: watchTimeRef.current
                })
                break
            }
          }
        }
      })
    }

    // Start tracking watch time
    const startWatchTimeTracking = () => {
      if (intervalRef.current) return // Already tracking
      
      lastTrackTimeRef.current = Date.now()
      intervalRef.current = setInterval(() => {
        const currentTime = Date.now()
        const timeDiff = Math.floor((currentTime - lastTrackTimeRef.current) / 1000)
        watchTimeRef.current += timeDiff
        lastTrackTimeRef.current = currentTime
        
        // Track watch time every 30 seconds
        if (watchTimeRef.current % 30 === 0) {
          trackVideoEvent({
            event: 'video_watch_time',
            video_id: videoId,
            video_title: videoTitle,
            watch_time: watchTimeRef.current,
            page: window.location.pathname,
            element: 'youtube_iframe'
          })
        }
      }, 1000)
    }

    // Stop tracking watch time
    const stopWatchTimeTracking = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    // Track video thumbnail clicks
    const handleThumbnailClick = () => {
      trackVideoEvent({
        event: 'video_thumbnail_click',
        video_id: videoId,
        video_title: videoTitle,
        page: window.location.pathname,
        element: 'video_thumbnail'
      })
    }

    // Set up thumbnail click tracking
    const thumbnail = document.querySelector('[data-video-thumbnail]')
    if (thumbnail) {
      thumbnail.addEventListener('click', handleThumbnailClick)
    }

    // Load YouTube API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
      
      // Set up tracking once API is loaded
      window.onYouTubeIframeAPIReady = setupYouTubeTracking
    } else {
      setupYouTubeTracking()
    }

    // Cleanup
    return () => {
      stopWatchTimeTracking()
      if (thumbnail) {
        thumbnail.removeEventListener('click', handleThumbnailClick)
      }
    }
  }, [videoId, videoTitle, iframeRef])

  // This component doesn't render anything
  return null
}

// Extend Window interface for YouTube API
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default VideoTracker



