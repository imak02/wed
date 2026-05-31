'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface WaxSealProps {
  isOpening: boolean
  onBreak: () => void
}

export function WaxSeal({ isOpening, onBreak }: WaxSealProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [hasShineAnimation, setHasShineAnimation] = useState(false)

  useEffect(() => {
    if (!isOpening) {
      // Trigger shine animation periodically
      const timer = setInterval(() => {
        setHasShineAnimation(true)
        setTimeout(() => setHasShineAnimation(false), 1000)
      }, 5000)

      return () => clearInterval(timer)
    }
  }, [isOpening])

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          className="relative cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={onBreak}
          exit={{
            scale: 0,
            opacity: 0,
            y: -50,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Shadow under seal */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black/10 rounded-full blur-lg"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Main seal circle */}
          <motion.div
            className="relative w-40 h-40 rounded-full bg-gradient-to-b from-gold-dark via-gold to-gold-dark shadow-2xl flex items-center justify-center overflow-hidden group"
            animate={{
              y: isHovered ? -8 : 0,
              boxShadow: isHovered
                ? '0 20px 50px rgba(201, 162, 39, 0.4)'
                : '0 15px 40px rgba(201, 162, 39, 0.3)',
            }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Seal embossed pattern */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 160 160"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer circle */}
              <circle
                cx="80"
                cy="80"
                r="75"
                fill="none"
                stroke="#c9a227"
                strokeWidth="2"
                opacity="0.6"
              />
              {/* Inner circle */}
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="#c9a227"
                strokeWidth="1"
                opacity="0.4"
              />
              {/* Decorative petals */}
              {[0, 90, 180, 270].map((angle) => (
                <g key={`petal-${angle}`} transform={`rotate(${angle} 80 80)`}>
                  <ellipse
                    cx="80"
                    cy="30"
                    rx="8"
                    ry="12"
                    fill="#c9a227"
                    opacity="0.5"
                  />
                </g>
              ))}
            </svg>

            {/* Monogram text */}
            <div className="relative z-20 text-center">
              <div className="text-sm font-light text-maroon/60 tracking-wider">
                A
              </div>
              <div className="text-2xl font-light text-maroon leading-none my-1">
                ♥
              </div>
              <div className="text-sm font-light text-maroon/60 tracking-wider">
                S
              </div>
            </div>

            {/* Shine effect */}
            {hasShineAnimation && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                style={{
                  pointerEvents: 'none',
                }}
              />
            )}

            {/* Hover glow */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.div>

          {/* Click hint */}
          {!isHovered && (
            <motion.div
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm text-maroon/60 font-light whitespace-nowrap"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Click to open
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
