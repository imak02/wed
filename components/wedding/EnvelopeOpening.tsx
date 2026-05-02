'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

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
      setTimeout(onOpen, 600)
    }, 1800)
  }

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-4"
          style={{
            background: 'linear-gradient(145deg, #C41E3A 0%, #8B0000 30%, #5C0000 70%, #3D0000 100%)',
          }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Background pattern - subtle paisley */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M40 10c-8 0-15 10-15 25s7 25 15 25 15-10 15-25-7-25-15-25zm0 5c5 0 10 8 10 20s-5 20-10 20-10-8-10-20 5-20 10-20z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Floating gold particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Ambient glow */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 60%)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Main envelope container */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Om Symbol */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="font-[var(--font-devanagari)] text-5xl sm:text-6xl text-gold drop-shadow-lg">
                ॐ
              </span>
            </motion.div>

            {/* The Envelope */}
            <div className="relative w-80 h-56 sm:w-96 sm:h-64 md:w-[420px] md:h-72" style={{ perspective: '1000px' }}>
              
              {/* Envelope back */}
              <div 
                className="absolute inset-0 rounded-lg shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #F5E6C8 0%, #E8D5A8 50%, #D4C494 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
                }}
              >
                {/* Decorative border */}
                <div className="absolute inset-3 sm:inset-4 border-2 border-maroon/20 rounded-md">
                  <div className="absolute inset-1 border border-gold/30 rounded-sm" />
                </div>

                {/* Corner decorations */}
                <svg className="absolute top-4 left-4 w-8 h-8 sm:w-10 sm:h-10 text-maroon/30" viewBox="0 0 40 40">
                  <path d="M5 35 Q5 5 35 5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8" cy="8" r="3" fill="currentColor"/>
                </svg>
                <svg className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 text-maroon/30 scale-x-[-1]" viewBox="0 0 40 40">
                  <path d="M5 35 Q5 5 35 5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8" cy="8" r="3" fill="currentColor"/>
                </svg>
                <svg className="absolute bottom-4 left-4 w-8 h-8 sm:w-10 sm:h-10 text-maroon/30 scale-y-[-1]" viewBox="0 0 40 40">
                  <path d="M5 35 Q5 5 35 5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8" cy="8" r="3" fill="currentColor"/>
                </svg>
                <svg className="absolute bottom-4 right-4 w-8 h-8 sm:w-10 sm:h-10 text-maroon/30 scale-[-1]" viewBox="0 0 40 40">
                  <path d="M5 35 Q5 5 35 5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8" cy="8" r="3" fill="currentColor"/>
                </svg>

                {/* Inner content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                  <p className="font-[var(--font-devanagari)] text-maroon/60 text-sm sm:text-base mb-1">
                    शुभ विवाह
                  </p>
                  <p className="font-[var(--font-heading)] text-maroon/40 text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4">
                    Wedding Invitation
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-px bg-gold/50" />
                    <div className="w-2 h-2 bg-gold/50 rounded-full" />
                    <div className="w-8 h-px bg-gold/50" />
                  </div>
                  <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl text-maroon leading-tight">
                    Smriti
                  </h2>
                  <p className="text-gold text-xl sm:text-2xl my-1">&</p>
                  <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl text-maroon leading-tight">
                    Asbin
                  </h2>
                  <p className="font-[var(--font-heading)] text-maroon/50 text-xs sm:text-sm mt-4 tracking-wider">
                    23rd June 2026
                  </p>
                </div>
              </div>

              {/* Envelope flap (top triangle) */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[55%] origin-top"
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ rotateX: 0 }}
                animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Front of flap */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                    background: 'linear-gradient(180deg, #E8D5A8 0%, #D4C494 100%)',
                    backfaceVisibility: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  {/* Flap border design */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="flapBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C9A227" stopOpacity="0.5" />
                        <stop offset="50%" stopColor="#8B1A1A" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#C9A227" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                    <path d="M 10,5 L 50%,calc(100% - 15) L calc(100% - 10),5" fill="none" stroke="url(#flapBorder)" strokeWidth="2" />
                  </svg>
                </div>

                {/* Back of flap */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                    background: 'linear-gradient(180deg, #D4C494 0%, #C4B484 100%)',
                    transform: 'rotateX(180deg)',
                    backfaceVisibility: 'hidden',
                  }}
                />
              </motion.div>

              {/* Wax Seal - centered on the flap point */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 z-10"
                style={{ top: 'calc(55% - 28px)' }}
                initial={{ scale: 1 }}
                animate={isOpening ? { scale: 0, opacity: 0, rotate: 180 } : { scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center relative"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #A52A2A, #8B0000 50%, #5C0000)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.2)',
                  }}
                >
                  {/* Seal texture */}
                  <div className="absolute inset-1 rounded-full border border-ivory/20" />
                  {/* SA monogram */}
                  <span className="font-[var(--font-heading)] text-gold text-lg sm:text-xl font-bold tracking-tight">
                    S&A
                  </span>
                </div>
              </motion.div>

              {/* Bottom flaps (left and right triangles) */}
              <div 
                className="absolute bottom-0 left-0 w-1/2 h-[45%]"
                style={{ 
                  clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
                  background: 'linear-gradient(135deg, #E8D5A8 0%, #D4C494 100%)',
                }}
              />
              <div 
                className="absolute bottom-0 right-0 w-1/2 h-[45%]"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
                  background: 'linear-gradient(-135deg, #E8D5A8 0%, #D4C494 100%)',
                }}
              />
            </div>

            {/* Open button */}
            <motion.button
              onClick={handleOpen}
              disabled={isOpening}
              className="mt-8 sm:mt-10 group cursor-pointer disabled:cursor-not-allowed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="relative px-10 py-3.5 sm:px-12 sm:py-4 rounded-full overflow-hidden shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #C9A227 0%, #E5D080 50%, #C9A227 100%)',
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <span className="relative font-[var(--font-heading)] text-maroon font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2">
                  {isOpening ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </motion.span>
                      Opening...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                      </svg>
                      Open Invitation
                    </>
                  )}
                </span>
              </div>
            </motion.button>
          </motion.div>

          {/* Bottom blessing text */}
          <motion.div
            className="absolute bottom-6 sm:bottom-10 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 sm:w-12 h-px bg-gold/40" />
              <p className="font-[var(--font-devanagari)] text-gold/90 text-base sm:text-lg">
                शुभ विवाह
              </p>
              <div className="w-8 sm:w-12 h-px bg-gold/40" />
            </div>
            <p className="text-ivory/50 text-xs tracking-wider">
              Tap to reveal your invitation
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
