'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Real Estate Consulting',
  'Open Plot Development',
  'Residential Apartments & Villas',
  'Land Acquisition Advisory',
  'Excavation & Earthwork',
  'Civil Contracting',
  'Builder Support Services',
  'Infrastructure Solutions',
]

const emails = [
  'info@wishrockinfra.com',
  'vivekkumar@wishrock.com',
  'arun@wishrockinfra.com',
  'sales@wishrock.com',
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const pathname = usePathname()
  const router = useRouter()
  const handleNavClick = (href: string) => {
    if (!href.startsWith('#')) return router.push(href)
    if (pathname !== '/') return router.push(`/${href}`)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0F0F0F] text-white overflow-hidden relative">
      {/* Top red bar */}
      <div className="h-1 w-full bg-[#D42B2B]" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/wishrock-logo.png"
              alt="Wishrock Infratech LLP"
              width={180}
              height={48}
              className="h-12 w-auto object-contain brightness-0 invert mb-6"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Wishrock Infratech LLP — Hyderabad&apos;s trusted real estate and infrastructure company. 
              Building trust, creating value, and delivering excellence since our founding.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+918328446929"
                className="flex items-center gap-2 text-white/60 hover:text-[#D42B2B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D42B2B]" />
                +91 83284 46929
              </a>
              <a
                href="https://wa.me/918328446929"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-[#D42B2B] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#D42B2B]" />
                WhatsApp Us
              </a>
              <a
                href="mailto:info@wishrockinfra.com"
                className="flex items-center gap-2 text-white/60 hover:text-[#D42B2B] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#D42B2B]" />
                info@wishrockinfra.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 text-sm hover:text-[#D42B2B] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#D42B2B] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Our Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-white/60 text-sm hover:text-[#D42B2B] transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#D42B2B] group-hover:w-4 transition-all duration-300 flex-shrink-0" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Contact Details</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D42B2B] flex-shrink-0 mt-0.5" />
                <p className="text-white/60 leading-relaxed">
                  5-100582, Sai Villas,<br />
                  Ramachandrapuram, Ameenpur,<br />
                  Medak 502032, Telangana
                </p>
              </div>

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Email Accounts</p>
                <div className="flex flex-col gap-1">
                  {emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="text-white/60 hover:text-[#D42B2B] transition-colors text-xs"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-white/40 text-xs mb-1">GST Number</p>
                <p className="text-white/60 text-xs font-mono">36AAFFW3154L1ZU</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center">
            &copy; {new Date().getFullYear()} Wishrock Infratech LLP. All rights reserved. | 
            <a
              href="https://www.wishrockinfratech.com"
              className="ml-1 hover:text-[#D42B2B] transition-colors"
            >
              www.wishrockinfratech.com
            </a>
          </p>
          <p className="text-white/40 text-xs">Your Vision. Our Commitment.</p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 p-3 bg-[#D42B2B] text-white rounded-full shadow-lg hover:bg-[#B01F1F] hover:-translate-y-1 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  )
}
