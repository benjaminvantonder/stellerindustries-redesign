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
    subject: '',
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
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-sand/50 border border-ink/10 px-5 py-3.5 text-ink text-sm placeholder:text-warmgray/50 focus:outline-none focus:border-terracotta/40 transition-colors font-body'

  return (
    <>
      <Helmet>
        <title>Contact — Meridian Press</title>
        <meta
          name="description"
          content="Get in touch with Meridian Press — submissions, inquiries, and general correspondence."
        />
      </Helmet>

      <div className="pt-32">
        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-8">
            <Reveal>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[0.95] max-w-3xl">
                Contact
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-warmgray text-lg md:text-xl leading-relaxed max-w-2xl">
                For submissions, press inquiries, or general correspondence.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="editorial-rule max-w-content mx-auto" />

        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
              {/* Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Reveal>
                    <div>
                      <label htmlFor="name" className="block text-sm text-ink mb-2">Name</label>
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
                      <label htmlFor="email" className="block text-sm text-ink mb-2">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div>
                      <label htmlFor="subject" className="block text-sm text-ink mb-2">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={inputClass}
                        placeholder="e.g. Manuscript submission, Press inquiry"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <div>
                      <label htmlFor="message" className="block text-sm text-ink mb-2">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder="Your message..."
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.2}>
                    <div className="flex items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="bg-ink text-cream text-sm tracking-editorial px-7 py-3.5 hover:bg-ink/80 transition-colors duration-200 disabled:opacity-50"
                      >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                      </button>

                      {status === 'success' && (
                        <span className="text-sm text-sage">Sent successfully</span>
                      )}
                      {status === 'error' && (
                        <span className="text-sm text-terracotta">
                          {!endpoint ? 'Form not configured' : 'Failed to send'}
                        </span>
                      )}
                    </div>
                  </Reveal>
                </form>
              </div>

              {/* Submission guidelines */}
              <div className="lg:col-span-2">
                <Reveal delay={0.2}>
                  <div className="space-y-10">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink mb-3">Submission Guidelines</h3>
                      <p className="text-warmgray leading-relaxed">
                        We accept unsolicited manuscripts in literary fiction, essay collections, and poetry. We do not currently accept genre fiction, children&apos;s books, or self-help.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink mb-3">What to Include</h3>
                      <ul className="text-warmgray leading-relaxed space-y-1">
                        <li>A brief cover letter</li>
                        <li>A one-page synopsis</li>
                        <li>The first three chapters or 30 pages</li>
                        <li>A short author biography</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink mb-3">Response Time</h3>
                      <p className="text-warmgray leading-relaxed">
                        We respond to all submissions within twelve weeks. If you haven&apos;t heard from us by then, please feel free to follow up.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink mb-3">Email</h3>
                      <a
                        href="mailto:submissions@meridianpress.com"
                        className="text-terracotta hover:text-terracotta/80 transition-colors"
                      >
                        submissions@meridianpress.com
                      </a>
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
