import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 border-t border-signal/10">
      <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
        <Reveal>
          <p className="timecode mb-4">02:30</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-paper leading-tight">
            Ready to Start
            <br />
            Your Production?
          </h2>
          <p className="mt-6 text-mute text-lg max-w-lg">
            Let's build something that sounds as good as it looks.
          </p>
          <div className="mt-8">
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
  )
}
