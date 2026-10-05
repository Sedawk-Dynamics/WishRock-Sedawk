import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { FadeIn, SectionHeader } from '@/components/motion-wrapper'
import { SectionNav, Gallery, ZoomableImage, AmenitiesTabs } from '@/components/ciel/interactive'
import MortgageCalculator from '@/components/mortgage-calculator'
import {
  VALAR,
  valarImages,
  valarStats,
  valarDetails,
  valarHighlights,
  valarUnits,
  valarAmenities,
  valarLocation,
  valarFaqs,
} from '@/lib/valar-data'
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Star,
  CalendarCheck,
  IndianRupee,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'DSR VALAR, Kokapet | Luxury 4 BHK Apartments | Wishrock Infratech LLP',
  description:
    'DSR VALAR by DSR Prime Spaces, Kokapet — 282 exclusive 4 BHK residences of 3,242 to 4,090 sft across 2 towers of 36 floors on 3 acres, with a 36,000 sft clubhouse and rooftop infinity pool. ₹3.50 Cr onwards, possession August 2027.',
}

const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(VALAR.mapQuery)}&z=14&output=embed`
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VALAR.mapQuery)}`

const sectionNav = [
  { label: 'Overview', href: '#overview' },
  { label: 'Floor Plans', href: '#floor-plans' },
  { label: 'EMI Calculator', href: '#emi' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'FAQ', href: '#faq' },
]

const gallery = valarUnits.map((u) => ({
  src: u.img,
  alt: `DSR VALAR ${u.block} flat ${u.no} — ${u.type}, ${u.size} sft floor plan`,
  caption: `${u.block} · Flat ${u.no} — ${u.size.toLocaleString('en-IN')} sft`,
  w: 1600,
  h: 1400,
}))

// Published starting price is ₹3.50 Cr for the 3,242 sft layout; larger layouts pro-rated at the same rate.
const BASE_RATE = 35000000 / 3242
const calcUnits = Array.from(new Set(valarUnits.map((u) => u.size)))
  .sort((a, b) => a - b)
  .map((size) => ({
    label: `${size.toLocaleString('en-IN')} sft`,
    size,
    price: Math.round((size * BASE_RATE) / 100000) * 100000,
  }))

const amenityTabs = [
  { id: 'lifestyle', label: 'Clubhouse & Lifestyle', items: valarAmenities.lifestyle },
  { id: 'outdoor', label: 'Outdoor & Wellness', items: valarAmenities.outdoor },
]

const primaryBtn =
  'inline-flex items-center justify-center gap-2 bg-[#D42B2B] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#B01F1F] transition-all duration-300 shadow-lg hover:-translate-y-0.5'
const outlineBtn =
  'inline-flex items-center justify-center gap-2 border-2 border-[#E8E8E8] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded hover:border-[#D42B2B] hover:text-[#D42B2B] transition-colors'

export default function ValarPage() {
  return (
    <main className="pb-16 md:pb-0">
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative bg-white pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-[#F7F7F7] border border-[#E8E8E8] text-[#1A1A1A] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <BadgeCheck className="w-3.5 h-3.5 text-[#D42B2B]" />
              RERA {VALAR.rera} · by {VALAR.developer}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-[#0F0F0F] font-serif leading-[0.95]">
              DSR <span className="text-[#D42B2B]">VALAR</span>
            </h1>
            <p className="mt-3 text-[#C9A84C] tracking-[0.35em] uppercase text-sm font-semibold">{VALAR.tagline}</p>
            <p className="mt-6 flex items-center gap-2 text-[#4A4A4A] text-lg">
              <MapPin className="w-5 h-5 text-[#D42B2B]" /> {VALAR.location}
            </p>
            <p className="mt-2 text-[#1A1A1A] text-2xl md:text-3xl font-semibold">Luxury 4 BHK · 3,242 – 4,090 sft</p>
            <div className="mt-4 flex flex-wrap gap-6 text-[#4A4A4A]">
              <span className="flex items-center gap-2">
                <IndianRupee className="w-4 h-4 text-[#D42B2B]" />
                <span className="font-bold text-[#1A1A1A]">{VALAR.startingPrice}</span> onwards
              </span>
              <span className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-[#D42B2B]" />
                Possession <span className="font-bold text-[#1A1A1A]">{VALAR.possession}</span>
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#floor-plans" className={primaryBtn}>
                View Floor Plans <ArrowRight className="w-4 h-4" />
              </a>
              <a href={VALAR.whatsapp} target="_blank" rel="noopener noreferrer" className={outlineBtn}>
                <MessageCircle className="w-4 h-4" /> Schedule Site Visit
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <ZoomableImage
              src={valarImages.floorPlanHd}
              alt="DSR VALAR typical floor plan showing both towers"
              caption="Typical Floor Plan"
              w={2600}
              h={2223}
            />
          </FadeIn>
        </div>

        {/* Stats strip */}
        <div className="bg-[#0F0F0F]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
            {valarStats.map((s) => (
              <div key={s.label} className="py-6 px-3 text-center">
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#C9A84C]">{s.value}</div>
                <div className="text-white/50 text-[11px] uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionNav items={sectionNav} />

      {/* ============ OVERVIEW ============ */}
      <section id="overview" className="scroll-mt-36 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="Project Overview" title="Only 282 Homes. Each One a Statement." centered={false} />
            <FadeIn delay={0.1}>
              <p className="text-[#4A4A4A] leading-relaxed mb-5">
                DSR VALAR rises in Kokapet — two iconic towers of 36 floors on a 3-acre gated community, with
                just 282 exclusive 4 BHK residences. Every home spans 3,242 to 4,090 sft, with wide balconies,
                a sit-out, a pooja room and a dedicated utility.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                At its centre is a 36,000 sft clubhouse crowned by a rooftop infinity pool with lakeside views —
                minutes from the Outer Ring Road and the Financial District.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ul className="flex flex-col gap-3 mb-8">
                {valarHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[#4A4A4A]">
                    <Star className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C] flex-shrink-0 mt-1" />
                    {h}
                  </li>
                ))}
              </ul>
              <a href={VALAR.whatsapp} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                <MessageCircle className="w-4 h-4" /> Get Price Breakup
              </a>
            </FadeIn>
          </div>

          <FadeIn direction="left">
            <dl className="grid grid-cols-2 gap-px bg-[#E8E8E8] rounded-xl overflow-hidden border border-[#E8E8E8]">
              {valarDetails.map((d) => (
                <div key={d.label} className="bg-white p-5">
                  <dt className="text-xs text-[#888] uppercase tracking-widest">{d.label}</dt>
                  <dd className="mt-1 font-bold text-[#1A1A1A]">{d.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <ZoomableImage
                src={valarImages.blockBTypical}
                alt="DSR VALAR Block B typical floor plan with four units per floor"
                caption="Block B — Typical Floor Plan"
                w={1600}
                h={1250}
              />
              <p className="mt-3 text-center text-sm font-semibold text-[#1A1A1A]">
                Block B typical floor <span className="font-normal text-[#888]">· 4 homes per floor</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ FLOOR PLANS ============ */}
      <section id="floor-plans" className="scroll-mt-36 py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Floor Plans"
            title="Choose Your Layout"
            description="Six unit plans across the two towers — tap any plan to read the room dimensions full screen."
          />

          {/* Unit summary cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {valarUnits.map((u) => (
              <FadeIn key={u.no}>
                <div className="h-full bg-white rounded-xl border border-[#E8E8E8] p-4 hover:border-[#D42B2B]/40 hover:shadow-md transition-all">
                  <div className="text-xs font-bold text-[#D42B2B]">{u.block} · {u.no}</div>
                  <div className="text-xl font-bold text-[#1A1A1A] font-serif mt-1">{u.size.toLocaleString('en-IN')}</div>
                  <div className="text-xs text-[#888]">sft</div>
                  <div className="mt-2 text-[11px] font-semibold text-[#4A4A4A]">{u.type}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <Gallery shots={gallery} />

          <FadeIn>
            <div className="mt-10 text-center">
              <a href={VALAR.whatsapp} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                <MessageCircle className="w-4 h-4" /> Request Full Price Breakup
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ EMI CALCULATOR ============ */}
      <section id="emi" className="scroll-mt-36 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Home Loan"
            title="What Will It Cost Per Month?"
            description="Pick a layout and set your bank's terms to see the EMI on a DSR VALAR home."
          />
          <MortgageCalculator
            units={calcUnits}
            note="Indicative only, based on the published starting price of ₹3.50 Cr for a 3,242 sft home and pro-rated for larger layouts. Excludes GST, registration and other statutory charges. Confirm the current price with our team."
          />
        </div>
      </section>

      {/* ============ AMENITIES ============ */}
      <section id="amenities" className="scroll-mt-36 py-24 bg-[#0F0F0F] relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#D42B2B]" />
                <span className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase">Amenities</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-serif">A 36,000 Sft Clubhouse</h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                Crowned by a rooftop infinity pool with lakeside views, and surrounded by landscaped
                gardens, a jogging track and pet-friendly open spaces.
              </p>
            </div>
          </FadeIn>
          <AmenitiesTabs tabs={amenityTabs} />
        </div>
      </section>

      {/* ============ LOCATION ============ */}
      <section id="location" className="scroll-mt-36 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Location Advantages"
            title="At the Heart of Kokapet"
            description="On Kokapet SEZ Main Road — minutes from the ORR, the Financial District and Hyderabad's IT campuses."
          />
          <div className="grid lg:grid-cols-2 gap-10">
            <FadeIn direction="right">
              <ol className="relative border-l-2 border-[#D42B2B]/20 ml-3 flex flex-col gap-5">
                {valarLocation.map((l) => (
                  <li key={l.place} className="relative pl-6 group">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#D42B2B] group-hover:scale-125 transition-transform" />
                    <p className="text-[#D42B2B] font-bold text-sm">{l.time}</p>
                    <p className="text-[#1A1A1A] font-medium">{l.place}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-[#888]">{VALAR.address}</p>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={`${primaryBtn} mt-4`}>
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </FadeIn>
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8E8E8] h-full min-h-[400px]">
                <iframe
                  src={MAP_EMBED}
                  title="DSR VALAR on Google Maps"
                  className="w-full h-full min-h-[400px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="scroll-mt-36 py-24 bg-[#F7F7F7]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="flex flex-col gap-3">
            {valarFaqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-xl border border-[#E8E8E8] open:border-[#D42B2B]/30 open:shadow-md transition-all">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold text-[#1A1A1A]">
                  {f.q}
                  <ChevronDown className="w-5 h-5 text-[#D42B2B] flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-5 text-[#4A4A4A] leading-relaxed text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="enquire" className="scroll-mt-36 py-20 bg-[#D42B2B] relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">Visit DSR VALAR</h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
              Get the complete price breakup, unit availability and a guided site visit with our team.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={VALAR.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#D42B2B] font-bold px-8 py-4 rounded shadow-lg hover:-translate-y-0.5 transition-all">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
              <a href={`tel:${VALAR.phone}`} className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5" /> {VALAR.phoneDisplay}
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded hover:bg-white/10 transition-colors">
                Send an Enquiry
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#F7F7F7] py-8">
        <p className="max-w-5xl mx-auto px-6 lg:px-8 text-xs text-[#888] leading-relaxed text-center">
          RERA No. {VALAR.rera}. Developer: {VALAR.developer}. Floor plans by Genesis Planners Pvt. Ltd and are
          indicative only. Prices, specifications, possession dates and availability are subject to change
          without notice, and exclude GST, registration and other statutory charges. Please verify all details
          before making a purchase decision.
        </p>
      </section>

      <Footer />

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <a href={`tel:${VALAR.phone}`} className="flex items-center justify-center gap-2 bg-[#0F0F0F] text-white font-semibold py-4 text-sm">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href={VALAR.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-4 text-sm">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </main>
  )
}
