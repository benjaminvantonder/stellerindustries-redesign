import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Steller Industries — Excellence in Sound, Light, and Vision</title>
        <meta name="description" content="South Africa's premier sound, lighting, and visual experiences for events." />
      </Helmet>
      <section className="pt-32 pb-20 px-8 max-w-content mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-paper leading-tight">
          Sound. Light.<br />Vision.
        </h1>
        <p className="mt-6 text-mute text-lg max-w-xl">
          Excellence in sound, lighting, and visual experiences for events across South Africa.
        </p>
      </section>
    </>
  )
}
