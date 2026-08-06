interface SignalChipProps {
  label: string
  top: string
}

export default function SignalChip({ label, top }: SignalChipProps) {
  return (
    <div
      className="data-chip absolute -left-[52px] animate-chip-fade-in"
      style={{ top }}
    >
      {label}
    </div>
  )
}
