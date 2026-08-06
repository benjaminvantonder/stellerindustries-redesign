import { Helmet } from 'react-helmet-async'
import Hero from '@/sections/hero/Hero'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Steller Industries — Excellence in Sound, Light, and Vision</title>
        <meta
          name="description"
          content="South Africa's premier sound, lighting, and visual experiences for events of every scale."
        />
      </Helmet>
      <Hero />
    </>
  )
}
