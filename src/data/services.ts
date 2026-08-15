import type { Service } from '@/types'

export const services: readonly Service[] = [
  {
    id: 'sound',
    title: 'Sound Engineering',
    description: 'Full-scale audio systems with professional mixers, speakers, and subwoofer arrays. We design acoustic environments that make every note resonate with clarity.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
  },
  {
    id: 'lighting',
    title: 'Lighting Design',
    description: 'LED washes, spotlights, and intelligent fixtures. We sculpt light to create atmosphere, drama, and visual rhythm that transforms any space.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
  },
  {
    id: 'visual',
    title: 'Visual Production',
    description: 'Projection mapping, LED walls, and immersive visual experiences. We create digital environments that captivate and communicate.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
  },
  {
    id: 'photography',
    title: 'Photography & Videography',
    description: 'Documenting events with precision and artistry. From corporate headshots to festival highlights, we capture moments that matter.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
  },
  {
    id: 'management',
    title: 'Stage Management',
    description: 'Technical direction and coordination for complex productions. We orchestrate every element so you can focus on your event.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
  },
] as const
