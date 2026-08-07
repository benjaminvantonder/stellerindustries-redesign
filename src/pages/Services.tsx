import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
import { services } from '@/data/services'

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
            <Reveal>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-paper leading-[0.95] max-w-3xl">
                What we do.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-mute text-lg md:text-xl leading-relaxed max-w-2xl">
                Five disciplines, one standard. Every service we offer is built on the same
                principle: clean signal, intentional execution, zero compromise.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services list */}
        <section className="pb-16 md:pb-24">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="py-10 md:py-14 border-b border-white/5 last:border-b-0">
                  <h2 className="font-display text-2xl md:text-4xl font-bold text-paper">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-mute text-lg leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 md:pb-32">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal>
              <p className="text-mute mb-6">Ready to discuss your production?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-void text-sm font-medium px-7 py-3.5 hover:bg-gold/90 transition-colors duration-200"
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
