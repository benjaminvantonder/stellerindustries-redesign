import { type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  fadeIn,
  slideUp,
  slideLeft,
  slideRight,
  scaleIn,
} from '@/lib/motion'

interface ScrollRevealProps {
  children: ReactNode
  variant?: 'fade' | 'up' | 'left' | 'right' | 'scale'
  delay?: number
  className?: string
  once?: boolean
}

const variantMap: Record<string, Variants> = {
  fade: fadeIn,
  up: slideUp,
  left: slideLeft,
  right: slideRight,
  scale: scaleIn,
}

export function ScrollReveal({
  children,
  variant = 'up',
  delay = 0,
  className,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
