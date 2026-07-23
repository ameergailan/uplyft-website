'use client'

import { DiaGradient, UPLYFT_GOLD_STOPS } from '@/components/ui/dia-gradient'

export function PartnerPageBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[20%]">
        <DiaGradient
          stops={UPLYFT_GOLD_STOPS}
          bars={11}
          blur={18}
          peak={0.95}
          valley={0.5}
          riseMs={1200}
          animateBars
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, var(--bg) 0%, rgba(236,236,234,0.5) 30%, rgba(236,236,234,0.08) 65%, transparent 100%)',
        }}
      />
    </>
  )
}
