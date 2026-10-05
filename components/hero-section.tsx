'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

// Previous single banner (/images/hero-banner.jpg) is kept on disk but no longer shown.
const slides = [
  {
    src: '/herobanner/banner-1.jpg',
    alt: 'Wishrock Infratech — comprehensive real estate & infrastructure solutions. 12+ years of excellence, Hyderabad, Telangana',
  },
  {
    src: '/herobanner/banner-2.jpg',
    alt: 'Wishrock Infratech — real solutions for a better tomorrow. Complete real estate, infrastructure and interior solutions under one roof',
  },
]

const AUTOPLAY_MS = 6000

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => go(1), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused, go, index])

  return (
    <section id="home" className="relative w-full bg-white pt-20">
      <div
        className="relative w-full aspect-[16/9] max-h-[calc(100svh-11.5rem)] overflow-hidden bg-white"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Wishrock Infratech highlights"
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].src}
              alt={slides[index].alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-full bg-white/70 hover:bg-[#D42B2B] text-[#1A1A1A] hover:text-white shadow-md backdrop-blur transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-full bg-white/70 hover:bg-[#D42B2B] text-[#1A1A1A] hover:text-white shadow-md backdrop-blur transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-[#D42B2B]' : 'w-2 bg-[#1A1A1A]/25 hover:bg-[#D42B2B]/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-wrap items-center justify-center gap-4"
      >
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 bg-[#D42B2B] text-white font-semibold px-8 py-4 rounded hover:bg-[#B01F1F] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
        >
          Get in Touch
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button
          onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 border-2 border-[#E8E8E8] text-[#1A1A1A] font-semibold px-8 py-4 rounded hover:border-[#D42B2B] hover:text-[#D42B2B] transition-all duration-300 hover:-translate-y-0.5"
        >
          Explore Services
        </button>
      </motion.div>
    </section>
  )
}
