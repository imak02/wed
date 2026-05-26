'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface WeddingLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

const sizeMap = {
  sm: { width: 40, height: 40 },
  md: { width: 56, height: 56 },
  lg: { width: 80, height: 80 },
  xl: { width: 120, height: 120 },
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
        whileHover: { scale: 1.08 },
        transition: { duration: 0.3, ease: 'easeOut' },
      }
    : {}

  return (
    <Wrapper 
      className={`relative cursor-pointer ${className}`}
      style={{ width: dimensions.width, height: dimensions.height }}
      {...wrapperProps}
    >
      {/* Decorative golden ring */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #FFD700 0%, #C9A227 50%, #8B6914 100%)',
          padding: '3px',
        }}
      >
        <div className="w-full h-full rounded-full bg-golden overflow-hidden flex items-center justify-center" />
      </div>
      
      {/* Hand-holding couple logo - elegant minimalist design */}
      <div className="absolute inset-1 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600 p-1">
        <div className="w-full h-full rounded-full flex items-center justify-center bg-yellow-500">
          <Image
            src="/logo.png"
            alt="Smriti & Asbin"
            width={dimensions.width - 12}
            height={dimensions.height - 12}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </Wrapper>
  )
}
