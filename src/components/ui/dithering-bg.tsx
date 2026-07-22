'use client'

import { Suspense, lazy } from 'react'

const Dithering = lazy(() =>
  import('@paper-design/shaders-react').then((mod) => ({ default: mod.Dithering }))
)

type DitheringBackgroundProps = {
  /** Empty/background color — defaults to the site's light background (replaces the black from the reference). */
  colorBack?: string
  /** Dot/ink color. */
  colorFront?: string
  speed?: number
  scale?: number
  className?: string
}

export function DitheringBackground({
  colorBack = '#ececea',
  colorFront = '#d4af37',
  speed = 0.4,
  scale = 1.2,
  className,
}: DitheringBackgroundProps) {
  return (
    <Suspense fallback={null}>
      <Dithering
        colorBack={colorBack}
        colorFront={colorFront}
        shape="warp"
        type="4x4"
        speed={speed}
        scale={scale}
        className={className ?? 'size-full'}
        minPixelRatio={1}
      />
    </Suspense>
  )
}
