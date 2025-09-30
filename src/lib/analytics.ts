/**
 * Analytics utility functions for Google Analytics 4 tracking
 * Provides type-safe event tracking for user interactions
 */

import { sendGAEvent } from '@next/third-parties/google'

// Analytics event types for type safety
export interface AnalyticsEvent {
  event: string
  value?: string | number
  page?: string
  element?: string
  duration?: number
}

// Video tracking events
export interface VideoEvent extends AnalyticsEvent {
  event: 'video_play' | 'video_pause' | 'video_complete' | 'video_thumbnail_click'
  video_id?: string
  video_title?: string
  watch_time?: number
}

// Button click events
export interface ButtonEvent extends AnalyticsEvent {
  event: 'button_click' | 'cta_click'
  button_text?: string
  button_location?: string
}

// Page engagement events
export interface PageEvent extends AnalyticsEvent {
  event: 'page_view' | 'time_on_page' | 'page_scroll'
  page_path?: string
  time_spent?: number
  scroll_depth?: number
}

/**
 * Track video interactions (play, pause, complete, thumbnail clicks)
 */
export const trackVideoEvent = (eventData: VideoEvent) => {
  try {
    sendGAEvent({
      event: eventData.event,
      value: eventData.value || eventData.video_title || 'video_interaction',
      page: eventData.page || window.location.pathname,
      element: eventData.element || 'video',
      video_id: eventData.video_id,
      video_title: eventData.video_title,
      watch_time: eventData.watch_time,
      duration: eventData.duration
    })
    console.log('Video event tracked:', eventData.event, eventData)
  } catch (error) {
    console.error('Error tracking video event:', error)
  }
}

/**
 * Track button clicks and CTA interactions
 */
export const trackButtonClick = (eventData: ButtonEvent) => {
  try {
    sendGAEvent({
      event: eventData.event,
      value: eventData.value || eventData.button_text || 'button_click',
      page: eventData.page || window.location.pathname,
      element: eventData.element || 'button',
      button_text: eventData.button_text,
      button_location: eventData.button_location
    })
    console.log('Button event tracked:', eventData.event, eventData)
  } catch (error) {
    console.error('Error tracking button event:', error)
  }
}

/**
 * Track page engagement (time on page, scroll depth)
 */
export const trackPageEvent = (eventData: PageEvent) => {
  try {
    sendGAEvent({
      event: eventData.event,
      value: eventData.value || eventData.page_path || 'page_interaction',
      page: eventData.page || window.location.pathname,
      element: eventData.element || 'page',
      time_spent: eventData.time_spent,
      scroll_depth: eventData.scroll_depth,
      duration: eventData.duration
    })
    console.log('Page event tracked:', eventData.event, eventData)
  } catch (error) {
    console.error('Error tracking page event:', error)
  }
}

/**
 * Track custom events with flexible parameters
 */
export const trackCustomEvent = (eventData: AnalyticsEvent) => {
  try {
    sendGAEvent({
      event: eventData.event,
      value: eventData.value,
      page: eventData.page || window.location.pathname,
      element: eventData.element,
      duration: eventData.duration
    })
    console.log('Custom event tracked:', eventData.event, eventData)
  } catch (error) {
    console.error('Error tracking custom event:', error)
  }
}

/**
 * Track YouTube iframe events (for embedded videos)
 */
export const trackYouTubeEvent = (eventType: string, videoId: string, watchTime?: number) => {
  trackVideoEvent({
    event: eventType as any,
    video_id: videoId,
    video_title: 'UpLyft Agency Growth System Video',
    watch_time: watchTime,
    page: window.location.pathname,
    element: 'youtube_iframe'
  })
}

/**
 * Track main CTA button clicks
 */
export const trackCTAClick = (buttonText: string, location: string) => {
  trackButtonClick({
    event: 'cta_click',
    button_text: buttonText,
    button_location: location,
    page: window.location.pathname,
    element: 'cta_button'
  })
}

/**
 * Track time spent on page
 */
export const trackTimeOnPage = (timeSpent: number, pagePath?: string) => {
  trackPageEvent({
    event: 'time_on_page',
    time_spent: timeSpent,
    page_path: pagePath || window.location.pathname,
    element: 'page_timer'
  })
}
