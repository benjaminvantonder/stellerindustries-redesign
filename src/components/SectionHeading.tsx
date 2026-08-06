interface SectionHeadingProps {
  timecode: string
  label: string
  heading: string
  align?: 'left' | 'right'
}

export default function SectionHeading({
  timecode,
  label,
  heading,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'right' ? 'text-right' : 'text-left'}>
      <p className="timecode mb-4">{timecode}</p>
      <p className="section-label">{label}</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-paper leading-tight">
        {heading}
      </h2>
    </div>
  )
}
