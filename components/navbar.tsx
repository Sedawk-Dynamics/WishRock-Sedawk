'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pathname = usePathname()
  const router = useRouter()

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (!href.startsWith('#')) return router.push(href)
    if (pathname !== '/') return router.push(`/${href}`)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-[#E8E8E8]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              className="flex-shrink-0"
            >
              <Image
                src="/images/wishrock-logo.png"
                alt="Wishrock Infratech LLP"
                width={200}
                height={52}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium tracking-wide transition-colors duration-200 text-[#1A1A1A] hover:text-[#D42B2B] relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D42B2B] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+918328446929"
                className="hidden md:flex items-center gap-2 bg-[#D42B2B] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#B01F1F] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <button
                className="lg:hidden p-2 rounded transition-colors text-[#1A1A1A] hover:text-[#D42B2B]"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#E8E8E8]">
                <Image
                  src="/images/wishrock-logo.png"
                  alt="Wishrock Infratech LLP"
                  width={160}
                  height={42}
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#1A1A1A] hover:text-[#D42B2B] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-base font-medium text-[#1A1A1A] hover:text-[#D42B2B] py-3 px-4 rounded hover:bg-[#FFF5F5] transition-all duration-200"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="p-6 border-t border-[#E8E8E8]">
                <a
                  href="tel:+918328446929"
                  className="flex items-center justify-center gap-2 w-full bg-[#D42B2B] text-white font-semibold py-3 rounded hover:bg-[#B01F1F] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 83284 46929
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
