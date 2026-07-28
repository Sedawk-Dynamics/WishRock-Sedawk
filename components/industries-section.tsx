'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn, SectionHeader } from './motion-wrapper'

const industries = [
  {
    title: 'Residential Development',
    description: 'Premium apartments, gated communities, villas, and affordable housing projects across Hyderabad and surrounding regions.',
    image: '/images/gallery-1.png',
    stat: '300+ Units Sold',
  },
  {
    title: 'Commercial Real Estate',
    description: 'Office spaces, commercial complexes, and mixed-use developments strategically located for maximum business potential.',
    image: '/images/about-building.png',
    stat: '50+ Projects',
  },
  {
    title: 'Land & Plot Development',
    description: 'Plotted developments in emerging corridors with strong appreciation potential and full legal clearances.',
    image: '/images/service-plots.png',
    stat: '200+ Plots',
  },
  {
    title: 'Infrastructure & Highways',
    description: 'Roads, bridges, utility infrastructure, site development, and large-scale civil works for government and private sectors.',
    image: '/images/gallery-3.png',
    stat: '20+ Contracts',
  },
  {
    title: 'Urban Infrastructure',
    description: 'Excavation, earthwork, site leveling, and foundation works for urban development and township projects.',
    image: '/images/service-excavation.png',
    stat: '1M+ Cubic m',
  },
  {
    title: 'Investment & Advisory',
    description: 'Strategic real estate investment advisory for HNIs, NRIs, and institutional investors seeking high-growth assets in Telangana.',
    image: '/images/gallery-4.png',
    stat: '₹500Cr+ Advised',
  },
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-[#0F0F0F] overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 pattern-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sectors We Serve"
          title='Industries &amp; Verticals'
          description="We bring deep domain expertise across multiple real estate and infrastructure verticals to deliver specialized, high-impact solutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <FadeIn key={industry.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Stat badge */}
                  <div className="absolute top-4 right-4 glass-dark text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                    {industry.stat}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-[#D42B2B] transition-colors font-serif">
                    {industry.title}
                  </h3>

                  {/* Description — revealed on hover */}
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    className="text-white/75 text-sm leading-relaxed overflow-hidden"
                    style={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                  >
                    {industry.description}
                  </motion.p>
                  <p className="text-white/75 text-sm leading-relaxed md:hidden">
                    {industry.description}
                  </p>

                  {/* Red bottom line */}
                  <div className="mt-4 w-0 h-0.5 bg-[#D42B2B] group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
