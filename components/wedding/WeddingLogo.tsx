'use client'

import { motion } from 'framer-motion'

interface WeddingLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
  variant?: 'default' | 'light' | 'dark'
}

export function WeddingLogo({ 
  size = 'md', 
  animated = true, 
  className = '',
  variant = 'default'
}: WeddingLogoProps) {
  const sizes = {
    sm: { width: 40, height: 40 },
    md: { width: 56, height: 56 },
    lg: { width: 72, height: 72 },
    xl: { width: 96, height: 96 },
  }

  const { width, height } = sizes[size]

  const colors = {
    default: {
      primary: '#8B1A1A',
      secondary: '#C9A227',
      accent: '#E5D080',
      text: '#FAF8F5',
    },
    light: {
      primary: '#FAF8F5',
      secondary: '#C9A227',
      accent: '#E5D080',
      text: '#8B1A1A',
    },
    dark: {
      primary: '#5C1010',
      secondary: '#C9A227',
      accent: '#8B6914',
      text: '#FAF8F5',
    },
  }

  const c = colors[variant]

  const Wrapper = animated ? motion.div : 'div'
  const wrapperProps = animated
    ? {
        whileHover: { scale: 1.08 },
        transition: { duration: 0.3, ease: 'easeOut' },
      }
    : {}

  return (
    <Wrapper className={`relative cursor-pointer ${className}`} {...wrapperProps}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold gradient */}
          <linearGradient id={`goldGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.secondary} />
            <stop offset="50%" stopColor={c.accent} />
            <stop offset="100%" stopColor={c.secondary} />
          </linearGradient>
          
          {/* Maroon gradient */}
          <linearGradient id={`maroonGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.primary} />
            <stop offset="100%" stopColor={variant === 'light' ? '#F0E8DC' : '#5C1010'} />
          </linearGradient>

          {/* Drop shadow */}
          <filter id={`shadow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Outer decorative ring */}
        <circle
          cx="40"
          cy="40"
          r="38"
          stroke={`url(#goldGrad-${variant})`}
          strokeWidth="1.5"
          fill="none"
        />

        {/* Second decorative ring */}
        <circle
          cx="40"
          cy="40"
          r="34"
          stroke={c.secondary}
          strokeWidth="0.5"
          fill="none"
          opacity="0.4"
        />

        {/* Lotus petal pattern (8 petals) */}
        <g opacity="0.12">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={i}
              cx="40"
              cy="16"
              rx="5"
              ry="12"
              fill={c.secondary}
              transform={`rotate(${angle} 40 40)`}
            />
          ))}
        </g>

        {/* Main center circle */}
        <circle
          cx="40"
          cy="40"
          r="26"
          fill={`url(#maroonGrad-${variant})`}
          filter={`url(#shadow-${variant})`}
        />

        {/* Inner decorative ring */}
        <circle
          cx="40"
          cy="40"
          r="23"
          stroke={c.secondary}
          strokeWidth="0.75"
          fill="none"
          opacity="0.5"
        />

        {/* Elegant S */}
        <text
          x="30"
          y="46"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="20"
          fontWeight="600"
          fontStyle="italic"
          fill={c.text}
        >
          S
        </text>

        {/* Decorative ampersand with heart shape */}
        <g transform="translate(40, 40)">
          <path
            d="M0 -4 C-1.5 -6 -3 -7 -3 -9 C-3 -11 -1.5 -12 0 -12 C1.5 -12 3 -11 3 -9 C3 -7 1.5 -6 0 -4 L-3 1 M0 -4 L3 1"
            fill="none"
            stroke={c.secondary}
            strokeWidth="1.2"
            strokeLinecap="round"
            transform="translate(0, 1) scale(0.5)"
          />
        </g>

        {/* Elegant A */}
        <text
          x="44"
          y="46"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="20"
          fontWeight="600"
          fontStyle="italic"
          fill={c.text}
        >
          A
        </text>

        {/* Decorative dots at cardinal points */}
        <circle cx="40" cy="8" r="2" fill={c.secondary} />
        <circle cx="40" cy="72" r="2" fill={c.secondary} />
        <circle cx="8" cy="40" r="2" fill={c.secondary} />
        <circle cx="72" cy="40" r="2" fill={c.secondary} />

        {/* Small corner accent dots */}
        <circle cx="16" cy="16" r="1.5" fill={c.secondary} opacity="0.6" />
        <circle cx="64" cy="16" r="1.5" fill={c.secondary} opacity="0.6" />
        <circle cx="16" cy="64" r="1.5" fill={c.secondary} opacity="0.6" />
        <circle cx="64" cy="64" r="1.5" fill={c.secondary} opacity="0.6" />
      </svg>
    </Wrapper>
  )
}

// Export SVG string for favicon generation
export const logoSvgString = `<svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="38" stroke="#C9A227" stroke-width="1.5" fill="none"/>
  <circle cx="40" cy="40" r="26" fill="#8B1A1A"/>
  <circle cx="40" cy="40" r="23" stroke="#C9A227" stroke-width="0.75" fill="none" opacity="0.5"/>
  <text x="30" y="46" font-family="Georgia, serif" font-size="20" font-weight="600" font-style="italic" fill="#FAF8F5">S</text>
  <text x="44" y="46" font-family="Georgia, serif" font-size="20" font-weight="600" font-style="italic" fill="#FAF8F5">A</text>
  <circle cx="40" cy="8" r="2" fill="#C9A227"/>
  <circle cx="40" cy="72" r="2" fill="#C9A227"/>
  <circle cx="8" cy="40" r="2" fill="#C9A227"/>
  <circle cx="72" cy="40" r="2" fill="#C9A227"/>
</svg>`
