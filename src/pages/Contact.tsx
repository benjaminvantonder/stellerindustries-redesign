import { type FormEvent, type ChangeEvent, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { ScrollReveal } from '@/components/atmosphere/ScrollReveal'
import { GlassCard } from '@/components/atmosphere/GlassCard'

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

  const inputClasses =
    'w-full bg-transparent py-3 text-body font-light text-[var(--color-text)] outline-none transition-all duration-300 placeholder:text-[var(--color-muted)]/30 focus:shadow-[0_1px_0_0_var(--color-gold)]'
  const labelClasses = 'mb-3 block text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-muted)]'

  return (
    <>
      {/* ─── HERO: Right-aligned ─── */}
      <Hero
        eyebrow="Contact"
        title="Let's Start"
        titleAccent="A Conversation"
        description="Ready to discuss your next event? We'd love to hear about your vision and how we can help bring it to life."
        layout="right"
      />

      {/* ─── FORM: Asymmetric floating layout ─── */}
      <section className="relative py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-20 lg:grid-cols-12 lg:gap-8">
            {/* Form */}
            <ScrollReveal variant="drift-left" className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className={labelClasses}>Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Company name (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className={labelClasses}>Event Type</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className={`${inputClasses} cursor-pointer`}
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
                  <label htmlFor="message" className={labelClasses}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your event..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-10 py-4 text-xs font-normal uppercase tracking-[0.14em] text-black transition-all duration-500 hover:bg-[var(--color-gold-light)] hover:shadow-[0_0_40px_rgba(201,168,76,0.2)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-magnetic
                >
                  Send Message
                </motion.button>
              </form>
            </ScrollReveal>

            {/* Info sidebar — floating glass panel */}
            <ScrollReveal variant="drift-right" className="lg:col-span-4 lg:col-start-9">
              <GlassCard glow className="sticky top-24">
                <div className="space-y-10">
                  <div>
                    <h3 className="mb-3 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                      Email
                    </h3>
                    <a href="mailto:info@stellerindustries.co.za" className="text-body-lg font-light text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-gold)]">
                      info@stellerindustries.co.za
                    </a>
                  </div>

                  <div>
                    <h3 className="mb-3 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                      Phone
                    </h3>
                    <a href="tel:+27111234567" className="text-body-lg font-light text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-gold)]">
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
                    <p className="mt-2 text-sm font-extralight text-[var(--color-muted)]">
                      Available nationwide and across Africa
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                      Response Time
                    </h3>
                    <p className="text-body-lg font-light text-[var(--color-text)]">
                      Within 24 hours
                    </p>
                    <p className="mt-2 text-sm font-extralight text-[var(--color-muted)]">
                      We aim to respond to all enquiries within one business day.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
