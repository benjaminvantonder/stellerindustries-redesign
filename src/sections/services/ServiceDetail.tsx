import { Zap, Lightbulb, Eye, Camera, Video } from 'lucide-react'
import Reveal from '@/components/Reveal'
import type { Service } from '@/data/services'

const iconMap: Record<string, React.ReactNode> = {
  sound: <Zap size={24} />,
  lighting: <Lightbulb size={24} />,
  visuals: <Eye size={24} />,
  photography: <Camera size={24} />,
  videography: <Video size={24} />,
}

interface ServiceDetailProps {
  service: Service
  index: number
}

export default function ServiceDetail({ service, index }: ServiceDetailProps) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="py-12 border-b border-signal/10 last:border-b-0">
        <div className="flex items-start gap-6">
          <div className="text-signal/50 mt-1 shrink-0">
            {iconMap[service.id]}
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="timecode">
                {String(index + 1).padStart(2, '0')}:{String((index + 1) * 14).padStart(2, '0')}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-paper">
                {service.title}
              </h3>
            </div>
            <p className="text-mute text-lg leading-relaxed max-w-2xl mb-6">
              {service.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-mute/70">
                  <span className="w-1 h-1 bg-signal/40 rounded-full shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
