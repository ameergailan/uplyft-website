'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React, { HTMLAttributes, useMemo } from 'react'

interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  perspective?: number
  beamsPerSide?: number
  beamSize?: number
  beamDelayMax?: number
  beamDelayMin?: number
  beamDuration?: number
  gridColor?: string
  /** Vertical grid lines; defaults to gridColor */
  gridColorVertical?: string
  beamSides?: ('top' | 'right' | 'bottom' | 'left')[]
}

const GRID_HORIZONTAL =
  '[background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color-h)_0_1px,_transparent_1px_var(--beam-size))_0_0/var(--beam-size)_var(--beam-size)]'

const GRID_VERTICAL =
  '[background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(90deg,_var(--grid-color-v)_0_1px,_transparent_1px_var(--beam-size))_0_0/var(--beam-size)_var(--beam-size)]'

function GridFace({
  className,
  children,
  side,
}: {
  className: string
  children: React.ReactNode
  side: 'top' | 'right' | 'bottom' | 'left'
}) {
  const verticalInset =
    side === 'bottom' ? 'top-px bottom-px left-px right-px' : 'inset-x-0 top-px bottom-px'

  return (
    <div className={cn('absolute overflow-hidden [transform-style:preserve-3d]', className)}>
      <div className={cn('pointer-events-none absolute', verticalInset, GRID_VERTICAL)} />
      <div className={cn('pointer-events-none absolute inset-0 z-[1]', GRID_HORIZONTAL)} />
      {children}
    </div>
  )
}

/** White through UpLyft gold beam shades */
const BEAM_COLORS = ['#ffffff', '#f3ecd8', '#e8d9a8', '#e0be4c', '#d4af37', '#b8942a']

const Beam = ({
  width,
  x,
  delay,
  duration,
  color,
  aspectRatio,
}: {
  width: string | number
  x: string | number
  delay: number
  duration: number
  color: string
  aspectRatio: number
}) => {
  return (
    <motion.div
      style={
        {
          '--x': `${x}`,
          '--width': `${width}`,
          '--aspect-ratio': `${aspectRatio}`,
          '--background': `linear-gradient(${color}, transparent)`,
        } as React.CSSProperties
      }
      className="absolute left-[var(--x)] top-0 [aspect-ratio:1/var(--aspect-ratio)] [background:var(--background)] [width:var(--width)]"
      initial={{ y: '100cqmax', x: '-50%' }}
      animate={{ y: '-100%', x: '-50%' }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'linear',
      }}
    />
  )
}

type BeamConfig = {
  x: number
  delay: number
  color: string
  aspectRatio: number
}

function createBeams(
  side: string,
  beamsPerSide: number,
  beamSize: number,
  beamDelayMin: number,
  beamDelayMax: number
): BeamConfig[] {
  const beams: BeamConfig[] = []
  const cellsPerSide = Math.floor(100 / beamSize)
  const step = cellsPerSide / beamsPerSide

  for (let i = 0; i < beamsPerSide; i++) {
    const seed = side.charCodeAt(0) * 31 + i * 17
    const x = Math.floor(i * step)
    const delay =
      beamDelayMin + ((seed * 0.6180339887) % 1) * (beamDelayMax - beamDelayMin)

    beams.push({
      x,
      delay,
      color: BEAM_COLORS[seed % BEAM_COLORS.length],
      aspectRatio: (seed % 6) + 2,
    })
  }

  return beams
}

export const WarpBackground: React.FC<WarpBackgroundProps> = ({
  children,
  perspective = 100,
  className,
  beamsPerSide = 3,
  beamSize = 5,
  beamDelayMax = 3,
  beamDelayMin = 0,
  beamDuration = 3,
  gridColor = 'rgba(255,255,255,0.08)',
  gridColorVertical,
  beamSides = ['top', 'right', 'bottom', 'left'],
  ...props
}) => {
  const gridVertical = gridColorVertical ?? gridColor
  const topBeams = useMemo(
    () => createBeams('top', beamsPerSide, beamSize, beamDelayMin, beamDelayMax),
    [beamsPerSide, beamSize, beamDelayMin, beamDelayMax]
  )
  const rightBeams = useMemo(
    () => createBeams('right', beamsPerSide, beamSize, beamDelayMin, beamDelayMax),
    [beamsPerSide, beamSize, beamDelayMin, beamDelayMax]
  )
  const bottomBeams = useMemo(
    () => createBeams('bottom', beamsPerSide, beamSize, beamDelayMin, beamDelayMax),
    [beamsPerSide, beamSize, beamDelayMin, beamDelayMax]
  )
  const leftBeams = useMemo(
    () => createBeams('left', beamsPerSide, beamSize, beamDelayMin, beamDelayMax),
    [beamsPerSide, beamSize, beamDelayMin, beamDelayMax]
  )

  const renderBeams = (beams: BeamConfig[], prefix: string) =>
    beams.map((beam, index) => (
      <Beam
        key={`${prefix}-${index}`}
        width={`${beamSize}%`}
        x={`${beam.x * beamSize}%`}
        delay={beam.delay}
        duration={beamDuration}
        color={beam.color}
        aspectRatio={beam.aspectRatio}
      />
    ))

  const beamNodes = {
    top: renderBeams(topBeams, 'top'),
    right: renderBeams(rightBeams, 'right'),
    bottom: renderBeams(bottomBeams, 'bottom'),
    left: renderBeams(leftBeams, 'left'),
  }

  return (
    <div className={cn('relative rounded border p-20', className)} {...props}>
      <div
        style={
          {
            '--perspective': `${perspective}px`,
            '--grid-color': gridColor,
            '--grid-color-h': gridColor,
            '--grid-color-v': gridVertical,
            '--beam-size': `${beamSize}%`,
          } as React.CSSProperties
        }
        className="pointer-events-none absolute left-0 top-0 size-full overflow-hidden [clip-path:inset(0)] [container-type:size] [perspective:var(--perspective)] [transform-style:preserve-3d]"
      >
        {beamSides.includes('top') && (
          <GridFace
            side="top"
            className="[container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]"
          >
            {beamNodes.top}
          </GridFace>
        )}
        {beamSides.includes('bottom') && (
          <GridFace
            side="bottom"
            className="top-full [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]"
          >
            {beamNodes.bottom}
          </GridFace>
        )}
        {beamSides.includes('left') && (
          <GridFace
            side="left"
            className="left-0 top-0 [container-type:inline-size] [height:100cqmax] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [width:100cqh]"
          >
            {beamNodes.left}
          </GridFace>
        )}
        {beamSides.includes('right') && (
          <GridFace
            side="right"
            className="right-0 top-0 [container-type:inline-size] [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)]"
          >
            {beamNodes.right}
          </GridFace>
        )}
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}
