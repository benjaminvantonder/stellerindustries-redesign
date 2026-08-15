import { type ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  variant?: 'fade' | 'rise' | 'drift-left' | 'drift-right' | 'emerge' | 'bloom'
  delay?: number
  className?: string
  once?: boolean
}

const organicReveal: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: 'spring', stiffness: 60, damping: 20, mass: 1.2 },
    },
  },
  rise: {
    hidden: { opacity: 0, y: 60, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 60, damping: 20, mass: 1.2 },
    },
  },
  'drift-left': {
    hidden: { opacity: 0, x: 80, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 60, damping: 20, mass: 1.2 },
    },
  },
  'drift-right': {
    hidden: { opacity: 0, x: -80, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 60, damping: 20, mass: 1.2 },
    },
  },
  emerge: {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(16px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 50, damping: 20, mass: 1.4 },
    },
  },
  bloom: {
    hidden: { opacity: 0, scale: 0.8, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15, mass: 1 },
    },
  },
}

export function ScrollReveal({
  children,
  variant = 'rise',
  delay = 0,
  className,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={organicReveal[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.3, className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
