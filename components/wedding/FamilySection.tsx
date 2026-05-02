'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, User } from 'lucide-react'

const brideFamily = {
  title: "Bride's Family",
  nepaliTitle: 'दुलहीको परिवार',
  members: [
    { name: 'Mr. Khatiwada', relation: 'Father of the Bride', description: 'A pillar of strength and wisdom' },
    { name: 'Mrs. Khatiwada', relation: 'Mother of the Bride', description: 'Heart of warmth and love' },
    { name: 'Srijana Khatiwada', relation: 'Sister of the Bride', description: 'Best friend and confidante' },
  ],
}

const groomFamily = {
  title: "Groom's Family",
  nepaliTitle: 'दुलहाको परिवार',
  members: [
    { name: 'Mr. Khanal', relation: 'Father of the Groom', description: 'Guide and inspiration' },
    { name: 'Mrs. Khanal', relation: 'Mother of the Groom', description: 'Source of endless love' },
    { name: 'Ashish Khanal', relation: 'Brother of the Groom', description: 'Partner in all adventures' },
  ],
}

const weddingParty = [
  { name: 'Priya Sharma', role: 'Maid of Honor', side: 'bride' },
  { name: 'Anisha Thapa', role: 'Bridesmaid', side: 'bride' },
  { name: 'Sabina Gurung', role: 'Bridesmaid', side: 'bride' },
  { name: 'Rohan Adhikari', role: 'Best Man', side: 'groom' },
  { name: 'Bikash Shrestha', role: 'Groomsman', side: 'groom' },
  { name: 'Niraj Karki', role: 'Groomsman', side: 'groom' },
]

export function FamilySection() {
  return (
    <section id="family" className="py-20 sm:py-32 bg-ivory relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 mandala-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">The Families</p>
          <h2 className="font-[var(--font-display)] text-4xl sm:text-6xl text-maroon mb-4">
            Our Beloved Families
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
            <Heart className="w-5 h-5 text-gold fill-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Families grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <FamilyCard family={brideFamily} side="bride" />
          <FamilyCard family={groomFamily} side="groom" />
        </div>

        {/* Wedding Party */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-[var(--font-display)] text-3xl sm:text-4xl text-maroon mb-2">
            Wedding Party
          </h3>
          <p className="text-maroon/60">Our dearest friends who stand with us</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {weddingParty.map((member, index) => (
            <WeddingPartyCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FamilyCardProps {
  family: typeof brideFamily
  side: 'bride' | 'groom'
}

function FamilyCard({ family, side }: FamilyCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: side === 'bride' ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: side === 'bride' ? -30 : 30 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-cream rounded-2xl p-6 sm:p-8 shadow-lg border border-gold/10">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl text-maroon">
            {family.title}
          </h3>
          <p className="text-gold text-lg">{family.nepaliTitle}</p>
        </div>

        {/* Members */}
        <div className="space-y-6">
          {family.members.map((member, index) => (
            <motion.div
              key={member.name}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-maroon/20 to-gold/20 flex items-center justify-center flex-shrink-0 border-2 border-gold/20">
                <User className="w-8 h-8 text-maroon/40" />
              </div>

              {/* Info */}
              <div>
                <h4 className="font-semibold text-maroon text-lg">{member.name}</h4>
                <p className="text-gold text-sm">{member.relation}</p>
                <p className="text-maroon/60 text-sm mt-1">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative corners */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/30 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/30 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/30 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/30 rounded-br-lg" />
      </div>
    </motion.div>
  )
}

interface WeddingPartyCardProps {
  member: typeof weddingParty[number]
  index: number
}

function WeddingPartyCard({ member, index }: WeddingPartyCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className={`relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full flex items-center justify-center mb-3 ${
          member.side === 'bride'
            ? 'bg-gradient-to-br from-maroon/20 to-saffron/20'
            : 'bg-gradient-to-br from-gold/20 to-maroon/20'
        }`}
        whileHover={{ scale: 1.1 }}
      >
        <User className="w-10 h-10 sm:w-12 sm:h-12 text-maroon/30" />
        
        {/* Ring decoration */}
        <div className="absolute inset-0 rounded-full border-2 border-gold/30" />
      </motion.div>

      <h4 className="font-medium text-maroon text-sm sm:text-base">{member.name}</h4>
      <p className={`text-xs sm:text-sm ${member.side === 'bride' ? 'text-maroon/60' : 'text-gold-dark'}`}>
        {member.role}
      </p>
    </motion.div>
  )
}
