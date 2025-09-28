/**
 * Translucent black question marks that follow mouse movement
 * Background effect for "Why 3" page
 */

'use client'

import { useState, useEffect } from 'react'

const TranslucentQuestionMarks = () => {
  const [marks, setMarks] = useState<Array<{
    id: number, 
    x: number, 
    y: number, 
    targetX: number, 
    targetY: number, 
    size: number, 
    opacity: number,
    speed: number
  }>>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Initialize question marks after component mounts
    const initTimer = setTimeout(() => {
      setIsActive(true)
      
      // Generate 15 question marks scattered across screen
      const newMarks = []
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        
        newMarks.push({
          id: i,
          x,
          y,
          targetX: x,
          targetY: y,
          size: 30 + Math.random() * 40, // 30-70px
          opacity: 0.1 + Math.random() * 0.2, // 0.1-0.3 opacity (translucent)
          speed: 0.02 + Math.random() * 0.03 // 0.02-0.05 speed
        })
      }
      setMarks(newMarks)
    }, 500)

    return () => clearTimeout(initTimer)
  }, [])

  useEffect(() => {
    if (!isActive) return

    let animationFrame: number

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      
      // Update target positions - question marks are attracted to mouse
      setMarks(prevMarks => prevMarks.map((mark, index) => {
        const angle = (index / 15) * Math.PI * 2
        const distance = 100 + (index % 3) * 50 // Varied distances
        
        return {
          ...mark,
          targetX: e.clientX + Math.cos(angle) * distance + (Math.random() - 0.5) * 100,
          targetY: e.clientY + Math.sin(angle) * distance + (Math.random() - 0.5) * 100
        }
      }))
    }

    // Smooth animation loop
    const animateMarks = () => {
      setMarks(prevMarks => prevMarks.map(mark => ({
        ...mark,
        x: mark.x + (mark.targetX - mark.x) * mark.speed,
        y: mark.y + (mark.targetY - mark.y) * mark.speed
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
    <div className="absolute inset-0 pointer-events-none z-5">
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
            opacity: mark.opacity,
            fontWeight: '600',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            transition: 'opacity 0.3s ease-out'
          }}
        >
          ?
        </div>
      ))}
    </div>
  )
}

export default TranslucentQuestionMarks


