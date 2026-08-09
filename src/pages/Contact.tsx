import { useState, type FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import Reveal from '@/components/Reveal'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT
  const [status, setStatus] = useState<Status>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
    message: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!endpoint) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', event: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-surface border border-ink/10 px-5 py-3.5 text-ink text-sm placeholder:text-muted/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 rounded-lg'

  return (
    <>
      <Helmet>
        <title>Contact — Steller Industries</title>
        <meta
          name="description"
          content="Get in touch with Steller Industries for sound, lighting, and visual experiences for your event."
        />
      </Helmet>

      <div className="pt-32">
        <section className="py-16 md:py-24">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal direction="left">
              <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[0.95]">
                Get in touch.
              </h1>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <p className="mt-8 text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
                Ready to start your production? We&apos;d love to hear about your event.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-32">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
              {/* Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Reveal>
                    <div>
                      <label htmlFor="name" className="block text-sm text-ink mb-2 font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.05}>
                    <div>
                      <label htmlFor="email" className="block text-sm text-ink mb-2 font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                        placeholder="you@company.co.za"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div>
                      <label htmlFor="event" className="block text-sm text-ink mb-2 font-medium">
                        Event Type
                      </label>
                      <input
                        id="event"
                        type="text"
                        value={formData.event}
                        onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                        className={inputClass}
                        placeholder="e.g. Corporate gala, festival, product launch"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <div>
                      <label htmlFor="message" className="block text-sm text-ink mb-2 font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your event..."
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.2}>
                    <div className="flex items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="btn-kinetic bg-accent text-surface text-sm font-semibold px-7 py-3.5 hover:bg-accent-hover hover:shadow-kinetic-accent transition-all duration-300 disabled:opacity-50 rounded-lg"
                      >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                      </button>

                      {status === 'success' && (
                        <span className="text-sm text-green-600">Sent successfully</span>
                      )}
                      {status === 'error' && (
                        <span className="text-sm text-red-500">
                          {!endpoint ? 'Form not configured' : 'Failed to send'}
                        </span>
                      )}
                    </div>
                  </Reveal>
                </form>
              </div>

              {/* Contact info */}
              <div className="lg:col-span-2">
                <Reveal delay={0.2}>
                  <div className="space-y-10">
                    <div>
                      <p className="text-sm text-ink font-medium mb-2">Email</p>
                      <a
                        href="mailto:info@stellerindustries.co.za"
                        className="link-kinetic text-muted hover:text-accent transition-colors"
                      >
                        info@stellerindustries.co.za
                      </a>
                    </div>

                    <div>
                      <p className="text-sm text-ink font-medium mb-2">Phone</p>
                      <p className="text-muted">+27 XX XXX XXXX</p>
                    </div>

                    <div>
                      <p className="text-sm text-ink font-medium mb-2">WhatsApp</p>
                      <a
                        href="https://wa.me/27000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-kinetic inline-block border border-ink/15 text-ink text-sm px-5 py-2.5 hover:border-accent hover:text-accent transition-all duration-300 rounded-lg"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>

                    <div>
                      <p className="text-sm text-ink font-medium mb-2">Location</p>
                      <p className="text-muted">South Africa</p>
                    </div>

                    <div className="pt-6">
                      <p className="text-sm text-muted/50">
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
