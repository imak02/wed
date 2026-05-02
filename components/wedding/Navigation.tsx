'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { WeddingLogo } from './WeddingLogo'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#story' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Family', href: '#family' },
  { name: 'RSVP', href: '#rsvp' },
  { name: 'Blessings', href: '#blessings' },
]

// Floating flower component
function FloatingFlower({ delay, left }: { delay: number; left: string }) {
  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
      style={{ left }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3], 
        scale: [0.8, 1, 0.8],
        y: [-2, 2, -2],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold/60">
        <path d="M12 2C12 2 14 6 14 8C14 10 12 12 12 12C12 12 10 10 10 8C10 6 12 2 12 2Z" />
        <path d="M12 12C12 12 16 10 18 10C20 10 22 12 22 12C22 12 20 14 18 14C16 14 12 12 12 12Z" />
        <path d="M12 12C12 12 8 10 6 10C4 10 2 12 2 12C2 12 4 14 6 14C8 14 12 12 12 12Z" />
        <path d="M12 22C12 22 14 18 14 16C14 14 12 12 12 12C12 12 10 14 10 16C10 18 12 22 12 22Z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    </motion.div>
  )
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
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
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-lg border-b border-gold/20'
            : 'bg-gradient-to-b from-maroon/90 via-maroon/70 to-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Decorative bottom border with gradient */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Floating flowers decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingFlower delay={0} left="5%" />
          <FloatingFlower delay={1} left="15%" />
          <FloatingFlower delay={2} left="85%" />
          <FloatingFlower delay={1.5} left="95%" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              className="flex items-center gap-2 cursor-pointer group relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              <WeddingLogo size="sm" animated />
              <div className="hidden sm:block">
                <span className={`font-[var(--font-great-vibes)] text-2xl transition-colors ${
                  isScrolled ? 'text-maroon group-hover:text-gold-dark' : 'text-ivory group-hover:text-gold'
                }`}>
                  Smriti & Asbin
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`relative px-4 py-2 text-base font-medium tracking-wide transition-all cursor-pointer ${
                    activeSection === item.href.slice(1)
                      ? isScrolled ? 'text-maroon' : 'text-gold'
                      : isScrolled ? 'text-maroon/70 hover:text-maroon' : 'text-ivory/90 hover:text-gold'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full ${
                        isScrolled ? 'bg-maroon' : 'bg-gold'
                      }`}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* RSVP Button - Desktop */}
            <motion.a
              href="#rsvp"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#rsvp')
              }}
              className={`hidden lg:flex items-center gap-2 px-5 py-2.5 font-semibold rounded-full text-base transition-all cursor-pointer shadow-lg hover:shadow-xl ${
                isScrolled
                  ? 'bg-maroon text-ivory hover:bg-maroon-light'
                  : 'bg-gold/90 hover:bg-gold text-maroon'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RSVP Now
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                isScrolled ? 'text-maroon hover:text-gold-dark' : 'text-ivory hover:text-gold'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-maroon/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              className="absolute inset-x-4 top-24 bg-cream rounded-2xl p-6 shadow-2xl border border-gold/20"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`px-4 py-3 text-lg font-medium rounded-lg transition-colors cursor-pointer ${
                      activeSection === item.href.slice(1)
                        ? 'bg-maroon text-ivory'
                        : 'text-maroon hover:bg-maroon/10'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Decorative element */}
              <div className="mt-6 pt-6 border-t border-gold/30 flex flex-col items-center">
                <WeddingLogo size="md" />
                <p className="text-sm text-maroon/60 mt-2">23rd June 2026</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
