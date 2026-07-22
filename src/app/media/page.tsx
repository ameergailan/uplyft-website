import type { Metadata } from 'next'
import { MediaPageContent } from '@/components/media-page-content'

export const metadata: Metadata = {
  title: 'Media | UpLyft',
  description: 'Follow the UpLyft team across social, podcasts, and more.',
}

export default function MediaPage() {
  return <MediaPageContent />
}
