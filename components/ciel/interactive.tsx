'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Compass,
  ChevronDown,
  Dumbbell,
  Trees,
  Sparkles,
} from 'lucide-react'
import {
  blocks,
  clubhouseFacilities,
  outdoorAmenities,
  specifications,
  type Facing,
} from '@/lib/ciel-data'

/* ------------------------------------------------------------------ */
/* Sticky section nav with active-section highlight                     */
/* ------------------------------------------------------------------ */

export function SectionNav({ items }: { items: { label: string; href: string }[] }) {
  const [active, setActive] = useState(items[0]?.href)

  useEffect(() => {
    const els = items
      .map((i) => document.querySelector(i.href))
      .filter((el): el is Element => !!el)
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(`#${visible[0].target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [items])

  return (
    <nav className="sticky top-20 z-40 bg-white/95 backdrop-blur border-b border-[#E8E8E8] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none]">
        {items.map((item) => {
          const isActive = active === item.href
          return (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-3 py-4 text-sm font-semibold transition-colors ${
                isActive ? 'text-[#D42B2B]' : 'text-[#4A4A4A] hover:text-[#D42B2B]'
              }`}
            >
              {item.label}
              {isActive && (
                <motion.span layoutId="ciel-nav-underline" className="absolute left-2 right-2 bottom-0 h-0.5 bg-[#D42B2B]" />
              )}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/* Lightbox (shared)                                                    */
/* ------------------------------------------------------------------ */

type Shot = { src: string; alt: string; caption: string; w: number; h: number }

function Lightbox({ shots, index, onClose, onIndex }: { shots: Shot[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndex((index + 1) % shots.length)
      if (e.key === 'ArrowLeft') onIndex((index - 1 + shots.length) % shots.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, shots.length, onClose, onIndex])

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-6xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={shots[index].src} alt={shots[index].alt} fill sizes="100vw" className="object-contain" />
          </motion.div>
          <p className="mt-4 text-white/80 text-sm">
            {shots[index].caption} <span className="text-white/40">· {index + 1} / {shots.length}</span>
          </p>
          <button onClick={onClose} className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
          {shots.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + shots.length) % shots.length) }}
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#D42B2B] text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % shots.length) }}
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#D42B2B] text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ------------------------------------------------------------------ */
/* Zoomable single image (site plan, masterplan, location map)          */
/* ------------------------------------------------------------------ */

export function ZoomableImage({ src, alt, caption, w, h, className = '' }: Shot & { className?: string }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <>
      <button
        onClick={() => setOpen(0)}
        className={`group relative block w-full overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white shadow-xl ${className}`}
        style={{ aspectRatio: `${w} / ${h}` }}
        aria-label={`Enlarge ${caption}`}
      >
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain transition-transform duration-700 group-hover:scale-[1.03]" />
        <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#D42B2B] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
          <ZoomIn className="w-3.5 h-3.5" /> Click to enlarge
        </span>
      </button>
      <Lightbox shots={[{ src, alt, caption, w, h }]} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Gallery                                                              */
/* ------------------------------------------------------------------ */

export function Gallery({ shots }: { shots: Shot[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-4">
        {shots.map((s, i) => (
          <motion.button
            key={s.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-xl bg-[#1A1A1A] ${
              i === 0 ? 'col-span-2 row-span-2' : i === 1 ? 'md:col-span-2' : ''
            }`}
            aria-label={`Open ${s.caption}`}
          >
            <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-2">
              <span className="text-white text-sm font-semibold text-left">{s.caption}</span>
              <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>
          </motion.button>
        ))}
      </div>
      <Lightbox shots={shots} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Floor plans                                                          */
/* ------------------------------------------------------------------ */

const facingColor: Record<Facing, string> = {
  East: 'bg-amber-100 text-amber-800',
  West: 'bg-sky-100 text-sky-800',
  North: 'bg-emerald-100 text-emerald-800',
}

export function FloorPlans({ floorPlanSrc }: { floorPlanSrc: string }) {
  const [blockId, setBlockId] = useState(blocks[0].id)
  const [selected, setSelected] = useState<string | null>(null)
  const [planOpen, setPlanOpen] = useState<number | null>(null)

  const block = blocks.find((b) => b.id === blockId)!

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="inline-flex p-1 bg-white rounded-full border border-[#E8E8E8] shadow-sm">
          {blocks.map((b) => (
            <button
              key={b.id}
              onClick={() => { setBlockId(b.id); setSelected(null) }}
              className={`relative px-5 py-2.5 text-sm font-semibold rounded-full transition-colors ${
                blockId === b.id ? 'text-white' : 'text-[#4A4A4A] hover:text-[#D42B2B]'
              }`}
            >
              {blockId === b.id && (
                <motion.span layoutId="block-pill" className="absolute inset-0 bg-[#D42B2B] rounded-full" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
              )}
              <span className="relative">{b.label}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => setPlanOpen(0)}
        className="group relative block w-full aspect-[1228/821] rounded-2xl overflow-hidden bg-white border border-[#E8E8E8] shadow-lg mb-6"
        aria-label="Enlarge typical floor plans"
      >
        <Image
          src={floorPlanSrc}
          alt="DSR CIEL typical floor plans for Blocks A, B, E, F and Blocks C, D"
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover"
        />
        {/* Dim the half of the sheet that isn't the selected block */}
        <div className="absolute inset-0 grid grid-cols-2 pointer-events-none">
          <div className={`transition-colors duration-500 ${blockId === 'abef' ? '' : 'bg-white/70'}`} />
          <div className={`transition-colors duration-500 ${blockId === 'cd' ? '' : 'bg-white/70'}`} />
        </div>
        <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#D42B2B] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
          <ZoomIn className="w-3.5 h-3.5" /> View full plan
        </span>
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={blockId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {block.units.map((u) => (
            <button
              key={u.no}
              onClick={() => setSelected(u.no)}
              className={`text-left rounded-xl border-2 p-4 bg-white transition-all hover:-translate-y-1 hover:shadow-lg ${
                selected === u.no ? 'border-[#D42B2B] shadow-md' : 'border-[#E8E8E8]'
              }`}
            >
              <div className="text-xs font-bold text-[#D42B2B]">UNIT {u.no}</div>
              <div className="text-xl font-bold text-[#1A1A1A] font-serif mt-1">{u.size.toLocaleString('en-IN')}</div>
              <div className="text-xs text-[#888]">sft · 3 BHK</div>
              <span className={`mt-2 inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${facingColor[u.facing]}`}>
                <Compass className="w-3 h-3" /> {u.facing}
              </span>
            </button>
          ))}
        </motion.div>
      </AnimatePresence>

      <Lightbox
        shots={[{ src: floorPlanSrc, alt: 'DSR CIEL typical floor plans', caption: 'Typical Floor Plans', w: 1228, h: 821 }]}
        index={planOpen}
        onClose={() => setPlanOpen(null)}
        onIndex={setPlanOpen}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Amenities tabs                                                       */
/* ------------------------------------------------------------------ */

export function AmenitiesTabs({ clubhouseImage }: { clubhouseImage?: string }) {
  const tabs = [
    { id: 'club', label: 'The CIEL House', icon: Dumbbell, items: clubhouseFacilities },
    { id: 'outdoor', label: 'Outdoor & Landscape', icon: Trees, items: outdoorAmenities },
  ]
  const [tab, setTab] = useState(tabs[0].id)
  const current = tabs.find((t) => t.id === tab)!

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              tab === t.id ? 'bg-[#D42B2B] text-white shadow-lg' : 'bg-white/5 text-white/70 border border-white/10 hover:border-[#D42B2B]'
            }`}
          >
            <t.icon className="w-4 h-4" />
            {t.label}
            <span className={`text-xs px-2 py-0.5 rounded-full ${tab === t.id ? 'bg-white/20' : 'bg-white/10'}`}>{t.items.length}</span>
          </button>
        ))}
      </div>

      <div className={`grid gap-10 ${clubhouseImage && tab === 'club' ? 'lg:grid-cols-5' : ''}`}>
        {clubhouseImage && tab === 'club' && (
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[320px]">
            <Image src={clubhouseImage} alt="The CIEL House clubhouse" fill sizes="40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <p className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase">50,000+ sft</p>
              <p className="text-white text-2xl font-serif font-bold">One Elevated Standard.</p>
            </div>
          </div>
        )}
        <AnimatePresence mode="wait">
          <motion.ul
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`grid grid-cols-2 sm:grid-cols-3 ${clubhouseImage && tab === 'club' ? 'lg:col-span-3 lg:grid-cols-3' : 'lg:grid-cols-4'} gap-3 content-start`}
          >
            {current.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
                className="flex items-start gap-2 bg-white/5 border border-white/10 hover:border-[#D42B2B]/60 hover:bg-white/10 rounded-xl px-4 py-3 text-sm text-white/85 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Specifications accordion                                             */
/* ------------------------------------------------------------------ */

export function SpecsAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {specifications.map((s, i) => {
        const isOpen = open === i
        return (
          <div key={s.title} className={`rounded-xl border bg-white transition-all ${isOpen ? 'border-[#D42B2B]/40 shadow-md' : 'border-[#E8E8E8]'}`}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 font-semibold text-[#1A1A1A]">
                <span className="text-xs font-bold text-[#D42B2B] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </span>
              <ChevronDown className={`w-5 h-5 text-[#D42B2B] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-[#4A4A4A] leading-relaxed">{s.text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
