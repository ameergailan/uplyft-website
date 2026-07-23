import type { ReactNode } from 'react'

type LiquidRetinaBoxProps = {
  children: ReactNode
  className?: string
}

export function LiquidRetinaBox({ children, className = '' }: LiquidRetinaBoxProps) {
  return (
    <div
      className="relative rounded-[32px] p-px"
      style={{
        background:
          'linear-gradient(148deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.42) 22%, rgba(255,255,255,0.12) 52%, rgba(255,255,255,0.28) 100%)',
        boxShadow:
          '0 24px 64px rgba(0,0,0,0.07), 0 8px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.65)',
      }}
    >
      <div
        className="relative overflow-hidden rounded-[31px] bg-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-18px_36px_rgba(255,255,255,0.06)] backdrop-blur-[48px] backdrop-saturate-[185%] backdrop-brightness-[1.08] [-webkit-backdrop-filter:blur(48px)_saturate(185%)_brightness(1.08)]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-soft-light"
          aria-hidden
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            backgroundSize: '128px 128px',
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[42%]"
          aria-hidden
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.14) 48%, transparent 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 38%, transparent 62%, rgba(255,255,255,0.08) 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-6 bottom-0 h-px"
          aria-hidden
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)',
          }}
        />
        <div className={`relative z-10 ${className}`}>{children}</div>
      </div>
    </div>
  )
}
