/**
 * Static dot grid without hover effects
 * Just the background grid pattern without interactions
 */

'use client'

import { useState, useEffect } from 'react'

interface Dot {
  id: string
  x: number
  y: number
}

const StaticDots = () => {
  const [dots, setDots] = useState<Dot[]>([])
  const [isMounted, setIsMounted] = useState(false)

  const gridSize = 20

  useEffect(() => {
    setIsMounted(true)
    
    // Generate dots grid
    const newDots: Dot[] = []
    const cols = 100 // Full coverage
    const rows = 40
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        newDots.push({
          id: `${row}-${col}`,
          x: col * gridSize + 2,
          y: row * gridSize + 2
        })
      }
    }
    
    setDots(newDots)
  }, [])

  if (!isMounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dots.map(dot => (
        <div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            left: dot.x,
            top: dot.y,
            width: '2.8px',
            height: '2.8px',
            backgroundColor: '#d1d5db' // Light gray - no hover effects
          }}
        />
      ))}
    </div>
  )
}

export default StaticDots


