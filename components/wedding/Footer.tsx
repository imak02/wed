'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-maroon py-16 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Monogram */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-gold/30">
            <span className="font-[var(--font-great-vibes)] text-4xl text-gold">
              S & A
            </span>
          </div>
        </motion.div>

        {/* Couple names */}
        <motion.h3
          className="font-[var(--font-great-vibes)] text-3xl sm:text-4xl text-ivory mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Smriti & Asbin
        </motion.h3>

        {/* Tagline */}
        <motion.p
          className="text-ivory/70 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Two Souls, One Sacred Journey
        </motion.p>

        {/* Sanskrit blessing */}
        <motion.p
          className="font-[var(--font-devanagari)] text-gold text-lg sm:text-xl mb-8 tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          शुभ विवाह | सात फेरा, एक जीवन
        </motion.p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <Heart className="w-4 h-4 text-gold fill-gold" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Wedding date */}
        <motion.p
          className="text-ivory/60 text-sm mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          June 23, 2026
        </motion.p>

        {/* Copyright */}
        <motion.p
          className="text-ivory/40 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Made with <Heart className="w-3 h-3 inline text-maroon-light fill-maroon-light" /> for our special day
          <br />
          &copy; {currentYear} Smriti & Asbin
        </motion.p>
      </div>
    </footer>
  )
}
