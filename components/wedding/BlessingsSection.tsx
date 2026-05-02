'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import { Heart, Send, Sparkles, Quote } from 'lucide-react'

const initialBlessings = [
  {
    id: 1,
    name: 'Aunt Kamala',
    message: 'May your love story be as timeless as the Himalayas. Wishing you both a lifetime of happiness and togetherness.',
    timestamp: '2 days ago',
  },
  {
    id: 2,
    name: 'Uncle Ramesh',
    message: 'May Lord Ganesh bless your union with prosperity and joy. Congratulations to both families!',
    timestamp: '3 days ago',
  },
  {
    id: 3,
    name: 'Cousin Priya',
    message: 'So excited for you both! You two are perfect for each other. Cannot wait to dance at your wedding!',
    timestamp: '4 days ago',
  },
  {
    id: 4,
    name: 'Family Friend',
    message: 'May your journey together be filled with love, laughter, and endless blessings. Congratulations!',
    timestamp: '5 days ago',
  },
]

export function BlessingsSection() {
  const [blessings, setBlessings] = useState(initialBlessings)
  const [newBlessing, setNewBlessing] = useState({ name: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newBlessing.name.trim() || !newBlessing.message.trim()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))

    const blessing = {
      id: Date.now(),
      name: newBlessing.name,
      message: newBlessing.message,
      timestamp: 'Just now',
    }

    setBlessings((prev) => [blessing, ...prev])
    setNewBlessing({ name: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="blessings" className="py-20 sm:py-32 bg-maroon relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-64 h-64">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-gold">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="5"
                x2="50"
                y2="95"
                stroke="currentColor"
                strokeWidth="0.5"
                transform={`rotate(${i * 22.5} 50 50)`}
              />
            ))}
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-gold">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="5"
                x2="50"
                y2="95"
                stroke="currentColor"
                strokeWidth="0.5"
                transform={`rotate(${i * 22.5} 50 50)`}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Shower Your Love</p>
          <h2 className="font-[var(--font-display)] text-4xl sm:text-6xl text-ivory mb-4">
            Blessings & Wishes
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="w-5 h-5 text-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Add blessing form */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-ivory/10 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
            <h3 className="text-ivory text-lg font-medium mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-gold" />
              Share Your Blessing
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={newBlessing.name}
                onChange={(e) => setNewBlessing((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-ivory/10 border border-gold/20 rounded-xl text-ivory placeholder:text-ivory/50 focus:outline-none focus:border-gold transition-colors"
              />
              <textarea
                placeholder="Write your blessing or wish for the couple..."
                value={newBlessing.message}
                onChange={(e) => setNewBlessing((prev) => ({ ...prev, message: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 bg-ivory/10 border border-gold/20 rounded-xl text-ivory placeholder:text-ivory/50 focus:outline-none focus:border-gold transition-colors resize-none"
              />
              <motion.button
                type="submit"
                disabled={isSubmitting || !newBlessing.name.trim() || !newBlessing.message.trim()}
                className="w-full py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-maroon font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Blessing
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Blessings wall */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blessings.map((blessing, index) => (
            <BlessingCard key={blessing.id} blessing={blessing} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface BlessingCardProps {
  blessing: typeof initialBlessings[number]
  index: number
}

function BlessingCard({ blessing, index }: BlessingCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      className="relative bg-ivory/10 backdrop-blur-sm rounded-xl p-6 border border-gold/20"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(201,162,39,0.4)' }}
    >
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/20" />

      {/* Content */}
      <p className="text-ivory/90 leading-relaxed mb-4 relative z-10">
        &ldquo;{blessing.message}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-saffron/30 flex items-center justify-center">
            <span className="text-ivory font-semibold text-sm">
              {blessing.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-ivory font-medium text-sm">{blessing.name}</p>
            <p className="text-ivory/50 text-xs">{blessing.timestamp}</p>
          </div>
        </div>
        <Heart className="w-4 h-4 text-gold/50" />
      </div>
    </motion.div>
  )
}
