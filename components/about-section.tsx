'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn, SectionHeader } from './motion-wrapper'
import { CheckCircle, Target, Eye } from 'lucide-react'

const values = [
  'Integrity & Transparency',
  'Trust & Long-Term Relationships',
  'Customer Satisfaction',
  'Quality Execution',
  'Professional Excellence',
  'Continuous Improvement',
]

const milestones = [
  { icon: Target, title: 'Our Mission', description: 'To provide dependable real estate and infrastructure solutions that create lasting value for our clients through integrity, innovation, quality execution, and customer-centric service.' },
  { icon: Eye, title: 'Our Vision', description: "To become one of India's most trusted infrastructure and real estate organizations, recognized for excellence, transparency, and long-term client relationships." },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Image block */}
          <FadeIn direction="right" className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/images/about-building.png"
                  alt="Wishrock Infratech corporate headquarters"
                  fill
                  className="object-cover"
                />
                {/* Red corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-[#D42B2B]" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 border border-[#E8E8E8]"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-bold text-[#D42B2B] font-serif">12+</span>
                  <span className="text-sm text-[#4A4A4A] font-medium">Years of Excellence</span>
                  <span className="text-xs text-[#888]">in Real Estate & Infrastructure</span>
                </div>
              </motion.div>

              {/* Red accent bar */}
              <div className="absolute -left-4 top-12 bottom-12 w-1 bg-[#D42B2B] rounded-full" />
            </div>
          </FadeIn>

          {/* Right — Content */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="Who We Are"
              title="Hyderabad&apos;s Trusted Infratech Partner"
              centered={false}
            />

            <FadeIn delay={0.1}>
              <p className="text-[#4A4A4A] leading-relaxed text-base">
                Wishrock Infratech LLP is a Hyderabad-based infrastructure and real estate company 
                engaged in <strong className="text-[#1A1A1A]">property consulting, open plot sales, 
                residential apartments, land development, excavation works</strong>, and civil 
                contracting services.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-[#4A4A4A] leading-relaxed text-base">
                We work closely with reputed builders, developers, and investors to deliver 
                reliable and value-driven solutions. Our focus is on trust, professionalism, 
                and creating sustainable growth opportunities for our clients.
              </p>
            </FadeIn>

            {/* Mission / Vision cards */}
            <FadeIn delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4">
                {milestones.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#F7F7F7] rounded-xl p-5 border border-[#E8E8E8] hover:border-[#D42B2B]/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#D42B2B]/10 rounded-lg group-hover:bg-[#D42B2B]/20 transition-colors">
                        <item.icon className="w-5 h-5 text-[#D42B2B]" />
                      </div>
                      <h3 className="font-bold text-[#1A1A1A] text-sm">{item.title}</h3>
                    </div>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Values */}
            <FadeIn delay={0.25}>
              <div>
                <h3 className="text-sm font-bold text-[#1A1A1A] tracking-widest uppercase mb-4">Our Core Values</h3>
                <div className="grid grid-cols-2 gap-2">
                  {values.map((val) => (
                    <div key={val} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <CheckCircle className="w-4 h-4 text-[#D42B2B] flex-shrink-0" />
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="self-start flex items-center gap-2 bg-[#D42B2B] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#B01F1F] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group text-sm"
              >
                Get in Touch
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
