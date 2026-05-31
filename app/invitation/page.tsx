'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeScene } from '@/components/wedding/EnvelopeScene'
import { WeddingEnvelope } from '@/components/wedding/WeddingEnvelope'
import { WaxSeal } from '@/components/wedding/WaxSeal'
import { InvitationCard } from '@/components/wedding/InvitationCard'
import { FloatingParticles } from '@/components/wedding/FloatingParticles'
import { EnvelopeText } from '@/components/wedding/EnvelopeText'
import { OpenInvitationButton } from '@/components/wedding/OpenInvitationButton'
import { AudioController } from '@/components/wedding/AudioController'
import { FloatingPetals } from '@/components/wedding/FloatingPetals'

const COUPLE_NAME_A = 'Ananya'
const COUPLE_NAME_B = 'Siddharth'
const EVENT_DATE = 'Saturday, the 15th of June, 2024'
const EVENT_TIME = '7:00 PM onwards'
const EVENT_LOCATION = 'The Grand Palace, New Delhi'

export default function InvitationPage() {
  const [isOpening, setIsOpening] = useState(false)
  const [showCard, setShowCard] = useState(false)

  const handleSealBreak = useCallback(() => {
    setIsOpening(true)
    // Simulate seal break animation time
    setTimeout(() => {
      setShowCard(true)
    }, 800)
  }, [])

  const handleReset = useCallback(() => {
    setIsOpening(false)
    setShowCard(false)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-ivory via-cream to-maroon/20 overflow-hidden">
      {/* Background elements */}
      <FloatingPetals />
      <FloatingParticles count={16} isActive={!isOpening} />

      {/* Main content */}
      <EnvelopeScene>
        <div className="relative w-full flex flex-col items-center justify-center gap-8">
          {/* Envelope container */}
          <motion.div
            className="relative w-full flex flex-col items-center"
            animate={{
              scale: isOpening ? 0.8 : 1,
              opacity: isOpening ? 0.3 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Floating particles around envelope */}
            <div className="absolute -inset-20 pointer-events-none">
              <FloatingParticles count={8} isActive={!isOpening} />
            </div>

            {/* Main envelope */}
            <WeddingEnvelope isOpening={isOpening}>
              <div className="relative z-10 text-center">
                {/* Envelope text */}
                <div className="mb-6">
                  <motion.p
                    className="text-sm text-maroon/60 font-light tracking-wider uppercase"
                    animate={{ opacity: isOpening ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Together with their families
                  </motion.p>
                </div>

                {/* Wax seal */}
                <div className="flex justify-center my-6">
                  <WaxSeal isOpening={isOpening} onBreak={handleSealBreak} />
                </div>

                {/* Couple names on envelope */}
                <motion.div
                  className="mt-6"
                  animate={{ opacity: isOpening ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xl md:text-2xl font-serif text-maroon">
                    {COUPLE_NAME_A} ♥ {COUPLE_NAME_B}
                  </p>
                </motion.div>

                {/* Decorative element */}
                <motion.div
                  className="mt-4 text-gold text-lg"
                  animate={{ opacity: isOpening ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ✦
                </motion.div>
              </div>
            </WeddingEnvelope>
          </motion.div>

          {/* Invitation card modal */}
          <InvitationCard
            isOpening={showCard}
            coupleNameA={COUPLE_NAME_A}
            coupleNameB={COUPLE_NAME_B}
            location={EVENT_LOCATION}
            date={EVENT_DATE}
            time={EVENT_TIME}
          />

          {/* Open button */}
          <OpenInvitationButton onClick={handleSealBreak} isOpening={isOpening} />
        </div>
      </EnvelopeScene>

      {/* Audio controller */}
      <AudioController />

      {/* Close invitation button (when card is open) */}
      {showCard && (
        <motion.button
          onClick={handleReset}
          className="fixed bottom-6 left-6 z-50 px-6 py-3 bg-maroon text-ivory rounded-full font-semibold hover:bg-maroon-light transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close Invitation
        </motion.button>
      )}
    </div>
  )
}
