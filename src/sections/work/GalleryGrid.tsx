import Reveal from '@/components/Reveal'
import type { PortfolioItem } from '@/data/portfolio'

interface GalleryGridProps {
  items: PortfolioItem[]
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, i) => (
        <Reveal key={item.id} delay={i * 0.08}>
          <article className="group">
            <div className="aspect-[4/3] bg-ink/50 border border-signal/10 mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-signal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-3 left-3">
                <span className="data-chip">{item.category}</span>
              </div>
              <div className="absolute bottom-3 right-3">
                <span className="font-mono text-[10px] text-mute/40">{item.year}</span>
              </div>
            </div>
            <h3 className="font-display text-lg font-semibold text-paper group-hover:text-signal transition-colors duration-200">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-mute leading-relaxed">
              {item.description}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
