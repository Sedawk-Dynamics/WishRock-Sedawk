// DSR VALAR, Kokapet — project content.
// Figures from valardsrprojects.in; unit sizes & room dimensions from the Genesis Planners floor plans.

export const VALAR = {
  name: 'DSR VALAR',
  tagline: 'Live Above the Ordinary',
  developer: 'DSR Prime Spaces',
  location: 'Kokapet, Hyderabad',
  address: 'Kokapet SEZ Main Road, Hyderabad 500075',
  rera: 'A02500000131',
  startingPrice: '₹3.50 Cr',
  possession: 'August 2027',
  phone: '+918328446929',
  phoneDisplay: '+91 83284 46929',
  whatsapp: `https://wa.me/918328446929?text=${encodeURIComponent(
    'Hi, I am interested in DSR VALAR, Kokapet. Please share the price breakup.'
  )}`,
  mapQuery: 'DSR Valar, Kokapet, Hyderabad',
}

export const valarImages = {
  floorPlanHd: '/dsr-valar/floor-plan-hd.jpg',
  blockBTypical: '/dsr-valar/block-b-typical.jpg',
  unitA1: '/dsr-valar/unit-a1-3242.jpg',
  unitA2: '/dsr-valar/unit-a2-3242.jpg',
  unitA4: '/dsr-valar/unit-a4-4080.jpg',
  unitB2: '/dsr-valar/unit-b2-4039.jpg',
  unitB3: '/dsr-valar/unit-b3-3242.jpg',
  unitB4: '/dsr-valar/unit-b4-3242.jpg',
}

export const valarStats = [
  { value: '3', label: 'Acres' },
  { value: '2', label: 'Iconic Towers' },
  { value: '36', label: 'Floors' },
  { value: '282', label: 'Exclusive Units' },
  { value: '36K', label: 'Sft Clubhouse' },
  { value: '4 BHK', label: 'Only Configuration' },
]

export const valarDetails = [
  { label: 'Configuration', value: '4 BHK & 4 BHK + Maid' },
  { label: 'Unit Sizes', value: '3,242 – 4,090 sft' },
  { label: 'Starting Price', value: '₹3.50 Cr onwards' },
  { label: 'Possession', value: 'August 2027' },
  { label: 'Land Area', value: '3 Acres' },
  { label: 'RERA No.', value: VALAR.rera },
]

export const valarHighlights = [
  '2 iconic towers of 36 floors on a 3-acre gated community',
  'Only 282 exclusive 4 BHK residences',
  '36,000 sft fully equipped clubhouse',
  'Rooftop infinity pool with lakeside views',
  'Expansive 5\'4" wide balconies and sit-outs in every home',
  'VRF air-conditioning provision in all units',
  'Pooja room, store, utility and maid room in select layouts',
]

// Unit plans drawn by Genesis Planners
export const valarUnits = [
  { no: 'A-1', size: 3242, type: '4 BHK', img: '/dsr-valar/unit-a1-3242.jpg', block: 'Block A' },
  { no: 'A-2', size: 3242, type: '4 BHK', img: '/dsr-valar/unit-a2-3242.jpg', block: 'Block A' },
  { no: 'A-4', size: 4080, type: '4 BHK + Maid', img: '/dsr-valar/unit-a4-4080.jpg', block: 'Block A' },
  { no: 'B-2', size: 4039, type: '4 BHK + Maid', img: '/dsr-valar/unit-b2-4039.jpg', block: 'Block B' },
  { no: 'B-3', size: 3242, type: '4 BHK', img: '/dsr-valar/unit-b3-3242.jpg', block: 'Block B' },
  { no: 'B-4', size: 3242, type: '4 BHK', img: '/dsr-valar/unit-b4-3242.jpg', block: 'Block B' },
]

export const valarAmenities = {
  lifestyle: [
    'Rooftop Infinity Pool',
    'Fully Equipped Clubhouse (36,000 sft)',
    'State-of-the-Art Gymnasium',
    'Library & Reading Lounge',
    'Open-Air Amphitheatre',
    'Banquet & Party Spaces',
    'Indoor Games',
    'Spa & Wellness',
  ],
  outdoor: [
    'Yoga Lawn',
    'Landscaped Gardens',
    'Cycling & Jogging Track',
    'Cricket Practice Nets',
    'Pet-Friendly Spaces',
    "Children's Play Area",
    'Lakeside Views',
    '24×7 Security & Surveillance',
  ],
}

export const valarLocation = [
  { place: 'Nehru Outer Ring Road', time: '2 km' },
  { place: 'Continental Hospitals', time: '3.5 km' },
  { place: 'Infosys IT Park', time: '4.7 km' },
  { place: 'Rockwell International School', time: '5.1 km' },
  { place: 'Raidurg Metro Station', time: '10.7 km' },
]

export const valarFaqs = [
  { q: 'Is DSR VALAR RERA approved?', a: `Yes. DSR VALAR is registered under RERA number ${VALAR.rera}.` },
  { q: 'What is the starting price?', a: 'Homes start at ₹3.50 Cr onwards. Contact us for the current rate and a complete price breakup for your preferred unit.' },
  { q: 'What configurations are available?', a: 'Only 4 BHK homes — 3,242 sft (4 BHK) and 4,039 / 4,080 / 4,090 sft (4 BHK + maid), across two towers.' },
  { q: 'When is possession?', a: 'Possession is scheduled for August 2027.' },
  { q: 'Where is the project located?', a: 'Kokapet SEZ Main Road, Hyderabad — 2 km from the Outer Ring Road and 4.7 km from Infosys IT Park.' },
  { q: 'Can I schedule a site visit?', a: `Yes. Call or WhatsApp us on ${VALAR.phoneDisplay} and our team will arrange a visit at a time that suits you.` },
]
