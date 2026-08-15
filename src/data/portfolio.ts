import type { PortfolioItem } from '@/types'

export const portfolio: readonly PortfolioItem[] = [
  {
    id: 'aurora',
    title: 'Aurora Festival',
    category: 'Festival Production',
    description: 'Complete sound, lighting, and visual production for a 3-day music festival. 15,000 attendees, 4 stages, zero technical failures.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1280&q=80',
    featured: true,
  },
  {
    id: 'catalyst',
    title: 'Catalyst Conference',
    category: 'Corporate Event',
    description: 'Technical production for a tech conference with 12 simultaneous rooms and hybrid streaming capabilities.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1280&q=80',
    featured: true,
  },
  {
    id: 'lunar',
    title: 'Lunar Launch',
    category: 'Product Launch',
    description: 'Visual experiences and lighting design for a groundbreaking product reveal. 500 guests, immersive projection mapping.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1280&q=80',
  },
  {
    id: 'quantum',
    title: 'Quantum Summit',
    category: 'Tech Summit',
    description: 'Multi-site conference production with simultaneous streaming to 3 locations across South Africa.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1280&q=80',
  },
  {
    id: 'eclipse',
    title: 'Eclipse Exhibition',
    category: 'Art Installation',
    description: 'Interactive light and sound installation at a contemporary art exhibition. 6-month run, 50,000+ visitors.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1280&q=80',
  },
  {
    id: 'titan',
    title: 'Titan Workshop',
    category: 'Workshop Series',
    description: 'Hands-on production workshop series for aspiring technicians. 8 sessions, 120 participants.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1280&q=80',
  },
] as const
