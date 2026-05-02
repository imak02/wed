'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(onComplete, 500)
          }, 300)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-maroon"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Sacred Om Symbol with Lotus */}
          <motion.div
            className="relative w-28 h-28 sm:w-36 sm:h-36 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Rotating outer lotus ring */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 120 120" className="w-full h-full">
                {/* Lotus petals */}
                {[...Array(8)].map((_, i) => (
                  <motion.path
                    key={i}
                    d="M60 10 C65 25, 70 35, 60 50 C50 35, 55 25, 60 10"
                    fill="none"
                    stroke="rgba(201, 162, 39, 0.5)"
                    strokeWidth="1.5"
                    transform={`rotate(${i * 45} 60 60)`}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Inner rotating ring */}
            <motion.div
              className="absolute inset-4"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke="rgba(201, 162, 39, 0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>
            </motion.div>

            {/* Sacred Om symbol in center */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20">
                {/* Om symbol using text */}
                <text
                  x="50"
                  y="65"
                  textAnchor="middle"
                  fill="url(#omGradient)"
                  fontSize="55"
                  className="font-[var(--font-devanagari)]"
                  fontWeight="bold"
                >
                  ॐ
                </text>
                <defs>
                  <linearGradient id="omGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E5C158" />
                    <stop offset="50%" stopColor="#C9A227" />
                    <stop offset="100%" stopColor="#E5C158" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Pulsing glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gold/10 blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Couple names */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl text-ivory mb-2">
              Smriti & Asbin
            </h1>
            <p className="font-[var(--font-heading)] text-gold/80 tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs">
              Wedding Invitation
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-40 sm:w-48 h-1 bg-ivory/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="mt-4 text-ivory/50 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading your invitation...
          </motion.p>

          {/* Sanskrit blessing */}
          <motion.p
            className="absolute bottom-8 font-[var(--font-devanagari)] text-gold/40 text-sm tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            शुभं करोति कल्याणम्
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
