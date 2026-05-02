'use client'

import { motion } from 'framer-motion'

interface WeddingLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

const sizeMap = {
  sm: { width: 44, height: 44, iconSize: 28 },
  md: { width: 60, height: 60, iconSize: 38 },
  lg: { width: 88, height: 88, iconSize: 56 },
  xl: { width: 120, height: 120, iconSize: 76 },
}

// Couple SVG with red dress
function CoupleSVG({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 50 50" width={size} height={size} className="drop-shadow-sm">
      {/* Background circle */}
      <circle cx="25" cy="25" r="24" fill="none" />
      
      {/* Bride - left side with red dress */}
      <g>
        {/* Head */}
        <circle cx="17" cy="14" r="5" fill="#C9A227" />
        {/* Hair/veil decoration */}
        <path d="M12 12 Q17 8 22 12" fill="none" stroke="#C9A227" strokeWidth="1" />
        {/* Body/dress in red */}
        <path 
          d="M17 19 L12 42 Q17 45 22 42 L17 19" 
          fill="#DC2626"
        />
        {/* Dress details */}
        <path d="M12 30 Q17 32 22 30" fill="none" stroke="#B91C1C" strokeWidth="0.5" />
        <path d="M13 35 Q17 37 21 35" fill="none" stroke="#B91C1C" strokeWidth="0.5" />
        {/* Jewelry/necklace */}
        <path d="M14 19 Q17 21 20 19" fill="none" stroke="#FFD700" strokeWidth="1" />
      </g>
      
      {/* Groom - right side with red sherwani */}
      <g>
        {/* Head */}
        <circle cx="33" cy="14" r="5" fill="#C9A227" />
        {/* Turban/pagdi */}
        <path d="M28 11 Q33 7 38 11 Q38 14 33 13 Q28 14 28 11" fill="#DC2626" />
        <circle cx="33" cy="10" r="1.5" fill="#FFD700" />
        {/* Body/sherwani in red */}
        <path 
          d="M33 19 L29 42 L33 44 L37 42 L33 19" 
          fill="#DC2626"
        />
        {/* Sherwani details */}
        <path d="M33 22 L33 38" fill="none" stroke="#FFD700" strokeWidth="0.5" />
        <circle cx="33" cy="25" r="1" fill="#FFD700" />
        <circle cx="33" cy="30" r="1" fill="#FFD700" />
        <circle cx="33" cy="35" r="1" fill="#FFD700" />
      </g>
      
      {/* Heart between them */}
      <path 
        d="M25 26 C22 23, 19 26, 25 32 C31 26, 28 23, 25 26" 
        fill="#FFD700"
      />
      
      {/* S & A text at bottom */}
      <text 
        x="25" 
        y="47" 
        textAnchor="middle" 
        fill="#C9A227" 
        fontSize="6" 
        fontWeight="bold"
        fontFamily="serif"
      >
        S & A
      </text>
    </svg>
  )
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
      
      {/* Couple SVG logo */}
      <div className="absolute inset-1 rounded-full overflow-hidden flex items-center justify-center bg-ivory">
        <CoupleSVG size={dimensions.iconSize} />
      </div>
    </Wrapper>
  )
}
