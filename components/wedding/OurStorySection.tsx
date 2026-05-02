'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Sparkles, Gem } from 'lucide-react'
import Image from 'next/image'

const stories = [
  {
    icon: Sparkles,
    title: 'How We Met',
    date: 'March 2020',
    description:
      'In the bustling streets of Kathmandu, fate brought us together at a mutual friend\'s gathering. What started as a shy exchange of glances turned into hours of endless conversation. Smriti\'s infectious laughter and Asbin\'s warm smile created an instant connection that neither of us could ignore.',
    image: '/images/how-we-met.jpg',
  },
  {
    icon: Heart,
    title: 'Journey So Far',
    date: '2020 - 2025',
    description:
      'Through every festival, every celebration, and every quiet moment together, our love grew stronger. We explored the beautiful hills of Nepal, shared countless cups of chai, and built dreams of a future together. Our families became one, and our bond became unbreakable.',
    image: '/images/journey.jpg',
  },
  {
    icon: Gem,
    title: 'The Proposal',
    date: 'December 2025',
    description:
      'Under the golden sunset at Nagarkot, with the Himalayas as our witness, Asbin got down on one knee. With trembling hands and a heart full of love, he asked Smriti to be his forever. Through tears of joy, she said yes, and our forever officially began.',
    image: '/images/proposal.jpg',
  },
]

export function OurStorySection() {
  return (
    <section id="story" className="py-20 sm:py-32 bg-ivory relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mandala-bg opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Our Love Story</p>
          <h2 className="font-[var(--font-great-vibes)] text-4xl sm:text-6xl text-maroon mb-4">
            How It All Began
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
            <Heart className="w-5 h-5 text-gold fill-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold to-gold/0 hidden lg:block" />

          {/* Story cards */}
          {stories.map((story, index) => (
            <StoryCard key={story.title} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface StoryCardProps {
  story: typeof stories[number]
  index: number
}

function StoryCard({ story, index }: StoryCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isEven = index % 2 === 0
  const Icon = story.icon

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24 last:mb-0 ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Timeline dot */}
      <motion.div
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-ivory border-4 border-gold rounded-full items-center justify-center z-10 shadow-lg"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Icon className="w-5 h-5 text-gold" />
      </motion.div>

      {/* Image side */}
      <motion.div
        className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Decorative frame */}
          <div className="absolute inset-3 border-2 border-gold/40 rounded-xl pointer-events-none" />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>

      {/* Content side */}
      <motion.div
        className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-16 lg:text-left' : 'lg:pr-16 lg:text-right'}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Mobile icon */}
        <div className="flex lg:hidden items-center justify-center w-12 h-12 bg-gold/10 rounded-full mb-4 mx-auto">
          <Icon className="w-6 h-6 text-gold" />
        </div>

        <span className="inline-block px-4 py-1 bg-gold/10 rounded-full text-gold text-sm mb-4">
          {story.date}
        </span>
        <h3 className="font-[var(--font-great-vibes)] text-3xl sm:text-4xl text-maroon mb-4">
          {story.title}
        </h3>
        <p className="text-maroon/70 leading-relaxed text-center lg:text-left">
          {story.description}
        </p>

        {/* Decorative element */}
        <div className={`flex items-center gap-2 mt-6 ${isEven ? '' : 'lg:justify-end'} justify-center lg:justify-start`}>
          <div className="w-8 h-px bg-gold" />
          <Heart className="w-3 h-3 text-gold fill-gold" />
          <div className="w-8 h-px bg-gold" />
        </div>
      </motion.div>
    </motion.div>
  )
}
