import { type FormEvent, type ChangeEvent, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { ScrollReveal } from '@/components/ScrollReveal'
import { lightSourceHover } from '@/lib/motion'

interface FormData {
  name: string
  email: string
  company: string
  eventType: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    eventType: '',
    message: '',
  })

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT
    if (endpoint) {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(() => alert('Message sent. We\'ll be in touch.'))
        .catch(() => alert('Something went wrong. Please try again.'))
    } else {
      alert('Form endpoint not configured. Please email us directly.')
    }
  }, [formData])

  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's Start"
        titleAccent="A Conversation"
        description="Ready to discuss your next event? We'd love to hear about your vision and how we can help bring it to life."
      />

      <section className="py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
            {/* Form */}
            <ScrollReveal variant="left" className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-[var(--color-border)] bg-transparent py-3 text-body font-light text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-gold)] placeholder:text-[var(--color-muted)]/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-[var(--color-border)] bg-transparent py-3 text-body font-light text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-gold)] placeholder:text-[var(--color-muted)]/40"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-2 block text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border-b border-[var(--color-border)] bg-transparent py-3 text-body font-light text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-gold)] placeholder:text-[var(--color-muted)]/40"
                      placeholder="Company name (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="mb-2 block text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full border-b border-[var(--color-border)] bg-transparent py-3 text-body font-light text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-gold)]"
                    >
                      <option value="">Select event type</option>
                      <option value="conference">Conference</option>
                      <option value="festival">Festival</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="concert">Concert</option>
                      <option value="product-launch">Product Launch</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none border-b border-[var(--color-border)] bg-transparent py-3 text-body font-light text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-gold)] placeholder:text-[var(--color-muted)]/40"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-10 py-4 text-xs font-normal uppercase tracking-[0.14em] text-black transition-all hover:bg-transparent hover:text-[var(--color-gold)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </ScrollReveal>

            {/* Info sidebar */}
            <ScrollReveal variant="right" className="lg:col-span-4 lg:col-start-9">
              <div className="space-y-10">
                <div>
                  <h3 className="mb-3 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                    Email
                  </h3>
                  <a href="mailto:info@stellerindustries.co.za" className="text-body-lg font-light text-[var(--color-text)] transition-colors hover:text-[var(--color-gold)]">
                    info@stellerindustries.co.za
                  </a>
                </div>

                <div>
                  <h3 className="mb-3 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                    Phone
                  </h3>
                  <a href="tel:+27111234567" className="text-body-lg font-light text-[var(--color-text)] transition-colors hover:text-[var(--color-gold)]">
                    +27 11 123 4567
                  </a>
                </div>

                <div>
                  <h3 className="mb-3 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                    Location
                  </h3>
                  <p className="text-body-lg font-light text-[var(--color-text)]">
                    Johannesburg, South Africa
                  </p>
                  <p className="mt-2 text-sm font-light text-[var(--color-muted)]">
                    Available nationwide and across Africa
                  </p>
                </div>

                <motion.div
                  className="rounded-sm border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-gold)]"
                  whileHover="hover"
                  variants={lightSourceHover}
                >
                  <h3 className="mb-3 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                    Response Time
                  </h3>
                  <p className="text-body-lg font-light text-[var(--color-text)]">
                    Within 24 hours
                  </p>
                  <p className="mt-2 text-sm font-light text-[var(--color-muted)]">
                    We aim to respond to all enquiries within one business day.
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
