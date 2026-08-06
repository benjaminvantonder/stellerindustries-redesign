import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import Reveal from '@/components/Reveal'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
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
    'w-full bg-ink/50 border border-signal/15 px-4 py-3 text-paper text-sm font-sans placeholder:text-mute/40 focus:outline-none focus:border-signal/40 transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Reveal>
        <div>
          <label htmlFor="name" className="block font-mono text-[11px] tracking-wider text-mute/60 uppercase mb-2">
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
          <label htmlFor="email" className="block font-mono text-[11px] tracking-wider text-mute/60 uppercase mb-2">
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
          <label htmlFor="event" className="block font-mono text-[11px] tracking-wider text-mute/60 uppercase mb-2">
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
          <label htmlFor="message" className="block font-mono text-[11px] tracking-wider text-mute/60 uppercase mb-2">
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
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 bg-signal text-void font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-signal-300 transition-colors duration-200 disabled:opacity-50"
          >
            <Send size={14} />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <span className="flex items-center gap-1.5 text-sm text-green-400">
              <CheckCircle size={14} /> Sent successfully
            </span>
          )}
          {status === 'error' && (
            <span className="flex items-center gap-1.5 text-sm text-red-400">
              <AlertCircle size={14} />
              {!endpoint ? 'Form not configured' : 'Failed to send'}
            </span>
          )}
        </div>
      </Reveal>
    </form>
  )
}
