import { Helmet } from 'react-helmet-async'

export default function Work() {
  return (
    <>
      <Helmet>
        <title>Work — Steller Industries</title>
        <meta name="description" content="See our portfolio of events — sound, lighting, and visual experiences delivered across South Africa." />
      </Helmet>
      <section className="pt-32 pb-20 px-8 max-w-content mx-auto">
        <p className="section-label">Work</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-paper">
          Portfolio
        </h1>
        <p className="mt-4 text-mute text-lg">Coming soon.</p>
      </section>
    </>
  )
}
