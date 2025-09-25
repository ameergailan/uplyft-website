/**
 * Smooth following question marks for horizontal section
 * Appear 0.7 seconds after entering page, follow mouse until black screen
 */

'use client'

import { useState, useEffect } from 'react'

const SimpleQuestionMarks = () => {
  const [marks, setMarks] = useState<Array<{
    id: number, 
    x: number, 
    y: number, 
    targetX: number, 
    targetY: number, 
    size: number, 
    opacity: number,
    lerpSpeed: number
  }>>([])
  const [mousePos, setMousePos] = useState({ x: 800, y: 400 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Initialize after 0.7 seconds
    const initTimer = setTimeout(() => {
      setIsActive(true)
      
      // Generate 12 question marks
      const newMarks = []
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2
        const radius = 120 + (i % 5) * 40 // Much further spread: 120-280px
        const x = mousePos.x + Math.cos(angle) * radius
        const y = mousePos.y + Math.sin(angle) * radius
        
        newMarks.push({
          id: i,
          x,
          y,
          targetX: x,
          targetY: y,
          size: 40 + Math.random() * 20, // 40-60px
          opacity: 0.6 + Math.random() * 0.3,
          lerpSpeed: 0.01 + Math.random() * 0.03 // Individual speeds: 0.01-0.04
        })
      }
      setMarks(newMarks)
    }, 700) // 0.7 seconds

    return () => clearTimeout(initTimer)
  }, [])

  useEffect(() => {
    if (!isActive) return

    let animationFrame: number

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      
      // Update target positions
      setMarks(prevMarks => prevMarks.map((mark, index) => {
        const angle = (index / 12) * Math.PI * 2
          const radius = 120 + (index % 5) * 40 // Much further spread for organic feel
        return {
          ...mark,
            targetX: e.clientX + Math.cos(angle) * radius + (Math.random() - 0.5) * 10,
            targetY: e.clientY + Math.sin(angle) * radius + (Math.random() - 0.5) * 10
        }
      }))
    }

    // Smooth animation loop with individual speeds
    const animateMarks = () => {
      setMarks(prevMarks => prevMarks.map(mark => ({
        ...mark,
        x: mark.x + (mark.targetX - mark.x) * mark.lerpSpeed, // Individual lerp speeds
        y: mark.y + (mark.targetY - mark.y) * mark.lerpSpeed
      })))
      
      animationFrame = requestAnimationFrame(animateMarks)
    }

    animateMarks()
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [isActive])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {marks.map(mark => (
        <div
          key={mark.id}
          className="absolute font-bold"
          style={{
            fontSize: `${mark.size}px`,
            left: `${mark.x}px`,
            top: `${mark.y}px`,
            transform: 'translate(-50%, -50%)',
            color: '#000000',
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            opacity: mark.opacity,
            animation: `questionBounce ${4 + Math.random() * 3}s infinite ease-in-out`, // Slower bounce to reduce twitching
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          ?
        </div>
      ))}
    </div>
  )
}

export default SimpleQuestionMarks