'use client'

import { motion } from 'framer-motion'

interface EnvelopeTextProps {
  coupleNameA: string
  coupleNameB: string
  isOpening: boolean
}

export function EnvelopeText({
  coupleNameA,
  coupleNameB,
  isOpening,
}: EnvelopeTextProps) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpening ? 0 : 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top text */}
      <motion.div
        className="text-center mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-sm font-light text-maroon/60 tracking-wider">
          with their families
        </p>
      </motion.div>

      {/* Couple names */}
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className="text-lg md:text-xl font-serif text-maroon">
          {coupleNameA} & {coupleNameB}
        </p>
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="text-lg text-gold mt-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        ✦
      </motion.div>
    </motion.div>
  )
}
