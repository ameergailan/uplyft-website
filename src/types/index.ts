/**
 * Type definitions for the DSGNLAB website recreation
 * Contains all TypeScript interfaces and types used throughout the application
 */

/**
 * Contact form data structure
 */
export interface ContactFormData {
  name: string
  email: string
  message: string
}

/**
 * Metric item for the metrics section
 */
export interface MetricItem {
  title: string
  description: string
}

/**
 * Statistic item with source citation
 */
export interface StatisticItem {
  percentage: string
  title: string
  description: string
  source: string
}

/**
 * Service tag for case studies
 */
export interface ServiceTag {
  label: string
  variant?: 'primary' | 'secondary'
}

/**
 * Metric item for case studies
 */
export interface CaseStudyMetric {
  label: string
  value: string
  growth?: string
}

/**
 * Case study project data
 */
export interface CaseStudyProject {
  title: string
  client: string
  industry: string
  description: string
  metrics: CaseStudyMetric[]
  services: ServiceTag[]
  logo: string
  link?: string
}

/**
 * Navigation link structure
 */
export interface NavLink {
  href: string
  label: string
  external?: boolean
}
