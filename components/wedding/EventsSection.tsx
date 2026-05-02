'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, Clock, MapPin, Shirt, Plus, ExternalLink, Navigation } from 'lucide-react'

const events = [
  {
    id: 'haldi',
    name: 'Haldi Ceremony',
    nepaliName: 'हल्दी',
    date: 'June 21, 2026',
    time: '10:00 AM',
    venue: 'Khatiwada Family Residence',
    address: 'Lalitpur, Nepal',
    dressCode: 'Yellow Traditional Attire',
    description:
      'Join us for the auspicious Haldi ceremony where turmeric paste is applied to the bride and groom for blessings of prosperity and protection.',
    theme: {
      bg: 'from-amber-50 to-yellow-50',
      border: 'border-amber-200',
      accent: 'text-amber-600',
      iconBg: 'bg-amber-50',
    },
  },
  {
    id: 'mehendi',
    name: 'Mehendi Night',
    nepaliName: 'मेहन्दी',
    date: 'June 21, 2026',
    time: '5:00 PM',
    venue: 'Khatiwada Family Residence',
    address: 'Lalitpur, Nepal',
    dressCode: 'Green & Gold Ethnic Wear',
    description:
      'An evening of intricate henna designs, music, and dance. Watch as beautiful mehendi adorns the bride\'s hands, symbolizing love and prosperity.',
    theme: {
      bg: 'from-emerald-50 to-green-50',
      border: 'border-emerald-200',
      accent: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
    },
  },
  {
    id: 'wedding',
    name: 'Wedding Ceremony',
    nepaliName: 'विवाह',
    date: 'June 23, 2026',
    time: '10:00 AM',
    venue: 'Himalayan Heritage Hall',
    address: 'Kathmandu, Nepal',
    coordinates: { lat: 27.7172, lng: 85.3240 },
    dressCode: 'Traditional Red & Gold',
    description:
      'The sacred union ceremony featuring traditional Hindu Nepali rituals including the Saptapadi (seven sacred steps) and Sindoor ceremony.',
    theme: {
      bg: 'from-red-50 to-rose-50',
      border: 'border-red-200',
      accent: 'text-red-600',
      iconBg: 'bg-red-50',
    },
  },
  {
    id: 'reception',
    name: 'Reception',
    nepaliName: 'स्वागत',
    date: 'June 23, 2026',
    time: '6:00 PM',
    venue: 'Himalayan Heritage Hall',
    address: 'Kathmandu, Nepal',
    coordinates: { lat: 27.7172, lng: 85.3240 },
    dressCode: 'Elegant Formal / Ethnic',
    description:
      'An evening of celebration, fine dining, and dancing. Join us as we celebrate our union with family and friends.',
    theme: {
      bg: 'from-amber-50 to-orange-50',
      border: 'border-amber-300',
      accent: 'text-amber-600',
      iconBg: 'bg-amber-50',
    },
  },
]

export function EventsSection() {
  const [activeEvent, setActiveEvent] = useState('wedding')
  const activeEventData = events.find(e => e.id === activeEvent) || events[2]

  return (
    <section id="events" className="py-16 sm:py-24 bg-gradient-to-b from-cream to-ivory relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-maroon/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">Save The Dates</p>
          <h2 className="font-[var(--font-great-vibes)] text-3xl sm:text-5xl md:text-6xl text-maroon mb-3">
            Wedding Events
          </h2>
          <p className="text-maroon/60 max-w-xl mx-auto text-sm sm:text-base">
            Join us for these beautiful celebrations as we begin our journey together
          </p>
        </motion.div>

        {/* Event tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {events.map((event) => (
            <motion.button
              key={event.id}
              onClick={() => setActiveEvent(event.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                activeEvent === event.id
                  ? 'bg-maroon text-ivory shadow-lg'
                  : 'bg-ivory text-maroon border border-maroon/20 hover:border-maroon/40 hover:bg-maroon/5'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {event.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              isActive={activeEvent === event.id}
              onClick={() => setActiveEvent(event.id)}
            />
          ))}
        </div>

        {/* Venue Map */}
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gold/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-4 sm:p-5 border-b border-gold/10 bg-gradient-to-r from-cream to-ivory">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-maroon text-base sm:text-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                  Wedding Venue
                </h3>
                <p className="text-maroon/60 text-xs sm:text-sm mt-0.5">{activeEventData.venue}, {activeEventData.address}</p>
              </div>
              <motion.a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeEventData.venue + ', ' + activeEventData.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-maroon text-ivory rounded-full text-xs sm:text-sm font-medium hover:bg-maroon-light transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Get Directions</span>
                <span className="sm:hidden">Directions</span>
              </motion.a>
            </div>
          </div>
          
          {/* Embedded Map */}
          <div className="relative h-48 sm:h-64 md:h-72 bg-cream">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.456!2d85.324!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(activeEventData.venue)}!5e0!3m2!1sen!2snp!4v1`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            {/* Fallback decorative map illustration */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream via-ivory to-cream pointer-events-none opacity-0 hover:opacity-0">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-2" />
                <p className="text-maroon font-medium">{activeEventData.venue}</p>
                <p className="text-maroon/60 text-sm">{activeEventData.address}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface EventCardProps {
  event: (typeof events)[number]
  index: number
  isActive: boolean
  onClick: () => void
}

function EventCard({ event, index, isActive, onClick }: EventCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const addToCalendar = () => {
    const startDate = new Date(event.date + ' ' + event.time)
    const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000)
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `${event.name} - Smriti & Asbin's Wedding`
    )}&dates=${startDate.toISOString().replace(/[-:]/g, '').replace('.000', '')}/${endDate.toISOString().replace(/[-:]/g, '').replace('.000', '')}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(event.venue + ', ' + event.address)}`
    
    window.open(googleCalendarUrl, '_blank')
  }

  return (
    <motion.div
      ref={ref}
      className="cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
    >
      <motion.div
        className={`relative bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 border ${
          isActive ? 'ring-2 ring-maroon shadow-md border-maroon/20' : 'border-gold/10 hover:shadow-md hover:border-gold/20'
        }`}
        whileHover={{ y: -2 }}
      >
        {/* Gradient header bar */}
        <div className={`h-1 bg-gradient-to-r ${event.theme.bg}`} />

        <div className="p-3 sm:p-4">
          {/* Header row */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-maroon">{event.name}</h3>
              <p className={`text-xs sm:text-sm ${event.theme.accent}`}>{event.nepaliName}</p>
            </div>
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full ${event.theme.iconBg} flex items-center justify-center flex-shrink-0`}>
              <Calendar className={`w-4 h-4 ${event.theme.accent}`} />
            </div>
          </div>

          {/* Event details */}
          <div className="grid grid-cols-2 gap-1.5 mb-2 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 text-maroon/70">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold flex-shrink-0" />
              <span className="truncate">{event.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-maroon/70">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold flex-shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-1.5 text-maroon/70 col-span-2">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold flex-shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
            <div className="flex items-center gap-1.5 text-maroon/70 col-span-2">
              <Shirt className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold flex-shrink-0" />
              <span className="truncate">{event.dressCode}</span>
            </div>
          </div>

          {/* Description - only show when active */}
          {isActive && (
            <motion.p
              className="text-maroon/60 text-xs leading-relaxed mb-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              {event.description}
            </motion.p>
          )}

          {/* Action buttons */}
          <div className="flex gap-1.5 sm:gap-2">
            <motion.button
              onClick={(e) => {
                e.stopPropagation()
                addToCalendar()
              }}
              className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-maroon text-ivory rounded-full text-[10px] sm:text-xs font-medium hover:bg-maroon-light transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-3 h-3" />
              <span className="hidden sm:inline">Add to Calendar</span>
              <span className="sm:hidden">Calendar</span>
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.stopPropagation()
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    event.venue + ', ' + event.address
                  )}`,
                  '_blank'
                )
              }}
              className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 border border-maroon/20 text-maroon rounded-full text-[10px] sm:text-xs font-medium hover:border-maroon/40 hover:bg-maroon/5 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-3 h-3" />
              <span className="hidden sm:inline">Directions</span>
              <span className="sm:hidden">Map</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
