export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  event?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Steller Industries transformed our gala into an unforgettable experience. The sound was pristine, the lighting was breathtaking, and the entire production felt seamless.',
    name: 'Thandi Nkosi',
    role: 'Events Director',
    event: 'Annual Gala Dinner',
  },
  {
    id: 2,
    quote:
      'Working with the Steller team felt like a true partnership. They understood our vision immediately and delivered something beyond what we imagined.',
    name: 'James van der Merwe',
    role: 'Creative Director',
    event: 'Brand Launch',
  },
  {
    id: 3,
    quote:
      'The attention to detail was remarkable. Every cue, every light change, every sound transition was perfectly timed. That kind of precision is rare.',
    name: 'Naledi Mokoena',
    role: 'Production Manager',
    event: 'Music Festival',
  },
  {
    id: 4,
    quote:
      'Our conference needed reliable, professional AV across multiple rooms simultaneously. Steller delivered without a single hiccup.',
    name: 'Pieter Joubert',
    role: 'Conference Organiser',
    event: 'Tech Summit 2024',
  },
  {
    id: 5,
    quote:
      'The visual setup for our product launch was on another level. Projection mapping, lighting cues, the whole package — our guests were blown away.',
    name: 'Aisha Patel',
    role: 'Marketing Manager',
    event: 'Product Launch',
  },
]
