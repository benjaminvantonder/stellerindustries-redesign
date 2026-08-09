import { useRef, useEffect, useState, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
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

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
