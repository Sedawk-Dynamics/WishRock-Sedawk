import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { FadeIn, SectionHeader } from '@/components/motion-wrapper'
import { Building2, Layers, Home, LandPlot, Ruler, Download, MapPin, ExternalLink, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'DSR CEIL | Projects | Wishrock Infratech LLP',
  description:
    'DSR CEIL — exclusive 3BHK apartments from 1905 to 2800 sft across 7 acres, 6 towers and 38 floors. 1140 flats. Enquire with Wishrock Infratech LLP.',
}

const MAP_LAT = 17.429397583007812
const MAP_LNG = 78.28759002685547
const MAP_URL = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=17&hl=en`
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=16&output=embed`
const SHARE_URL = 'https://share.google/yCxo8pN5SvsUHCFpC'
// The file name contains a space, so it must be URL-encoded
const SITE_PLAN_URL = '/1.Site%20Plan.pdf'

const highlights = [
  { icon: LandPlot, value: '7', label: 'Acres' },
  { icon: Building2, value: '6', label: 'Towers' },
  { icon: Layers, value: '38', label: 'Floors' },
  { icon: Home, value: '1140', label: 'Flats' },
]

const details = [
  { label: 'Project', value: 'DSR CEIL' },
  { label: 'Configuration', value: 'Exclusive 3 BHK' },
  { label: 'Unit Size', value: '1905 – 2800 sft' },
  { label: 'Land Area', value: '7 Acres' },
  { label: 'Towers', value: '6' },
  { label: 'Floors', value: '38' },
  { label: 'Flats per Floor', value: '5' },
  { label: 'Total Flats', value: '1140' },
]

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0F0F0F] pt-20">
        <div className="relative h-[70vh] min-h-[480px] w-full">
          <Image
            src="/project-image.jpeg"
            alt="DSR CEIL — six high-rise residential towers with landscaped gardens"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 pb-12">
              <FadeIn>
                <span className="inline-block bg-[#D42B2B] text-white text-xs font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded mb-4">
                  Featured Project
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-white font-serif leading-tight">DSR CEIL</h1>
                <p className="mt-3 text-white/80 text-lg md:text-xl">
                  Exclusive 3BHKs · 1905 sft to 2800 sft
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={SITE_PLAN_URL}
                    download="DSR-CEIL-Site-Plan.pdf"
                    className="flex items-center gap-2 bg-[#D42B2B] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#B01F1F] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                  >
                    <Download className="w-4 h-4" />
                    Download Site Plan
                  </a>
                  <Link
                    href="/#contact"
                    className="flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Enquire Now
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight stats */}
      <section className="bg-[#D42B2B] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col items-center text-center text-white">
              <h.icon className="w-6 h-6 mb-2 text-white/80" />
              <span className="text-4xl lg:text-5xl font-bold font-serif">{h.value}</span>
              <span className="text-white/70 text-sm mt-1 font-medium uppercase tracking-widest">{h.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[1280/1049]">
              <Image
                src="/project-image.jpeg"
                alt="DSR CEIL towers elevation"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <div>
            <SectionHeader eyebrow="Project Overview" title="Luxury That Rises Above" centered={false} />
            <FadeIn delay={0.1}>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                DSR CEIL is a landmark gated community spread across 7 acres, with 6 towers rising
                38 floors each. With only 5 flats per floor, every home is an exclusive 3BHK
                ranging from 1905 sft to 2800 sft — 1140 residences in total.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <dl className="grid grid-cols-2 gap-px bg-[#E8E8E8] rounded-xl overflow-hidden border border-[#E8E8E8]">
                {details.map((d) => (
                  <div key={d.label} className="bg-white p-4">
                    <dt className="text-xs text-[#888] uppercase tracking-widest">{d.label}</dt>
                    <dd className="mt-1 font-bold text-[#1A1A1A]">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Site plan download */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0F0F0F] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D42B2B]" />
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#D42B2B]/15 rounded-lg">
                  <Ruler className="w-6 h-6 text-[#D42B2B]" />
                </div>
                <div>
                  <h2 className="text-white text-xl font-bold font-serif">DSR CEIL Site Plan</h2>
                  <p className="text-white/60 text-sm">PDF · 1.5 MB</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SITE_PLAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </a>
                <a
                  href={SITE_PLAN_URL}
                  download="DSR-CEIL-Site-Plan.pdf"
                  className="flex items-center gap-2 px-5 py-3 rounded bg-[#D42B2B] text-white text-sm font-semibold hover:bg-[#B01F1F] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Location"
            title="Find DSR CEIL"
            description="Visit the project site or get directions straight from Google Maps."
          />
          <FadeIn>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8E8E8] aspect-[16/9] md:aspect-[21/9]">
              <iframe
                src={MAP_EMBED}
                title="DSR CEIL location map"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#D42B2B] text-white font-semibold px-6 py-3 rounded hover:bg-[#B01F1F] transition-colors text-sm"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
              <a
                href={SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-[#E8E8E8] text-[#1A1A1A] font-semibold px-6 py-3 rounded hover:border-[#D42B2B] hover:text-[#D42B2B] transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View on Google
              </a>
              <a
                href="tel:+918328446929"
                className="flex items-center gap-2 border-2 border-[#E8E8E8] text-[#1A1A1A] font-semibold px-6 py-3 rounded hover:border-[#D42B2B] hover:text-[#D42B2B] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Book a Site Visit
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
