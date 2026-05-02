'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Heart, Send, Check, Sparkles, User, Users, Utensils, MessageSquare } from 'lucide-react'

interface FormData {
  name: string
  guests: string
  attending: 'yes' | 'no' | ''
  meal: string
  message: string
}

export function RSVPSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    guests: '1',
    attending: '',
    meal: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link to send RSVP
    const subject = encodeURIComponent(`Wedding RSVP: ${formData.name}`)
    const body = encodeURIComponent(
      `RSVP Details:\n\n` +
      `Name: ${formData.name}\n` +
      `Attending: ${formData.attending === 'yes' ? 'Yes, joyfully accepting!' : 'Regretfully declining'}\n` +
      `${formData.attending === 'yes' ? `Number of Guests: ${formData.guests}\n` : ''}` +
      `${formData.attending === 'yes' && formData.meal ? `Meal Preference: ${formData.meal}\n` : ''}` +
      `${formData.message ? `\nMessage:\n${formData.message}` : ''}`
    )
    
    // Open mailto link
    window.location.href = `mailto:ramthapa@proton.me?subject=${subject}&body=${body}`

    // Wait a moment then show success
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="rsvp" className="py-20 sm:py-32 bg-gradient-to-b from-cream to-ivory relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-maroon/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Be Our Guest</p>
          <h2 className="font-[var(--font-great-vibes)] text-4xl sm:text-6xl text-maroon mb-4">
            RSVP
          </h2>
          <p className="text-maroon/60 max-w-lg mx-auto">
            We would be honored by your presence. Please let us know if you can join us in our celebration.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          className="relative bg-ivory rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative top border */}
          <div className="h-2 bg-gradient-to-r from-maroon via-gold to-maroon" />

          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <SuccessState />
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  exit={{ opacity: 0, y: -20 }}
                >
                  {/* Name field */}
                  <div className="relative">
                    <label className="flex items-center gap-2 text-sm font-medium text-maroon mb-2">
                      <User className="w-4 h-4 text-gold" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-xl text-maroon placeholder:text-maroon/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                  </div>

                  {/* Attendance */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-maroon mb-3">
                      <Heart className="w-4 h-4 text-gold" />
                      Will you be attending?
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: 'yes', label: 'Joyfully Accept' },
                        { value: 'no', label: 'Regretfully Decline' },
                      ].map((option) => (
                        <motion.label
                          key={option.value}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer border-2 transition-all ${
                            formData.attending === option.value
                              ? 'bg-maroon text-ivory border-maroon'
                              : 'bg-cream text-maroon border-gold/20 hover:border-gold/40'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="radio"
                            name="attending"
                            value={option.value}
                            checked={formData.attending === option.value}
                            onChange={handleChange}
                            className="sr-only"
                            required
                          />
                          {formData.attending === option.value && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <Check className="w-4 h-4" />
                            </motion.span>
                          )}
                          {option.label}
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  {/* Conditional fields */}
                  <AnimatePresence>
                    {formData.attending === 'yes' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-6 overflow-hidden"
                      >
                        {/* Number of guests */}
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-maroon mb-2">
                            <Users className="w-4 h-4 text-gold" />
                            Number of Guests
                          </label>
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-xl text-maroon focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all appearance-none cursor-pointer"
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Meal preference */}
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-maroon mb-2">
                            <Utensils className="w-4 h-4 text-gold" />
                            Meal Preference
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['Vegetarian', 'Non-Vegetarian', 'Vegan', 'No Preference'].map(
                              (meal) => (
                                <motion.label
                                  key={meal}
                                  className={`flex items-center justify-center px-3 py-2 rounded-lg cursor-pointer border text-sm transition-all ${
                                    formData.meal === meal
                                      ? 'bg-gold text-maroon border-gold'
                                      : 'bg-cream text-maroon border-gold/20 hover:border-gold/40'
                                  }`}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <input
                                    type="radio"
                                    name="meal"
                                    value={meal}
                                    checked={formData.meal === meal}
                                    onChange={handleChange}
                                    className="sr-only"
                                  />
                                  {meal}
                                </motion.label>
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Message */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-maroon mb-2">
                      <MessageSquare className="w-4 h-4 text-gold" />
                      Message for the Couple (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Share your wishes or any special requests..."
                      className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-xl text-maroon placeholder:text-maroon/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.attending}
                    className="w-full py-4 bg-gradient-to-r from-maroon via-maroon-light to-maroon text-ivory font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
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
                        Send RSVP
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-gold/20 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-gold/20 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-gold/20 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-gold/20 rounded-br-xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}

function SuccessState() {
  return (
    <motion.div
      className="text-center py-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-maroon to-maroon-light flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <Check className="w-10 h-10 text-ivory" />
      </motion.div>

      <motion.h3
        className="font-[var(--font-great-vibes)] text-3xl sm:text-4xl text-maroon mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Thank You!
      </motion.h3>

      <motion.p
        className="text-maroon/70 max-w-md mx-auto mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Your email client should open with your RSVP details. Please send the email to complete your response. We are so grateful and excited to celebrate this special day with you!
      </motion.p>

      <motion.div
        className="flex items-center justify-center gap-2 text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Heart className="w-5 h-5 fill-gold" />
        <span className="font-medium">See you at the celebration!</span>
        <Heart className="w-5 h-5 fill-gold" />
      </motion.div>
    </motion.div>
  )
}
