'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

interface AudioControllerProps {
  onSealBreak?: () => void
  onEnvelopeOpen?: () => void
}

export function AudioController({
  onSealBreak,
  onEnvelopeOpen,
}: AudioControllerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const sealSoundRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Background music
    audioRef.current = new Audio(
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
    )
    audioRef.current.loop = true
    audioRef.current.volume = 0.2
    audioRef.current.preload = 'auto'

    // Hide tooltip after 4 seconds
    const timer = setTimeout(() => setShowTooltip(false), 4000)

    return () => {
      clearTimeout(timer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
              setShowTooltip(false)
            })
            .catch((error) => {
              console.log('[v0] Audio playback failed:', error)
              setIsPlaying(false)
            })
        }
      }
    } catch (error) {
      console.log('[v0] Audio error:', error)
      setIsPlaying(false)
    }
  }

  const playSealBreakSound = () => {
    if (onSealBreak) {
      onSealBreak()
    }
  }

  const playEnvelopeOpenSound = () => {
    if (onEnvelopeOpen) {
      onEnvelopeOpen()
    }
  }

  // Expose sound functions to parent
  useEffect(() => {
    ;(window as any).playSealBreakSound = playSealBreakSound
    ;(window as any).playEnvelopeOpenSound = playEnvelopeOpenSound
  }, [])

  return (
    <div className="fixed top-6 right-6 z-40">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="absolute top-full right-0 mt-2 px-3 py-2 bg-maroon text-ivory text-sm rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-gold text-xs">♪</span>
              <span>Play music</span>
            </div>
            <div className="absolute bottom-full right-4 -mb-px">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-maroon" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={togglePlay}
        className={`relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors cursor-pointer ${
          isPlaying
            ? 'bg-maroon text-ivory'
            : 'bg-ivory text-maroon hover:bg-cream'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => !isPlaying && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Animated rings when playing */}
        {isPlaying && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold/30"
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold/30"
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}

        {/* Icon */}
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}

        {/* Playing indicator dots */}
        {isPlaying && (
          <div className="absolute -top-1 -right-1 flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-gold rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}
      </motion.button>
    </div>
  )
}
