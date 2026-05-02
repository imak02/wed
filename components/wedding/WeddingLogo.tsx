'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface WeddingLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

const sizeMap = {
  sm: { width: 44, height: 44 },
  md: { width: 60, height: 60 },
  lg: { width: 88, height: 88 },
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
      
      {/* Logo image */}
      <div className="absolute inset-1 rounded-full overflow-hidden">
        <Image
          src="/images/sa-logo.jpg"
          alt="S & A - Smriti and Asbin Wedding"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Wrapper>
  )
}
