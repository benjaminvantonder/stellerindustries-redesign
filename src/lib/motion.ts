import type { Variants, Transition } from 'framer-motion'

// ─── ORGANIC SPRING PHYSICS ───
export const spring: Transition = {
  type: 'spring',
  stiffness: 60,
  damping: 20,
  mass: 1.2,
}

export const springGentle: Transition = {
  type: 'spring',
  stiffness: 40,
  damping: 25,
  mass: 1.5,
}

export const springFluid: Transition = {
  type: 'spring',
  stiffness: 80,
  damping: 18,
  mass: 1,
}

// ─── PAGE TRANSITION ───
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(8px)',
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
      mass: 1.2,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    filter: 'blur(6px)',
    scale: 1.01,
    transition: { duration: 0.3, ease: 'easeIn' as const },
  },
}

export const pageChild: Variants = {
  initial: { opacity: 0, y: 30, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 60, damping: 20 },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(4px)',
    transition: { duration: 0.2 },
  },
}

// ─── ORGANIC REVEAL ───
export const organicFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: 'spring', stiffness: 60, damping: 20, mass: 1.2 },
  },
}

export const organicRise: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 60, damping: 20, mass: 1.2 },
  },
}

export const organicDriftLeft: Variants = {
  hidden: { opacity: 0, x: 80, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 60, damping: 20, mass: 1.2 },
  },
}

export const organicDriftRight: Variants = {
  hidden: { opacity: 0, x: -80, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 60, damping: 20, mass: 1.2 },
  },
}

export const organicEmerge: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: 'blur(16px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 50, damping: 20, mass: 1.4 },
  },
}

// ─── BOKEH SHIFT ───
export const bokehShift: Variants = {
  hidden: { opacity: 0, scale: 0.6, filter: 'blur(40px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 30, damping: 25, mass: 2 },
  },
}

// ─── STAGGER ORGANIC ───
export const staggerOrganic: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 60, damping: 20, mass: 1.2 },
  },
}

// ─── GLOW PULSE ───
export const glowPulse: Variants = {
  rest: {
    opacity: 0.4,
    scale: 1,
    transition: { type: 'spring', stiffness: 60, damping: 20 },
  },
  hover: {
    opacity: 1,
    scale: 1.05,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
}

// ─── MAGNETIC HOVER ───
export const magneticHover: Variants = {
  rest: {
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
  hover: {
    scale: 1.03,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
}

// ─── THEME TRANSITION ───
export const themeTransition: Transition = {
  type: 'spring',
  stiffness: 60,
  damping: 20,
  mass: 1,
}
