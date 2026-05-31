'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface EnvelopeModalProps {
  onShowDetails: () => void
}

export function EnvelopeModal({ onShowDetails }: EnvelopeModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, #1a0f2e 0%, #2d1b3d 50%, #1a0f2e 100%)',
      }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              background: 'radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <motion.div
        className="relative w-full max-w-4xl mx-auto"
        initial={{ scale: 0.9, opacity: 0, rotateX: 20 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-yellow-600/30"
          style={{
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.4) 0%, rgba(153, 27, 27, 0.4) 100%)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Background image - Ghibli couple */}
          <div className="absolute inset-0">
            <Image
              src="/images/ghibli-couple-wedding.png"
              alt="Bride and Groom"
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/40 to-red-950/60" />
          </div>

          {/* Content overlay */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 sm:p-12 md:p-16 min-h-[500px] md:min-h-[600px] items-center">
            {/* Left side - Ganesha */}
            <motion.div
              className="flex justify-center items-start md:items-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64">
                <Image
                  src="/images/ganesha-blessing.png"
                  alt="Lord Ganesha"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Right side - Invitation text */}
            <motion.div
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 sm:space-y-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Header text */}
              <div className="space-y-3">
                <p className="font-serif text-yellow-400 text-sm sm:text-base tracking-widest uppercase font-medium opacity-90">
                  You Are Cordially Invited
                </p>
                <h1 className="font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-yellow-100 font-bold leading-tight">
                  Smriti & Asbin
                </h1>
                <p className="text-yellow-300 text-sm sm:text-base italic font-serif">
                  Together with their families
                </p>
              </div>

              {/* Event details */}
              <div className="space-y-4 py-6 border-y border-yellow-600/50">
                <div>
                  <p className="text-yellow-400 font-serif text-xs tracking-widest uppercase mb-2">
                    Request the honour of your presence
                  </p>
                  <p className="text-yellow-200 font-serif text-sm">
                    at the marriage ceremony of
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-yellow-400" />
                    <div className="flex flex-col gap-1">
                      <p className="text-yellow-300 font-serif font-semibold text-sm">June 23rd, 2026</p>
                      <p className="text-yellow-300 font-serif text-xs">Tuesday at 6:00 PM</p>
                    </div>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-yellow-400" />
                  </div>
                  <p className="text-yellow-300 text-xs sm:text-sm font-serif">
                    Kindly RSVP before 15th June
                  </p>
                  <p className="text-yellow-200 text-xs sm:text-sm font-mono font-semibold tracking-wide">
                    +977-1-4123456
                  </p>
                </div>
              </div>

              {/* Show Details button */}
              <motion.button
                onClick={onShowDetails}
                className="group mt-4 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-[var(--font-heading)] font-bold text-sm sm:text-base tracking-wider uppercase overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FCD34D 50%, #FFD700 100%)',
                  boxShadow: '0 8px 25px -8px rgba(255, 215, 0, 0.7)',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 12px 35px -8px rgba(255, 215, 0, 0.9)' }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative text-red-900 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Show Details
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-400/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.div>
  )
}
