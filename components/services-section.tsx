'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn, SectionHeader } from './motion-wrapper'
import { Building2, MapPin, Home, TrendingUp, Truck, HardHat, Handshake, Layers } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Real Estate Consulting & Property Sales',
    description: 'Professional guidance for purchasing and investing in residential apartments, villas, commercial properties, and open plots.',
    image: '/images/service-realestate.png',
    highlight: true,
  },
  {
    icon: MapPin,
    title: 'Open Plot Development & Sales',
    description: 'Premium plotted developments in strategic locations with high appreciation potential and legal compliance.',
    image: '/images/service-plots.png',
    highlight: false,
  },
  {
    icon: Home,
    title: 'Residential Apartments & Villas',
    description: 'Marketing and sales support for premium apartments, gated communities, and luxury villa projects.',
    image: '/images/gallery-1.png',
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: 'Land Acquisition & Investment Advisory',
    description: 'Expert assistance in identifying, evaluating, and acquiring land parcels for investment and development purposes.',
    image: '/images/gallery-5.png',
    highlight: false,
  },
  {
    icon: Truck,
    title: 'Excavation & Earthwork Services',
    description: 'End-to-end excavation services for residential, commercial, and infrastructure projects using modern equipment and skilled operators.',
    image: '/images/service-excavation.png',
    highlight: true,
  },
  {
    icon: HardHat,
    title: 'Civil Contracting Services',
    description: 'Execution of civil construction works including site preparation, foundation works, infrastructure development, and project support services.',
    image: '/images/service-civil.png',
    highlight: false,
  },
  {
    icon: Handshake,
    title: 'Builder & Developer Support Services',
    description: 'Strategic sales partnerships, project marketing, client acquisition, and business development support for real estate developers.',
    image: '/images/gallery-4.png',
    highlight: false,
  },
  {
    icon: Layers,
    title: 'Infrastructure Project Solutions',
    description: 'Comprehensive support for infrastructure projects through planning, execution coordination, and resource management.',
    image: '/images/gallery-3.png',
    highlight: false,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#F7F7F7] pattern-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Services &amp; Solutions"
          description="From premium property sales to full-scale civil contracting, we deliver comprehensive real estate and infrastructure services tailored to your needs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.07} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E8E8E8] hover:border-[#D42B2B]/20 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-3 p-2.5 bg-[#D42B2B] rounded-lg shadow-lg">
                    <service.icon className="w-4 h-4 text-white" />
                  </div>
                  {service.highlight && (
                    <div className="absolute top-3 right-3 bg-[#D42B2B] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#1A1A1A] text-sm leading-tight mb-2 group-hover:text-[#D42B2B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-xs leading-relaxed flex-1">{service.description}</p>
                  <div className="mt-4 pt-4 border-t border-[#E8E8E8]">
                    <button
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-[#D42B2B] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all group/btn"
                    >
                      Enquire Now
                      <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
