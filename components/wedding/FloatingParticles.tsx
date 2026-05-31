'use client'

import { motion } from 'framer-motion'

interface FloatingParticlesProps {
  count?: number
  isActive?: boolean
}

export function FloatingParticles({ count = 12, isActive = true }: FloatingParticlesProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {isActive &&
        [...Array(count)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1.5 h-1.5 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'drop-shadow(0 0 4px rgba(201, 162, 39, 0.6))',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          />
        ))}
    </div>
  )
}
