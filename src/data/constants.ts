import type { NavLink, Stat, ProcessStep } from '@/types'

export const NAV_LINKS: readonly NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/work', label: 'Work' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/contact', label: 'Contact' },
] as const

export const STATS: readonly Stat[] = [
  { value: '200+', label: 'Events delivered' },
  { value: '50+', label: 'Corporate clients' },
  { value: '5', label: 'Disciplines' },
  { value: '100%', label: 'South African' },
] as const

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    text: 'We learn about your event, your vision, and the technical requirements. Every detail matters.',
  },
  {
    step: '02',
    title: 'Design',
    text: 'Our team designs the sound, lighting, and visual experience. You get a clear plan before anything is installed.',
  },
  {
    step: '03',
    title: 'Delivery',
    text: 'We execute with precision. On time, on brief, with zero compromises on quality.',
  },
] as const
