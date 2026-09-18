// DSR CIEL — single source of truth for project content.
// Prices from "CIEL-Price sheet from 10.07.26.pdf"; specs & amenities from the DSR brochure.

export const CIEL = {
  name: 'DSR CIEL',
  tagline: 'Rise Above',
  developer: 'DSR Prime Spaces',
  location: 'Gopanpally, Hyderabad',
  rera: 'P02400010929',
  phone: '+918328446929',
  phoneDisplay: '+91 83284 46929',
  whatsapp: `https://wa.me/918328446929?text=${encodeURIComponent(
    'Hi, I am interested in DSR CIEL, Gopanpally. Please share the price breakup.'
  )}`,
  mapLat: 17.429397583007812,
  mapLng: 78.28759002685547,
  sitePlanPdf: '/1.Site%20Plan.pdf',
}

export const images = {
  aerial: '/projects/ciel/aerial.png',
  nightView: '/projects/ciel/night-view.png',
  masterplan: '/projects/ciel/masterplan.png',
  floorPlans: '/projects/ciel/floor-plans.png',
  locationMap: '/projects/ciel/location-map.png',
  sitePlan: '/site-image.png',
  banner: '/images/hero-banner.jpg',
  hero: '/project-image.jpeg',
}

export const keyStats = [
  { value: '70%', label: 'Open Landscape' },
  { value: '6', label: 'Residential Towers' },
  { value: '38', label: '3B + Stilt + Floors' },
  { value: '1,140', label: 'Signature Residences' },
  { value: '32+', label: 'Lifestyle Experiences' },
  { value: '8 ft', label: 'Door Height' },
  { value: '50K+', label: 'Sft Social Club' },
  { value: '7', label: 'Acres' },
]

export type Facing = 'East' | 'West' | 'North'
export interface Unit {
  no: string
  size: number
  facing: Facing
}

export const blocks: { id: string; label: string; units: Unit[] }[] = [
  {
    id: 'abef',
    label: 'Blocks A, B, E & F',
    units: [
      { no: '01', size: 2800, facing: 'West' },
      { no: '02', size: 2205, facing: 'West' },
      { no: '03', size: 1905, facing: 'North' },
      { no: '04', size: 2205, facing: 'East' },
      { no: '05', size: 2800, facing: 'East' },
    ],
  },
  {
    id: 'cd',
    label: 'Blocks C & D',
    units: [
      { no: '01', size: 2420, facing: 'West' },
      { no: '02', size: 2205, facing: 'West' },
      { no: '03', size: 1905, facing: 'North' },
      { no: '04', size: 2205, facing: 'East' },
      { no: '05', size: 2420, facing: 'East' },
    ],
  },
]

export const unitSizes = [1905, 2205, 2420, 2800]

// Price structure (basic price not stated in the sheet — shared on request)
export const charges = {
  amenitiesPerSft: 250, // TSSPDCL, HMWSSB, DG set etc.
  carParking: 600000, // 2 car parkings
  clubHouse: 600000,
  floorRiseLowPerSft: 25, // per floor, 5th–25th
  floorRiseHighPerSft: 50, // per floor, 26th–38th
  eastFacingPlcPerSft: 100,
  corpusPerSft: 100,
  maintenancePerSft: 96, // first 2 years
  moving: 30000,
  cautionDeposit: 30000, // refundable
  legal: 30000,
}

export const priceStructure = [
  { item: 'Basic Price', cost: 'On request' },
  { item: 'Amenities (TSSPDCL, HMWSSB, DG Set etc.)', cost: '₹250 / sft' },
  { item: '2 Car Parkings', cost: '₹6,00,000' },
  { item: 'Club House Charges', cost: '₹6,00,000' },
  { item: 'Floor Rise — 5th to 25th floor (each floor)', cost: '₹25 / sft' },
  { item: 'Floor Rise — 26th to 38th floor (each floor)', cost: '₹50 / sft' },
  { item: 'Preferential Location Charges (East Facing)', cost: '₹100 / sft' },
  { item: 'Corpus Fund', cost: '₹100 / sft' },
  { item: 'Maintenance Charges (first 2 years)', cost: '₹96 / sft' },
  { item: 'Moving Charges', cost: '₹30,000' },
  { item: 'Refundable Caution Deposit', cost: '₹30,000' },
  { item: 'Legal & Documentation Charges', cost: '₹30,000' },
]

export const paymentSchedule = [
  { stage: 'Booking Advance', pct: 5, when: 'At booking' },
  { stage: '1st Instalment', pct: 15, when: 'Within 30 days of booking' },
  { stage: '2nd Instalment', pct: 20, when: 'On completion of basements' },
  { stage: '3rd Instalment', pct: 10, when: 'On completion of 5th floor' },
  { stage: '4th Instalment', pct: 10, when: 'On completion of 10th floor' },
  { stage: '5th Instalment', pct: 10, when: 'On completion of 15th floor' },
  { stage: '6th Instalment', pct: 5, when: 'On completion of 20th floor' },
  { stage: '7th Instalment', pct: 5, when: 'On completion of 29th floor' },
  { stage: '8th Instalment', pct: 5, when: 'On completion of 38th floor' },
  { stage: '9th Instalment', pct: 5, when: "On completion of unit's flooring & tiling" },
  { stage: '10th Instalment', pct: 5, when: "On completion of unit's painting" },
  { stage: '11th Instalment', pct: 5, when: 'Before registration' },
]

export const priceNotes = [
  'Statutory charges like GST & registration are extra and subject to change as per government norms.',
  'Prices are subject to change without prior notice.',
  'TDS @ 1% of the sale consideration shall be deducted and paid directly to the IT department on the builder’s PAN.',
]

export const clubhouseFacilities = [
  'Reception & Waiting Lounge',
  'Super Market',
  'Multipurpose Hall',
  'Banquet Hall / Dining',
  'Gymnasium',
  'Aerobics',
  'Yoga',
  'Indoor Games — Billiards & Table Tennis',
  'Home Theatre',
  'Indoor Temperature-Controlled Pool',
  'Squash Court',
  'Badminton Court',
  'Coffee Shop',
  'Kitty Party Hall',
  'Cards Room',
  'Guest Rooms',
  'Maintenance Office / Conference Room',
  'Salon',
  'Reading Lounge',
  'Terrace Infinity Pool & Outdoor Barbeque Deck',
]

export const outdoorAmenities = [
  'Grand Entrance',
  'Security Cabin',
  'E-Commerce Room',
  'Cricket Practice Net',
  'Banquet Lawn',
  'Amphitheatre',
  'Visitors Parking',
  'Water Feature',
  'Reading Lawn',
  'Yoga Lawn',
  'Zen Garden',
  'Aerial Yoga',
  'Grand Walk',
  'Half Basketball Court',
  'Tree Deck Garden',
  'Tennis Court',
  'Hopscotch',
  'Trim Trail',
  'Aroma Garden',
  'Pickleball Court',
  'Pet Park',
  'Temple',
  'Flag Hoisting',
  'Bicycle Bay',
  'Tri-Cycle Path',
  'Elevated Play Area',
  'Bus Bay',
  'Interactive Seating',
]

export const specifications = [
  { title: 'Structure', text: 'RCC framed structure designed to withstand wind and seismic loads. Super structure with reinforced shear walls.' },
  { title: 'Painting', text: 'Internal: smooth putty finish with 2 coats of premium acrylic emulsion over a coat of primer. External: textured finish with two coats of exterior emulsion of reputed make.' },
  { title: 'Doors', text: 'Main & internal doors: solid / engineered wood frame with veneered shutter, 8 ft height, with hardware of reputed make. Toilet & utility doors: solid / engineered wood frame, one side veneered and back side laminated, 8 ft height.' },
  { title: 'Windows & French Doors', text: 'Aluminium sliding windows with provision for mosquito mesh. Aluminium sliding French door frames with glass shutter and mosquito-mesh provision.' },
  { title: 'Flooring', text: 'Entrance lounge: granite/marble & vitrified tiles. Corridors: premium vitrified tiles. Drawing, living, dining, bedrooms & kitchen: premium vitrified tiles with 3-inch skirting. Toilets: vitrified dado up to 8 ft, anti-skid flooring. Balconies & utility: anti-skid vitrified tiles. Staircases: granite (service) and tandur stone (fire).' },
  { title: 'CP & Sanitary Fixtures', text: 'All CP fittings and sanitary fixtures of reputed make. Wall-mounted EWC with flush valve and health faucet in all bathrooms. Kitchen provision for municipal water and borewell connection.' },
  { title: 'Electrical', text: 'Designer modular switches of reputed make. TV points in drawing, living and master bedroom. Concealed copper wiring. Three-phase supply with energy meter for each unit. Provision for AC in living and all bedrooms. MCBs for each distribution board.' },
  { title: 'Telecom, Cable & Internet', text: 'Intercom to all units connecting to security. DTH provision in living and master bedroom. Wired internet provision in living room. Telephone point in living room.' },
  { title: 'WTP & STP', text: 'Fully treated water through an exclusive water-softening plant for borewell water. Sewage treatment plant of adequate capacity; treated water reused for landscaping and flushing.' },
  { title: 'Car Parking & Car Wash', text: '2 car parks for each apartment, well-planned parking layout with signage to ease traffic flow. Car washing facility provided.' },
  { title: 'Power Backup', text: '100% DG set backup with acoustic enclosure & AMF panel for all flats and common areas.' },
  { title: 'Elevators', text: 'Four high-speed automatic stainless steel lifts per block with group control and ARD with V3F for energy efficiency, plus one high-speed service/goods lift per block.' },
  { title: 'LPG', text: 'Gas supply from a centralised gas bank to every flat with gas meter.' },
  { title: 'Sustainability', text: 'Garbage room & chute for waste disposal. Rainwater harvesting through recharge wells. LED lighting in setback, landscape, staircase and corridor areas.' },
  { title: 'Fire & Safety', text: 'Fire hydrant and sprinkler system on all floors and basements. Fire alarm and public address system on all floors and parking areas, with control panel at main security.' },
  { title: 'Security', text: 'Round-the-clock security with intercom from security to all flats and between flats. Panic button and intercom in lifts connected to the security room.' },
]

export const locationAdvantages = [
  { place: 'Aparna Deccan Town', time: '1 min' },
  { place: 'Aparna Mall', time: '1 min' },
  { place: 'Wipro Campus', time: '1 min' },
  { place: 'International Schools', time: '2 mins' },
  { place: 'Wipro Circle', time: '8 mins' },
  { place: 'Neopolis', time: '10 mins' },
  { place: 'Rajiv Gandhi International Airport', time: '30 mins' },
]

export const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN')
