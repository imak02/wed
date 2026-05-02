'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface WeddingLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

const sizeMap = {
  sm: { width: 44, height: 44, imageSize: 36 },
  md: { width: 60, height: 60, imageSize: 50 },
  lg: { width: 88, height: 88, imageSize: 76 },
  xl: { width: 120, height: 120, imageSize: 104 },
}

export function WeddingLogo({ 
  size = 'md', 
  animated = true,
  className = '' 
}: WeddingLogoProps) {
  const dimensions = sizeMap[size]

  const Wrapper = animated ? motion.div : 'div'
  const wrapperProps = animated
    ? {
        whileHover: { scale: 1.05 },
        transition: { duration: 0.3, ease: 'easeOut' },
      }
    : {}

  return (
    <Wrapper 
      className={`relative cursor-pointer ${className}`} 
      style={{ width: dimensions.width, height: dimensions.height }}
      {...wrapperProps}
    >
      {/* Decorative ring */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #C9A227 0%, #E5D080 50%, #C9A227 100%)',
          padding: '2px',
        }}
      >
        <div className="w-full h-full rounded-full bg-ivory" />
      </div>
      
      {/* AI-generated couple logo */}
      <div className="absolute inset-1 rounded-full overflow-hidden flex items-center justify-center bg-ivory">
        <div className="relative" style={{ width: dimensions.imageSize, height: dimensions.imageSize }}>
          <Image
            src="/images/couple-logo.jpg"
            alt="Smriti & Asbin"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
      </div>
      
      {/* S & A overlay text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-red-800 via-red-700 to-red-800 px-2 py-0.5 rounded-full shadow-sm">
        <span 
          className="text-gold font-serif font-bold"
          style={{ fontSize: dimensions.width < 60 ? '8px' : dimensions.width < 90 ? '10px' : '12px' }}
        >
          S & A
        </span>
      </div>
    </Wrapper>
  )
}
