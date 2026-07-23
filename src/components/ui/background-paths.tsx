'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute -inset-[20%] left-[8%] pointer-events-none">
      <svg
        className="h-full w-full scale-110 text-[#d4af37]"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>Background paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width * 1.15}
            strokeOpacity={0.14 + path.id * 0.018}
            initial={{ pathLength: 0.3, opacity: 0.55 }}
            animate={{
              pathLength: 1,
              opacity: [0.35, 0.65, 0.35],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + (path.id % 10),
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  )
}

/** Animated path layer for hero backgrounds */
export function BackgroundPathsLayer({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(17,19,24,0.15) 0%, rgba(17,19,24,0.55) 100%)',
        }}
      />
    </div>
  )
}
