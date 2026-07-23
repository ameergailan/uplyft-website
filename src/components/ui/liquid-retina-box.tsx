import type { ReactNode } from 'react'

type LiquidRetinaBoxProps = {
  children: ReactNode
  className?: string
}

export function LiquidRetinaBox({ children, className = '' }: LiquidRetinaBoxProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/55 bg-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl backdrop-saturate-150 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.12) 42%, rgba(255,255,255,0.02) 100%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
