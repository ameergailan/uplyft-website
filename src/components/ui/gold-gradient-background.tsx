'use client'

import { DiaGradient, UPLYFT_GOLD_STOPS } from '@/components/ui/dia-gradient'

export function GoldGradientBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[var(--bg)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0">
        <DiaGradient
          stops={UPLYFT_GOLD_STOPS}
          bars={11}
          blur={0}
          peak={0.95}
          valley={0.5}
          riseMs={1200}
          waveBars
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, var(--bg) 0%, rgba(236,236,234,0.72) 28%, rgba(236,236,234,0.2) 58%, transparent 78%)',
        }}
      />
    </>
  )
}
