export interface Author {
  id: string
  name: string
  bio: string
  portrait: string
  books: string[]
}

export const authors: Author[] = [
  {
    id: 'ava-mthembu',
    name: 'Ava Mthembu',
    bio: 'Ava Mthembu is a South African novelist and short story writer. Her work explores the textures of domestic life and the quiet architectures of family. She has been awarded the Windham-Campbell Prize and lives in Cape Town.',
    portrait: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
    books: ['The Quiet Between', 'Small Mercies'],
  },
  {
    id: 'james-okonkwo',
    name: 'James Okonkwo',
    bio: 'James Okonkwo is a Nigerian-South African essayist and novelist. His writing moves between memoir and criticism, examining grief, memory, and the landscapes we inherit. He teaches creative writing at the University of Cape Town.',
    portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    books: ['Cartography of Grief', 'The House on Meridian'],
  },
  {
    id: 'naledi-mokoena',
    name: 'Naledi Mokoena',
    bio: 'Naledi Mokoena writes novels about objects, places, and the stories they hold. Her work has been longlisted for the Booker Prize and translated into twelve languages. She is based in Johannesburg.',
    portrait: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
    books: ['The Last Cartographer', 'The Inventory'],
  },
  {
    id: 'thandi-nkosi',
    name: 'Thandi Nkosi',
    bio: 'Thandi Nkosi is a poet and essayist whose work interrogates language, light, and the body\'s relationship to space. She has received the Ingrid Jonker Prize and publishes widely in literary journals.',
    portrait: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    books: ['A Grammar of Light', 'Inherited Tongues'],
  },
]
