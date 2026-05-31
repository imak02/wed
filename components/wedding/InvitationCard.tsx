'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface InvitationCardProps {
  isOpening: boolean
  coupleNameA: string
  coupleNameB: string
  location: string
  date: string
  time: string
}

export function InvitationCard({
  isOpening,
  coupleNameA,
  coupleNameB,
  location,
  date,
  time,
}: InvitationCardProps) {
  return (
    <AnimatePresence>
      {isOpening && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              // Allow closing by clicking backdrop
            }
          }}
        >
          <motion.div
            className="relative w-full max-w-2xl bg-gradient-to-b from-ivory to-cream rounded-2xl shadow-2xl overflow-hidden"
            initial={{
              scale: 0.5,
              y: 100,
              opacity: 0,
              rotateX: 90,
            }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
              rotateX: 0,
            }}
            exit={{
              scale: 0.5,
              y: 100,
              opacity: 0,
              rotateX: -90,
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
            style={{
              perspective: 1200,
            }}
          >
            {/* Decorative border */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 border-4 border-gold/60" />
              <div className="absolute inset-2 border border-gold/30" />
            </div>

            {/* Paper texture */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />

            {/* Content */}
            <motion.div
              className="relative z-10 px-8 py-12 md:px-16 md:py-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Top decoration */}
              <motion.div
                className="mb-6 text-gold text-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                ✦
              </motion.div>

              {/* Header text */}
              <motion.div
                className="mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm text-maroon/70 font-light tracking-widest uppercase mb-4">
                  Together with their families
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-maroon mb-2">
                  {coupleNameA}
                </h2>
                <p className="text-2xl text-gold mb-2">♥</p>
                <h2 className="text-4xl md:text-5xl font-serif text-maroon">
                  {coupleNameB}
                </h2>
              </motion.div>

              {/* Decorative divider */}
              <motion.div
                className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6 }}
              />

              {/* Event details */}
              <motion.div
                className="space-y-4 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div>
                  <p className="text-sm text-maroon/60 font-light">request the honour of your presence at their</p>
                  <p className="text-2xl font-serif text-maroon mt-2">Wedding Celebration</p>
                </div>
                <div className="pt-4">
                  <p className="text-lg font-serif text-maroon">{date}</p>
                  <p className="text-sm text-maroon/70 font-light mt-1">{time}</p>
                  <p className="text-sm text-maroon/70 font-light mt-3">{location}</p>
                </div>
              </motion.div>

              {/* Bottom decoration */}
              <motion.div
                className="text-gold text-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                ✦
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
