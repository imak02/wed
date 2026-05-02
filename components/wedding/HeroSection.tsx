'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Heart, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Wedding date - 23rd June 2026
  const weddingDate = new Date('2026-06-23T10:00:00')

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-32"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-mandap.jpg"
          alt="Wedding Mandap"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-maroon/85 via-maroon-light/80 to-maroon/85" />
      </div>

      {/* Decorative mandala patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 -translate-x-1/2 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="20"
                x2="100"
                y2="180"
                stroke="currentColor"
                strokeWidth="0.5"
                transform={`rotate(${i * 30} 100 100)`}
              />
            ))}
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="20"
                x2="100"
                y2="180"
                stroke="currentColor"
                strokeWidth="0.5"
                transform={`rotate(${i * 30} 100 100)`}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Animated sacred fire glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,162,39,0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex-1 flex flex-col justify-center">
        {/* Sanskrit blessing */}
        <motion.p
          className="font-[var(--font-devanagari)] text-gold text-base sm:text-lg tracking-wider mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          सात फेरा, एक जीवन
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-gold to-gold" />
          <Heart className="w-5 h-5 text-gold fill-gold" />
          <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-gold to-gold" />
        </motion.div>

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="font-[var(--font-display)] text-6xl sm:text-8xl lg:text-9xl text-ivory mb-2">
            Smriti
          </h1>
          <p className="text-gold text-2xl sm:text-3xl mb-2 font-serif">&</p>
          <h1 className="font-[var(--font-display)] text-6xl sm:text-8xl lg:text-9xl text-ivory">
            Asbin
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-[var(--font-heading)] text-ivory/80 text-lg sm:text-xl mt-6 mb-8 tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Two Souls, One Sacred Journey
        </motion.p>

        {/* Wedding date */}
        <motion.div
          className="flex items-center justify-center gap-2 text-gold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Calendar className="w-5 h-5" />
          <span className="font-[var(--font-heading)] text-lg sm:text-xl tracking-wider">June 23, 2026</span>
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          className="grid grid-cols-4 gap-3 sm:gap-6 max-w-md mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' },
          ].map((item) => (
            <motion.div
              key={item.label}
              className="bg-ivory/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gold/20 cursor-default"
              whileHover={{ scale: 1.05, borderColor: 'rgba(201,162,39,0.5)' }}
            >
              <motion.span
                key={item.value}
                className="block text-2xl sm:text-4xl font-semibold text-ivory"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(item.value).padStart(2, '0')}
              </motion.span>
              <span className="font-[var(--font-heading)] text-[10px] sm:text-xs text-gold/80 uppercase tracking-wider">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={() => handleNavClick('#events')}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-maroon font-[var(--font-heading)] font-semibold tracking-wider uppercase rounded-full shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(201,162,39,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2 text-sm">
              <Calendar className="w-5 h-5" />
              View Events
            </span>
          </motion.button>
          <motion.button
            onClick={() => handleNavClick('#rsvp')}
            className="group px-8 py-3.5 bg-transparent border-2 border-gold text-gold font-[var(--font-heading)] font-semibold tracking-wider uppercase rounded-full hover:bg-gold/10 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2 text-sm">
              <MapPin className="w-5 h-5" />
              RSVP Now
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned at the bottom of the section */}
      <motion.div
        className="relative z-10 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2 cursor-pointer" onClick={() => handleNavClick('#story')}>
          <motion.div
            className="w-1.5 h-1.5 bg-gold rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
