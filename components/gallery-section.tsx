'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, SectionHeader } from './motion-wrapper'
import { X, ZoomIn } from 'lucide-react'

const galleryItems = [
  { src: '/images/gallery-1.png', alt: 'Luxury Villa Project', caption: 'Premium Villa Development', category: 'Residential' },
  { src: '/images/gallery-2.png', alt: 'Gated Community Aerial View', caption: 'Gated Community Project', category: 'Residential' },
  { src: '/images/gallery-3.png', alt: 'Infrastructure Road Project', caption: 'Highway Infrastructure', category: 'Infrastructure' },
  { src: '/images/gallery-4.png', alt: 'Real Estate Deal Signing', caption: 'Deal Completion', category: 'Advisory' },
  { src: '/images/gallery-5.png', alt: 'Open Plot Development', caption: 'Premium Plotted Development', category: 'Plots' },
  { src: '/images/gallery-6.png', alt: 'Luxury Apartment Interior', caption: 'Luxury Interior Showcase', category: 'Residential' },
  { src: '/images/service-excavation.png', alt: 'Excavation Services', caption: 'Excavation & Earthwork', category: 'Infrastructure' },
  { src: '/images/service-civil.png', alt: 'Civil Construction', caption: 'Civil Construction Works', category: 'Infrastructure' },
  { src: '/images/infrastructure.png', alt: 'Hyderabad Cityscape', caption: 'Hyderabad Skyline', category: 'Residential' },
]

const categories = ['All', 'Residential', 'Infrastructure', 'Plots', 'Advisory']

export default function GallerySection() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active)

  return (
    <section id="gallery" className="py-24 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Project Gallery"
          title="Our Work in Action"
          description="Explore a curated gallery of our completed and ongoing projects across real estate, infrastructure, and civil contracting."
        />

        {/* Filter tabs */}
        <FadeIn>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? 'bg-[#D42B2B] text-white shadow-md'
                    : 'bg-white text-[#4A4A4A] border border-[#E8E8E8] hover:border-[#D42B2B] hover:text-[#D42B2B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setLightbox(galleryItems.indexOf(item))}
                className="group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-8 h-8 text-white mb-2" />
                    <p className="text-white text-sm font-semibold text-center px-4">{item.caption}</p>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-[#D42B2B] text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-semibold">{galleryItems[lightbox].caption}</p>
                <p className="text-white/60 text-sm">{galleryItems[lightbox].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
