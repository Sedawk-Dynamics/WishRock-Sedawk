'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  once?: boolean
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '', once = true }: FadeInProps) {
  const dirMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...dirMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ eyebrow, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <FadeIn>
        <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
          <div className="w-8 h-0.5 bg-[#D42B2B]" />
          <span className="text-[#D42B2B] text-xs font-bold tracking-[0.25em] uppercase">{eyebrow}</span>
          <div className="w-8 h-0.5 bg-[#D42B2B]" />
        </div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F0F0F] font-serif text-balance leading-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && (
          <p className={`mt-4 text-[#4A4A4A] text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
            {description}
          </p>
        )}
      </FadeIn>
    </div>
  )
}

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`)

  return (
    <motion.span
      className="tabular-nums"
      onViewportEnter={() => {
        animate(count, target, { duration, ease: 'easeOut' })
      }}
      viewport={{ once: true }}
    >
      <motion.span>{rounded}</motion.span>
    </motion.span>
  )
}
