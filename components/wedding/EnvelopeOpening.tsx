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
    <svg viewBox="0 0 50 60" className={className} fill="none">
      {/* Flame glow */}
      <ellipse cx="25" cy="15" rx="8" ry="12" fill="url(#flameGlow)" opacity="0.3" />
      {/* Flame */}
      <path 
        d="M25 5 Q28 10 27 18 Q26 22 25 25 Q24 22 23 18 Q22 10 25 5" 
        fill="url(#flame)"
      />
      <path 
        d="M25 8 Q26 12 25.5 16 Q25 18 25 20 Q25 18 24.5 16 Q24 12 25 8" 
        fill="#FFE4B5"
      />
      {/* Lamp body */}
      <path 
        d="M15 35 Q10 38 12 45 Q14 52 25 55 Q36 52 38 45 Q40 38 35 35 Z" 
        fill="url(#lampBody)"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Lamp top edge */}
      <ellipse cx="25" cy="35" rx="10" ry="4" fill="url(#lampTop)" stroke="currentColor" strokeWidth="1" />
      {/* Wick holder */}
      <rect x="23" y="30" width="4" height="6" fill="currentColor" opacity="0.6" rx="1" />
      {/* Base */}
      <ellipse cx="25" cy="55" rx="8" ry="3" fill="currentColor" opacity="0.4" />
      <defs>
        <radialGradient id="flameGlow">
          <stop offset="0%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="flame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="lampBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="lampTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E5D080" />
          <stop offset="100%" stopColor="#C9A227" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Decorative Mandala Corner SVG
function MandalaCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <defs>
        <linearGradient id="mandalaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>
      {/* Concentric arcs */}
      <path d="M0 100 Q0 50 50 0" stroke="url(#mandalaGold)" strokeWidth="2" />
      <path d="M0 80 Q0 40 40 0" stroke="url(#mandalaGold)" strokeWidth="1.5" opacity="0.8" />
      <path d="M0 60 Q0 30 30 0" stroke="url(#mandalaGold)" strokeWidth="1" opacity="0.6" />
      {/* Decorative dots */}
      <circle cx="10" cy="90" r="3" fill="url(#mandalaGold)" />
      <circle cx="25" cy="75" r="2.5" fill="url(#mandalaGold)" opacity="0.8" />
      <circle cx="40" cy="60" r="2" fill="url(#mandalaGold)" opacity="0.6" />
      {/* Petal shapes */}
      <path d="M5 70 Q15 65 10 55" stroke="url(#mandalaGold)" strokeWidth="1" opacity="0.7" />
      <path d="M20 55 Q30 50 25 40" stroke="url(#mandalaGold)" strokeWidth="1" opacity="0.7" />
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
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
          style={{
            background: 'linear-gradient(145deg, #B91C1C 0%, #991B1B 30%, #7F1D1D 60%, #450A0A 100%)',
          }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Golden decorative border at top */}
          <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 md:h-10 overflow-hidden">
            <svg viewBox="0 0 1200 40" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="topBorder" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 35 Q20 15, 40 35 T80 35" fill="none" stroke="#FFD700" strokeWidth="2" />
                  <circle cx="40" cy="20" r="6" fill="none" stroke="#FFD700" strokeWidth="1.5" />
                  <circle cx="40" cy="20" r="2" fill="#FFD700" />
                </pattern>
              </defs>
              <rect width="1200" height="40" fill="url(#topBorder)" />
            </svg>
          </div>

          {/* Golden decorative border at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-8 md:h-10 overflow-hidden rotate-180">
            <svg viewBox="0 0 1200 40" className="w-full h-full" preserveAspectRatio="none">
              <rect width="1200" height="40" fill="url(#topBorder)" />
            </svg>
          </div>

          {/* Corner mandala decorations */}
          <MandalaCorner className="absolute top-6 sm:top-8 md:top-10 left-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32" />
          <MandalaCorner className="absolute top-6 sm:top-8 md:top-10 right-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 scale-x-[-1]" />
          <MandalaCorner className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 scale-y-[-1]" />
          <MandalaCorner className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 scale-[-1]" />

          {/* Decorative mandala pattern background */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFD700' stroke-width='0.5'%3E%3Ccircle cx='50' cy='50' r='45'/%3E%3Ccircle cx='50' cy='50' r='35'/%3E%3Ccircle cx='50' cy='50' r='25'/%3E%3Ccircle cx='50' cy='50' r='15'/%3E%3Cpath d='M50 5 L50 95 M5 50 L95 50 M20 20 L80 80 M80 20 L20 80'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px',
            }}
          />

          {/* Floating golden particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  background: 'radial-gradient(circle, #FFD700, #C9A227)',
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Ambient glow */}
          <motion.div
            className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Main scroll container with proper margins */}
          <motion.div
            className="relative flex flex-col items-center w-full max-w-[calc(100%-2rem)] sm:max-w-[calc(100%-3rem)] md:max-w-[calc(100%-4rem)] mx-4 sm:mx-6 md:mx-8 py-12 sm:py-14 md:py-16"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* The Sacred Scroll/Patra */}
            <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[520px]">
              {/* Top scroll curl */}
              <motion.div 
                className="relative h-6 sm:h-8 md:h-10 mb-[-2px] z-10"
                initial={{ scaleY: 1 }}
                animate={isOpening ? { scaleY: 0, opacity: 0 } : { scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <svg viewBox="0 0 400 40" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="scrollTop" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F5E6C8" />
                      <stop offset="50%" stopColor="#E8D5A8" />
                      <stop offset="100%" stopColor="#D4C494" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="200" cy="36" rx="190" ry="6" fill="rgba(0,0,0,0.15)" />
                  <path d="M10 40 Q10 8, 200 8 Q390 8, 390 40" fill="url(#scrollTop)" />
                  <path d="M15 38 Q15 12, 200 12 Q385 12, 385 38" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.6" />
                </svg>
              </motion.div>

              {/* Main scroll body */}
              <motion.div
                className="relative overflow-hidden rounded-sm"
                style={{
                  background: 'linear-gradient(180deg, #F8EDD8 0%, #F2E4C8 50%, #ECD9B8 100%)',
                  boxShadow: '0 15px 50px -10px rgba(0,0,0,0.35), inset 0 0 40px rgba(139,26,26,0.04)',
                }}
                initial={{ height: 'auto', opacity: 1 }}
                animate={isOpening ? { 
                  height: 0, 
                  opacity: 0,
                  transition: { duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }
                } : {}}
              >
                {/* Ornate border frame */}
                <div className="absolute inset-2 sm:inset-3 md:inset-4 border-2 border-red-800/40 pointer-events-none rounded-sm">
                  <div className="absolute inset-1.5 sm:inset-2 border border-gold/60 rounded-sm" />
                  
                  {/* Corner ornaments */}
                  {['top-0 left-0', 'top-0 right-0 scale-x-[-1]', 'bottom-0 left-0 scale-y-[-1]', 'bottom-0 right-0 scale-[-1]'].map((pos, i) => (
                    <svg key={i} className={`absolute ${pos} w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-red-800`} viewBox="0 0 50 50">
                      <path d="M5 45 Q5 5 45 5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <circle cx="10" cy="10" r="3" fill="currentColor" />
                      <path d="M5 32 Q5 15 22 15" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <div className="relative px-4 sm:px-6 md:px-10 py-5 sm:py-6 md:py-8 text-center">
                  {/* Ganesh Image - INSIDE the envelope */}
                  <motion.div
                    className="flex justify-center mb-2 sm:mb-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <Image
                        src="/images/ganesh-line.png"
                        alt="Lord Ganesha"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </motion.div>

                  {/* Sanskrit blessing - Shubh Vivah title with RED color */}
                  <h1 
                    className="font-[var(--font-devanagari)] text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 font-bold text-red-800"
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    }}
                  >
                    शुभ विवाह
                  </h1>
                  <p className="font-[var(--font-heading)] text-red-700 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4 md:mb-5 font-semibold">
                    Wedding Invitation
                  </p>

                  {/* Decorative divider with diyas */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
                    <DiyaSVG className="w-6 h-8 sm:w-7 sm:h-9 md:w-8 md:h-10 text-gold" />
                    <div className="w-8 sm:w-10 md:w-14 h-px bg-gradient-to-r from-transparent via-gold to-gold" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-800 rounded-full shadow-sm" />
                    <div className="w-8 sm:w-10 md:w-14 h-px bg-gradient-to-l from-transparent via-gold to-gold" />
                    <DiyaSVG className="w-6 h-8 sm:w-7 sm:h-9 md:w-8 md:h-10 text-gold" />
                  </div>

                  {/* Couple names with RED color */}
                  <h2 
                    className="font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-0.5 text-red-800"
                    style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.08)',
                    }}
                  >
                    Smriti
                  </h2>
                  <div className="flex items-center justify-center gap-2 sm:gap-3 my-1">
                    <div className="w-5 sm:w-6 md:w-8 h-px bg-gold" />
                    <span className="text-red-700 text-lg sm:text-xl md:text-2xl font-serif font-bold">&</span>
                    <div className="w-5 sm:w-6 md:w-8 h-px bg-gold" />
                  </div>
                  <h2 
                    className="font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-3 sm:mb-4 text-red-800"
                    style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.08)',
                    }}
                  >
                    Asbin
                  </h2>

                  {/* Date with better styling */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border-2 border-gold/60 rounded-full bg-gold/10">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-[var(--font-heading)] text-red-800 text-[10px] sm:text-xs md:text-sm tracking-wider font-semibold">
                      23rd June 2026
                    </span>
                  </div>

                  {/* Bottom decorative element */}
                  <div className="flex justify-center mt-3 sm:mt-4 md:mt-5">
                    <svg className="w-16 sm:w-20 md:w-24 h-3 sm:h-4 text-gold" viewBox="0 0 100 15" fill="none">
                      <path d="M0 7.5 Q25 0, 50 7.5 T100 7.5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="50" cy="7.5" r="3" fill="currentColor" />
                      <circle cx="25" cy="7.5" r="1.5" fill="currentColor" opacity="0.6" />
                      <circle cx="75" cy="7.5" r="1.5" fill="currentColor" opacity="0.6" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Bottom scroll curl */}
              <motion.div 
                className="relative h-6 sm:h-8 md:h-10 mt-[-2px] z-10"
                initial={{ scaleY: 1 }}
                animate={isOpening ? { scaleY: 0, opacity: 0 } : { scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg viewBox="0 0 400 40" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="scrollBottom" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#F5E6C8" />
                      <stop offset="50%" stopColor="#E8D5A8" />
                      <stop offset="100%" stopColor="#D4C494" />
                    </linearGradient>
                  </defs>
                  <path d="M10 0 Q10 32, 200 32 Q390 32, 390 0" fill="url(#scrollBottom)" />
                  <path d="M15 2 Q15 28, 200 28 Q385 28, 385 2" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.6" />
                </svg>
              </motion.div>

              {/* Wax seal with S&A logo - couple in red */}
              <motion.div
                className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 z-20"
                initial={{ scale: 1, rotate: 0 }}
                animate={isOpening ? { 
                  scale: 0, 
                  rotate: 180,
                  opacity: 0,
                } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #DC2626, #B91C1C 40%, #7F1D1D 80%, #450A0A)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.35), inset 0 1px 4px rgba(255,255,255,0.12)',
                  }}
                >
                  <div className="absolute inset-1 rounded-full border border-gold/50" />
                  {/* Couple silhouette in red dress style */}
                  <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                    {/* Bride silhouette */}
                    <circle cx="14" cy="10" r="4" fill="#FFD700" />
                    <path d="M14 14 L10 30 Q14 32 18 30 L14 14" fill="#FFD700" />
                    <path d="M10 20 Q14 22 18 20" fill="none" stroke="#FFD700" strokeWidth="0.5" />
                    {/* Groom silhouette */}
                    <circle cx="26" cy="10" r="4" fill="#FFD700" />
                    <path d="M26 14 L23 28 L26 30 L29 28 L26 14" fill="#FFD700" />
                    {/* Heart between */}
                    <path d="M20 18 C18 16, 16 18, 20 22 C24 18, 22 16, 20 18" fill="#DC2626" />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Open button */}
            <motion.button
              onClick={handleOpen}
              disabled={isOpening}
              className="mt-6 sm:mt-8 md:mt-10 group cursor-pointer disabled:cursor-not-allowed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="relative px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #C9A227 0%, #E5D080 50%, #C9A227 100%)',
                  boxShadow: '0 6px 25px -4px rgba(201,162,39,0.5)',
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <span className="relative font-[var(--font-heading)] text-red-900 font-bold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase flex items-center gap-1.5 sm:gap-2">
                  {isOpening ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
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
                      Open Invitation
                    </>
                  )}
                </span>
              </div>
            </motion.button>
          </motion.div>

          {/* Bottom blessing - removed "Tap to reveal" text */}
          <motion.div
            className="absolute bottom-10 sm:bottom-12 md:bottom-16 left-0 right-0 flex flex-col items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 md:w-12 h-px bg-gold/60" />
              <p className="font-[var(--font-devanagari)] text-gold text-sm sm:text-base md:text-lg font-medium">
                सात फेरे, एक जीवन
              </p>
              <div className="w-6 sm:w-8 md:w-12 h-px bg-gold/60" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
