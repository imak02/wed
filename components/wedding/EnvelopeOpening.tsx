'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { WeddingLogo } from './WeddingLogo'
import { InvitationCard } from './InvitationCard'

interface EnvelopeOpeningProps {
  onOpen: () => void
}

// Ornamental top/bottom flourish SVG
function OrnamentSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 60" className={className} preserveAspectRatio="none">
      <path d="M10 30 Q30 15, 60 8 Q70 6, 80 12 Q70 22, 60 28 Q40 38, 20 45 Q30 40, 60 35 Q70 33, 80 40" fill="currentColor" opacity="0.9" />
      <path d="M100 15 L110 45 L100 25 Q120 10, 150 15 Q180 10, 200 25 L190 45 L200 15" fill="currentColor" opacity="0.9" />
      <path d="M220 12 Q230 6, 240 8 Q270 15, 290 30 Q270 40, 250 45 Q240 50, 230 40 Q270 33, 250 35 Q220 40, 200 25 Q230 22, 220 12" fill="currentColor" opacity="0.9" />
    </svg>
  )
}

export function EnvelopeOpening({ onOpen }: EnvelopeOpeningProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  const [showCard, setShowCard] = useState(false)

  const handleOpen = () => {
    setIsOpening(true)
    setTimeout(() => {
      setIsOpened(true)
      setShowCard(true)
      setTimeout(onOpen, 800)
    }, 2200)
  }

  return (
    <>
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 overflow-y-auto"
            style={{
              background: 'linear-gradient(145deg, #B91C1C 0%, #991B1B 30%, #7F1D1D 60%, #450A0A 100%)',
            }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: '#FFD700',
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                }}
              />
            ))}
          </div>

          {/* Main container */}
          <motion.div
            className="relative flex flex-col items-center justify-center w-full my-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* The Sacred Scroll - curved shape */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <motion.div
                className="relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #DC2626 0%, #B91C1C 50%, #991B1B 100%)',
                  boxShadow: '0 15px 50px -10px rgba(0,0,0,0.6)',
                  borderRadius: '8px 8px 16px 16px',
                }}
                initial={{ height: 'auto', opacity: 1 }}
                animate={isOpening ? { 
                  height: 0, 
                  opacity: 0,
                  transition: { duration: 1.2, delay: 0.5 }
                } : {}}
              >
                {/* Ornamental top border */}
                <div className="w-full h-8 sm:h-10 md:h-12">
                  <OrnamentSVG className="w-full h-full text-yellow-600" />
                </div>

                {/* Content area */}
                <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-center">
                  <p className="font-serif text-yellow-300 text-xs sm:text-sm tracking-widest uppercase mb-1.5 sm:mb-2 font-medium opacity-90">
                    You Are Invited To The Wedding Of
                  </p>

                  <h2 className="font-[var(--font-display)] text-xl sm:text-2xl md:text-3xl text-yellow-200 leading-tight mb-1 font-bold">
                    Smriti & Asbin
                  </h2>

                  <p className="font-serif text-yellow-300 text-xs sm:text-xs italic mb-2 opacity-85">
                    which will be conducted on
                  </p>

                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-2.5">
                    <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-yellow-400" />
                    <div>
                      <p className="text-yellow-300 font-serif text-xs font-semibold">June</p>
                      <p className="text-yellow-100 font-serif text-lg sm:text-xl font-bold leading-none">23</p>
                      <p className="text-yellow-300 font-serif text-xs">2026</p>
                    </div>
                    <div className="w-6 sm:w-8 h-px bg-gradient-to-l from-transparent to-yellow-400" />
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-2 sm:mb-2.5">
                    <span className="text-yellow-300 text-xs sm:text-sm font-serif">Tuesday</span>
                    <span className="text-yellow-400 text-xs">•</span>
                    <span className="text-yellow-300 text-xs sm:text-sm font-serif">At 6:00 PM</span>
                  </div>

                  <div className="my-1.5 sm:my-2">
                    <svg viewBox="0 0 150 15" className="w-full h-4 sm:h-5">
                      <circle cx="75" cy="7.5" r="5" fill="#FCD34D" opacity="0.8" />
                      <path d="M20 7.5 Q50 3, 75 7.5 Q100 12, 130 7.5" fill="none" stroke="#FCD34D" strokeWidth="0.8" opacity="0.6" />
                    </svg>
                  </div>

                  <p className="font-serif text-yellow-300 text-xs italic mb-1 opacity-85">
                    Kindly RSVP before 15th June
                  </p>
                  <p className="text-yellow-200 text-xs sm:text-xs font-mono font-semibold">
                    +977-1-4123456
                  </p>
                </div>

                {/* Ornamental bottom border */}
                <div className="w-full h-8 sm:h-10 md:h-12">
                  <OrnamentSVG className="w-full h-full text-yellow-600 transform scale-y-[-1]" />
                </div>
              </motion.div>

              {/* Wedding Logo seal */}
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
                initial={{ scale: 1, rotate: 0 }}
                animate={isOpening ? { scale: 0, rotate: 180, opacity: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <WeddingLogo size="lg" animated={false} />
              </motion.div>
            </div>

            {/* Open button */}
            <motion.button
              onClick={handleOpen}
              disabled={isOpening}
              className="mt-12 sm:mt-14 md:mt-16 group cursor-pointer disabled:cursor-not-allowed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="relative px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FCD34D 50%, #FFD700 100%)',
                  boxShadow: '0 6px 20px -4px rgba(255,215,0,0.6)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative font-[var(--font-heading)] text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2">
                  {isOpening ? (
                    <>
                      <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </motion.span>
                      Opening...
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Open
                    </>
                  )}
                </span>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Render Invitation Card Modal separately */}
    {showCard && (
      <InvitationCard 
        isVisible={showCard} 
        onClose={() => {
          setShowCard(false)
          setIsOpened(false)
        }} 
      />
    )}
    </>
  )
}
