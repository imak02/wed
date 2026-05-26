'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface EnvelopeOpeningProps {
  onOpen: () => void
}

// Ornamental top/bottom flourish SVG (baroque style)
function OrnamentSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 80" className={className} preserveAspectRatio="none">
      {/* Left flourish */}
      <path d="M10 40 Q30 20, 60 10 Q70 8, 80 15 Q70 25, 60 30 Q40 40, 20 50 Q30 45, 60 40 Q70 38, 80 45" fill="currentColor" opacity="0.9" />
      {/* Center flourish */}
      <path d="M100 20 L110 50 L100 30 Q120 15, 150 20 Q180 15, 200 30 L190 50 L200 20" fill="currentColor" opacity="0.9" />
      {/* Right flourish */}
      <path d="M220 15 Q230 8, 240 10 Q270 20, 290 40 Q270 45, 250 50 Q240 55, 230 45 Q270 38, 250 40 Q220 45, 200 30 Q230 25, 220 15" fill="currentColor" opacity="0.9" />
      {/* Decorative leaf/curl elements */}
      <g opacity="0.7">
        <ellipse cx="75" cy="25" rx="3" ry="8" fill="currentColor" transform="rotate(-30 75 25)" />
        <ellipse cx="225" cy="25" rx="3" ry="8" fill="currentColor" transform="rotate(30 225 25)" />
      </g>
    </svg>
  )
}

export function EnvelopeOpening({ onOpen }: EnvelopeOpeningProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = () => {
    setIsOpening(true)
    setTimeout(() => {
      setIsOpened(true)
      setTimeout(onOpen, 800)
    }, 2200)
  }

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #B91C1C 0%, #991B1B 30%, #7F1D1D 60%, #450A0A 100%)',
          }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: '#FFD700',
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                }}
              />
            ))}
          </div>

          {/* Main container - fits in viewport */}
          <motion.div
            className="relative flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 h-screen max-h-[100vh] overflow-hidden"
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Hanging rope at top */}
            <div className="absolute -top-4 sm:-top-6 md:-top-8 w-20 sm:w-24 md:w-28 h-6 sm:h-8 flex items-end justify-center">
              <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                <line x1="10" y1="5" x2="50" y2="35" stroke="#8B6914" strokeWidth="2" />
                <line x1="90" y1="5" x2="50" y2="35" stroke="#8B6914" strokeWidth="2" />
              </svg>
            </div>

            {/* Wooden rod top */}
            <div className="absolute -top-4 sm:-top-5 md:-top-6 w-24 sm:w-28 md:w-32 h-2 sm:h-2.5 md:h-3 rounded-full bg-gradient-to-r from-amber-900 via-yellow-700 to-amber-900 shadow-lg" />
            <div className="absolute -top-3 sm:-top-3.5 md:-top-4 w-24 sm:w-28 md:w-32 h-1.5 sm:h-2 md:h-2.5 rounded-full bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700" />

            {/* The Sacred Scroll/Patra */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] mt-6 sm:mt-8 md:mt-10">
              {/* Main scroll body with red background */}
              <motion.div
                className="relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #DC2626 0%, #B91C1C 50%, #991B1B 100%)',
                  boxShadow: '0 20px 60px -15px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,255,255,0.1)',
                  borderRadius: '0 0 2px 2px',
                }}
                initial={{ height: 'auto', opacity: 1 }}
                animate={isOpening ? { 
                  height: 0, 
                  opacity: 0,
                  transition: { duration: 1.2, delay: 0.5 }
                } : {}}
              >
                {/* Ornamental top border */}
                <div className="w-full h-10 sm:h-12 md:h-14 relative">
                  <OrnamentSVG className="w-full h-full text-yellow-600" />
                </div>

                {/* Content area with golden text */}
                <div className="relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-center">
                  {/* "YOU ARE INVITED TO THE WEDDING OF" */}
                  <p className="font-serif text-yellow-300 text-xs sm:text-sm md:text-base tracking-widest uppercase mb-2 sm:mb-3 font-medium opacity-90">
                    You Are Invited To The Wedding Of
                  </p>

                  {/* Couple names - main focus */}
                  <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl text-yellow-200 leading-tight mb-1 font-bold">
                    Smriti & Asbin
                  </h2>

                  {/* "which will be conducted on" */}
                  <p className="font-serif text-yellow-300 text-xs sm:text-xs md:text-sm italic mb-2 sm:mb-3 opacity-85">
                    which will be conducted on
                  </p>

                  {/* Date details - ornamental layout */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                    <div className="w-8 sm:w-10 md:w-12 h-px bg-gradient-to-r from-transparent to-yellow-400" />
                    <div>
                      <p className="text-yellow-300 font-serif text-xs sm:text-sm font-semibold">June</p>
                      <p className="text-yellow-100 font-serif text-base sm:text-xl md:text-2xl font-bold">23</p>
                      <p className="text-yellow-300 font-serif text-xs sm:text-sm">2026</p>
                    </div>
                    <div className="w-8 sm:w-10 md:w-12 h-px bg-gradient-to-l from-transparent to-yellow-400" />
                  </div>

                  {/* Day and Time */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="text-yellow-300 text-xs sm:text-sm font-serif">Sunday</span>
                    <span className="text-yellow-400 text-xs sm:text-sm">•</span>
                    <span className="text-yellow-300 text-xs sm:text-sm font-serif">At 6:00 PM</span>
                  </div>

                  {/* Venue - compact */}
                  <p className="font-serif text-yellow-300 text-xs sm:text-sm mb-2 sm:mb-3 leading-snug opacity-90">
                    Hotel Manakamana, Kathmandu<br />
                    Bagmati, Kathmandu 8
                  </p>

                  {/* Divider ornament */}
                  <div className="my-2 sm:my-3">
                    <svg viewBox="0 0 150 20" className="w-full h-5 sm:h-6">
                      <circle cx="75" cy="10" r="6" fill="#FCD34D" opacity="0.8" />
                      <path d="M20 10 Q50 5, 75 10 Q100 15, 130 10" fill="none" stroke="#FCD34D" strokeWidth="1" opacity="0.6" />
                    </svg>
                  </div>

                  {/* RSVP information */}
                  <p className="font-serif text-yellow-300 text-xs sm:text-xs italic mb-1 opacity-85">
                    Kindly RSVP before 15th June
                  </p>
                  <p className="text-yellow-200 text-xs sm:text-xs font-mono font-semibold">
                    +977-1-4123456
                  </p>
                </div>

                {/* Ornamental bottom border */}
                <div className="w-full h-10 sm:h-12 md:h-14 relative">
                  <OrnamentSVG className="w-full h-full text-yellow-600 transform scale-y-[-1]" />
                </div>
              </motion.div>

              {/* Wooden rod bottom */}
              <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 w-24 sm:w-28 md:w-32 h-2 sm:h-2.5 md:h-3 rounded-full bg-gradient-to-r from-amber-900 via-yellow-700 to-amber-900 shadow-lg" />
              <div className="absolute -bottom-3 sm:-bottom-3.5 md:-bottom-4 left-1/2 -translate-x-1/2 w-24 sm:w-28 md:w-32 h-1.5 sm:h-2 md:h-2.5 rounded-full bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700" />

              {/* Wax seal */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20"
                initial={{ scale: 1, rotate: 0 }}
                animate={isOpening ? { scale: 0, rotate: 180, opacity: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div 
                  className="w-11 h-11 sm:w-13 sm:h-13 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #FCD34D, #C9A227 50%, #B8860B 100%)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4), inset 0 1px 3px rgba(255,255,255,0.2)',
                    border: '2px solid #8B6914',
                  }}
                >
                  <span className="font-serif text-red-800 text-xs sm:text-sm md:text-base font-bold">S&A</span>
                </div>
              </motion.div>
            </div>

            {/* Hanging rope at bottom */}
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 w-20 sm:w-24 md:w-28 h-6 sm:h-8 flex items-start justify-center">
              <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                <line x1="50" y1="5" x2="10" y2="35" stroke="#8B6914" strokeWidth="2" />
                <line x1="50" y1="5" x2="90" y2="35" stroke="#8B6914" strokeWidth="2" />
              </svg>
            </div>

            {/* Open button - below the scroll */}
            <motion.button
              onClick={handleOpen}
              disabled={isOpening}
              className="mt-10 sm:mt-12 md:mt-14 group cursor-pointer disabled:cursor-not-allowed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="relative px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FCD34D 50%, #FFD700 100%)',
                  boxShadow: '0 6px 20px -4px rgba(255,215,0,0.6)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative font-[var(--font-heading)] text-red-800 font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase flex items-center gap-2">
                  {isOpening ? (
                    <>
                      <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </motion.span>
                      Opening...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Open Invitation
                    </>
                  )}
                </span>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
