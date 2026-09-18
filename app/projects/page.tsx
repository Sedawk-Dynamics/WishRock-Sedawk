import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { FadeIn, SectionHeader } from '@/components/motion-wrapper'
import { SectionNav, Gallery, ZoomableImage, FloorPlans, AmenitiesTabs, SpecsAccordion } from '@/components/ciel/interactive'
import {
  CIEL,
  images,
  keyStats,
  priceStructure,
  paymentSchedule,
  priceNotes,
  locationAdvantages,
} from '@/lib/ciel-data'
import {
  Download,
  MapPin,
  ExternalLink,
  Phone,
  MessageCircle,
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'DSR CIEL, Gopanpally | Luxury 3 BHK Apartments | Wishrock Infratech LLP',
  description:
    'DSR CIEL by DSR Prime Spaces, Gopanpally — exclusive 3 BHK residences from 1905 to 2800 sft. 7 acres, 6 towers, 38 floors, 70% open landscape, 50K+ sft clubhouse. Price breakup, floor plans & site visits with Wishrock Infratech.',
}

const MAP_URL = `https://www.google.com/maps?q=${CIEL.mapLat},${CIEL.mapLng}&z=17&hl=en`
const MAP_EMBED = `https://maps.google.com/maps?q=${CIEL.mapLat},${CIEL.mapLng}&z=15&output=embed`

const sectionNav = [
  { label: 'Overview', href: '#overview' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Master Plan', href: '#masterplan' },
  { label: 'Floor Plans', href: '#floor-plans' },
  { label: 'Payment Plan', href: '#payment' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Specifications', href: '#specifications' },
  { label: 'Location', href: '#location' },
  { label: 'FAQ', href: '#faq' },
]

const gallery = [
  { src: images.aerial, alt: 'DSR CIEL aerial view of six towers surrounded by greenery', caption: 'Aerial View', w: 606, h: 825 },
  { src: images.nightView, alt: 'DSR CIEL towers seen at night from an aircraft window', caption: 'A View Above Expectation', w: 608, h: 402 },
  { src: images.hero, alt: 'DSR CIEL towers elevation', caption: 'Tower Elevation', w: 1280, h: 1049 },
  { src: images.banner, alt: 'DSR CIEL project highlights banner', caption: 'Luxury That Rises Above', w: 2400, h: 1350 },
  { src: images.masterplan, alt: 'DSR CIEL masterplan', caption: 'Masterplan', w: 612, h: 812 },
  { src: images.floorPlans, alt: 'DSR CIEL typical floor plans', caption: 'Typical Floor Plans', w: 1228, h: 821 },
  { src: images.locationMap, alt: 'DSR CIEL location map', caption: 'Location Map', w: 575, h: 726 },
]

const faqs = [
  { q: 'Is DSR CIEL RERA approved?', a: `Yes. DSR CIEL is registered with Telangana RERA under registration number ${CIEL.rera}.` },
  { q: 'Who is the developer?', a: 'DSR CIEL is developed by DSR Prime Spaces, part of the DSR Group, whose projects include DSR Valar and DSR Park Ridge.' },
  { q: 'What unit sizes are available?', a: 'All homes are 3 BHK — 1,905 sft (north facing), 2,205 sft (east/west), 2,420 sft (Blocks C & D) and 2,800 sft (Blocks A, B, E & F). Only 5 apartments per floor.' },
  { q: 'What charges are there besides the basic price?', a: 'Amenities ₹250/sft, 2 car parkings ₹6 lakh, clubhouse ₹6 lakh, floor rise (₹25/sft per floor from 5th–25th, ₹50/sft per floor from 26th–38th), east-facing PLC ₹100/sft, corpus ₹100/sft, 2 years maintenance ₹96/sft, and ₹30,000 each for moving, refundable caution deposit and legal. GST and registration are extra.' },
  { q: 'What is the payment plan?', a: 'A construction-linked plan: 5% on booking, 15% within 30 days, 20% on basement completion, then stage-wise instalments up to 5% before registration.' },
  { q: 'Can I schedule a site visit?', a: `Yes. Call or WhatsApp us on ${CIEL.phoneDisplay} and our team will arrange a site visit at a time that suits you.` },
]

const primaryBtn =
  'inline-flex items-center justify-center gap-2 bg-[#D42B2B] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#B01F1F] transition-all duration-300 shadow-lg hover:-translate-y-0.5'
const outlineBtn =
  'inline-flex items-center justify-center gap-2 border-2 border-[#E8E8E8] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded hover:border-[#D42B2B] hover:text-[#D42B2B] transition-colors'

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#D42B2B]" />
      <span className={`text-xs font-bold tracking-[0.25em] uppercase ${light ? 'text-[#C9A84C]' : 'text-[#D42B2B]'}`}>{children}</span>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <main className="pb-16 md:pb-0">
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative bg-white pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text — on its own light background, never over the image */}
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-[#F7F7F7] border border-[#E8E8E8] text-[#1A1A1A] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <BadgeCheck className="w-3.5 h-3.5 text-[#D42B2B]" />
              TS RERA {CIEL.rera} · by {CIEL.developer}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-[#0F0F0F] font-serif leading-[0.95]">
              DSR <span className="text-[#D42B2B]">CIEL</span>
            </h1>
            <p className="mt-3 text-[#C9A84C] tracking-[0.4em] uppercase text-sm font-semibold">{CIEL.tagline}</p>
            <p className="mt-6 flex items-center gap-2 text-[#4A4A4A] text-lg">
              <MapPin className="w-5 h-5 text-[#D42B2B]" /> {CIEL.location}
            </p>
            <p className="mt-2 text-[#1A1A1A] text-2xl md:text-3xl font-semibold">Luxury 3 BHK · 1,905 – 2,800 sft</p>
            <p className="mt-2 text-[#4A4A4A]">Where openness becomes luxury — 70% open landscape across 7 acres.</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#floor-plans" className={primaryBtn}>
                Get Price Breakup <ArrowRight className="w-4 h-4" />
              </a>
              <a href={CIEL.whatsapp} target="_blank" rel="noopener noreferrer" className={outlineBtn}>
                <MessageCircle className="w-4 h-4" /> Schedule Site Visit
              </a>
            </div>
          </FadeIn>

          {/* Image — original colours, no overlay */}
          <FadeIn direction="left">
            <div className="relative w-full max-w-lg mx-auto aspect-[606/825] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={images.aerial} alt="DSR CIEL aerial view" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" priority />
            </div>
          </FadeIn>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 border-t border-white/10 bg-[#0F0F0F]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 divide-x divide-white/10">
            {keyStats.map((s) => (
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
          <FadeIn direction="right">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[608/402]">
                <Image src={images.nightView} alt="DSR CIEL at night — a view above expectation" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#D42B2B] text-white rounded-xl p-6 shadow-2xl">
                <div className="text-4xl font-bold font-serif">5</div>
                <div className="text-sm text-white/80">homes per floor<br />all corner units</div>
              </div>
            </div>
          </FadeIn>

          <div>
            <SectionHeader eyebrow="Project Overview" title="A View Above Expectation" centered={false} />
            <FadeIn delay={0.1}>
              <p className="text-[#4A4A4A] leading-relaxed mb-5">
                DSR CIEL is a landmark gated community in Gopanpally by DSR Prime Spaces — six towers of
                3 basements + stilt + 38 floors, set on 7 acres with 70% of the land given to open landscape.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                With only five corner apartments per floor, every one of the 1,140 signature residences enjoys
                privacy, light and cross-ventilation — with 8 ft doors, premium vitrified flooring, and a 50,000+ sft
                clubhouse with a terrace infinity pool.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {['Open. Expansive. Enduring.', '32+ lifestyle experiences', '100% DG power backup', '4 high-speed lifts per block'].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A]">
                    <Star className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" /> {t}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href={CIEL.sitePlanPdf} download="DSR-CIEL-Site-Plan.pdf" className={primaryBtn}>
                  <Download className="w-4 h-4" /> Download Site Plan
                </a>
                <a href="#floor-plans" className={outlineBtn}>View Floor Plans</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section id="gallery" className="scroll-mt-36 py-24 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <Eyebrow light>Visual Journey</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white font-serif">Open. Expansive. Enduring.</h2>
              <p className="text-white/50 text-sm">Tap any image to view full screen · Artistic impressions</p>
            </div>
          </FadeIn>
          <Gallery shots={gallery} />
        </div>
      </section>

      {/* ============ MASTER PLAN ============ */}
      <section id="masterplan" className="scroll-mt-36 py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Master Plan"
            title="A Masterplan Built Around Openness"
            description="Organised around landscape, movement and perspective — six towers, a G+6 clubhouse and 11 m fire driveways, with entry from the existing 100 ft road."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="right">
              <ZoomableImage src={images.masterplan} alt="DSR CIEL landscape masterplan with 32-point legend" caption="Landscape Masterplan" w={612} h={812} />
              <p className="mt-3 text-center text-sm font-semibold text-[#1A1A1A]">Landscape Masterplan</p>
            </FadeIn>
            <FadeIn direction="left">
              <ZoomableImage src={images.sitePlan} alt="DSR CIEL site plan showing six tower blocks, clubhouse and tot lots" caption="Site Plan" w={687} h={868} />
              <p className="mt-3 text-center text-sm font-semibold text-[#1A1A1A]">Site Plan</p>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={CIEL.sitePlanPdf} download="DSR-CIEL-Site-Plan.pdf" className={primaryBtn}>
                <Download className="w-4 h-4" /> Download Site Plan PDF
              </a>
              <a href={CIEL.sitePlanPdf} target="_blank" rel="noopener noreferrer" className={`${outlineBtn} bg-white`}>
                <ExternalLink className="w-4 h-4" /> View PDF
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ FLOOR PLANS + PRICE ============ */}
      <section id="floor-plans" className="scroll-mt-36 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Floor Plans"
            title="Choose Your Home"
            description="Pick a block to explore its typical floor plan — five 3 BHK homes per floor, every one a corner unit."
          />
          <FloorPlans floorPlanSrc={images.floorPlans} />

          {/* Full price structure table */}
          <FadeIn>
            <div className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-[#E8E8E8] overflow-hidden">
              <div className="bg-[#0F0F0F] px-6 py-5 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-white font-bold font-serif text-xl">Price Structure</h3>
                <span className="text-white/50 text-xs">As per price sheet dated 10.07.26</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {priceStructure.map((row, i) => (
                      <tr key={row.item} className={`border-b border-[#E8E8E8] hover:bg-[#FFF5F5] transition-colors ${i % 2 ? 'bg-[#FAFAFA]' : ''}`}>
                        <td className="px-6 py-3.5 text-[#1A1A1A]">{row.item}</td>
                        <td className="px-6 py-3.5 text-right font-bold text-[#D42B2B] whitespace-nowrap">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="px-6 py-4 flex flex-col gap-1 text-xs text-[#888]">
                {priceNotes.map((n, i) => (
                  <li key={n}>{i + 1}. {n}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ PAYMENT PLAN ============ */}
      <section id="payment" className="scroll-mt-36 py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Payment Schedule"
            title="Construction-Linked Payment Plan"
            description="Pay as your home rises. Each instalment is a percentage of unit cost, plus GST."
          />

          {/* Progress bar showing share of each stage */}
          <FadeIn>
            <div className="flex h-4 rounded-full overflow-hidden mb-12 shadow-inner bg-[#E8E8E8]">
              {paymentSchedule.map((p, i) => (
                <div
                  key={p.stage}
                  title={`${p.stage}: ${p.pct}%`}
                  className="h-full border-r border-white/60 last:border-0"
                  style={{ width: `${p.pct}%`, background: `hsl(0 ${70 - i * 3}% ${45 + i * 3}%)` }}
                />
              ))}
            </div>
          </FadeIn>

          <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {paymentSchedule.map((p, i) => {
              const cumulative = paymentSchedule.slice(0, i + 1).reduce((s, x) => s + x.pct, 0)
              return (
                <FadeIn key={p.stage} delay={i * 0.04}>
                  <li className="group h-full bg-white rounded-xl border border-[#E8E8E8] p-5 hover:border-[#D42B2B]/40 hover:shadow-lg transition-all">
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold font-serif text-[#D42B2B]">{p.pct}%</span>
                      <span className="text-[11px] text-[#888]">{cumulative}% paid</span>
                    </div>
                    <p className="mt-2 font-semibold text-[#1A1A1A] text-sm">{p.stage}</p>
                    <p className="text-xs text-[#4A4A4A] mt-1">{p.when}</p>
                    <div className="mt-3 h-1 rounded-full bg-[#F0F0F0] overflow-hidden">
                      <div className="h-full bg-[#D42B2B]" style={{ width: `${cumulative}%` }} />
                    </div>
                  </li>
                </FadeIn>
              )
            })}
          </ol>
        </div>
      </section>

      {/* ============ AMENITIES ============ */}
      <section id="amenities" className="scroll-mt-36 py-24 bg-[#0F0F0F] relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex justify-center"><Eyebrow light>Amenities</Eyebrow></div>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-serif">The CIEL House — One Elevated Standard</h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                A 50,000+ sft social club and 32+ landscaped lifestyle experiences — from a temperature-controlled
                indoor pool to a terrace infinity pool, pickleball and a pet park.
              </p>
            </div>
          </FadeIn>
          <AmenitiesTabs />
        </div>
      </section>

      {/* ============ SPECIFICATIONS ============ */}
      <section id="specifications" className="scroll-mt-36 py-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeader eyebrow="Specifications" title="Crafted to Last" description="Tap any category to see what goes into your home." />
          <SpecsAccordion />
        </div>
      </section>

      {/* ============ LOCATION ============ */}
      <section id="location" className="scroll-mt-36 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Location Advantages"
            title="Where Everything Comes Closer"
            description="In the right place, for the right life — next to Hyderabad's IT corridor, top schools and daily conveniences."
          />
          <div className="grid lg:grid-cols-3 gap-8">
            <FadeIn direction="right">
              <ol className="relative border-l-2 border-[#D42B2B]/20 ml-3 flex flex-col gap-5">
                {locationAdvantages.map((l) => (
                  <li key={l.place} className="relative pl-6 group">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#D42B2B] group-hover:scale-125 transition-transform" />
                    <p className="text-[#D42B2B] font-bold text-sm">{l.time}</p>
                    <p className="text-[#1A1A1A] font-medium">{l.place}</p>
                  </li>
                ))}
              </ol>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={`${primaryBtn} mt-8`}>
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </FadeIn>
            <FadeIn>
              <ZoomableImage src={images.locationMap} alt="DSR CIEL location map showing Gopanpally, ORR, Wipro Circle and Financial District" caption="Location Map" w={575} h={726} />
            </FadeIn>
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8E8E8] h-full min-h-[400px]">
                <iframe
                  src={MAP_EMBED}
                  title="DSR CIEL on Google Maps"
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
            {faqs.map((f) => (
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
      <section id="enquire" className="scroll-mt-36 relative py-24 overflow-hidden">
        <Image src={images.nightView} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D42B2B]/95 to-[#0F0F0F]/90" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">Rise Above. Visit DSR CIEL.</h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
              Get the complete price breakup, live unit availability and a guided site visit with our team.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={CIEL.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#D42B2B] font-bold px-8 py-4 rounded shadow-lg hover:-translate-y-0.5 transition-all">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
              <a href={`tel:${CIEL.phone}`} className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5" /> {CIEL.phoneDisplay}
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded hover:bg-white/10 transition-colors">
                Send an Enquiry
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#F7F7F7] py-8">
        <p className="max-w-5xl mx-auto px-6 lg:px-8 text-xs text-[#888] leading-relaxed text-center">
          Project TS RERA No. {CIEL.rera}. Developer: {CIEL.developer}. Images are artistic impressions for
          representation only. Prices, specifications and availability are indicative, subject to change without
          notice, and exclude GST, registration and other statutory charges. Please verify all details before
          making a purchase decision.
        </p>
      </section>

      <Footer />

      {/* Mobile sticky action bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <a href={`tel:${CIEL.phone}`} className="flex items-center justify-center gap-2 bg-[#0F0F0F] text-white font-semibold py-4 text-sm">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href={CIEL.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-4 text-sm">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </main>
  )
}
