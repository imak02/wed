'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    checkTouch()

    if (isTouchDevice) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const handleMouseOut = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [cursorX, cursorY, isTouchDevice])

  if (isTouchDevice) return null

  return (
    <>
      {/* Main cursor - Lotus shape */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 45 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <svg
            width={isHovering ? "32" : "24"}
            height={isHovering ? "32" : "24"}
            viewBox="0 0 24 24"
            fill="none"
            className="transition-all duration-200"
          >
            {/* Lotus petals forming cursor */}
            <motion.path
              d="M12 2C12 2 14 6 14 8C14 10 12 12 12 12C12 12 10 10 10 8C10 6 12 2 12 2Z"
              fill={isHovering ? "#C9A227" : "#FAF8F5"}
              animate={{ scale: isHovering ? 1.1 : 1 }}
            />
            <motion.path
              d="M12 12C12 12 16 10 18 10C20 10 22 12 22 12C22 12 20 14 18 14C16 14 12 12 12 12Z"
              fill={isHovering ? "#C9A227" : "#FAF8F5"}
              animate={{ scale: isHovering ? 1.1 : 1 }}
            />
            <motion.path
              d="M12 12C12 12 8 10 6 10C4 10 2 12 2 12C2 12 4 14 6 14C8 14 12 12 12 12Z"
              fill={isHovering ? "#C9A227" : "#FAF8F5"}
              animate={{ scale: isHovering ? 1.1 : 1 }}
            />
            <motion.path
              d="M12 22C12 22 14 18 14 16C14 14 12 12 12 12C12 12 10 14 10 16C10 18 12 22 12 22Z"
              fill={isHovering ? "#C9A227" : "#FAF8F5"}
              animate={{ scale: isHovering ? 1.1 : 1 }}
            />
            {/* Center dot */}
            <circle
              cx="12"
              cy="12"
              r={isHovering ? "3" : "2"}
              fill={isHovering ? "#8B1A1A" : "#C9A227"}
              className="transition-all duration-200"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full border-2"
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            borderColor: isHovering ? 'rgba(201, 162, 39, 0.8)' : 'rgba(201, 162, 39, 0.3)',
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
