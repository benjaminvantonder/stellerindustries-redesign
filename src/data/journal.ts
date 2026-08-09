export interface JournalPost {
  id: string
  title: string
  author: string
  date: string
  category: string
  excerpt: string
  image?: string
}

export const journalPosts: JournalPost[] = [
  {
    id: 'the-art-of-slow-reading',
    title: 'The Art of Slow Reading',
    author: 'Ava Mthembu',
    date: 'March 2024',
    category: 'Essay',
    excerpt: 'In an age of infinite scrolling, the deliberate act of reading slowly has become a quiet rebellion — and a necessary one.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
  },
  {
    id: 'what-we-mean-when-we-say-home',
    title: 'What We Mean When We Say "Home"',
    author: 'James Okonkwo',
    date: 'February 2024',
    category: 'Interview',
    excerpt: 'A conversation with James Okonkwo about displacement, inheritance, and the houses that hold our stories.',
  },
  {
    id: 'five-books-that-changed-how-i-write',
    title: 'Five Books That Changed How I Write',
    author: 'Naledi Mokoena',
    date: 'January 2024',
    category: 'List',
    excerpt: 'From Toni Morrison to W.G. Sebald — the books that taught me what a novel can do.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
  },
  {
    id: 'on-translation-and-loss',
    title: 'On Translation and Loss',
    author: 'Thandi Nkosi',
    date: 'December 2023',
    category: 'Essay',
    excerpt: 'Every translation is an act of elegy — something is always lost, and that loss is part of the meaning.',
  },
  {
    id: 'the-editorial-eye',
    title: 'The Editorial Eye: How We Choose What to Publish',
    author: 'Meridian Press',
    date: 'November 2023',
    category: 'Behind the Scenes',
    excerpt: 'An inside look at how our editorial team reads, discusses, and selects the manuscripts that become Meridian titles.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
  },
  {
    id: 'winter-reading-list',
    title: 'Our Winter Reading List',
    author: 'Meridian Press',
    date: 'October 2023',
    category: 'Recommendations',
    excerpt: 'Six books we\'ve been reading this season — from a debut novel to a restored classic.',
    image: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800&q=80',
  },
]
