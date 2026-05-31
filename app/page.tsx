'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import { LoadingScreen } from '@/components/wedding/LoadingScreen'
import { EnvelopeModal } from '@/components/wedding/EnvelopeModal'
import { SmoothScroll } from '@/components/wedding/SmoothScroll'
import { ScrollProgress } from '@/components/wedding/ScrollProgress'
import { Navigation } from '@/components/wedding/Navigation'
import { FloatingPetals } from '@/components/wedding/FloatingPetals'
import { HeroSection } from '@/components/wedding/HeroSection'
import { OurStorySection } from '@/components/wedding/OurStorySection'
import { EventsSection } from '@/components/wedding/EventsSection'
import { GallerySection } from '@/components/wedding/GallerySection'
import { FamilySection } from '@/components/wedding/FamilySection'
import { RSVPSection } from '@/components/wedding/RSVPSection'
import { BlessingsSection } from '@/components/wedding/BlessingsSection'
import { Footer } from '@/components/wedding/Footer'
import { MusicPlayer } from '@/components/wedding/MusicPlayer'

type AppState = 'loading' | 'envelope' | 'content'

export default function WeddingInvitation() {
  const [appState, setAppState] = useState<AppState>('loading')

  // Prevent scroll during loading and envelope states
  useEffect(() => {
    if (appState !== 'content') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [appState])

  return (
    <main className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {appState === 'loading' && (
          <LoadingScreen
            key="loading"
            onComplete={() => setAppState('envelope')}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {appState === 'envelope' && (
          <EnvelopeModal
            key="envelope"
            onShowDetails={() => setAppState('content')}
          />
        )}
      </AnimatePresence>

      {appState === 'content' && (
        <SmoothScroll>
          <ScrollProgress />
          <Navigation />
          <FloatingPetals />
          
          <HeroSection />
          <OurStorySection />
          <EventsSection />
          <GallerySection />
          <FamilySection />
          <RSVPSection />
          <BlessingsSection />
          <Footer />
          
          <MusicPlayer />
        </SmoothScroll>
      )}
    </main>
  )
}
