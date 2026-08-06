import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Steller Industries</title>
        <meta
          name="description"
          content="The story behind Steller Industries — a name that embodies excellence in sound, lighting, and visual experiences."
        />
      </Helmet>
      <section className="pt-32 pb-20 px-8 max-w-content mx-auto">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-paper">About</h1>
      </section>
    </>
  )
}
