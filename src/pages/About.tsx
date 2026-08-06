import { Helmet } from 'react-helmet-async'
import Reveal from '@/components/Reveal'

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

      <div className="pt-32">
        {/* THE NAME — large pull-quote moment */}
        <section className="min-h-[70vh] flex items-center">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal>
              <p className="text-xs text-mute/50 uppercase tracking-widest mb-8">The Name</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-display text-6xl md:text-8xl font-bold text-paper leading-[0.95]">
                Steller
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-12 text-mute text-lg md:text-xl leading-relaxed max-w-2xl">
                The double "L" is deliberate. Spoken, it sounds like{' '}
                <em className="text-paper not-italic">stellar</em> — representing excellence.
                Written, it's more visually distinctive — just like our photography and
                videography. A name that embodies our commitment to top-tier sound, lighting, and
                visual experiences.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <blockquote className="mt-16 pl-6 border-l border-gold/30">
                <p className="font-display text-2xl md:text-3xl text-paper leading-relaxed">
                  "Recognised for our quality, memorable for our character."
                </p>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-32 md:py-40">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-paper leading-tight max-w-2xl">
                Every cue matters. Every transition is intentional.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-mute text-lg leading-relaxed max-w-2xl">
                Events are sequences of moments, each one building on the last. A lighting cue
                that arrives half a beat late. A sound transition that doesn't land. These are
                the things guests remember — not as details, but as feelings.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-mute text-lg leading-relaxed max-w-2xl">
                We approach every production as a chain: input, processing, output. Every link
                has to be clean. That's not perfectionism — it's the baseline.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Story */}
        <section className="py-32 md:py-40 border-t border-white/5">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-paper leading-tight max-w-2xl">
                Built from the ground up, one clean cue at a time.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-mute text-lg leading-relaxed max-w-2xl">
                Steller Industries began with a single lighting rig and a conviction that
                production quality shouldn't be a luxury reserved for the biggest budgets.
                We started small — local events, private functions, community festivals —
                and built our reputation one clean cue at a time.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-mute text-lg leading-relaxed max-w-2xl">
                Today, we handle full-scale event production across South Africa. The scale
                changed. The standard didn't.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { number: '200+', label: 'Events' },
                  { number: '50+', label: 'Corporate clients' },
                  { number: '5', label: 'Disciplines' },
                  { number: '100%', label: 'South African' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl md:text-5xl font-bold text-gold">
                      {stat.number}
                    </p>
                    <p className="mt-3 text-xs text-mute/60 uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  )
}
