'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn, SectionHeader } from './motion-wrapper'
import { Mail, Phone } from 'lucide-react'

const team = [
  {
    name: 'Vasam Vivek Kumar',
    designation: 'Founder & Managing Partner',
    role: 'Business Development, Client Relations, Strategic Partnerships, Real Estate Advisory',
    email: 'vivekumar@wishrock.com',
    phone: '+91 94411 55429',
    image: '/images/founder.png',
  },
  {
    name: 'Vasam Arun Kumar',
    designation: 'Managing Partner',
    role: 'Operations Management, Project Coordination, Contract Administration, Execution Oversight',
    email: 'arunkumar@wishrock.com',
    phone: '+91 90143 54525',
    image: '/images/director.png',
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Leadership"
          title="Meet Our Team"
          description="Our leadership brings decades of combined experience in real estate, infrastructure development, and business strategy."
        />

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8E8E8]"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-lg font-serif">{member.name}</h3>
                    <p className="text-[#D42B2B] text-sm font-semibold mt-0.5">{member.designation}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">{member.role}</p>

                  <div className="flex flex-col gap-2 pt-4 border-t border-[#E8E8E8]">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-[#4A4A4A] hover:text-[#D42B2B] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#D42B2B]" />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-sm text-[#4A4A4A] hover:text-[#D42B2B] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D42B2B]" />
                      {member.phone}
                    </a>
                  </div>
                </div>

                {/* Red bottom accent */}
                <div className="h-1 bg-[#D42B2B] w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
