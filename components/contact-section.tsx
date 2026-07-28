'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn, SectionHeader } from './motion-wrapper'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 83284 46929',
    href: 'tel:+918328446929',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 83284 46929',
    href: 'https://wa.me/918328446929',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@wishrockinfra.com',
    href: 'mailto:info@wishrockinfra.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '5-100582, Sai Villas, Ramachandrapuram, Ameenpur, Medak 502032, Telangana',
    href: 'https://maps.google.com/?q=Ameenpur,Medak,Telangana',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Monday – Saturday | 9:00 AM – 6:00 PM',
    href: null,
  },
]

const services = [
  'Real Estate Consulting',
  'Open Plot Sales',
  'Residential Apartments',
  'Land Acquisition',
  'Excavation Services',
  'Civil Contracting',
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Contact Wishrock Infratech"
          description="Ready to invest, buy, or partner with us? Reach out and our team will respond within one business day."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info — left */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <FadeIn direction="right">
              <div className="bg-[#0F0F0F] rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Red accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D42B2B]" />
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-[#D42B2B]/10" />

                <h3 className="text-xl font-bold font-serif mb-2">Let&apos;s Start a Conversation</h3>
                <p className="text-white/60 text-sm mb-8">
                  Whether it&apos;s a property inquiry, investment advice, or project consultation — 
                  we&apos;re here for you.
                </p>

                <div className="flex flex-col gap-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="p-2.5 bg-[#D42B2B]/15 rounded-lg flex-shrink-0">
                        <item.icon className="w-4 h-4 text-[#D42B2B]" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-white text-sm hover:text-[#D42B2B] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/918328446929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Contact form — right */}
          <div className="lg:col-span-3">
            <FadeIn direction="left">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-96 text-center p-8"
                >
                  <div className="p-4 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] font-serif mb-2">Message Sent!</h3>
                  <p className="text-[#4A4A4A]">
                    Thank you for reaching out. Our team will contact you within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#D42B2B] text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                        Full Name <span className="text-[#D42B2B]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#E8E8E8] focus:border-[#D42B2B] outline-none text-sm transition-colors bg-[#F7F7F7] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                        Email Address <span className="text-[#D42B2B]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#E8E8E8] focus:border-[#D42B2B] outline-none text-sm transition-colors bg-[#F7F7F7] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#E8E8E8] focus:border-[#D42B2B] outline-none text-sm transition-colors bg-[#F7F7F7] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#E8E8E8] focus:border-[#D42B2B] outline-none text-sm transition-colors bg-[#F7F7F7] focus:bg-white text-[#4A4A4A]"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Your Message <span className="text-[#D42B2B]">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirement, budget range, or any specific queries..."
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#E8E8E8] focus:border-[#D42B2B] outline-none text-sm transition-colors bg-[#F7F7F7] focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 bg-[#D42B2B] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#B01F1F] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
