import { Helmet } from 'react-helmet-async'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — Steller Industries</title>
        <meta name="description" content="Sound, lighting, photography, and videography services for events of every scale." />
      </Helmet>
      <section className="pt-32 pb-20 px-8 max-w-content mx-auto">
        <p className="section-label">Services</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-paper">
          What We Do
        </h1>
        <p className="mt-4 text-mute text-lg">Coming soon.</p>
      </section>
    </>
  )
}
