'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, Clock, MapPin, Shirt, Plus, ExternalLink, Navigation, Sparkles } from 'lucide-react'

const events = [
  {
    id: 'haldi',
    name: 'Haldi Ceremony',
    nepaliName: 'हल्दी समारोह',
    date: 'June 21, 2026',
    time: '10:00 AM',
    venue: 'Khatiwada Family Residence',
    address: 'Lalitpur, Nepal',
    dressCode: 'Yellow Traditional Attire',
    description:
      'Join us for the auspicious Haldi ceremony where turmeric paste is applied to the bride and groom for blessings of prosperity and protection.',
    icon: '🌼',
    gradient: 'from-amber-500 via-yellow-400 to-amber-500',
    bgGradient: 'from-amber-50/80 via-yellow-50/60 to-amber-50/80',
    accentColor: 'text-amber-600',
    borderColor: 'border-amber-300',
  },
  {
    id: 'mehendi',
    name: 'Mehendi Night',
    nepaliName: 'मेहन्दी रात',
    date: 'June 21, 2026',
    time: '5:00 PM',
    venue: 'Khatiwada Family Residence',
    address: 'Lalitpur, Nepal',
    dressCode: 'Green & Gold Ethnic Wear',
    description:
      'An evening of intricate henna designs, music, and dance. Watch as beautiful mehendi adorns the bride\'s hands, symbolizing love and prosperity.',
    icon: '🌿',
    gradient: 'from-emerald-500 via-green-400 to-emerald-500',
    bgGradient: 'from-emerald-50/80 via-green-50/60 to-emerald-50/80',
    accentColor: 'text-emerald-600',
    borderColor: 'border-emerald-300',
  },
  {
    id: 'wedding',
    name: 'Wedding Ceremony',
    nepaliName: 'विवाह संस्कार',
    date: 'June 23, 2026',
    time: '10:00 AM',
    venue: 'Himalayan Heritage Hall',
    address: 'Kathmandu, Nepal',
    coordinates: { lat: 27.7172, lng: 85.3240 },
    dressCode: 'Traditional Red & Gold',
    description:
      'The sacred union ceremony featuring traditional Hindu Nepali rituals including the Saptapadi (seven sacred steps) and Sindoor ceremony.',
    icon: '💒',
    gradient: 'from-maroon via-maroon-light to-maroon',
    bgGradient: 'from-red-50/80 via-rose-50/60 to-red-50/80',
    accentColor: 'text-maroon',
    borderColor: 'border-maroon/30',
  },
  {
    id: 'reception',
    name: 'Reception',
    nepaliName: 'स्वागत समारोह',
    date: 'June 23, 2026',
    time: '6:00 PM',
    venue: 'Himalayan Heritage Hall',
    address: 'Kathmandu, Nepal',
    coordinates: { lat: 27.7172, lng: 85.3240 },
    dressCode: 'Elegant Formal / Ethnic',
    description:
      'An evening of celebration, fine dining, and dancing. Join us as we celebrate our union with family and friends.',
    icon: '🎉',
    gradient: 'from-gold-dark via-gold to-gold-dark',
    bgGradient: 'from-amber-50/80 via-orange-50/60 to-amber-50/80',
    accentColor: 'text-gold-dark',
    borderColor: 'border-gold/40',
  },
]

export function EventsSection() {
  const [activeEvent, setActiveEvent] = useState('wedding')
  const activeEventData = events.find(e => e.id === activeEvent) || events[2]

  return (
    <section id="events" className="py-20 sm:py-28 bg-gradient-to-b from-cream via-ivory to-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-maroon/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]">
          <svg viewBox="0 0 400 400" className="w-full h-full text-gold">
            {[...Array(24)].map((_, i) => (
              <line key={i} x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="0.5" transform={`rotate(${i * 15} 200 200)`}/>
            ))}
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="w-5 h-5 text-gold" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <p className="font-[var(--font-heading)] text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">Save The Dates</p>
          <h2 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl text-maroon mb-4">
            Wedding Events
          </h2>
          <p className="font-[var(--font-devanagari)] text-maroon/50 text-base sm:text-lg mb-2">
            शुभ मुहूर्त
          </p>
          <p className="text-maroon/60 max-w-xl mx-auto text-sm sm:text-base">
            Join us for these beautiful celebrations as we begin our journey together
          </p>
        </motion.div>

        {/* Event Timeline Navigation */}
        <motion.div
          className="flex justify-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative flex items-center gap-0">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gold/20 -translate-y-1/2 hidden sm:block" />
            
            {events.map((event, index) => (
              <motion.button
                key={event.id}
                onClick={() => setActiveEvent(event.id)}
                className="relative z-10 cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`
                  flex flex-col items-center px-3 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300
                  ${activeEvent === event.id 
                    ? `bg-gradient-to-br ${event.bgGradient} shadow-lg border ${event.borderColor}` 
                    : 'hover:bg-ivory/50'}
                `}>
                  <span className="text-xl sm:text-2xl mb-1">{event.icon}</span>
                  <span className={`text-[10px] sm:text-xs font-medium transition-colors ${
                    activeEvent === event.id ? event.accentColor : 'text-maroon/60'
                  }`}>
                    {event.name.split(' ')[0]}
                  </span>
                </div>
                {activeEvent === event.id && (
                  <motion.div
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${event.gradient}`}
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
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

        {/* Venue Map Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Header */}
          <div className={`p-5 sm:p-6 bg-gradient-to-r ${activeEventData.bgGradient} border-b border-gold/10`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeEventData.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                  {activeEventData.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-maroon text-lg sm:text-xl flex items-center gap-2">
                    {activeEventData.name}
                  </h3>
                  <p className="font-[var(--font-devanagari)] text-maroon/50 text-sm">{activeEventData.nepaliName}</p>
                  <div className="flex items-center gap-3 mt-1 text-sm text-maroon/70">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      {activeEventData.venue}
                    </span>
                  </div>
                </div>
              </div>
              <motion.a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeEventData.venue + ', ' + activeEventData.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r ${activeEventData.gradient} text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all cursor-pointer`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </motion.a>
            </div>
          </div>
          
          {/* Map */}
          <div className="relative h-56 sm:h-72 bg-cream">
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
      className="cursor-pointer h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
    >
      <motion.div
        className={`relative h-full bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 border-2 ${
          isActive 
            ? `${event.borderColor} shadow-xl` 
            : 'border-transparent hover:shadow-lg hover:border-gold/20'
        }`}
        whileHover={{ y: -4 }}
      >
        {/* Top gradient bar */}
        <div className={`h-1.5 bg-gradient-to-r ${event.gradient}`} />

        <div className="p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${event.bgGradient} flex items-center justify-center text-2xl sm:text-3xl border ${event.borderColor}`}>
                {event.icon}
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-maroon">{event.name}</h3>
                <p className={`font-[var(--font-devanagari)] text-sm ${event.accentColor}`}>{event.nepaliName}</p>
              </div>
            </div>
          </div>

          {/* Event details grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-maroon/70">
              <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-gold" />
              </div>
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-maroon/70">
              <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-gold" />
              </div>
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-maroon/70 col-span-2">
              <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <span className="truncate">{event.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-maroon/70 col-span-2">
              <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                <Shirt className="w-4 h-4 text-gold" />
              </div>
              <span className="truncate">{event.dressCode}</span>
            </div>
          </div>

          {/* Description - expandable on active */}
          <motion.div
            className="overflow-hidden"
            initial={false}
            animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-maroon/60 text-sm leading-relaxed mb-4 pb-1">
              {event.description}
            </p>
          </motion.div>

          {/* Action buttons */}
          <div className="flex gap-2 sm:gap-3">
            <motion.button
              onClick={(e) => {
                e.stopPropagation()
                addToCalendar()
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gradient-to-r ${event.gradient} text-white rounded-xl text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all cursor-pointer`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus className="w-4 h-4" />
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
              className={`flex items-center justify-center gap-1.5 px-4 py-2.5 border-2 ${event.borderColor} ${event.accentColor} rounded-xl text-xs sm:text-sm font-medium hover:bg-cream/50 transition-all cursor-pointer`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Directions</span>
            </motion.button>
          </div>
        </div>

        {/* Active indicator glow */}
        {isActive && (
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${event.bgGradient} opacity-30 pointer-events-none`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
