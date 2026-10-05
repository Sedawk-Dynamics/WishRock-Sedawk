'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Wallet, Landmark, Percent } from 'lucide-react'

export interface CalcUnit {
  /** e.g. "3 BHK · 2,205 sft" */
  label: string
  /** saleable area in sft */
  size: number
  /** all-in price in rupees, when the property publishes one */
  price?: number
}

interface Props {
  units: CalcUnit[]
  /** ₹/sft used when a unit has no fixed price. Editable by the visitor. */
  defaultRate?: number
  /** extra charges per sft added on top of basic (amenities, corpus, maintenance…) */
  extrasPerSft?: number
  /** flat extras in rupees (car parking, clubhouse, legal…) */
  extrasFlat?: number
  accent?: string
  note?: string
}

const fmtINR = (n: number) =>
  '₹' + Math.round(n).toLocaleString('en-IN', { maximumFractionDigits: 0 })

const fmtCr = (n: number) => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`
  return fmtINR(n)
}

const TERMS = [10, 15, 20, 25, 30]

export default function MortgageCalculator({
  units,
  defaultRate,
  extrasPerSft = 0,
  extrasFlat = 0,
  accent = '#D42B2B',
  note,
}: Props) {
  const [unitIdx, setUnitIdx] = useState(0)
  const [rate, setRate] = useState(defaultRate ?? 0)
  const [term, setTerm] = useState(20)
  const [interest, setInterest] = useState(8.5)
  const [downPct, setDownPct] = useState(20)

  const unit = units[unitIdx]

  const price = useMemo(() => {
    if (unit.price) return unit.price
    return unit.size * (rate + extrasPerSft) + extrasFlat
  }, [unit, rate, extrasPerSft, extrasFlat])

  const { emi, loan, down, totalInterest, totalPayable, principalShare } = useMemo(() => {
    const down = (price * downPct) / 100
    const loan = Math.max(0, price - down)
    const r = interest / 12 / 100
    const n = term * 12
    const emi = r === 0 ? loan / n : (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalPayable = emi * n
    const totalInterest = totalPayable - loan
    const principalShare = totalPayable > 0 ? (loan / totalPayable) * 100 : 0
    return { emi, loan, down, totalInterest, totalPayable, principalShare }
  }, [price, downPct, interest, term])

  // donut geometry
  const R = 86
  const C = 2 * Math.PI * R

  const sliderCls = 'w-full accent-[var(--accent)] cursor-pointer'

  return (
    <div
      className="grid lg:grid-cols-5 gap-10 bg-white rounded-2xl border border-[#E8E8E8] shadow-xl p-6 md:p-10"
      style={{ ['--accent' as string]: accent }}
    >
      {/* Inputs */}
      <div className="lg:col-span-3">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5" style={{ color: accent }} />
          <h3 className="font-bold font-serif text-2xl text-[#1A1A1A]">EMI Calculator</h3>
        </div>

        {/* Unit */}
        <label className="block text-xs font-bold text-[#888] uppercase tracking-widest mb-2">
          Choose your home
        </label>
        <div className="flex flex-wrap gap-2 mb-6">
          {units.map((u, i) => (
            <button
              key={u.label}
              onClick={() => setUnitIdx(i)}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all ${
                unitIdx === i
                  ? 'text-white border-transparent shadow-md'
                  : 'bg-white text-[#4A4A4A] border-[#E8E8E8] hover:border-[var(--accent)]'
              }`}
              style={unitIdx === i ? { background: accent } : undefined}
            >
              {u.label}
            </button>
          ))}
        </div>

        {/* Rate (only when price is derived) */}
        {!unit.price && (
          <div className="mb-6">
            <label htmlFor="rate" className="flex justify-between text-sm font-semibold text-[#1A1A1A] mb-2">
              <span>Basic rate (₹ / sft)</span>
              <span style={{ color: accent }}>{fmtINR(rate)}</span>
            </label>
            <input
              id="rate"
              type="range"
              min={5000}
              max={20000}
              step={100}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className={sliderCls}
            />
            <p className="mt-1 text-xs text-[#888]">
              Ask us for today&apos;s rate — move the slider to model any figure.
            </p>
          </div>
        )}

        {/* Price readout */}
        <div className="mb-6 rounded-xl bg-[#F7F7F7] border border-[#E8E8E8] p-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs text-[#888] uppercase tracking-widest">
              {unit.price ? 'Price' : 'Estimated all-in cost'}
            </p>
            <p className="text-2xl font-bold font-serif text-[#1A1A1A]">{fmtCr(price)}</p>
          </div>
          <p className="text-xs text-[#888] text-right">
            {unit.size.toLocaleString('en-IN')} sft
            {!unit.price && extrasPerSft > 0 && (
              <>
                <br />
                incl. ₹{extrasPerSft}/sft charges
                {extrasFlat > 0 && ` + ${fmtCr(extrasFlat)}`}
              </>
            )}
          </p>
        </div>

        {/* Term */}
        <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Loan term</label>
        <div className="flex flex-wrap gap-2 mb-6">
          {TERMS.map((t) => (
            <button
              key={t}
              onClick={() => setTerm(t)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-all ${
                term === t
                  ? 'text-white border-transparent'
                  : 'bg-white text-[#4A4A4A] border-[#E8E8E8] hover:border-[var(--accent)]'
              }`}
              style={term === t ? { background: accent } : undefined}
            >
              {t} yrs
            </button>
          ))}
        </div>

        {/* Interest */}
        <label htmlFor="interest" className="flex justify-between text-sm font-semibold text-[#1A1A1A] mb-2">
          <span>Interest rate</span>
          <span style={{ color: accent }}>{interest.toFixed(2)}%</span>
        </label>
        <input
          id="interest"
          type="range"
          min={6}
          max={14}
          step={0.05}
          value={interest}
          onChange={(e) => setInterest(Number(e.target.value))}
          className={`${sliderCls} mb-6`}
        />

        {/* Down payment */}
        <label htmlFor="down" className="flex justify-between text-sm font-semibold text-[#1A1A1A] mb-2">
          <span>Down payment</span>
          <span style={{ color: accent }}>
            {downPct}% · {fmtCr(down)}
          </span>
        </label>
        <input
          id="down"
          type="range"
          min={10}
          max={80}
          step={1}
          value={downPct}
          onChange={(e) => setDownPct(Number(e.target.value))}
          className={sliderCls}
        />
      </div>

      {/* Result */}
      <div className="lg:col-span-2 flex flex-col items-center justify-center text-center">
        <div className="relative w-56 h-56">
          <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
            <circle cx="100" cy="100" r={R} fill="none" stroke="#EFEFEF" strokeWidth="18" />
            <motion.circle
              cx="100"
              cy="100"
              r={R}
              fill="none"
              stroke={accent}
              strokeWidth="18"
              strokeLinecap="round"
              strokeDasharray={C}
              animate={{ strokeDashoffset: C - (C * principalShare) / 100 }}
              transition={{ type: 'spring', stiffness: 60, damping: 18 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              key={Math.round(emi)}
              initial={{ opacity: 0.4, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold font-serif text-[#1A1A1A]"
            >
              {fmtINR(emi)}
            </motion.span>
            <span className="text-[#888] text-sm">per month</span>
          </div>
        </div>

        <p className="mt-5 text-sm text-[#4A4A4A]">
          <span className="font-bold text-[#1A1A1A]">{term} years</span> ·{' '}
          <span className="font-bold text-[#1A1A1A]">{interest.toFixed(2)}%</span> interest
        </p>

        <ul className="mt-6 w-full flex flex-col gap-3 text-sm">
          <li className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-[#4A4A4A]">
              <Wallet className="w-4 h-4" style={{ color: accent }} /> Down payment
            </span>
            <span className="font-bold text-[#1A1A1A]">{fmtCr(down)}</span>
          </li>
          <li className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-[#4A4A4A]">
              <Landmark className="w-4 h-4" style={{ color: accent }} /> Loan amount
            </span>
            <span className="font-bold text-[#1A1A1A]">{fmtCr(loan)}</span>
          </li>
          <li className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-[#4A4A4A]">
              <Percent className="w-4 h-4" style={{ color: accent }} /> Total interest
            </span>
            <span className="font-bold text-[#1A1A1A]">{fmtCr(totalInterest)}</span>
          </li>
          <li className="flex items-center justify-between gap-4 border-t border-[#E8E8E8] pt-3">
            <span className="text-[#4A4A4A]">Total payable</span>
            <span className="font-bold" style={{ color: accent }}>
              {fmtCr(totalPayable + down)}
            </span>
          </li>
        </ul>

        <p className="mt-5 text-[11px] text-[#888] leading-relaxed">
          {note ??
            'Indicative only. Excludes GST, registration and other statutory charges. Actual EMI depends on your lender, tenure and credit profile.'}
        </p>
      </div>
    </div>
  )
}
