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
        {/* THE NAME */}
        <section className="min-h-[70vh] flex items-center">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal direction="left">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-ink leading-[0.9]">
                Steller
              </h1>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <p className="mt-12 text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
                The double &ldquo;L&rdquo; is deliberate. Spoken, it sounds like{' '}
                <em className="text-ink not-italic font-medium">stellar</em> — representing excellence.
                Written, it&apos;s more visually distinctive — just like our photography and
                videography. A name that embodies our commitment to top-tier sound, lighting, and
                visual experiences.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <blockquote className="mt-16 pl-6 border-l-2 border-accent/30">
                <p className="font-display text-2xl md:text-3xl text-ink leading-relaxed">
                  &ldquo;Recognised for our quality, memorable for our character.&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-32 md:py-40 bg-surface">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight max-w-2xl">
                Every cue matters. Every transition is intentional.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-muted text-lg leading-relaxed max-w-2xl">
                Events are sequences of moments, each one building on the last. A lighting cue
                that arrives half a beat late. A sound transition that doesn&apos;t land. These are
                the things guests remember — not as details, but as feelings.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">
                We approach every production as a chain: input, processing, output. Every link
                has to be clean. That&apos;s not perfectionism — it&apos;s the baseline.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          <Reveal direction="left">
            <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=960&q=80"
                alt="Sound mixing console in a dark venue"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </Reveal>
          <div className="flex items-center">
            <Reveal direction="right" delay={0.1}>
              <div className="p-8 md:p-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
                  Built from the ground up, one clean cue at a time.
                </h2>
                <p className="mt-6 text-muted text-lg leading-relaxed">
                  Steller Industries began with a single lighting rig and a conviction that
                  production quality shouldn&apos;t be a luxury reserved for the biggest budgets.
                  We started small and built our reputation one clean cue at a time.
                </p>
                <p className="mt-4 text-muted text-lg leading-relaxed">
                  Today, we handle full-scale event production across South Africa. The scale
                  changed. The standard didn&apos;t.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="py-32 md:py-40 bg-surface">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { number: '200+', label: 'Events' },
                  { number: '50+', label: 'Corporate clients' },
                  { number: '5', label: 'Disciplines' },
                  { number: '100%', label: 'South African' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl md:text-5xl font-bold text-accent">
                      {stat.number}
                    </p>
                    <p className="mt-3 text-xs text-muted uppercase tracking-widest">
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
