'use client'

import { useEffect, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface DelicateAsciiDotsProps {
  className?: string
  backgroundColor?: string
  textColor?: string
  gridSize?: number
  animationSpeed?: number
  /** Softens animation behind text content */
  vignette?: boolean
  vignetteFocus?: 'center' | 'left' | 'right'
}

const VIGNETTE_POSITION = {
  center: '50% 50%',
  left: '28% 50%',
  right: '72% 50%',
} as const

const VIGNETTE_SIZE = {
  center: '85% 75%',
  left: '58% 78%',
  right: '58% 78%',
} as const

interface Wave {
  x: number
  y: number
  frequency: number
  amplitude: number
  phase: number
  speed: number
}

interface GridCell {
  char: string
  opacity: number
}

const CHARS =
  '⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏⠑⠒⠓⠔⠕⠖⠗⠙⠚⠛⠜⠝⠞⠟⠡⠢⠣⠤⠥⠦⠧⠩⠪⠫⠬⠭⠮⠯⠱⠲⠳⠴⠵⠶⠷⠹⠺⠻⠼⠽⠾⠿'

const BACKGROUND_WAVES: Wave[] = [
  { x: 0.35, y: 0.4, frequency: 0.28, amplitude: 1.35, phase: 0.8, speed: 0.7 },
  { x: 0.55, y: 0.45, frequency: 0.35, amplitude: 1.2, phase: 2.1, speed: 0.55 },
  { x: 0.42, y: 0.62, frequency: 0.22, amplitude: 1.45, phase: 4.2, speed: 0.85 },
  { x: 0.68, y: 0.38, frequency: 0.4, amplitude: 1.15, phase: 1.4, speed: 0.62 },
  { x: 0.25, y: 0.55, frequency: 0.3, amplitude: 1.25, phase: 3.3, speed: 0.68 },
]

export function DelicateAsciiDots({
  className,
  backgroundColor = '#ffffff',
  textColor = '212, 175, 55',
  gridSize = 52,
  animationSpeed = 0.75,
  vignette = false,
  vignetteFocus = 'center',
}: DelicateAsciiDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<number>(0)
  const animationFrameId = useRef<number | null>(null)
  const dimensionsRef = useRef({ width: 0, height: 0 })

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const { width, height } = container.getBoundingClientRect()
    dimensionsRef.current = { width, height }

    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    timeRef.current += animationSpeed * 0.016

    const { width, height } = dimensionsRef.current
    if (width === 0 || height === 0) return

    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, width, height)

    const newGrid: (GridCell | null)[][] = Array(gridSize)
      .fill(0)
      .map(() => Array(gridSize).fill(null))

    const cellWidth = width / gridSize
    const cellHeight = height / gridSize

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        let totalWave = 0

        BACKGROUND_WAVES.forEach((wave) => {
          const wx = wave.x * gridSize
          const wy = wave.y * gridSize
          const dx = x - wx
          const dy = y - wy
          const dist = Math.sqrt(dx * dx + dy * dy)
          const falloff = 1 / (1 + dist * 0.04)
          totalWave +=
            Math.sin(dist * wave.frequency - timeRef.current * wave.speed + wave.phase) *
            wave.amplitude *
            falloff
        })

        const normalizedWave = (totalWave + 3) / 6
        if (Math.abs(totalWave) > 0.02) {
          const charIndex = Math.min(
            CHARS.length - 1,
            Math.max(0, Math.floor(normalizedWave * (CHARS.length - 1)))
          )
          const opacity = Math.min(1, Math.max(0.68, 0.68 + normalizedWave * 0.32))

          newGrid[y][x] = {
            char: CHARS[charIndex] ?? CHARS[0],
            opacity,
          }
        }
      }
    }

    const fontSize = Math.min(cellWidth, cellHeight) * 0.95
    ctx.font = `${fontSize}px monospace`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const cell = newGrid[y][x]
        if (cell) {
          ctx.fillStyle = `rgba(${textColor}, ${cell.opacity})`
          ctx.fillText(
            cell.char,
            x * cellWidth + cellWidth / 2,
            y * cellHeight + cellHeight / 2
          )
        }
      }
    }

    animationFrameId.current = requestAnimationFrame(animate)
  }, [animationSpeed, backgroundColor, gridSize, textColor])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    resizeCanvas()

    const observer = new ResizeObserver(() => resizeCanvas())
    observer.observe(container)

    animate()

    return () => {
      observer.disconnect()
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
        animationFrameId.current = null
      }
      timeRef.current = 0
    }
  }, [animate, resizeCanvas])

  return (
    <div
      ref={containerRef}
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      style={{ backgroundColor }}
      aria-hidden
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
      {vignette && (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse ${VIGNETTE_SIZE[vignetteFocus]} at ${VIGNETTE_POSITION[vignetteFocus]}, ${backgroundColor} 0%, ${backgroundColor}e8 35%, ${backgroundColor}99 55%, transparent 78%)`,
          }}
        />
      )}
    </div>
  )
}

export default DelicateAsciiDots
