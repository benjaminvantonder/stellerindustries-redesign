import { Helmet } from 'react-helmet-async'

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Testimonials — Steller Industries</title>
        <meta name="description" content="What our clients say about Steller Industries — sound, lighting, and visual experiences." />
      </Helmet>
      <section className="pt-32 pb-20 px-8 max-w-content mx-auto">
        <p className="section-label">Testimonials</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-paper">
          Client Voices
        </h1>
        <p className="mt-4 text-mute text-lg">Coming soon.</p>
      </section>
    </>
  )
}
