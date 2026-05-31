'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail } from 'lucide-react'

interface OpenInvitationButtonProps {
  onClick: () => void
  isOpening: boolean
}

export function OpenInvitationButton({
  onClick,
  isOpening,
}: OpenInvitationButtonProps) {
  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          <motion.button
            onClick={onClick}
            className="relative px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-maroon font-semibold rounded-full shadow-lg flex items-center gap-3 group overflow-hidden cursor-pointer"
            animate={{
              boxShadow: [
                '0 10px 30px rgba(201, 162, 39, 0.3)',
                '0 15px 50px rgba(201, 162, 39, 0.5)',
                '0 10px 30px rgba(201, 162, 39, 0.3)',
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
              transition={{ duration: 0.6 }}
              style={{
                pointerEvents: 'none',
              }}
            />

            {/* Icon */}
            <Mail className="w-5 h-5 relative z-10" />

            {/* Text */}
            <span className="relative z-10">Tap to Open</span>
          </motion.button>

          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gold"
            animate={{ scale: [1, 1.3], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
