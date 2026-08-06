export interface Service {
  id: string
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'sound',
    title: 'Sound Engineering',
    description:
      'Professional sound design and reinforcement for events of every scale — from intimate gatherings to large-scale productions.',
    features: [
      'Multi-zone sound reinforcement',
      'Live mixing and monitoring',
      'Speaker system design',
      'Wireless microphone systems',
    ],
  },
  {
    id: 'lighting',
    title: 'Lighting Design',
    description:
      'Atmospheric and architectural lighting that transforms spaces and creates the perfect mood for your event.',
    features: [
      'Intelligent lighting rigs',
      'LED wash and effect lighting',
      'Architectural lighting design',
      'DMX programming',
    ],
  },
  {
    id: 'visuals',
    title: 'Visual Experiences',
    description:
      'Projection mapping, LED walls, and immersive visual installations that bring events to life.',
    features: [
      'Projection mapping',
      'LED wall installation',
      'Visual content creation',
      'Real-time visual processing',
    ],
  },
  {
    id: 'photography',
    title: 'Photography',
    description:
      'Event photography that captures the energy, emotion, and scale of your production.',
    features: [
      'Event documentation',
      'Behind-the-scenes capture',
      'High-resolution delivery',
      'Same-day edits',
    ],
  },
  {
    id: 'videography',
    title: 'Videography',
    description:
      'Cinematic event coverage and highlight reels that showcase the full impact of your production.',
    features: [
      'Multi-camera coverage',
      'Drone aerial footage',
      'Highlight reel editing',
      'Full event documentation',
    ],
  },
]
