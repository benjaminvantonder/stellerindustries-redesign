import { Helmet } from 'react-helmet-async'
import Reveal from '@/components/Reveal'
import { portfolio } from '@/data/portfolio'

const images = [
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1280&q=80',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1280&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1280&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1280&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1280&q=80',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1280&q=80',
]

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
            <Reveal direction="left">
              <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[0.95]">
                Portfolio
              </h1>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <p className="mt-8 text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
                A selection of productions we&apos;ve delivered — from intimate corporate events
                to large-scale festival stages.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-32">
          <div className="max-w-content mx-auto px-8">
            <div className="space-y-20">
              {portfolio.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.05} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <article className="overflow-hidden rounded-2xl border border-ink/10">
                    <div className="aspect-[16/9] bg-ink/5 overflow-hidden">
                      <img
                        src={images[i]}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <h2 className="font-display text-xl md:text-2xl font-semibold text-ink">
                            {item.title}
                          </h2>
                          <p className="mt-2 text-muted leading-relaxed max-w-xl">
                            {item.description}
                          </p>
                        </div>
                        <span className="text-xs text-muted/40 shrink-0 ml-8">{item.year}</span>
                      </div>
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
