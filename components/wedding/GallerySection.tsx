'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Heart, Camera } from 'lucide-react'

const galleryImages = [
  { id: 1, category: 'couple', title: 'First Date', placeholder: 'Couple at sunset' },
  { id: 2, category: 'engagement', title: 'The Proposal', placeholder: 'Engagement moment' },
  { id: 3, category: 'couple', title: 'Temple Visit', placeholder: 'At the temple' },
  { id: 4, category: 'family', title: 'With Family', placeholder: 'Family gathering' },
  { id: 5, category: 'engagement', title: 'Ring Ceremony', placeholder: 'Ring exchange' },
  { id: 6, category: 'couple', title: 'Festival Joy', placeholder: 'Celebrating together' },
  { id: 7, category: 'family', title: 'Blessings', placeholder: 'Family blessings' },
  { id: 8, category: 'engagement', title: 'Happy Together', placeholder: 'Smiling couple' },
]

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'couple', name: 'Our Moments' },
  { id: 'engagement', name: 'Engagement' },
  { id: 'family', name: 'Family' },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const currentImageIndex = selectedImage !== null
    ? filteredImages.findIndex((img) => img.id === selectedImage)
    : -1

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentImageIndex === -1) return
    const newIndex =
      direction === 'prev'
        ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
        : (currentImageIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[newIndex].id)
  }

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-maroon relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-gold">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 w-40 h-40">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-gold">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Memories</p>
          <h2 className="font-[var(--font-great-vibes)] text-4xl sm:text-6xl text-ivory mb-4">
            Our Gallery
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
            <Camera className="w-5 h-5 text-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gold text-maroon'
                  : 'bg-ivory/10 text-ivory hover:bg-ivory/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layoutId={`gallery-${image.id}`}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(image.id)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-maroon-light/80 to-gold/30 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-8 h-8 text-ivory/40 mx-auto mb-2" />
                    <p className="text-ivory/60 text-xs px-2">{image.placeholder}</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title on hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-ivory text-sm font-medium">{image.title}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-gold/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 p-2 text-ivory hover:text-gold transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 p-2 text-ivory hover:text-gold transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-4 p-2 text-ivory hover:text-gold transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image container */}
            <motion.div
              className="relative max-w-4xl max-h-[80vh] aspect-square mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-maroon-light/80 to-gold/30 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-ivory/40 mx-auto mb-4" />
                  <p className="text-ivory/60 text-lg">
                    {filteredImages.find((img) => img.id === selectedImage)?.title}
                  </p>
                  <p className="text-ivory/40 text-sm mt-2">
                    {filteredImages.find((img) => img.id === selectedImage)?.placeholder}
                  </p>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute inset-4 border-2 border-gold/30 rounded-xl pointer-events-none" />
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-ivory/60 text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
