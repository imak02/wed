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
          {/* Decorative mandala pattern background */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFD700' stroke-width='0.5'%3E%3Ccircle cx='60' cy='60' r='50'/%3E%3Ccircle cx='60' cy='60' r='40'/%3E%3Ccircle cx='60' cy='60' r='30'/%3E%3Ccircle cx='60' cy='60' r='20'/%3E%3Cpath d='M60 10 L60 110 M10 60 L110 60 M25 25 L95 95 M95 25 L25 95'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '120px 120px',
            }}
          />

          {/* Floating golden particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: 'radial-gradient(circle, #FFD700, #C9A227)',
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.3, 1, 0.3],
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
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Main scroll container */}
          <motion.div
            className="relative flex flex-col items-center px-4"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Om Symbol at top */}
            <motion.div
              className="mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="relative">
                <span className="font-[var(--font-devanagari)] text-5xl sm:text-6xl md:text-7xl text-gold drop-shadow-lg">
                  ॐ
                </span>
                {/* Glow effect */}
                <div className="absolute inset-0 blur-lg bg-gold/30 -z-10" />
              </div>
            </motion.div>

            {/* The Sacred Scroll/Patra */}
            <div className="relative w-[320px] sm:w-[400px] md:w-[480px]">
              {/* Top scroll curl */}
              <motion.div 
                className="relative h-10 sm:h-12 md:h-14 mb-[-2px] z-10"
                initial={{ scaleY: 1 }}
                animate={isOpening ? { scaleY: 0, opacity: 0 } : { scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <svg viewBox="0 0 400 50" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="scrollTop" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F5E6C8" />
                      <stop offset="50%" stopColor="#E8D5A8" />
                      <stop offset="100%" stopColor="#D4C494" />
                    </linearGradient>
                    <linearGradient id="scrollShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8B7355" />
                      <stop offset="100%" stopColor="#C4B484" />
                    </linearGradient>
                  </defs>
                  {/* Scroll curl shadow */}
                  <ellipse cx="200" cy="45" rx="190" ry="8" fill="rgba(0,0,0,0.2)" />
                  {/* Main curl */}
                  <path d="M10 50 Q10 10, 200 10 Q390 10, 390 50" fill="url(#scrollTop)" />
                  {/* Curl edge detail */}
                  <path d="M15 48 Q15 15, 200 15 Q385 15, 385 48" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.5" />
                  {/* Decorative line */}
                  <path d="M50 35 L350 35" fill="none" stroke="#8B1A1A" strokeWidth="0.5" opacity="0.3" />
                </svg>
              </motion.div>

              {/* Main scroll body */}
              <motion.div
                className="relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #F5E6C8 0%, #EDE0C8 50%, #E8D5A8 100%)',
                  boxShadow: '0 20px 60px -15px rgba(0,0,0,0.4), inset 0 0 30px rgba(139,26,26,0.05)',
                }}
                initial={{ height: 'auto', opacity: 1 }}
                animate={isOpening ? { 
                  height: 0, 
                  opacity: 0,
                  transition: { duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }
                } : {}}
              >
                {/* Ornate border frame */}
                <div className="absolute inset-4 sm:inset-6 border-2 border-maroon/20 pointer-events-none">
                  <div className="absolute inset-2 border border-gold/40" />
                  
                  {/* Corner ornaments */}
                  {['top-0 left-0', 'top-0 right-0 scale-x-[-1]', 'bottom-0 left-0 scale-y-[-1]', 'bottom-0 right-0 scale-[-1]'].map((pos, i) => (
                    <svg key={i} className={`absolute ${pos} w-10 h-10 sm:w-12 sm:h-12 text-maroon/40`} viewBox="0 0 50 50">
                      <path d="M5 45 Q5 5 45 5" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.5" />
                      <path d="M5 35 Q5 15 25 15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <div className="relative px-8 sm:px-12 py-8 sm:py-10 text-center">
                  {/* Swastik symbol */}
                  <div className="flex justify-center mb-3">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-maroon/60" viewBox="0 0 40 40">
                      <path d="M20 5 L20 35 M5 20 L35 20" stroke="currentColor" strokeWidth="3" />
                      <path d="M20 5 L28 5 M20 35 L12 35 M5 20 L5 12 M35 20 L35 28" stroke="currentColor" strokeWidth="3" />
                    </svg>
                  </div>

                  {/* Sanskrit blessing */}
                  <p className="font-[var(--font-devanagari)] text-maroon/70 text-base sm:text-lg mb-2">
                    शुभ विवाह
                  </p>
                  <p className="font-[var(--font-heading)] text-maroon/50 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-6">
                    Wedding Invitation
                  </p>

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                    <div className="w-2 h-2 bg-gold/60 rounded-full" />
                    <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  </div>

                  {/* Couple names */}
                  <h2 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl text-maroon leading-tight mb-1">
                    Smriti
                  </h2>
                  <div className="flex items-center justify-center gap-3 my-2">
                    <div className="w-8 h-px bg-gold/50" />
                    <span className="text-gold text-2xl sm:text-3xl">&</span>
                    <div className="w-8 h-px bg-gold/50" />
                  </div>
                  <h2 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl text-maroon leading-tight mb-6">
                    Asbin
                  </h2>

                  {/* Date */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-[var(--font-heading)] text-maroon/70 text-sm sm:text-base tracking-wider">
                      23rd June 2026
                    </span>
                  </div>

                  {/* Diya / Oil lamp decoration */}
                  <div className="flex justify-center mt-6 gap-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gold" viewBox="0 0 40 40">
                      <ellipse cx="20" cy="32" rx="12" ry="5" fill="currentColor" opacity="0.6" />
                      <path d="M12 32 Q20 20 28 32" fill="currentColor" opacity="0.8" />
                      <ellipse cx="20" cy="15" rx="3" ry="6" fill="#FF6B35" opacity="0.8" />
                      <ellipse cx="20" cy="12" rx="1.5" ry="3" fill="#FFD700" />
                    </svg>
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gold" viewBox="0 0 40 40">
                      <ellipse cx="20" cy="32" rx="12" ry="5" fill="currentColor" opacity="0.6" />
                      <path d="M12 32 Q20 20 28 32" fill="currentColor" opacity="0.8" />
                      <ellipse cx="20" cy="15" rx="3" ry="6" fill="#FF6B35" opacity="0.8" />
                      <ellipse cx="20" cy="12" rx="1.5" ry="3" fill="#FFD700" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Bottom scroll curl */}
              <motion.div 
                className="relative h-10 sm:h-12 md:h-14 mt-[-2px] z-10"
                initial={{ scaleY: 1 }}
                animate={isOpening ? { scaleY: 0, opacity: 0 } : { scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg viewBox="0 0 400 50" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="scrollBottom" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#F5E6C8" />
                      <stop offset="50%" stopColor="#E8D5A8" />
                      <stop offset="100%" stopColor="#D4C494" />
                    </linearGradient>
                  </defs>
                  {/* Main curl */}
                  <path d="M10 0 Q10 40, 200 40 Q390 40, 390 0" fill="url(#scrollBottom)" />
                  {/* Curl edge detail */}
                  <path d="M15 2 Q15 35, 200 35 Q385 35, 385 2" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.5" />
                </svg>
              </motion.div>

              {/* Wax seal */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20"
                initial={{ scale: 1, rotate: 0 }}
                animate={isOpening ? { 
                  scale: 0, 
                  rotate: 180,
                  opacity: 0,
                } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #DC2626, #B91C1C 40%, #7F1D1D 80%, #450A0A)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.4), inset 0 2px 6px rgba(255,255,255,0.15)',
                  }}
                >
                  <div className="absolute inset-1.5 rounded-full border border-gold/30" />
                  <span className="font-[var(--font-heading)] text-gold text-base sm:text-lg font-bold">
                    S&A
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Open button */}
            <motion.button
              onClick={handleOpen}
              disabled={isOpening}
              className="mt-10 sm:mt-12 group cursor-pointer disabled:cursor-not-allowed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="relative px-10 py-3.5 sm:px-14 sm:py-4 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #C9A227 0%, #E5D080 50%, #C9A227 100%)',
                  boxShadow: '0 8px 30px -5px rgba(201,162,39,0.5)',
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <span className="relative font-[var(--font-heading)] text-maroon font-semibold text-sm sm:text-base tracking-wider uppercase flex items-center gap-2">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Open Invitation
                    </>
                  )}
                </span>
              </div>
            </motion.button>
          </motion.div>

          {/* Bottom blessing */}
          <motion.div
            className="absolute bottom-6 sm:bottom-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 sm:w-14 h-px bg-gold/40" />
              <p className="font-[var(--font-devanagari)] text-gold/90 text-base sm:text-lg">
                सात फेरे, एक जीवन
              </p>
              <div className="w-10 sm:w-14 h-px bg-gold/40" />
            </div>
            <p className="text-ivory/50 text-xs tracking-widest uppercase">
              Tap to reveal your invitation
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
