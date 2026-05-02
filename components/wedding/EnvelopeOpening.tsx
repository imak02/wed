'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface EnvelopeOpeningProps {
  onOpen: () => void
}

// Om SVG component
function OmSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 85c-22.1 0-40-17.9-40-40S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z" fillOpacity="0.1"/>
      <text x="50" y="68" textAnchor="middle" className="font-[var(--font-devanagari)]" fontSize="50" fontWeight="bold">ॐ</text>
    </svg>
  )
}

// Swastika SVG for religious symbolism
function SwastikSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor">
      <path d="M17 3h6v14h14v6H23v14h-6V23H3v-6h14V3z" fillOpacity="0.8"/>
      <path d="M23 3h8v8h-8V3zM3 17h8v8H3v-8zM29 23h8v8h-8v-8zM9 29h8v8H9v-8z" fillOpacity="0.8"/>
    </svg>
  )
}

// Kalash (sacred pot) SVG
function KalashSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} fill="currentColor">
      <ellipse cx="30" cy="70" rx="25" ry="8" fillOpacity="0.6"/>
      <path d="M10 65c0-20 5-35 20-40s20 20 20 40" fill="none" stroke="currentColor" strokeWidth="2"/>
      <ellipse cx="30" cy="25" rx="15" ry="5" fillOpacity="0.8"/>
      <path d="M20 25c-5-15 5-22 10-22s15 7 10 22" fill="currentColor"/>
      <ellipse cx="30" cy="8" rx="5" ry="3"/>
    </svg>
  )
}

// Diya (oil lamp) SVG
function DiyaSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className}>
      <path d="M10 40c0 5 8 8 15 8s15-3 15-8c0-3-5-5-15-5s-15 2-15 5z" fill="currentColor" fillOpacity="0.8"/>
      <ellipse cx="25" cy="35" rx="12" ry="5" fill="currentColor"/>
      <path d="M22 35c0-8 3-12 3-12s3 4 3 12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M25 18c-2 0-3-3-3-6s2-7 3-7 3 4 3 7-1 6-3 6z" fill="#FFD700" className="animate-pulse"/>
      <ellipse cx="25" cy="14" rx="2" ry="3" fill="#FFA500" className="animate-pulse"/>
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
    }, 2000)
  }

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-4"
          style={{
            background: 'radial-gradient(ellipse at center, #8B1A1A 0%, #5C1010 50%, #3A0A0A 100%)',
          }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated mandala background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.08]"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 400 400" className="w-full h-full text-gold">
                {[...Array(36)].map((_, i) => (
                  <g key={i} transform={`rotate(${i * 10} 200 200)`}>
                    <path d="M200 20 Q220 100 200 180 Q180 100 200 20" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="200" cy="30" r="5" fill="currentColor"/>
                  </g>
                ))}
                <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </motion.div>
          </div>

          {/* Floating sacred symbols */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-gold/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-10%`,
                }}
                animate={{
                  y: ['0vh', '120vh'],
                  x: [0, Math.random() * 80 - 40],
                  rotate: [0, 360],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 8,
                  ease: 'linear',
                }}
              >
                {i % 4 === 0 ? (
                  <SwastikSymbol className="w-6 h-6" />
                ) : i % 4 === 1 ? (
                  <div className="w-3 h-3 bg-gold/40 rounded-full" />
                ) : i % 4 === 2 ? (
                  <svg viewBox="0 0 24 24" className="w-4 h-4">
                    <path fill="currentColor" d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z"/>
                  </svg>
                ) : (
                  <DiyaSymbol className="w-5 h-5 text-gold/30" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Ambient sacred glow */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(201,162,39,0.2) 0%, transparent 60%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
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
            {/* Om Symbol at top */}
            <motion.div
              className="mb-6 text-gold"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="font-[var(--font-devanagari)] text-5xl sm:text-6xl">ॐ</span>
            </motion.div>

            {/* Traditional Scroll/Patra Envelope */}
            <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] md:w-[360px] md:h-[480px]">
              {/* Main scroll body */}
              <motion.div
                className="absolute inset-0 rounded-t-[100px] rounded-b-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #FFF8E7 0%, #F5E6C8 30%, #E8D5A8 100%)',
                  boxShadow: '0 25px 60px -12px rgba(50, 10, 10, 0.6), 0 0 80px rgba(201, 162, 39, 0.15)',
                }}
              >
                {/* Decorative border pattern */}
                <div className="absolute inset-3 sm:inset-4 border-2 border-maroon/30 rounded-t-[85px] rounded-b-md">
                  <div className="absolute inset-2 border border-gold/40 rounded-t-[80px] rounded-b-sm" />
                </div>

                {/* Top decorative paisley corners */}
                <div className="absolute top-8 left-6 w-8 h-8 text-maroon/40">
                  <svg viewBox="0 0 40 40" fill="currentColor">
                    <path d="M5 35C5 15 15 5 35 5C30 10 25 20 25 35C20 30 10 30 5 35Z"/>
                  </svg>
                </div>
                <div className="absolute top-8 right-6 w-8 h-8 text-maroon/40 scale-x-[-1]">
                  <svg viewBox="0 0 40 40" fill="currentColor">
                    <path d="M5 35C5 15 15 5 35 5C30 10 25 20 25 35C20 30 10 30 5 35Z"/>
                  </svg>
                </div>

                {/* Invitation content inside */}
                <motion.div
                  className="absolute inset-8 sm:inset-10 flex flex-col items-center justify-center text-center"
                  initial={{ y: 0, opacity: 1 }}
                  animate={isOpening ? { y: -60, opacity: 0 } : { y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Kalash symbol */}
                  <KalashSymbol className="w-10 h-14 sm:w-12 sm:h-16 text-maroon/60 mb-2" />
                  
                  {/* Sanskrit text */}
                  <p className="font-[var(--font-devanagari)] text-maroon/70 text-sm sm:text-base mb-1">
                    शुभ विवाह
                  </p>
                  
                  <p className="text-gold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-3">
                    Wedding Invitation
                  </p>

                  {/* Decorative divider */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                    <SwastikSymbol className="w-4 h-4 text-saffron/60" />
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  </div>

                  {/* Couple names */}
                  <h2 className="font-[var(--font-great-vibes)] text-2xl sm:text-3xl md:text-4xl text-maroon leading-tight">
                    Smriti
                  </h2>
                  <p className="text-gold text-lg my-0.5">&</p>
                  <h2 className="font-[var(--font-great-vibes)] text-2xl sm:text-3xl md:text-4xl text-maroon leading-tight">
                    Asbin
                  </h2>

                  <p className="text-maroon/50 text-xs sm:text-sm mt-3">
                    23rd June 2026
                  </p>

                  {/* Diya at bottom */}
                  <div className="mt-4 flex items-center gap-4">
                    <DiyaSymbol className="w-6 h-6 text-saffron" />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-saffron"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <DiyaSymbol className="w-6 h-6 text-saffron scale-x-[-1]" />
                  </div>
                </motion.div>

                {/* Bottom decorative elements */}
                <div className="absolute bottom-4 left-6 w-6 h-6 text-maroon/30 rotate-180">
                  <svg viewBox="0 0 40 40" fill="currentColor">
                    <path d="M5 35C5 15 15 5 35 5C30 10 25 20 25 35C20 30 10 30 5 35Z"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 right-6 w-6 h-6 text-maroon/30 rotate-180 scale-x-[-1]">
                  <svg viewBox="0 0 40 40" fill="currentColor">
                    <path d="M5 35C5 15 15 5 35 5C30 10 25 20 25 35C20 30 10 30 5 35Z"/>
                  </svg>
                </div>
              </motion.div>

              {/* Scroll top roll with seal */}
              <motion.div
                className="absolute -top-2 left-0 right-0 h-20 sm:h-24 origin-bottom"
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ rotateX: 0 }}
                animate={isOpening ? { rotateX: -180, y: -20 } : { rotateX: 0, y: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Front of scroll roll */}
                <div
                  className="absolute inset-0 rounded-t-[100px]"
                  style={{
                    background: 'linear-gradient(180deg, #E8D5A8 0%, #F5E6C8 50%, #FFF8E7 100%)',
                    backfaceVisibility: 'hidden',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  }}
                >
                  {/* Decorative roll edge */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-maroon/10 rounded-b-lg" />
                  
                  {/* Central wax seal */}
                  <motion.div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16"
                    animate={isOpening ? { scale: [1, 1.3, 0], rotate: [0, 20, 40] } : { scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-maroon via-maroon-light to-maroon shadow-xl flex items-center justify-center relative overflow-hidden">
                      {/* Wax texture */}
                      <div className="absolute inset-0 opacity-30">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-full h-0.5 bg-ivory/20 origin-left"
                            style={{ transform: `rotate(${i * 22.5}deg)` }}
                          />
                        ))}
                      </div>
                      {/* Inner seal design */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gold/50 flex items-center justify-center bg-maroon/60 backdrop-blur-sm">
                        <span className="font-[var(--font-devanagari)] text-gold text-lg sm:text-xl">ॐ</span>
                      </div>
                    </div>
                    {/* Wax drips */}
                    <div className="absolute -bottom-1 left-1/4 w-2 h-3 bg-maroon rounded-b-full" />
                    <div className="absolute -bottom-1.5 right-1/3 w-1.5 h-2 bg-maroon rounded-b-full" />
                  </motion.div>
                </div>

                {/* Back of scroll roll */}
                <div
                  className="absolute inset-0 rounded-t-[100px]"
                  style={{
                    background: 'linear-gradient(0deg, #E8D5A8 0%, #F5E6C8 100%)',
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
              className="mt-8 sm:mt-10 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative px-8 py-3 sm:px-10 sm:py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-maroon font-semibold rounded-full shadow-xl overflow-hidden disabled:opacity-50 text-sm sm:text-base">
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
                      <span className="font-[var(--font-devanagari)]">खोल्दै...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Open Invitation
                    </>
                  )}
                </span>
              </div>
            </motion.button>
          </motion.div>

          {/* Bottom Sanskrit blessing */}
          <motion.div
            className="absolute bottom-6 sm:bottom-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <div className="flex items-center gap-3">
              <DiyaSymbol className="w-5 h-5 text-saffron/50" />
              <div className="w-6 sm:w-10 h-px bg-gold/30" />
              <p className="font-[var(--font-devanagari)] text-gold/80 text-sm sm:text-base tracking-wide">
                शुभ विवाह
              </p>
              <div className="w-6 sm:w-10 h-px bg-gold/30" />
              <DiyaSymbol className="w-5 h-5 text-saffron/50 scale-x-[-1]" />
            </div>
            <p className="text-ivory/40 text-xs">Tap to reveal your invitation</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
