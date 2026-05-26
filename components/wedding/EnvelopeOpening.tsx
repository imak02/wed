'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface EnvelopeOpeningProps {
  onOpen: () => void
}

// Decorative Diya (Oil Lamp) SVG
function DiyaSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 50" className={className} fill="none">
      {/* Flame */}
      <path 
        d="M20 5 Q23 8 22 14 Q21 18 20 20 Q19 18 18 14 Q17 8 20 5" 
        fill="url(#flame)"
      />
      <ellipse cx="20" cy="12" rx="5" ry="8" fill="#FF6B35" opacity="0.4" />
      {/* Lamp body */}
      <path 
        d="M12 28 Q8 30 10 38 Q12 45 20 47 Q28 45 30 38 Q32 30 28 28 Z" 
        fill="#C9A227"
        stroke="#8B6914"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="flame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Decorative Swastik SVG
function SwastikSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      <path d="M20 5 L20 35 M5 20 L35 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 5 L26 5 M20 35 L14 35 M5 20 L5 14 M35 20 L35 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Decorative Marigold/Flower SVG
function FlowerSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      {/* Petals */}
      {[...Array(6)].map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="10"
          rx="4"
          ry="7"
          fill="currentColor"
          opacity="0.8"
          transform={`rotate(${i * 60} 20 20)`}
        />
      ))}
      {/* Center */}
      <circle cx="20" cy="20" r="5" fill="currentColor" />
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
          {/* Decorative top border with pattern */}
          <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 md:h-12 overflow-hidden">
            <svg viewBox="0 0 1200 50" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="topPattern" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
                  <path d="M0 40 Q25 15, 50 40 T100 40" fill="none" stroke="#FFD700" strokeWidth="2" />
                  <circle cx="50" cy="25" r="6" fill="none" stroke="#FFD700" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="1200" height="50" fill="url(#topPattern)" />
            </svg>
          </div>

          {/* Decorative bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-10 md:h-12 overflow-hidden rotate-180">
            <svg viewBox="0 0 1200 50" className="w-full h-full" preserveAspectRatio="none">
              <rect width="1200" height="50" fill="url(#topPattern)" />
            </svg>
          </div>

          {/* Corner decorations with flowers */}
          <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 text-gold opacity-40">
            <FlowerSVG className="w-full h-full" />
          </div>
          <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 text-gold opacity-40 scale-x-[-1]">
            <FlowerSVG className="w-full h-full" />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: '#FFD700',
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.3, 0.8, 0.3],
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
            className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 h-screen max-h-[100vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* The Sacred Scroll/Patra - sized to fit viewport */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px]">
              {/* Top scroll curl */}
              <motion.div 
                className="relative h-5 sm:h-6 md:h-7 mb-[-1px] z-10"
                initial={{ scaleY: 1 }}
                animate={isOpening ? { scaleY: 0, opacity: 0 } : { scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <svg viewBox="0 0 400 30" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="scrollTop" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F5E6C8" />
                      <stop offset="100%" stopColor="#E8D5A8" />
                    </linearGradient>
                  </defs>
                  <path d="M10 30 Q10 8, 200 8 Q390 8, 390 30" fill="url(#scrollTop)" />
                </svg>
              </motion.div>

              {/* Main scroll body - compact */}
              <motion.div
                className="relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #F8EDD8 0%, #F2E4C8 100%)',
                  boxShadow: '0 12px 40px -8px rgba(0,0,0,0.3)',
                }}
                initial={{ height: 'auto', opacity: 1 }}
                animate={isOpening ? { 
                  height: 0, 
                  opacity: 0,
                  transition: { duration: 1.2, delay: 0.5 }
                } : {}}
              >
                {/* Content - compact layout */}
                <div className="relative px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center">
                  {/* Swastik symbol at top */}
                  <motion.div
                    className="flex justify-center mb-2"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <SwastikSVG className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-800" />
                  </motion.div>

                  {/* Ganesh Image - small */}
                  <motion.div
                    className="flex justify-center mb-1.5 sm:mb-2"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                      <Image
                        src="/images/ganesh-transparent.jpg"
                        alt="Lord Ganesha"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h1 className="font-[var(--font-devanagari)] text-base sm:text-lg md:text-xl font-bold text-red-800 mb-0.5">
                    शुभ विवाह
                  </h1>
                  <p className="text-red-700 text-[8px] sm:text-[9px] md:text-xs tracking-widest uppercase mb-2 font-semibold">
                    Wedding Invitation
                  </p>

                  {/* Decorative divider with ritual elements */}
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
                    <DiyaSVG className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8 text-gold" />
                    <div className="w-6 sm:w-8 h-px bg-gold" />
                    <FlowerSVG className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                    <div className="w-6 sm:w-8 h-px bg-gold" />
                    <DiyaSVG className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8 text-gold" />
                  </div>

                  {/* Names - compact */}
                  <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl text-red-800 leading-tight mb-1">
                    Smriti & Asbin
                  </h2>

                  {/* Date - minimal */}
                  <div className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 border border-gold/50 rounded-full bg-gold/5 mb-2">
                    <svg className="w-3 h-3 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-[var(--font-heading)] text-red-800 text-[9px] sm:text-xs font-semibold">
                      23 Jun 2026
                    </span>
                  </div>

                  {/* Bottom decorative element */}
                  <div className="flex justify-center mt-2">
                    <FlowerSVG className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                </div>
              </motion.div>

              {/* Bottom scroll curl */}
              <motion.div 
                className="relative h-5 sm:h-6 md:h-7 mt-[-1px] z-10"
                initial={{ scaleY: 1 }}
                animate={isOpening ? { scaleY: 0, opacity: 0 } : { scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg viewBox="0 0 400 30" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="scrollBottom" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#F5E6C8" />
                      <stop offset="100%" stopColor="#E8D5A8" />
                    </linearGradient>
                  </defs>
                  <path d="M10 0 Q10 22, 200 22 Q390 22, 390 0" fill="url(#scrollBottom)" />
                </svg>
              </motion.div>

              {/* Wax seal */}
              <motion.div
                className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 z-20"
                initial={{ scale: 1, rotate: 0 }}
                animate={isOpening ? { scale: 0, rotate: 180, opacity: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #DC2626, #B91C1C 40%, #7F1D1D)',
                    boxShadow: '0 3px 12px rgba(0,0,0,0.3)',
                  }}
                >
                  <div className="absolute inset-0.5 rounded-full border border-gold/60" />
                  <span className="font-serif text-gold text-xs sm:text-sm font-bold">S&A</span>
                </div>
              </motion.div>
            </div>

            {/* Open button - positioned below */}
            <motion.button
              onClick={handleOpen}
              disabled={isOpening}
              className="mt-5 sm:mt-6 md:mt-7 group cursor-pointer disabled:cursor-not-allowed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="relative px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #C9A227 0%, #E5D080 50%, #C9A227 100%)',
                  boxShadow: '0 6px 20px -4px rgba(201,162,39,0.5)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative font-[var(--font-heading)] text-red-800 font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase flex items-center gap-2">
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
  )
}
