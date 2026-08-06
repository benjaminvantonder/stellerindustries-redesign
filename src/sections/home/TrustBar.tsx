import Reveal from '../../components/Reveal'
import { clients } from '../../data/clients'

export default function TrustBar() {
  return (
    <section className="relative py-16 border-t border-signal/10">
      <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
        <Reveal>
          <p className="section-label mb-8">Trusted By</p>
        </Reveal>

        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {clients.map((client, i) => (
            <Reveal key={client} delay={i * 0.04}>
              <span className="font-mono text-sm text-mute/40 hover:text-mute/70 transition-colors duration-300">
                {client}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
