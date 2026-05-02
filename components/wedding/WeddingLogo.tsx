'use client'

import { motion } from 'framer-motion'

interface WeddingLogoProps {
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  className?: string
}

export function WeddingLogo({ size = 'md', animated = true, className = '' }: WeddingLogoProps) {
  const sizes = {
    sm: { width: 36, height: 36, text: 'text-xs' },
    md: { width: 48, height: 48, text: 'text-sm' },
    lg: { width: 64, height: 64, text: 'text-base' },
  }

  const { width, height } = sizes[size]

  const Wrapper = animated ? motion.div : 'div'
  const wrapperProps = animated
    ? {
        whileHover: { scale: 1.05, rotate: 5 },
        transition: { duration: 0.3 },
      }
    : {}

  return (
    <Wrapper className={`relative ${className}`} {...wrapperProps}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer decorative ring */}
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Inner decorative ring */}
        <circle
          cx="32"
          cy="32"
          r="26"
          stroke="url(#goldGradient)"
          strokeWidth="0.75"
          fill="none"
          opacity="0.5"
        />
        
        {/* Lotus petals background */}
        <g opacity="0.15">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={i}
              cx="32"
              cy="18"
              rx="6"
              ry="12"
              fill="#C9A227"
              transform={`rotate(${angle} 32 32)`}
            />
          ))}
        </g>
        
        {/* Center circle background */}
        <circle
          cx="32"
          cy="32"
          r="18"
          fill="url(#maroonGradient)"
        />
        
        {/* Decorative inner circle */}
        <circle
          cx="32"
          cy="32"
          r="16"
          stroke="#C9A227"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />
        
        {/* S letter */}
        <text
          x="24"
          y="37"
          fontFamily="Georgia, serif"
          fontSize="14"
          fontWeight="600"
          fill="#FAF8F5"
        >
          S
        </text>
        
        {/* Heart separator */}
        <path
          d="M32 30 C32 28 34 27 35 28 C36 29 36 30 35 31 L32 34 L29 31 C28 30 28 29 29 28 C30 27 32 28 32 30Z"
          fill="#C9A227"
          transform="scale(0.6) translate(21, 18)"
        />
        
        {/* A letter */}
        <text
          x="36"
          y="37"
          fontFamily="Georgia, serif"
          fontSize="14"
          fontWeight="600"
          fill="#FAF8F5"
        >
          A
        </text>
        
        {/* Small decorative dots */}
        <circle cx="32" cy="48" r="1.5" fill="#C9A227" />
        <circle cx="32" cy="16" r="1.5" fill="#C9A227" />
        <circle cx="16" cy="32" r="1.5" fill="#C9A227" />
        <circle cx="48" cy="32" r="1.5" fill="#C9A227" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A227" />
            <stop offset="50%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#C9A227" />
          </linearGradient>
          <linearGradient id="maroonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B1A1A" />
            <stop offset="100%" stopColor="#6B1515" />
          </linearGradient>
        </defs>
      </svg>
    </Wrapper>
  )
}

// Export SVG string for favicon generation
export const logoSvgString = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="30" stroke="#C9A227" stroke-width="1.5" fill="#8B1A1A"/>
  <circle cx="32" cy="32" r="26" stroke="#C9A227" stroke-width="0.75" fill="none" opacity="0.5"/>
  <text x="24" y="37" font-family="Georgia, serif" font-size="14" font-weight="600" fill="#FAF8F5">S</text>
  <text x="36" y="37" font-family="Georgia, serif" font-size="14" font-weight="600" fill="#FAF8F5">A</text>
  <circle cx="32" cy="48" r="1.5" fill="#C9A227"/>
  <circle cx="32" cy="16" r="1.5" fill="#C9A227"/>
</svg>`
