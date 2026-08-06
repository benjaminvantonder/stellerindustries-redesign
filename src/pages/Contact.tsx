import { Helmet } from 'react-helmet-async'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import SignalLine from '@/components/SignalLine'
import SignalChip from '@/components/SignalChip'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/sections/contact/ContactForm'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Steller Industries</title>
        <meta
          name="description"
          content="Get in touch with Steller Industries for sound, lighting, and visual experiences for your event."
        />
      </Helmet>
      <div className="pt-24">
        <SignalLine>
          <SignalChip label="00:00" top="15%" />
          <SignalChip label="CONTACT" top="20%" />
        </SignalLine>

        <section className="py-16 md:py-24">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
            <Reveal>
              <SectionHeading
                timecode="00:00"
                label="Contact"
                heading="Get in Touch"
              />
              <p className="mt-6 text-mute text-lg max-w-2xl">
                Ready to start your production? We'd love to hear about your event.
                Fill in the form or reach us directly.
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Contact info */}
              <div className="lg:col-span-2">
                <Reveal delay={0.2}>
                  <div className="space-y-8">
                    <div>
                      <p className="section-label mb-4">Direct Contact</p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-mute">
                          <Mail size={16} className="text-signal/50" />
                          info@stellerindustries.co.za
                        </li>
                        <li className="flex items-center gap-3 text-sm text-mute">
                          <Phone size={16} className="text-signal/50" />
                          +27 XX XXX XXXX
                        </li>
                        <li className="flex items-center gap-3 text-sm text-mute">
                          <MapPin size={16} className="text-signal/50" />
                          South Africa
                        </li>
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-signal/10">
                      <p className="section-label mb-4">WhatsApp</p>
                      <a
                        href="https://wa.me/27000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-signal/20 text-paper font-mono text-xs tracking-widest uppercase px-5 py-2.5 hover:border-signal/40 transition-colors duration-200"
                      >
                        <MessageCircle size={14} />
                        Chat on WhatsApp
                      </a>
                    </div>

                    <div className="pt-6 border-t border-signal/10">
                      <p className="section-label mb-4">Response Time</p>
                      <p className="text-sm text-mute">
                        We typically respond within 24 hours during business days.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
