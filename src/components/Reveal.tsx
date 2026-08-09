import { useRef, useEffect, useState, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
}

export default function Reveal({ children, className = '', delay = 0, direction = 'up' }: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    setPrefersReduced(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  }, [])

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  const variants = {
    up: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variants[direction].initial}
      animate={isInView ? variants[direction].animate : variants[direction].initial}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
