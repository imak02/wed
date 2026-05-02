'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Petal {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  rotation: number
  type: 'petal' | 'marigold' | 'lotus'
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const newPetals: Petal[] = [...Array(15)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 8,
      size: 12 + Math.random() * 16,
      rotation: Math.random() * 360,
      type: ['petal', 'marigold', 'lotus'][Math.floor(Math.random() * 3)] as Petal['type'],
    }))
    setPetals(newPetals)
  }, [])

  const renderPetal = (type: Petal['type'], size: number) => {
    switch (type) {
      case 'marigold':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-saffron">
            <circle cx="12" cy="12" r="4" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <ellipse
                key={angle}
                cx="12"
                cy="4"
                rx="3"
                ry="4"
                transform={`rotate(${angle} 12 12)`}
              />
            ))}
          </svg>
        )
      case 'lotus':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-maroon-light/60">
            <path d="M12 2C13.5 5 17 8 17 12C17 16 14 18 12 20C10 18 7 16 7 12C7 8 10.5 5 12 2Z" />
            <path d="M4 10C6 11 8 13 9 16C7 15 5 13 4 10Z" opacity="0.7" />
            <path d="M20 10C18 11 16 13 15 16C17 15 19 13 20 10Z" opacity="0.7" />
          </svg>
        )
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-gold/70">
            <path d="M12 2C13.5 5 17 7 17 10.5C17 14 14.5 16 12 18C9.5 16 7 14 7 10.5C7 7 10.5 5 12 2Z" />
          </svg>
        )
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-5%',
          }}
          initial={{ 
            y: '-5vh', 
            rotate: petal.rotation,
            opacity: 0.7 
          }}
          animate={{
            y: '110vh',
            x: [0, 30, -20, 40, 0],
            rotate: petal.rotation + 720,
            opacity: [0.7, 0.9, 0.7, 0.5, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'linear',
          }}
        >
          {renderPetal(petal.type, petal.size)}
        </motion.div>
      ))}
    </div>
  )
}
