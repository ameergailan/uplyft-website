'use client'

import { useEffect, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface SlidingEaseVerticalBarsProps {
  className?: string
  backgroundColor?: string
  lineColor?: string
  barColor?: string
  lineWidth?: number
  animationSpeed?: number
}

export function SlidingEaseVerticalBars({
  className,
  backgroundColor = '#ffffff',
  lineColor = 'rgba(20, 22, 29, 0.1)',
  barColor = '#d4af37',
  lineWidth = 1,
  animationSpeed = 0.005,
}: SlidingEaseVerticalBarsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const timeRef = useRef<number>(0)
  const animationFrameId = useRef<number | null>(null)

  interface Bar {
    y: number
    height: number
    width: number
  }

  const noise = (x: number, y: number, t: number): number => {
    const n =
      Math.sin(x * 0.02 + t) * Math.cos(y * 0.02 + t) +
      Math.sin(x * 0.03 - t) * Math.cos(y * 0.01 + t)
    return (n + 1) / 2
  }

  const generatePattern = (
    seed: number,
    width: number,
    height: number,
    numLines: number
  ): Bar[][] => {
    const pattern: Bar[][] = []
    const lineSpacing = width / numLines

    for (let i = 0; i < numLines; i++) {
      const lineBars: Bar[] = []
      let currentY = 0

      while (currentY < height) {
        const noiseVal = noise(i * lineSpacing, currentY, seed)
        if (noiseVal > 0.5) {
          const barLength = 10 + noiseVal * 30
          const barWidth = 2 + noiseVal * 3
          lineBars.push({
            y: currentY + barLength / 2,
            height: barLength,
            width: barWidth,
          })
          currentY += barLength + 15
        } else {
          currentY += 15
        }
      }
      pattern.push(lineBars)
    }

    return pattern
  }

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const dpr = window.devicePixelRatio || 1
    const displayWidth = container.clientWidth
    const displayHeight = container.clientHeight

    canvas.width = displayWidth * dpr
    canvas.height = displayHeight * dpr
    canvas.style.width = `${displayWidth}px`
    canvas.style.height = `${displayHeight}px`

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

    timeRef.current += animationSpeed

    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const numLines = Math.max(8, Math.floor(width / 15))
    const lineSpacing = width / numLines

    const pattern1 = generatePattern(0, width, height, numLines)
    const pattern2 = generatePattern(5, width, height, numLines)

    const baseCycleTime = timeRef.current % (Math.PI * 2)

    let easingFactor: number
    if (baseCycleTime < Math.PI * 0.1) {
      easingFactor = 0
    } else if (baseCycleTime < Math.PI * 0.9) {
      easingFactor = (baseCycleTime - Math.PI * 0.1) / (Math.PI * 0.8)
    } else if (baseCycleTime < Math.PI * 1.1) {
      easingFactor = 1
    } else if (baseCycleTime < Math.PI * 1.9) {
      easingFactor = 1 - (baseCycleTime - Math.PI * 1.1) / (Math.PI * 0.8)
    } else {
      easingFactor = 0
    }

    const smoothEasing =
      easingFactor < 0.5
        ? 4 * easingFactor * easingFactor * easingFactor
        : 1 - Math.pow(-2 * easingFactor + 2, 3) / 2

    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, width, height)

    const red = Number.parseInt(barColor.slice(1, 3), 16)
    const green = Number.parseInt(barColor.slice(3, 5), 16)
    const blue = Number.parseInt(barColor.slice(5, 7), 16)

    for (let i = 0; i < numLines; i++) {
      const x = i * lineSpacing + lineSpacing / 2

      ctx.beginPath()
      ctx.strokeStyle = lineColor
      ctx.lineWidth = lineWidth
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()

      const bars1 = pattern1[i] || []
      const bars2 = pattern2[i] || []
      const maxBars = Math.max(bars1.length, bars2.length)

      for (let j = 0; j < maxBars; j++) {
        let bar1 = bars1[j]
        let bar2 = bars2[j]

        if (!bar1) bar1 = { y: bar2.y - 100, height: 0, width: 0 }
        if (!bar2) bar2 = { y: bar1.y + 100, height: 0, width: 0 }

        const waveOffset =
          Math.sin(i * 0.3 + j * 0.5 + timeRef.current * 2) * 10 * (smoothEasing * (1 - smoothEasing) * 4)

        const y = bar1.y + (bar2.y - bar1.y) * smoothEasing + waveOffset
        const barHeight = bar1.height + (bar2.height - bar1.height) * smoothEasing
        const barWidth = bar1.width + (bar2.width - bar1.width) * smoothEasing

        if (barHeight > 0.1 && barWidth > 0.1) {
          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.75)`
          ctx.fillRect(x - barWidth / 2, y - barHeight / 2, barWidth, barHeight)
        }
      }
    }

    animationFrameId.current = requestAnimationFrame(animate)
  }, [animationSpeed, backgroundColor, barColor, lineColor, lineWidth])

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
    </div>
  )
}

export default SlidingEaseVerticalBars
