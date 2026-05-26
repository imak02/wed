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
      {/* Decorative golden ring - bolder */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #FFD700 0%, #C9A227 50%, #8B6914 100%)',
          padding: '4px',
        }}
      >
        <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center" />
      </div>
      
      {/* Hand-holding couple logo - elegant minimalist design */}
      <div className="absolute inset-1.5 rounded-full overflow-hidden flex items-center justify-center bg-white">
        <div className="w-full h-full rounded-full flex items-center justify-center bg-white border-2" style={{ borderColor: 'rgba(255, 215, 0, 0.3)' }}>
          <Image
            src="/logo.png"
            alt="Smriti & Asbin"
            width={dimensions.width - 16}
            height={dimensions.height - 16}
            className="object-contain font-bold"
            priority
          />
        </div>
      </div>
    </Wrapper>
  )
}
