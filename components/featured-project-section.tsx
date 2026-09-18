'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, BadgeCheck, MessageCircle } from 'lucide-react'
import { FadeIn } from './motion-wrapper'
import { CIEL, images, keyStats } from '@/lib/ciel-data'

const teaserStats = keyStats.filter((s) => ['70%', '6', '38', '1,140'].includes(s.value))

const units = [
  { size: '1,905', facing: 'North' },
  { size: '2,205', facing: 'East / West' },
  { size: '2,420', facing: 'East / West' },
  { size: '2,800', facing: 'East / West' },
]

export default function FeaturedProjectSection() {
  return (
    <section id="projects" className="relative py-24 bg-[#0F0F0F] overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* Images */}
        <FadeIn direction="right">
          <div className="relative grid grid-cols-5 gap-4">
            <Link href="/projects" className="group col-span-3 relative rounded-2xl overflow-hidden aspect-[606/825] shadow-2xl">
              <Image src={images.aerial} alt="DSR CIEL aerial view" fill sizes="(min-width: 1024px) 30vw, 60vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute top-4 left-4 bg-[#D42B2B] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded">
                Featured Project
              </span>
            </Link>
            <div className="col-span-2 flex flex-col gap-4">
              <Link href="/projects#gallery" className="group relative flex-1 rounded-2xl overflow-hidden shadow-xl">
                <Image src={images.nightView} alt="DSR CIEL at night" fill sizes="20vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </Link>
              <Link href="/projects#masterplan" className="group relative flex-1 rounded-2xl overflow-hidden shadow-xl bg-[#E8DCDC]">
                <Image src={images.masterplan} alt="DSR CIEL masterplan" fill sizes="20vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-2xl px-5 py-4"
            >
              <p className="text-[#888] text-[11px] uppercase tracking-widest">3 BHK residences</p>
              <p className="text-[#1A1A1A] font-bold font-serif text-xl">1,905 – 2,800 sft</p>
            </motion.div>
          </div>
        </FadeIn>

        {/* Content */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#D42B2B]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase">Now Selling</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight">
              DSR <span className="text-[#D42B2B]">CIEL</span>
            </h2>
            <p className="mt-2 text-[#C9A84C] tracking-[0.35em] uppercase text-xs font-semibold">{CIEL.tagline}</p>
            <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-white/60 text-sm">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D42B2B]" />{CIEL.location}</span>
              <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#C9A84C]" />RERA {CIEL.rera}</span>
            </p>
            <p className="mt-6 text-white/75 leading-relaxed">
              Six towers rising 38 floors on 7 acres, with 70% open landscape and only five corner homes per
              floor. A 50,000+ sft clubhouse, 32+ lifestyle experiences and a terrace infinity pool — minutes
              from Wipro Circle and the Financial District.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-8 grid grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
              {teaserStats.map((s) => (
                <div key={s.label} className="bg-[#0F0F0F] py-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold font-serif text-white">{s.value}</div>
                  <div className="text-white/45 text-[10px] uppercase tracking-wider mt-1 px-1">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-2">
              {units.map((u) => (
                <Link
                  key={u.size}
                  href="/projects#floor-plans"
                  className="px-4 py-2 rounded-full border border-white/15 text-white/80 text-sm hover:border-[#D42B2B] hover:text-white hover:bg-[#D42B2B]/10 transition-colors"
                >
                  <span className="font-bold">{u.size}</span> sft · <span className="text-white/50">{u.facing}</span>
                </Link>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 bg-[#D42B2B] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#B01F1F] transition-all shadow-lg hover:-translate-y-0.5"
              >
                Explore DSR CIEL
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={CIEL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Get Price Breakup
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
