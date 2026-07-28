'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, MapPin, Award, Users } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Properties Sold' },
  { value: '12+', label: 'Years Experience' },
  { value: '1000+', label: 'Happy Clients' },
  { value: '50+', label: 'Projects Delivered' },
]

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Wishrock Infratech - Premium Real Estate & Infrastructure"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full pattern-grid" />
      </div>

      {/* Red accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#D42B2B]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl pt-20">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-0.5 bg-[#D42B2B]" />
            <span className="text-[#D42B2B] text-sm font-semibold tracking-[0.2em] uppercase">
              Hyderabad&apos;s Trusted Infratech Company
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance font-serif"
          >
            Building Trust.{' '}
            <span className="text-[#D42B2B]">Creating</span>{' '}
            Value.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
          >
            Wishrock Infratech LLP delivers premium real estate opportunities, land investments, 
            civil contracting, and excavation solutions — with excellence, transparency, and value 
            at every step.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-[#D42B2B] text-white font-semibold px-8 py-4 rounded hover:bg-[#B01F1F] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded border border-white/30 hover:bg-white/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-2 mt-8 text-white/60 text-sm"
          >
            <MapPin className="w-4 h-4 text-[#D42B2B]" />
            <span>Ameenpur, Medak — Hyderabad, Telangana</span>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute bottom-16 left-6 right-6 lg:left-8 lg:right-8 max-w-7xl"
        >
          <div className="glass rounded-xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center text-center px-4">
                <span className="text-3xl font-bold text-[#D42B2B] font-serif">{stat.value}</span>
                <span className="text-white/70 text-sm mt-1 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#D42B2B] transition-colors"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </motion.button>
    </section>
  )
}
