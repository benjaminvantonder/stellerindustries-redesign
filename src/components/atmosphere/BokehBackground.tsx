import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Orb {
  readonly id: number
  readonly x: string
  readonly y: string
  readonly size: number
  readonly color: string
  readonly blur: number
  readonly duration: number
}

function generateOrbs(count: number): Orb[] {
  const colors = [
    'rgba(201, 168, 76, 0.08)',
    'rgba(201, 168, 76, 0.04)',
    'rgba(212, 185, 94, 0.06)',
    'rgba(154, 123, 48, 0.05)',
    'rgba(255, 255, 255, 0.03)',
    'rgba(201, 168, 76, 0.03)',
  ]
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: `${10 + Math.random() * 80}%`,
    y: `${10 + Math.random() * 80}%`,
    size: 200 + Math.random() * 400,
    color: colors[i % colors.length],
    blur: 60 + Math.random() * 80,
    duration: 20 + Math.random() * 30,
  }))
}

function usePerformanceCheck() {
  const [canUseBlur, setCanUseBlur] = useState(true)

  useEffect(() => {
    const isLowEnd = navigator.hardwareConcurrency <= 2
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isLowEnd || prefersReduced) {
      setCanUseBlur(false)
    }
  }, [])

  return canUseBlur
}

interface BokehBackgroundProps {
  orbCount?: number
  className?: string
}

export function BokehBackground({ orbCount = 6, className = '' }: BokehBackgroundProps) {
  const orbs = useRef(generateOrbs(orbCount))
  const canUseBlur = usePerformanceCheck()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { stiffness: 15, damping: 30, mass: 2 }
  const orbX = useSpring(mouseX, springConfig)
  const orbY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      mouseX.set(x * 30)
      mouseY.set(y * 30)
    },
    [mouseX, mouseY],
  )

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      style={{ willChange: 'transform' }}
    >
      {orbs.current.map(orb => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: canUseBlur ? `blur(${orb.blur}px)` : 'none',
            translateX: orbX,
            translateY: orbY,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
            scale: [1, 1.1 + Math.random() * 0.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Static fallback overlay for low-end devices */}
      {!canUseBlur && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,168,76,0.06)_0%,transparent_60%),radial-gradient(ellipse_at_70%_80%,rgba(201,168,76,0.04)_0%,transparent_60%)]" />
      )}
    </motion.div>
  )
}
