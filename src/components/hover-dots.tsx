/**
 * Individual dots that each have their own color state
 * Each dot changes color when mouse is near it
 */

'use client'

import { useEffect, useState } from 'react'

interface Dot {
  id: string
  x: number
  y: number
  isHovered: boolean
}

const HoverDots = () => {
  const [dots, setDots] = useState<Dot[]>([])
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })
  const [isMounted, setIsMounted] = useState(false)

  const gridSize = 20 // Even tighter grid for maximum coverage
  const hoverRadius = 100

  useEffect(() => {
    setIsMounted(true)
    
    // Generate initial dots to cover full screen (maximum coverage)
    const newDots: Dot[] = []
    const cols = 100 // Maximum columns for full right side coverage
    const rows = 40 // Maximum rows for full coverage
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        newDots.push({
          id: `${row}-${col}`,
          x: col * gridSize + 2, // Smaller offset for edge coverage
          y: row * gridSize + 2, // Smaller offset for edge coverage
          isHovered: false
        })
      }
    }
    
    setDots(newDots)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    let rafId: number
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId)
      
      rafId = requestAnimationFrame(() => {
        const mouseX = e.clientX
        const mouseY = e.clientY
        
        setMousePosition({ x: mouseX, y: mouseY })

        // Update dots based on mouse proximity (optimized)
        setDots(prevDots => 
          prevDots.map(dot => {
            const dx = mouseX - dot.x
            const dy = mouseY - dot.y
            const distanceSquared = dx * dx + dy * dy // Avoid sqrt for performance
            
            return {
              ...dot,
              isHovered: distanceSquared <= hoverRadius * hoverRadius
            }
          })
        )
      })
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: -1000, y: -1000 })
      setDots(prevDots => 
        prevDots.map(dot => ({ ...dot, isHovered: false }))
      )
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isMounted, hoverRadius])

  if (!isMounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dots.map(dot => (
        <div
          key={dot.id}
          className="absolute rounded-full transition-colors duration-300 ease-out"
          style={{
            left: dot.x,
            top: dot.y,
            width: '2.8px',
            height: '2.8px',
            backgroundColor: dot.isHovered ? '#000000' : '#d1d5db',
            transform: 'translate(-50%, -50%)',
            opacity: 0.6
          }}
        />
      ))}
    </div>
  )
}

export default HoverDots
