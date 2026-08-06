import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
import { services } from '@/data/services'
import { portfolio } from '@/data/portfolio'

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

      {/* Hero */}
      <section className="relative min-h-screen flex items-center spotlight overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/40" />
        </div>

        <div className="relative z-10 pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-paper leading-[0.95] tracking-tight">
            Sound.
            <br />
            Light.
            <br />
            Vision.
          </h1>

          <p className="mt-8 text-mute text-lg md:text-xl max-w-lg leading-relaxed">
            Excellence in sound, lighting, and visual experiences for events across South Africa.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-void text-sm font-medium px-6 py-3 hover:bg-gold/90 transition-colors duration-200"
            >
              Start a Project
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border border-white/15 text-paper text-sm px-6 py-3 hover:border-white/30 transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do — intro */}
      <section className="py-32 md:py-40">
        <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
          <Reveal>
            <p className="text-xs text-mute/50 uppercase tracking-widest mb-8">What We Do</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-paper leading-tight max-w-3xl">
              We make light happen in darkness. Sound that moves people. Visuals that stop them in their tracks.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-mute text-lg leading-relaxed max-w-2xl">
              From intimate corporate gatherings to large-scale festival productions, we handle
              every element of your event's technical production — sound engineering, lighting
              design, visual experiences, photography, and videography. One team, one standard,
              zero compromise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured image — full-bleed */}
      <section className="relative">
        <Reveal>
          <div className="aspect-[21/9] md:aspect-[3/1] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
              alt="Large-scale event production with stage lighting"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
          <Reveal>
            <p className="text-xs text-mute/50 uppercase tracking-widest mb-8">Services</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-paper leading-tight max-w-2xl mb-16">
              Five disciplines. One standard.
            </h2>
          </Reveal>

          <div className="space-y-12 md:space-y-16">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-b border-white/5 pb-12 md:pb-16">
                  <div className="md:col-span-4">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-paper">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-mute text-lg leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16">
              <Link
                to="/services"
                className="text-gold text-sm hover:text-gold/80 transition-colors"
              >
                All services &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Full-bleed image split */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-8 md:px-0">
        <Reveal>
          <div className="aspect-square md:aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=960&q=80"
              alt="Sound engineering mixing console"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="aspect-square md:aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=960&q=80"
              alt="Concert crowd with stage lighting"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Featured Work */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
          <Reveal>
            <p className="text-xs text-mute/50 uppercase tracking-widest mb-8">Work</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-paper leading-tight max-w-2xl mb-16">
              Recent productions.
            </h2>
          </Reveal>

          <div className="space-y-24">
            {portfolio.slice(0, 3).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <Link to="/work" className="group block">
                  <div className="aspect-[16/9] bg-ink/60 overflow-hidden">
                    <img
                      src={[
                        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1280&q=80',
                        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1280&q=80',
                        'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1280&q=80',
                      ][i]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between">
                    <div>
                      <p className="text-xs text-mute/40 mb-2">{item.category} · {item.year}</p>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-paper group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-mute leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16">
              <Link
                to="/work"
                className="text-gold text-sm hover:text-gold/80 transition-colors"
              >
                View full portfolio &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
          <Reveal>
            <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl text-paper leading-snug max-w-4xl">
              &ldquo;The attention to detail was remarkable. Every cue, every light change, every
              sound transition was perfectly timed.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-baseline gap-4">
              <div className="w-8 h-px bg-gold/40" />
              <div>
                <p className="text-paper text-sm">Naledi Mokoena</p>
                <p className="text-mute/50 text-sm mt-0.5">Production Manager · Music Festival</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { number: '200+', label: 'Events produced' },
                { number: '50+', label: 'Corporate clients' },
                { number: '5', label: 'Service disciplines' },
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

      {/* CTA */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-paper leading-tight max-w-2xl">
              Ready to start your production?
            </h2>
            <p className="mt-6 text-mute text-lg max-w-xl">
              Let's build something that sounds as good as it looks.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-void text-sm font-medium px-6 py-3 hover:bg-gold/90 transition-colors duration-200"
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
