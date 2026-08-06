import { Helmet } from 'react-helmet-async'
import Reveal from '@/components/Reveal'
import { portfolio } from '@/data/portfolio'

export default function Work() {
  return (
    <>
      <Helmet>
        <title>Work — Steller Industries</title>
        <meta
          name="description"
          content="See our portfolio of events — sound, lighting, and visual experiences delivered across South Africa."
        />
      </Helmet>

      <div className="pt-32">
        <section className="py-16 md:py-24">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal>
              <p className="text-xs text-mute/50 uppercase tracking-widest mb-8">Work</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-paper leading-[0.95]">
                Portfolio
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 text-mute text-lg md:text-xl leading-relaxed max-w-2xl">
                A selection of productions we've delivered — from intimate corporate events
                to large-scale festival stages.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Portfolio grid — large images, minimal caption */}
        <section className="pb-32">
          <div className="max-w-content mx-auto px-8">
            <div className="space-y-24">
              {portfolio.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.06}>
                  <article>
                    <div className="aspect-[16/9] bg-ink/60 w-full" />
                    <div className="mt-6 flex items-baseline justify-between">
                      <div>
                        <h2 className="font-display text-xl md:text-2xl font-semibold text-paper">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-mute leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-xs text-mute/40 shrink-0 ml-8">{item.year}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
