import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Steller Industries</title>
        <meta
          name="description"
          content="Get in touch with Steller Industries for sound, lighting, and visual experiences for your event."
        />
      </Helmet>
      <section className="pt-32 pb-20 px-8 max-w-content mx-auto">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-paper">Contact</h1>
      </section>
    </>
  )
}
