'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full bg-[#0F0F0F] pt-20">
      {/* Banner — shown uncropped since it contains its own text & stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-[16/9]"
      >
        <Image
          src="/images/hero-banner.jpg"
          alt="Wishrock Infratech — Luxury that rises above. Exclusive 3BHKs from 1905 to 2800 sft: 7 acres, 6 towers, 38 floors, 1140 flats"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* CTA bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-4"
      >
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 bg-[#D42B2B] text-white font-semibold px-8 py-4 rounded hover:bg-[#B01F1F] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
        >
          Enquire Now
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button
          onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
        >
          Explore Services
        </button>
      </motion.div>
    </section>
  )
}
