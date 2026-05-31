'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface WeddingEnvelopeProps {
  children: ReactNode
  isOpening: boolean
}

export function WeddingEnvelope({ children, isOpening }: WeddingEnvelopeProps) {
  return (
    <motion.div
      className="relative w-full max-w-2xl"
      animate={{
        y: isOpening ? 0 : [0, -12, 0],
        rotateY: isOpening ? 0 : 0,
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        rotateY: { duration: 0.6 },
      }}
      style={{
        perspective: 1000,
      }}
    >
      {/* Envelope body */}
      <motion.div
        className="relative bg-gradient-to-b from-maroon via-maroon-light to-maroon rounded-lg shadow-2xl overflow-hidden"
        animate={{
          boxShadow: isOpening
            ? '0 20px 60px rgba(139, 26, 26, 0.4)'
            : '0 30px 80px rgba(139, 26, 26, 0.5)',
        }}
        transition={{ duration: 0.6 }}
      >
        {/* Envelope paper texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        {/* Golden foil border */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 border-4 border-gold/40" />
          <div className="absolute inset-1 border border-gold/20" />
        </div>

        {/* Envelope content container */}
        <div className="relative z-10 px-8 py-12 md:px-12 md:py-16">
          {children}
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-black/10 pointer-events-none" />
      </motion.div>

      {/* Envelope flap (decorative) */}
      <motion.div
        className="absolute -top-1 left-0 right-0 h-8 bg-gradient-to-b from-maroon-light to-maroon rounded-t-xl pointer-events-none"
        style={{
          perspective: 1000,
        }}
        animate={{
          rotateX: isOpening ? -45 : 0,
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  )
}
