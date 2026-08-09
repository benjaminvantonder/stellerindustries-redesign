export interface Book {
  id: string
  title: string
  author: string
  authorId: string
  year: number
  genre: string
  description: string
  cover: string
  featured?: boolean
}

export const books: Book[] = [
  {
    id: 'the-quiet-between',
    title: 'The Quiet Between',
    author: 'Ava Mthembu',
    authorId: 'ava-mthembu',
    year: 2024,
    genre: 'Literary Fiction',
    description: 'A novel about the spaces people inhabit when they stop speaking — and what fills the silence.',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80',
    featured: true,
  },
  {
    id: 'cartography-of-grief',
    title: 'Cartography of Grief',
    author: 'James Okonkwo',
    authorId: 'james-okonkwo',
    year: 2024,
    genre: 'Essays',
    description: 'A collection of essays mapping the terrain of loss — personal, cultural, and collective.',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
    featured: true,
  },
  {
    id: 'the-last-cartographer',
    title: 'The Last Cartographer',
    author: 'Naledi Mokoena',
    authorId: 'naledi-mokoena',
    year: 2023,
    genre: 'Literary Fiction',
    description: 'A woman inherits her grandfather\'s maps and discovers they chart places that no longer exist — or never did.',
    cover: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&q=80',
  },
  {
    id: 'grammar-of-light',
    title: 'A Grammar of Light',
    author: 'Thandi Nkosi',
    authorId: 'thandi-nkosi',
    year: 2023,
    genre: 'Poetry',
    description: 'Poems that parse the syntax of illumination — how light constructs and deconstructs a day.',
    cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80',
  },
  {
    id: 'small-mercies',
    title: 'Small Mercies',
    author: 'Ava Mthembu',
    authorId: 'ava-mthembu',
    year: 2022,
    genre: 'Short Stories',
    description: 'Twelve stories about the ordinary kindnesses that sustain us — and the ordinary cruelties that don\'t.',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&q=80',
  },
  {
    id: 'the-house-on-meridian',
    title: 'The House on Meridian',
    author: 'James Okonkwo',
    authorId: 'james-okonkwo',
    year: 2022,
    genre: 'Literary Fiction',
    description: 'A family home becomes a mirror for three generations of unspoken histories.',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 'inherited-tongues',
    title: 'Inherited Tongues',
    author: 'Thandi Nkosi',
    authorId: 'thandi-nkosi',
    year: 2021,
    genre: 'Essays',
    description: 'Essays on language, translation, and the words we carry from one life to the next.',
    cover: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&q=80',
  },
  {
    id: 'the-inventory',
    title: 'The Inventory',
    author: 'Naledi Mokoena',
    authorId: 'naledi-mokoena',
    year: 2021,
    genre: 'Novel',
    description: 'A woman catalogs every object in her apartment before leaving the country — and discovers what she cannot pack.',
    cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80',
  },
]
