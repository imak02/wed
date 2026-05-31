'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface InvitationCardProps {
  isVisible: boolean
  onClose: () => void
}

export function InvitationCard({ isVisible, onClose }: InvitationCardProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClose}
      style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)' }}
    >
      <motion.div
        className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.8, opacity: 0, rotateX: -20 }}
        animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0, rotateX: isVisible ? 0 : -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background with Hindu elements */}
        <div className="absolute inset-0">
          <Image
            src="/images/hindu-wedding-background.png"
            alt="Wedding background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-900/20" />
        </div>

        {/* Content container */}
        <div className="relative h-full flex flex-col items-center justify-between p-8 sm:p-10 md:p-12">
          {/* Top section - Ganesha */}
          <motion.div
            className="flex justify-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OhAzBi2zmlxYNYJgPGPxwMqo0vwJog.png"
              alt="Ganesha"
              className="w-20 sm:w-24 md:w-28 h-auto drop-shadow-lg"
            />
          </motion.div>

          {/* Center section - Couple and main content */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            {/* Couple illustration */}
            <motion.div
              className="relative w-32 sm:w-40 md:w-48 h-40 sm:h-48 md:h-56"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Image
                src="/images/ghibli-couple-wedding.png"
                alt="Bride and Groom"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </motion.div>

            {/* Invitation text */}
            <motion.div
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="font-serif text-yellow-300 text-xs sm:text-sm tracking-widest uppercase mb-2 font-medium opacity-90">
                Together with their families
              </p>
              <h1 className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl text-yellow-100 font-bold mb-1">
                Smriti & Asbin
              </h1>
              <p className="text-yellow-300 text-xs sm:text-sm italic">
                request the honour of your presence
              </p>
            </motion.div>
          </div>

          {/* Bottom section - Event details */}
          <motion.div
            className="text-center space-y-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-yellow-400" />
              <div>
                <p className="text-yellow-300 font-serif text-xs font-semibold">June 23rd, 2026</p>
                <p className="text-yellow-300 font-serif text-xs">At 6:00 PM</p>
              </div>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-yellow-400" />
            </div>
            <p className="text-yellow-200 text-xs sm:text-sm font-serif">
              Kindly RSVP before 15th June
            </p>
            <p className="text-yellow-300 text-xs sm:text-xs font-mono font-semibold">
              +977-1-4123456
            </p>
          </motion.div>

          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-red-900/50 hover:bg-red-800/70 text-yellow-200 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
