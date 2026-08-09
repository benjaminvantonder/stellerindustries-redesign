import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
import { services } from '@/data/services'

const serviceImages = [
  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — Steller Industries</title>
        <meta
          name="description"
          content="Sound, lighting, photography, and videography services for events of every scale."
        />
      </Helmet>

      <div className="pt-32">
        <section className="py-16 md:py-24">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal direction="left">
              <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[0.95] max-w-3xl">
                What we do.
              </h1>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <p className="mt-8 text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
                Five disciplines, one standard. Every service we offer is built on the same
                principle: clean signal, intentional execution, zero compromise.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services list with images */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-content mx-auto px-8 space-y-16 md:space-y-24">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                  <div className="aspect-[4/3] bg-elevated overflow-hidden rounded-lg shadow-kinetic md:[direction:ltr]">
                    <img
                      src={serviceImages[i]}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:[direction:ltr]">
                    <h2 className="font-display text-2xl md:text-4xl font-bold text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-muted text-lg leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 md:pb-32">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal>
              <p className="text-muted mb-6">Ready to discuss your production?</p>
              <Link
                to="/contact"
                className="btn-kinetic inline-flex items-center gap-2 bg-accent text-surface text-sm font-semibold px-7 py-3.5 hover:bg-accent-hover hover:shadow-kinetic-accent transition-all duration-300"
              >
                Get in Touch
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  )
}
