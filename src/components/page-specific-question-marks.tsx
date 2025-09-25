/**
 * Question marks that only appear on the horizontal beliefs page
 * Uses global scroll detection to determine correct page
 */

'use client'

import { useState, useEffect } from 'react'
import SimpleQuestionMarks from './simple-question-marks'

const PageSpecificQuestionMarks = () => {
  const [showQuestionMarks, setShowQuestionMarks] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Look for horizontal beliefs section  
      const horizontalSection = document.querySelector('[data-section="horizontal"]')
      
      if (horizontalSection) {
        const rect = horizontalSection.getBoundingClientRect()
        // Show when horizontal section is in view (we're ON the beliefs page)
        const isOnBeliefsPage = rect.top <= 100 && rect.bottom >= window.innerHeight - 100
        setShowQuestionMarks(isOnBeliefsPage)
        
        if (isOnBeliefsPage) {
          console.log('ON BELIEFS PAGE - QUESTION MARKS SHOULD SHOW')
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check immediately
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-30 pointer-events-none">
      {/* Debug indicator */}
      <div className="fixed top-4 left-4 bg-green-500 text-white p-2 text-sm z-50">
        Beliefs Page: {showQuestionMarks ? 'YES' : 'NO'}
      </div>
      
      {/* Question marks only when on beliefs page */}
      {showQuestionMarks && <SimpleQuestionMarks />}
    </div>
  )
}

export default PageSpecificQuestionMarks
