import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import SignalLine from '@/components/SignalLine'
import SignalChip from '@/components/SignalChip'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import ServiceDetail from '@/sections/services/ServiceDetail'
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
      <div className="pt-24">
        <SignalLine>
          <SignalChip label="00:00" top="12%" />
          <SignalChip label="SOUND" top="17%" />
          <SignalChip label="00:14" top="27%" />
          <SignalChip label="LIGHTING" top="32%" />
          <SignalChip label="00:28" top="42%" />
          <SignalChip label="VISUALS" top="47%" />
          <SignalChip label="00:42" top="57%" />
          <SignalChip label="PHOTO" top="62%" />
          <SignalChip label="00:56" top="72%" />
          <SignalChip label="VIDEO" top="77%" />
        </SignalLine>

        <section className="py-16 md:py-24">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
            <Reveal>
              <SectionHeading
                timecode="00:00"
                label="Services"
                heading="What We Do"
              />
              <p className="mt-6 text-mute text-lg max-w-2xl">
                Five disciplines, one standard. Every service we offer is built on the same
                principle: clean signal, intentional execution, zero compromise.
              </p>
            </Reveal>

            <div className="mt-16">
              {services.map((service, i) => (
                <ServiceDetail key={service.id} service={service} index={i} />
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-16 pt-8 border-t border-signal/10">
                <p className="text-mute mb-4">Ready to discuss your production?</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-signal text-void font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-signal-300 transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  )
}
