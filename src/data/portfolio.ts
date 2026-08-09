export interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  year: string
}

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    title: 'Sunset Festival 2024',
    category: 'Festival',
    description: 'Full sound, lighting, and visual production for a 5,000-capacity outdoor music festival.',
    year: '2024',
  },
  {
    id: 2,
    title: 'Nedbank Gala Dinner',
    category: 'Corporate',
    description: 'Multi-zone sound reinforcement and architectural lighting for a 500-guest corporate gala.',
    year: '2024',
  },
  {
    id: 3,
    title: 'Joburg Fashion Week',
    category: 'Fashion',
    description: 'Intelligent lighting rigs and real-time visual processing for runway productions.',
    year: '2024',
  },
  {
    id: 4,
    title: 'Tech Summit Cape Town',
    category: 'Conference',
    description: 'Multi-room AV infrastructure for a 3-day technology conference across 4 venues.',
    year: '2023',
  },
  {
    id: 5,
    title: 'Brand Relaunch Event',
    category: 'Corporate',
    description: 'Projection mapping and immersive visual installation for a major brand relaunch.',
    year: '2023',
  },
  {
    id: 6,
    title: 'Year-End Celebration',
    category: 'Private',
    description: 'Complete sound and lighting design for a 1,000-guest year-end celebration.',
    year: '2023',
  },
]
