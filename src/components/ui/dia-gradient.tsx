'use client'

import { motion } from 'framer-motion'
import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from 'react'

const VBW = 1271
const VBH = 599

type Stop = { offset: number; color: string }

const DIA_STOPS: Stop[] = [
  { offset: 0, color: '#340B05' },
  { offset: 0.1827, color: '#0358F7' },
  { offset: 0.2837, color: '#5092C7' },
  { offset: 0.4135, color: '#E1ECFE' },
  { offset: 0.5866, color: '#FFD400' },
  { offset: 0.6827, color: '#FA3D1D' },
  { offset: 0.8029, color: '#FD02F5' },
  { offset: 1, color: '#FFC0FD00' },
]

/** UpLyft brand gold ramp — dark ink base rising into signature gold */
export const UPLYFT_GOLD_STOPS: Stop[] = [
  { offset: 0, color: '#14161d' },
  { offset: 0.12, color: '#2a2418' },
  { offset: 0.28, color: '#4a3d14' },
  { offset: 0.44, color: '#6b5618' },
  { offset: 0.58, color: '#8B6914' },
  { offset: 0.72, color: '#b8942a' },
  { offset: 0.84, color: '#d4af37' },
  { offset: 0.93, color: '#e0be4c' },
  { offset: 1, color: '#ececea00' },
]

/** @deprecated Use UPLYFT_GOLD_STOPS */
export const UPLYFT_EMBER_STOPS = UPLYFT_GOLD_STOPS

function bellHeights(n: number, peak: number, valley: number): number[] {
  const out: number[] = []
  const mid = (n - 1) / 2
  for (let i = 0; i < n; i++) {
    const t = mid === 0 ? 0 : Math.abs(i - mid) / mid
    const eased = 1 - Math.pow(t, 1.24)
    out.push(peak * VBH * (valley + (1 - valley) * eased))
  }
  return out
}

export function DiaGradient({
  bars = 9,
  blur = 15,
  peak = 0.98,
  valley = 0.55,
  stops = DIA_STOPS,
  riseMs = 1100,
  animateBars = false,
}: {
  bars?: number
  blur?: number
  peak?: number
  valley?: number
  stops?: Stop[]
  riseMs?: number
  /** Each bar oscillates height independently */
  animateBars?: boolean
}) {
  const uid = useId()
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)))
    return () => cancelAnimationFrame(id)
  }, [])

  const heights = bellHeights(bars, peak, valley)
  const colW = VBW / bars
  const gradId = `dia-grad-${uid}`
  const blurId = `dia-blur-${uid}`

  return (
    <div
      aria-hidden
      style={{
        height: '100%',
        width: '100%',
        transformOrigin: 'bottom',
        transform: shown ? 'scaleY(1)' : 'scaleY(0)',
        transition: `transform ${riseMs}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        willChange: 'transform',
      }}
    >
      <svg
        style={{ height: '100%', width: '100%' }}
        viewBox={`0 0 ${VBW} ${VBH}`}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="1" x2="0" y2="0">
            {stops.map((s, i) => (
              <stop key={i} offset={s.offset} stopColor={s.color} />
            ))}
          </linearGradient>
          <filter id={blurId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={blur} />
          </filter>
        </defs>
        {heights.map((h, i) => (
          <g key={i} filter={`url(#${blurId})`}>
            {animateBars ? (
              <motion.rect
                x={i * colW}
                width={colW * 1.23}
                fill={`url(#${gradId})`}
                initial={{ y: VBH, height: 0 }}
                animate={{
                  y: [
                    VBH - h * 0.96,
                    VBH - h * 1.06,
                    VBH - h * 0.98,
                    VBH - h * 1.04,
                    VBH - h * 0.96,
                  ],
                  height: [h * 0.96, h * 1.06, h * 0.98, h * 1.04, h * 0.96],
                }}
                transition={{
                  duration: 3.6 + (i % 6) * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  delay: i * 0.22,
                }}
              />
            ) : (
              <rect x={i * colW} y={VBH - h} width={colW * 1.23} height={h} fill={`url(#${gradId})`} />
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}

export function FoldGradient({
  fold = 74,
  depth = 620,
  softness = 8,
  children,
  className,
  style,
  ...barProps
}: {
  fold?: number
  depth?: number
  softness?: number
  children?: ReactNode
  className?: string
  style?: CSSProperties
  bars?: number
  blur?: number
  peak?: number
  valley?: number
  stops?: Stop[]
  riseMs?: number
}) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '175%',
          transform: `perspective(${depth}px) rotateX(${fold}deg)`,
          transformOrigin: '50% 0%',
          willChange: 'transform',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            filter: softness > 0 ? `blur(${softness}px)` : undefined,
          }}
        >
          {children ?? <DiaGradient {...barProps} />}
        </div>
      </div>
    </div>
  )
}

function peakPath(widthFrac: number, heightFrac: number, pointiness: number): string {
  const w = widthFrac * VBW
  const startX = (VBW - w) / 2
  const endX = startX + w
  const peakX = VBW / 2
  const peakY = VBH - heightFrac * VBH
  const spread = (1 - pointiness) * (w / 2)
  const ext = VBH * 0.6
  return [
    `M ${startX} ${VBH}`,
    `Q ${peakX - spread} ${peakY}, ${peakX} ${peakY}`,
    `Q ${peakX + spread} ${peakY}, ${endX} ${VBH}`,
    `L ${endX} ${VBH + ext}`,
    `L ${startX} ${VBH + ext}`,
    'Z',
  ].join(' ')
}

export interface PeakedGradientProps {
  colors?: string[]
  peak?: number
  pointiness?: number
  blur?: number
  reveal?: 'mount' | 'scroll' | 'none'
  riseMs?: number
  replayKey?: number
  className?: string
  style?: CSSProperties
}

const PEAKED_COLORS = ['#E1ECFE', '#FFD400', '#FA3D1D', '#FD02F5', '#0358F7', '#340B05']

export function PeakedGradient({
  colors = PEAKED_COLORS,
  peak = 0.92,
  pointiness = 0.5,
  blur = 26,
  reveal = 'mount',
  riseMs = 1100,
  replayKey = 0,
  className,
  style,
}: PeakedGradientProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scaleY, setScaleY] = useState(reveal === 'none' ? 1 : 0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reveal === 'none' || reduced) {
      setScaleY(1)
      return
    }
    if (reveal === 'mount') {
      setScaleY(0)
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setScaleY(1)))
      return () => cancelAnimationFrame(id)
    }
    let ticking = false
    const measure = () => {
      ticking = false
      const el = wrapRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      setScaleY(Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.65))))
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(measure)
      }
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reveal, replayKey])

  const fid = `peak-blur-${replayKey}`
  const layers = colors
    .slice()
    .reverse()
    .map((color, i, arr) => {
      const t = arr.length === 1 ? 1 : i / (arr.length - 1)
      const heightFrac = peak * (0.55 + 0.45 * t)
      const widthFrac = 1.05 - 0.45 * t
      return { color, d: peakPath(widthFrac, heightFrac, pointiness) }
    })

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className={className}
      style={{
        transformOrigin: 'bottom',
        transform: `scaleY(${scaleY})`,
        transition: reveal === 'mount' ? `transform ${riseMs}ms cubic-bezier(0.16, 1, 0.3, 1)` : undefined,
        willChange: 'transform',
        ...style,
      }}
    >
      <svg
        style={{ height: '100%', width: '100%' }}
        viewBox={`0 0 ${VBW} ${VBH}`}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={fid} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={blur} />
          </filter>
        </defs>
        <g filter={`url(#${fid})`}>
          {layers.map((l, i) => (
            <path key={i} d={l.d} fill={l.color} />
          ))}
        </g>
      </svg>
    </div>
  )
}

const DODGE_RAINBOW = ['#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF']

export function DodgeGradient({
  colors = DODGE_RAINBOW,
  angle = 90,
  fade = 0.38,
  riseMs = 1100,
}: {
  colors?: string[]
  angle?: number
  fade?: number
  riseMs?: number
}) {
  const band = (colors.length ? colors : DODGE_RAINBOW).concat(colors[0] ?? DODGE_RAINBOW[0])
  const background =
    'linear-gradient(0deg, #000000 0%, #f7f7f7 100%), ' + `linear-gradient(${angle}deg, ${band.join(', ')})`
  const mask = `radial-gradient(75% 170% at 50% 100%, #000 ${Math.round(fade * 100)}%, transparent 78%)`

  const [shown, setShown] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      aria-hidden
      style={{
        height: '100%',
        width: '100%',
        transformOrigin: 'bottom',
        transform: shown ? 'scaleY(1)' : 'scaleY(0)',
        transition: `transform ${riseMs}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        willChange: 'transform',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          background,
          backgroundBlendMode: 'color-dodge, normal',
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      />
    </div>
  )
}

export default DiaGradient
