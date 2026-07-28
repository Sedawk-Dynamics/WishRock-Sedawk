'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, SectionHeader } from './motion-wrapper'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Wishrock Infratech helped us identify the right investment opportunity with complete transparency and professional guidance. Their support throughout the process was exceptional.',
    name: 'Ramesh Gupta',
    designation: 'Investor',
    company: 'Private Investor',
    rating: 5,
    initial: 'R',
  },
  {
    quote:
      'The team demonstrated excellent project coordination and delivered excavation services efficiently and on schedule. Highly recommend them for large-scale civil works.',
    name: 'Praveen Kumar',
    designation: 'Project Manager',
    company: 'Construction Industry',
    rating: 5,
    initial: 'P',
  },
  {
    quote:
      'Their dedication to customer satisfaction and honest approach made our property purchase smooth and hassle-free. We found our dream home through Wishrock.',
    name: 'Srinivas Rao',
    designation: 'Business Owner',
    company: 'Entrepreneur',
    rating: 5,
    initial: 'S',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-24 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          description="Hear from the investors, homebuyers, and project managers who have experienced the Wishrock difference."
        />

        {/* Featured testimonial */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                onClick={() => setCurrent(i)}
                className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border-2 ${
                  current === i ? 'border-[#D42B2B] shadow-lg' : 'border-transparent'
                }`}
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="p-2 bg-[#D42B2B] rounded-full shadow-md">
                    <Quote className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 mt-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#4A4A4A] text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#E8E8E8]">
                  <div className="w-10 h-10 rounded-full bg-[#D42B2B] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A1A] text-sm">{t.name}</p>
                    <p className="text-[#888] text-xs">{t.designation} · {t.company}</p>
                  </div>
                </div>

                {/* Active indicator */}
                {current === i && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D42B2B] rounded-b-2xl" />
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Navigation */}
        <FadeIn>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full border-2 border-[#E8E8E8] hover:border-[#D42B2B] hover:text-[#D42B2B] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === i ? 'w-8 bg-[#D42B2B]' : 'w-2 bg-[#D8D8D8] hover:bg-[#D42B2B]/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full border-2 border-[#E8E8E8] hover:border-[#D42B2B] hover:text-[#D42B2B] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
