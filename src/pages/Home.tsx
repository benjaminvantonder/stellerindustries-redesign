import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
import { services } from '@/data/services'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Steller Industries — Excellence in Sound, Light, and Vision</title>
        <meta
          name="description"
          content="South Africa's premier sound, lighting, and visual experiences for events of every scale."
        />
      </Helmet>

      {/* Cream strip for notch blending */}
      <div className="h-10 bg-cream" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full pt-24">
          <Reveal direction="left">
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold text-white leading-[0.9] tracking-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              Sound.
              <br />
              Light.
              <br />
              Vision.
            </h1>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <p className="mt-8 text-white/80 text-lg md:text-xl max-w-lg leading-relaxed">
              Excellence in sound, lighting, and visual experiences for events across South Africa.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-ink text-sm font-semibold px-7 py-3.5 hover:bg-white/90 transition-all duration-300 rounded-full"
              >
                Start a Project
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white text-sm px-7 py-3.5 hover:border-white hover:bg-white/10 transition-all duration-300 rounded-full"
              >
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Statement */}
      <section className="py-32 md:py-44">
        <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] max-w-3xl text-balance">
              We make light happen in darkness. Sound that moves people. Visuals that stop them in their tracks.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 text-muted text-lg leading-relaxed max-w-2xl">
              From intimate corporate gatherings to large-scale festival productions, we handle
              every element of your event's technical production — sound engineering, lighting
              design, visual experiences, photography, and videography. One team, one standard,
              zero compromise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 md:py-44 bg-white">
        <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
          <Reveal>
            <h2 className="font-display text-sm text-accent tracking-widest uppercase mb-16 font-semibold">
              Services
            </h2>
          </Reveal>

          <div className="space-y-10 md:space-y-14">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.05} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="border-l-2 border-ink/10 pl-6">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-muted text-base md:text-lg leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16">
              <Link
                to="/services"
                className="text-accent text-sm font-semibold hover:text-accent-hover transition-colors"
              >
                All services &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 md:py-44">
        <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
          <Reveal>
            <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl text-ink leading-snug max-w-4xl">
              &ldquo;The attention to detail was remarkable. Every cue, every light change, every
              sound transition was perfectly timed.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-baseline gap-4">
              <div className="w-8 h-px bg-ink/20" />
              <div>
                <p className="text-ink text-sm font-medium">Naledi Mokoena</p>
                <p className="text-muted/50 text-sm mt-0.5">Production Manager &middot; Music Festival</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white">
        <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight max-w-2xl">
              Let's build something extraordinary.
            </h2>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-ink text-surface text-sm font-semibold px-7 py-3.5 hover:bg-ink/80 transition-all duration-300 rounded-full"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
