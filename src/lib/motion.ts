import type { Variants, Transition } from 'framer-motion'

// ─── SPRING PHYSICS ───
export const spring: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
}

export const springGentle: Transition = {
  type: 'spring',
  stiffness: 60,
  damping: 25,
  mass: 1.2,
}

export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 25,
  mass: 0.8,
}

// ─── SCROLL REVEAL VARIANTS ───
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── STAGGER CONTAINER ───
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── LIGHT SOURCE HOVER ───
export const lightSourceHover: Variants = {
  rest: {
    boxShadow: 'var(--shadow-ambient)',
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
  hover: {
    boxShadow: 'var(--shadow-elevated)',
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

// ─── GLOW EFFECT ───
export const glowEffect: Variants = {
  rest: {
    opacity: 0.4,
    scale: 0.95,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
  hover: {
    opacity: 0.8,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

// ─── PARALLAX ───
export const parallaxSlow = {
  rest: { y: 0 },
  hover: { y: -8 },
}

export const parallaxFast = {
  rest: { y: 0 },
  hover: { y: -16 },
}

// ─── IMAGE REVEAL ───
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── THEME TRANSITION ───
export const themeTransition: Transition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1],
}
