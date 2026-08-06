import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Steller Industries</title>
        <meta name="description" content="The story behind Steller Industries — a name that embodies excellence in sound, lighting, and visual experiences." />
      </Helmet>
      <section className="pt-32 pb-20 px-8 max-w-content mx-auto">
        <p className="section-label">About</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-paper">
          The Name
        </h1>
        <p className="mt-4 text-mute text-lg">Coming soon.</p>
      </section>
    </>
  )
}
