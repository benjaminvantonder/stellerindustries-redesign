import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SectionHeading from '../../components/SectionHeading'
import { portfolio } from '../../data/portfolio'

export default function FeaturedWork() {
  const featured = portfolio.slice(0, 3)

  return (
    <section className="relative py-24 md:py-32 border-t border-signal/10">
      <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
        <Reveal>
          <SectionHeading
            timecode="01:02"
            label="Work"
            heading="Recent Productions"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.12}>
              <Link to="/work" className="group block">
                <div className="aspect-[4/3] bg-ink/50 border border-signal/10 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-signal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-3">
                    <span className="data-chip">{item.category}</span>
                  </div>
                </div>
                <p className="font-mono text-[10px] tracking-wider text-mute/50 mb-1">
                  {item.year}
                </p>
                <h3 className="font-display text-lg font-semibold text-paper group-hover:text-signal transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-mute leading-relaxed">
                  {item.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12">
            <Link
              to="/work"
              className="font-mono text-xs tracking-widest text-signal/60 hover:text-signal transition-colors uppercase"
            >
              View Full Portfolio &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
