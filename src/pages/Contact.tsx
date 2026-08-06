import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Steller Industries</title>
        <meta name="description" content="Get in touch with Steller Industries for sound, lighting, and visual experiences for your event." />
      </Helmet>
      <section className="pt-32 pb-20 px-8 max-w-content mx-auto">
        <p className="section-label">Contact</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-paper">
          Get in Touch
        </h1>
        <p className="mt-4 text-mute text-lg">Coming soon.</p>
      </section>
    </>
  )
}
