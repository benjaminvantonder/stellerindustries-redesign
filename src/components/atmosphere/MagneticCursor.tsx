import { useCallback, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticCursorProps {
  strength?: number
  className?: string
}

export function MagneticCursor({ strength = 0.3, className = '' }: MagneticCursorProps) {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { stiffness: 200, damping: 25, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    },
    [cursorX, cursorY],
  )

  useEffect(() => {
    // Only on desktop with pointer
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  // Magnetic pull on nearby elements
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const elements = document.querySelectorAll('[data-magnetic]')
      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distX = e.clientX - centerX
        const distY = e.clientY - centerY
        const dist = Math.sqrt(distX * distX + distY * distY)
        const maxDist = 200

        if (dist < maxDist) {
          const pull = (1 - dist / maxDist) * strength
          ;(el as HTMLElement).style.transform = `translate(${distX * pull}px, ${distY * pull}px)`
        } else {
          ;(el as HTMLElement).style.transform = 'translate(0, 0)'
        }
      })
    }

    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [strength])

  // Hide on touch devices
  const isTouch = useRef(false)
  useEffect(() => {
    const check = () => { isTouch.current = 'ontouchstart' in window }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isTouch.current) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-gold)] mix-blend-difference md:block ${className}`}
        style={{ x, y }}
      />
      {/* Trailing glow */}
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[9998] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-gold)]/20 md:block ${className}`}
        style={{
          x: useSpring(cursorX, { stiffness: 50, damping: 30, mass: 1 }),
          y: useSpring(cursorY, { stiffness: 50, damping: 30, mass: 1 }),
        }}
      />
    </>
  )
}
