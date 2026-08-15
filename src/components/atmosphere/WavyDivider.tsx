interface WavyDividerProps {
  flip?: boolean
  color?: string
  className?: string
}

const PATHS = [
  'M0,64 C200,120 400,0 600,60 C800,120 1000,20 1200,64 L1200,120 L0,120 Z',
  'M0,40 C150,100 350,0 500,50 C650,100 850,10 1000,60 C1100,80 1150,40 1200,40 L1200,120 L0,120 Z',
  'M0,80 C100,40 300,100 500,60 C700,20 900,90 1100,50 L1200,40 L1200,120 L0,120 Z',
]

export function WavyDivider({ flip = false, color = 'var(--color-bg)', className = '' }: WavyDividerProps) {
  const pathIndex = Math.floor(Math.random() * PATHS.length)

  return (
    <div
      className={`pointer-events-none relative -mt-px w-full overflow-hidden ${className}`}
      style={{
        height: 'clamp(60px, 8vw, 120px)',
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={PATHS[pathIndex]}
          fill={color}
          opacity="0.6"
        />
        <path
          d={PATHS[(pathIndex + 1) % PATHS.length]}
          fill={color}
          opacity="0.3"
        />
      </svg>
    </div>
  )
}
