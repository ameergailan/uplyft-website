/**
 * Facebook Analytics utility functions for Meta Pixel tracking
 * Provides type-safe event tracking for Facebook conversion events
 */

// Facebook Pixel event types for type safety
export interface FacebookEvent {
  event: string
  value?: string | number
  currency?: string
  content_name?: string
  content_category?: string
  content_ids?: string[]
  content_type?: string
  num_items?: number
  search_string?: string
  status?: string
}

// Lead generation events
export interface LeadEvent extends FacebookEvent {
  event: 'Lead'
  content_name?: string
  content_category?: string
  value?: number
}

// Registration/booking completion events
export interface CompleteRegistrationEvent extends FacebookEvent {
  event: 'CompleteRegistration'
  content_name?: string
  content_category?: string
  value?: number
  status?: string
}

// Content view events
export interface ViewContentEvent extends FacebookEvent {
  event: 'ViewContent'
  content_name: string
  content_category: string
  content_ids?: string[]
  content_type?: string
  value?: number
}

// Contact events
export interface ContactEvent extends FacebookEvent {
  event: 'Contact'
  content_name?: string
  content_category?: string
  value?: number
}

// Schedule/booking events
export interface ScheduleEvent extends FacebookEvent {
  event: 'Schedule'
  content_name?: string
  content_category?: string
  value?: number
}

// Checkout initiation events
export interface InitiateCheckoutEvent extends FacebookEvent {
  event: 'InitiateCheckout'
  content_name?: string
  content_category?: string
  content_ids?: string[]
  content_type?: string
  value?: number
  num_items?: number
}

// Video engagement events
export interface VideoViewEvent extends FacebookEvent {
  event: 'VideoView'
  content_name: string
  content_category: string
  content_ids?: string[]
  content_type?: string
  value?: number
}

export interface VideoCompleteEvent extends FacebookEvent {
  event: 'VideoComplete'
  content_name: string
  content_category: string
  content_ids?: string[]
  content_type?: string
  value?: number
}

// Custom events for additional tracking
export interface CustomFacebookEvent extends FacebookEvent {
  event: string
  custom_data?: Record<string, any>
}

/**
 * Check if Facebook Pixel is loaded and available
 */
const isFacebookPixelLoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof (window as any).fbq === 'function'
}

/**
 * Track Facebook Pixel events with error handling
 */
const trackFacebookEvent = (eventData: FacebookEvent) => {
  try {
    if (!isFacebookPixelLoaded()) {
      console.warn('Facebook Pixel not loaded, event not tracked:', eventData.event)
      return
    }

    const fbq = (window as any).fbq
    const { event, ...parameters } = eventData
    
    // Remove undefined values to keep payload clean
    const cleanParameters = Object.fromEntries(
      Object.entries(parameters).filter(([_, value]) => value !== undefined)
    )

    fbq('track', event, cleanParameters)
    console.log('Facebook event tracked:', event, cleanParameters)
  } catch (error) {
    console.error('Error tracking Facebook event:', error)
  }
}

/**
 * Track lead generation events (contact form submissions, inquiries)
 */
export const trackLead = (eventData: LeadEvent) => {
  trackFacebookEvent({
    event: 'Lead',
    content_name: eventData.content_name || 'Contact Form Submission',
    content_category: eventData.content_category || 'Lead Generation',
    value: eventData.value,
    ...eventData
  })
}

/**
 * Track registration/booking completion events
 */
export const trackCompleteRegistration = (eventData: CompleteRegistrationEvent) => {
  trackFacebookEvent({
    event: 'CompleteRegistration',
    content_name: eventData.content_name || 'Call Booking',
    content_category: eventData.content_category || 'Consultation Booking',
    value: eventData.value,
    status: eventData.status || 'completed',
    ...eventData
  })
}

/**
 * Track content view events (page views with engagement data)
 */
export const trackViewContent = (eventData: ViewContentEvent) => {
  trackFacebookEvent({
    event: 'ViewContent',
    content_name: eventData.content_name,
    content_category: eventData.content_category,
    content_ids: eventData.content_ids,
    content_type: eventData.content_type || 'page',
    value: eventData.value,
    ...eventData
  })
}

/**
 * Track contact events (contact page visits, contact button clicks)
 */
export const trackContact = (eventData: ContactEvent) => {
  trackFacebookEvent({
    event: 'Contact',
    content_name: eventData.content_name || 'Contact Page',
    content_category: eventData.content_category || 'Contact',
    value: eventData.value,
    ...eventData
  })
}

/**
 * Track schedule events (booking page access, calendar interactions)
 */
export const trackSchedule = (eventData: ScheduleEvent) => {
  trackFacebookEvent({
    event: 'Schedule',
    content_name: eventData.content_name || 'Booking Page',
    content_category: eventData.content_category || 'Scheduling',
    value: eventData.value,
    ...eventData
  })
}

/**
 * Track checkout initiation events (booking process start)
 */
export const trackInitiateCheckout = (eventData: InitiateCheckoutEvent) => {
  trackFacebookEvent({
    event: 'InitiateCheckout',
    content_name: eventData.content_name || 'Consultation Booking',
    content_category: eventData.content_category || 'Service Booking',
    content_ids: eventData.content_ids,
    content_type: eventData.content_type || 'service',
    value: eventData.value,
    num_items: eventData.num_items || 1,
    ...eventData
  })
}

/**
 * Track video view events
 */
export const trackVideoView = (eventData: VideoViewEvent) => {
  trackFacebookEvent({
    event: 'VideoView',
    content_name: eventData.content_name,
    content_category: eventData.content_category,
    content_ids: eventData.content_ids,
    content_type: eventData.content_type || 'video',
    value: eventData.value,
    ...eventData
  })
}

/**
 * Track video completion events
 */
export const trackVideoComplete = (eventData: VideoCompleteEvent) => {
  trackFacebookEvent({
    event: 'VideoComplete',
    content_name: eventData.content_name,
    content_category: eventData.content_category,
    content_ids: eventData.content_ids,
    content_type: eventData.content_type || 'video',
    value: eventData.value,
    ...eventData
  })
}

/**
 * Track custom Facebook events
 */
export const trackCustomFacebookEvent = (eventData: CustomFacebookEvent) => {
  trackFacebookEvent({
    event: eventData.event,
    ...eventData.custom_data,
    ...eventData
  })
}

/**
 * Track page view with content details (for engagement analysis)
 */
export const trackPageViewWithContent = (
  pageName: string, 
  category: string, 
  timeSpent?: number,
  additionalData?: Record<string, any>
) => {
  trackViewContent({
    event: 'ViewContent',
    content_name: pageName,
    content_category: category,
    content_type: 'page',
    value: timeSpent,
    ...additionalData
  })
}

/**
 * Track time-based content engagement
 */
export const trackContentEngagement = (
  contentName: string,
  category: string,
  timeSpent: number,
  engagementLevel: 'low' | 'medium' | 'high' = 'medium'
) => {
  trackViewContent({
    event: 'ViewContent',
    content_name: contentName,
    content_category: category,
    content_type: 'engagement',
    value: timeSpent,
    custom_data: {
      engagement_level: engagementLevel,
      time_spent_seconds: timeSpent
    }
  })
}
