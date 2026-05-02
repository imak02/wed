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
            ? 'bg-cream/95 backdrop-blur-md shadow-lg'
            : 'bg-gradient-to-b from-maroon/95 via-maroon/70 to-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Decorative bottom border */}
        <div 
          className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.5), transparent)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              className="flex items-center gap-3 cursor-pointer group relative z-10"
              whileHover={{ scale: 1.02 }}
            >
              <WeddingLogo 
                size="sm" 
                animated 
                variant={isScrolled ? 'default' : 'light'}
              />
              <div className="hidden sm:block">
                <span className={`font-[var(--font-display)] text-3xl transition-colors ${
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
                  className={`relative px-4 py-2 font-[var(--font-heading)] text-sm tracking-wider uppercase transition-all cursor-pointer ${
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
              className={`hidden lg:flex items-center gap-2 px-6 py-2.5 font-[var(--font-heading)] text-sm tracking-wider uppercase rounded-full transition-all cursor-pointer shadow-lg hover:shadow-xl ${
                isScrolled
                  ? 'bg-maroon text-ivory hover:bg-maroon-light'
                  : 'bg-gold hover:bg-gold-dark text-maroon'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RSVP
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
              className="absolute inset-x-4 top-24 bg-cream rounded-2xl p-6 shadow-2xl border border-gold/30"
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
                    className={`px-4 py-3 font-[var(--font-heading)] text-base tracking-wider uppercase rounded-lg transition-colors cursor-pointer ${
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
                <WeddingLogo size="md" variant="default" />
                <p className="font-[var(--font-heading)] text-sm text-maroon/60 mt-3 tracking-wider">
                  23rd June 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
