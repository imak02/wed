'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface EnvelopeSceneProps {
  children: ReactNode
}

export function EnvelopeScene({ children }: EnvelopeSceneProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-ivory via-cream to-maroon/20">
      {/* Animated background gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/5 to-maroon/10 pointer-events-none"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        {children}
      </div>
    </div>
  )
}
