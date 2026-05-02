'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { WeddingLogo } from './WeddingLogo'

interface EnvelopeOpeningProps {
  onOpen: () => void
}

export function EnvelopeOpening({ onOpen }: EnvelopeOpeningProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = () => {
    setIsOpening(true)
    setTimeout(() => {
      setIsOpened(true)
      setTimeout(onOpen, 800)
    }, 1800)
  }

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-maroon via-maroon-light to-maroon overflow-hidden px-4"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-5%`,
                }}
                animate={{
                  y: ['0vh', '110vh'],
                  x: [0, Math.random() * 60 - 30],
                  rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                }}
                transition={{
                  duration: 10 + Math.random() * 8,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: 'linear',
                }}
              >
                {i % 3 === 0 ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 text-gold/40">
                    <path d="M12 2C12 2 14 6 14 8C14 10 12 12 12 12C12 12 10 10 10 8C10 6 12 2 12 2Z" />
                  </svg>
                ) : i % 3 === 1 ? (
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold/30 rounded-full" />
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2 sm:w-3 sm:h-3 text-saffron/40">
                    <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>

          {/* Ambient glows */}
          <motion.div
            className="absolute w-64 h-64 sm:w-[500px] sm:h-[500px] rounded-full bg-gold/15 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Main content container */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Envelope */}
            <div className="relative w-64 h-40 sm:w-80 sm:h-52 md:w-[360px] md:h-[230px] perspective-1000">
              {/* Envelope body */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-ivory via-cream to-ivory rounded-xl shadow-2xl"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(100, 20, 20, 0.5), 0 0 60px rgba(201, 162, 39, 0.2)',
                }}
              >
                {/* Inner decorative border */}
                <div className="absolute inset-2 sm:inset-3 border-2 border-gold/25 rounded-lg" />
                
                {/* Corner ornaments */}
                {[
                  { pos: 'top-3 left-3 sm:top-4 sm:left-4', rotate: '0' },
                  { pos: 'top-3 right-3 sm:top-4 sm:right-4', rotate: '90' },
                  { pos: 'bottom-3 left-3 sm:bottom-4 sm:left-4', rotate: '-90' },
                  { pos: 'bottom-3 right-3 sm:bottom-4 sm:right-4', rotate: '180' },
                ].map((corner, i) => (
                  <div key={i} className={`absolute ${corner.pos} w-4 h-4 sm:w-6 sm:h-6 text-gold/40`} style={{ transform: `rotate(${corner.rotate}deg)` }}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3v8h2V5h6V3H3z" />
                    </svg>
                  </div>
                ))}

                {/* Invitation card inside */}
                <motion.div
                  className="absolute inset-4 sm:inset-6 bg-white rounded-lg shadow-inner flex flex-col items-center justify-center p-3 sm:p-4 overflow-hidden"
                  initial={{ y: 0 }}
                  animate={isOpening ? { y: -120, scale: 0.95 } : { y: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
                  
                  <div className="text-center relative z-10">
                    <motion.div
                      className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-gold/60"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L14.09 8.26L21 9L16 13.74L17.18 21L12 17.27L6.82 21L8 13.74L3 9L9.91 8.26L12 2Z" />
                      </svg>
                    </motion.div>
                    <p className="text-gold text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-0.5 sm:mb-1">Wedding Invitation</p>
                    <h2 className="font-[var(--font-great-vibes)] text-xl sm:text-2xl md:text-3xl text-maroon">
                      Smriti & Asbin
                    </h2>
                    <p className="text-maroon/50 text-[10px] sm:text-xs mt-0.5 sm:mt-1">23rd June 2026</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Envelope flap */}
              <motion.div
                className="absolute -top-1 left-0 right-0 h-24 sm:h-28 origin-bottom"
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ rotateX: 0 }}
                animate={isOpening ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Front of flap */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-cream rounded-t-xl"
                  style={{
                    clipPath: 'polygon(0 100%, 50% 15%, 100% 100%)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-maroon/5 to-transparent"
                    style={{ clipPath: 'polygon(0 100%, 50% 15%, 100% 100%)' }}
                  />
                  
                  {/* Wax seal */}
                  <motion.div
                    className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
                    animate={isOpening ? { scale: [1, 1.2, 0], opacity: [1, 1, 0], rotate: [0, 15, 30] } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-maroon via-maroon-light to-maroon shadow-xl flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-full opacity-20">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-full h-0.5 bg-ivory/30 origin-left"
                            style={{ transform: `rotate(${i * 22.5}deg)` }}
                          />
                        ))}
                      </div>
                      <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-gold/60 flex items-center justify-center bg-maroon/80">
                        <span className="font-[var(--font-great-vibes)] text-gold text-sm sm:text-lg md:text-xl">S&A</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 left-1/4 w-1.5 h-2 sm:w-2 sm:h-3 bg-maroon rounded-b-full" />
                    <div className="absolute -bottom-1.5 right-1/3 w-1 h-1.5 sm:w-1.5 sm:h-2 bg-maroon rounded-b-full" />
                  </motion.div>
                </div>

                {/* Back of flap */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-ivory to-cream rounded-t-xl"
                  style={{
                    clipPath: 'polygon(0 100%, 50% 15%, 100% 100%)',
                    transform: 'rotateX(180deg)',
                    backfaceVisibility: 'hidden',
                  }}
                />
              </motion.div>
            </div>

            {/* Open button */}
            <motion.button
              onClick={handleOpen}
              disabled={isOpening}
              className="mt-8 sm:mt-12 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-maroon font-semibold rounded-full shadow-xl overflow-hidden disabled:opacity-50 text-sm sm:text-base">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <span className="relative flex items-center gap-2">
                  {isOpening ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </motion.span>
                      Opening...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                      </svg>
                      Open Invitation
                    </>
                  )}
                </span>
              </div>
            </motion.button>
          </motion.div>

          {/* Sanskrit blessing at bottom */}
          <motion.div
            className="absolute bottom-6 sm:bottom-8 flex flex-col items-center gap-1 sm:gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-px bg-gold/40" />
              <p className="text-gold/70 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em]">शुभ विवाह</p>
              <div className="w-6 sm:w-8 h-px bg-gold/40" />
            </div>
            <p className="text-ivory/40 text-[10px] sm:text-xs">Tap to reveal your invitation</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
