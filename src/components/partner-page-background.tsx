export function PartnerPageBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(212, 175, 55, 0.42) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(212, 175, 55, 0.42) 1px, transparent 1px)
        `,
        backgroundSize: '44px 44px',
        WebkitMaskImage:
          'radial-gradient(ellipse 72% 92% at 50% 50%, transparent 14%, rgba(0,0,0,0.34) 40%, black 76%)',
        maskImage:
          'radial-gradient(ellipse 72% 92% at 50% 50%, transparent 14%, rgba(0,0,0,0.34) 40%, black 76%)',
      }}
    />
  )
}
