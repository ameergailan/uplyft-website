'use client'

import { Suspense, lazy } from 'react'
import { liquidMetalPresets } from '@paper-design/shaders-react'

const LiquidMetal = lazy(() =>
  import('@paper-design/shaders-react').then((mod) => ({ default: mod.LiquidMetal }))
)

const backdrop = liquidMetalPresets[2].params

type LiquidMetalBackgroundProps = {
  /** Dark CTA band uses a darker metal + light veil for white copy. */
  variant?: 'light' | 'dark'
}

/**
 * Liquid-metal shader backdrop: fluid metallic motion (not the hero dithering).
 */
export function LiquidMetalBackground({ variant = 'dark' }: LiquidMetalBackgroundProps) {
  const isDark = variant === 'dark'

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <Suspense fallback={<div className={`absolute inset-0 ${isDark ? 'bg-[#111318]' : 'bg-[#c8c8ca]'}`} />}>
        <LiquidMetal
          {...backdrop}
          colorBack={isDark ? '#1a1c22' : '#b8b8ba'}
          colorTint={isDark ? '#d4af37' : '#ececea'}
          speed={0.75}
          className="size-full"
          style={{ width: '100%', height: '100%' }}
          minPixelRatio={1}
        />
      </Suspense>
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 70% 65% at 50% 45%, rgba(17,19,24,0.75) 0%, rgba(17,19,24,0.45) 55%, rgba(17,19,24,0.2) 100%)'
            : 'radial-gradient(ellipse 75% 70% at 50% 45%, rgba(236,236,234,0.72) 0%, rgba(236,236,234,0.35) 50%, rgba(236,236,234,0.15) 100%)',
        }}
      />
    </div>
  )
}
