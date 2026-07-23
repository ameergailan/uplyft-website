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
          'radial-gradient(ellipse 70% 65% at 50% 36%, transparent 18%, rgba(0,0,0,0.35) 42%, black 78%)',
        maskImage:
          'radial-gradient(ellipse 70% 65% at 50% 36%, transparent 18%, rgba(0,0,0,0.35) 42%, black 78%)',
      }}
    />
  )
}
