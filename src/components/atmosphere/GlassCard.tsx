import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glow?: boolean
}

export function GlassCard({ children, className = '', glow = false }: GlassCardProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl ${className}`}
      style={{
        border: '1px solid rgba(255, 255, 255, 0.06)',
      }}
      whileHover={{
        scale: 1.01,
        transition: { type: 'spring', stiffness: 200, damping: 25 },
      }}
    >
      {/* Inner glow on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
      </div>

      {/* Top highlight line */}
      <div className="absolute left-[10%] right-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {glow && (
        <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      )}

      <div className="relative z-10 p-8">
        {children}
      </div>
    </motion.div>
  )
}
