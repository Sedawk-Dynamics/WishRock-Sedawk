'use client'

import Image from 'next/image'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { FadeIn, SectionHeader } from './motion-wrapper'
import {
  ShieldCheck,
  Users2,
  Star,
  Hammer,
  Award,
  Clock,
  BadgeCheck,
  TrendingUp,
} from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Transparent Dealings',
    description: 'Complete transparency in every transaction — no hidden charges, no surprises.',
  },
  {
    icon: Users2,
    title: 'Strong Client Relationships',
    description: 'We nurture long-term partnerships built on trust, communication, and mutual success.',
  },
  {
    icon: Star,
    title: 'Professional Property Advisory',
    description: 'Expert guidance tailored to your investment goals and budget requirements.',
  },
  {
    icon: Hammer,
    title: 'Reliable Civil Contracting',
    description: 'Proven track record of delivering civil projects on time and within specification.',
  },
  {
    icon: TrendingUp,
    title: 'Excavation & Infrastructure Expertise',
    description: 'Modern equipment, skilled operators, and deep technical expertise for complex projects.',
  },
  {
    icon: BadgeCheck,
    title: 'Personalized Investment Guidance',
    description: 'Custom investment strategies aligned with your financial goals and risk appetite.',
  },
  {
    icon: Clock,
    title: 'Timely Project Support',
    description: 'Responsive team available throughout the project lifecycle — from enquiry to completion.',
  },
  {
    icon: Award,
    title: 'Commitment to Quality & Trust',
    description: "Delivering on promises with the highest ethical standards — every project, every time.",
  },
]

const counters = [
  { target: 500, suffix: '+', label: 'Properties Sold' },
  { target: 1000, suffix: '+', label: 'Happy Clients' },
  { target: 50, suffix: '+', label: 'Projects Delivered' },
  { target: 12, suffix: '+', label: 'Years Experience' },
]

function CounterItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2.2, ease: 'easeOut' })
    }
  }, [isInView, count, target])

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="text-4xl lg:text-5xl font-bold text-white font-serif">
        <motion.span>{rounded}</motion.span>
      </div>
      <div className="text-white/60 text-sm mt-2 font-medium">{label}</div>
    </div>
  )
}

export default function WhyUsSection() {
  return (
    <section id="why-us" className="overflow-hidden">
      {/* Top part — reasons grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <FadeIn direction="right">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image
                    src="/images/infrastructure.png"
                    alt="Wishrock Infratech excellence"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D42B2B]/20 to-transparent" />
                </div>

                {/* Founder quote card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-8 -right-4 lg:-right-8 max-w-xs bg-white shadow-xl rounded-xl p-5 border border-[#E8E8E8]"
                >
                  <div className="w-8 h-1 bg-[#D42B2B] rounded mb-3" />
                  <p className="text-[#1A1A1A] text-sm italic leading-relaxed font-serif">
                    &ldquo;At Wishrock Infratech, we believe that every successful project begins with trust.&rdquo;
                  </p>
                  <p className="text-[#D42B2B] text-xs font-bold mt-3">— Vasam Vivek Kumar</p>
                  <p className="text-[#888] text-xs">Founder, Wishrock Infratech LLP</p>
                </motion.div>
              </div>
            </FadeIn>

            {/* Reasons */}
            <div>
              <SectionHeader
                eyebrow="Why Choose Us"
                title="Why Clients Trust Wishrock"
                centered={false}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {reasons.map((reason, i) => (
                  <FadeIn key={reason.title} delay={i * 0.06}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="flex gap-4 p-4 rounded-xl hover:bg-[#FFF5F5] transition-colors group"
                    >
                      <div className="flex-shrink-0 p-2.5 bg-[#D42B2B]/10 rounded-lg group-hover:bg-[#D42B2B]/20 transition-colors h-fit">
                        <reason.icon className="w-4 h-4 text-[#D42B2B]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">{reason.title}</h3>
                        <p className="text-[#4A4A4A] text-xs leading-relaxed">{reason.description}</p>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — Stats band */}
      <div className="bg-[#D42B2B] py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-2 md:divide-y-0 md:divide-x divide-white/20">
            {counters.map((counter) => (
              <CounterItem key={counter.label} {...counter} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
