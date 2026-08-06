import { Link } from 'react-router-dom'
import { Zap, Lightbulb, Eye, Camera, Video } from 'lucide-react'
import Reveal from '../../components/Reveal'
import SectionHeading from '../../components/SectionHeading'
import { services } from '../../data/services'

const iconMap: Record<string, React.ReactNode> = {
  sound: <Zap size={20} />,
  lighting: <Lightbulb size={20} />,
  visuals: <Eye size={20} />,
  photography: <Camera size={20} />,
  videography: <Video size={20} />,
}

export default function ServicesOverview() {
  return (
    <section id="next" className="relative py-24 md:py-32">
      <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
        <Reveal>
          <SectionHeading
            timecode="00:14"
            label="Services"
            heading="What We Bring"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, i) => (
            <Reveal key={service.id} delay={i * 0.1}>
              <Link
                to="/services"
                className="group block p-6 border border-signal/10 bg-ink/30 backdrop-blur-sm hover:border-signal/25 transition-all duration-300"
              >
                <div className="text-signal/60 group-hover:text-signal transition-colors mb-4">
                  {iconMap[service.id]}
                </div>
                <h3 className="font-display text-lg font-semibold text-paper mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-mute leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8">
            <Link
              to="/services"
              className="font-mono text-xs tracking-widest text-signal/60 hover:text-signal transition-colors uppercase"
            >
              View All Services &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
