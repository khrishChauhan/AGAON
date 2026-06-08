import { Project, TechMethodology, Metric, TeamMember } from './types';

export const METRICS: Metric[] = [
  {
    id: '1',
    value: '₹8,500+ Cr',
    label: 'Asset Portfolio Value',
    sublabel: 'Active high-value contracts under meticulous delivery'
  },
  {
    id: '2',
    value: '18.2M',
    label: 'Sq. Ft. Commissioned',
    sublabel: 'Premium commercial, residential, and industrial space'
  },
  {
    id: '3',
    value: '< 1.5mm',
    label: 'Engineering Tolerance',
    sublabel: 'Ultra-precise robotic site calibration and BIM alignment'
  },
  {
    id: '4',
    value: '0.00%',
    label: 'Critical Incident Rate',
    sublabel: 'Setting the absolute industry benchmark for site safety'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'horizon-tower',
    name: 'The Horizon Tower',
    category: 'Commercial',
    description: 'A magnificent 280-meter sky-scraping commercial headquarters in NCR featuring a dramatic twisted aerodynamic envelope and double-skin active breathing glass facade.',
    longDescription: 'The Horizon Tower represents a monument to corporate ambition. Formed from a dual-helical steel exoskeleton and core concrete active structural column, it rises 68 storeys above the NCR skyline. Engineered to resist severe seismic activity and wind-shear, the tower integrated state-of-the-art tuned mass dampers near its crown. Agaon implemented Level 5D Building Information Modeling (BIM) to coordinate over 120,000 architectural elements simultaneously, ensuring a flawless zero-collision installation pipeline.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    location: 'NCR Financial District, India',
    size: '1,450,000 Sq. Ft.',
    value: '₹1,240 Cr',
    client: 'Apex Global Holdings',
    completionYear: '2025',
    safetyRating: 'LEED Platinum Certified & Gold Star Safety',
    engineeringHighlights: [
      '680-metric ton tuned mass damper installed at level 64 to negate wind sway by up to 48%',
      'Active double-skin glass curtain wall utilizing automated thermal vents to slash HVAC consumption by 32%',
      'Ultra-high-strength self-compacting concrete (M80 grade) poured continuously over 72 hours for the main raft foundation'
    ],
    specs: [
      { label: 'Structural Type', value: 'Steel-Concrete Composite Exoskeleton' },
      { label: 'Total Storeys', value: '68 Floors + 4 Sub-basements' },
      { label: 'Facade Glazing', value: 'Low-E Acoustic Argon Double-Glazed Unit' },
      { label: 'Concrete Volume', value: '84,000 cubic meters' },
      { label: 'Reinforcement Steel', value: '18,500 Metric Tons' }
    ]
  },
  {
    id: 'aura-coastal',
    name: 'Aura Coastal Preserve',
    category: 'Residential',
    description: 'A private residential enclave of 12 bespoke architectural estates carved directly into the basalt cliffs of Alibaug, featuring striking cantilevered structures.',
    longDescription: 'An acoustic and visual masterpiece of luxury architecture, Aura Coastal Preserve seamlessly merges with the untamed coastal profile. Built with raw, unpainted post-stressed concrete structures and fully exposed architectural framing, each villa floats effortlessly over private seawater tier pools. The primary challenge was the marine environment. Agaon formulated and utilized specialized volcanic-ash marine-grade concrete with custom corrosion-resistant epoxy coated steel reinforcement to protect the long-term structural integrity against high humidity and salt atmospheres.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    location: 'Coastal Alibaug, Maharashtra',
    size: '180,000 Sq. Ft. (Combined)',
    value: '₹380 Cr',
    client: 'Aura Luxury Collectives',
    completionYear: '2024',
    safetyRating: 'Zero Carbon Footprint Concrete & IGBC Platinum',
    engineeringHighlights: [
      '14-meter column-free structural cantilevered living pavilions suspended gracefully over rocky marine cliffs',
      'Proprietary hydrophobic concrete additive formulation ensuring complete resistance against sea-spray corrosion',
      'Fully off-grid integration featuring high-density solar glass shingles and structural subterranean greywater recycling cells'
    ],
    specs: [
      { label: 'Structural Type', value: 'Post-Tensioned Monolithic Concrete' },
      { label: 'Aggregate Material', value: 'Recycled Ocean-Glass & Basalt Fines' },
      { label: 'Glazing System', value: 'Hurricane-Resistant 16mm Laminated Structural Glass' },
      { label: 'Water Management', value: 'Submerged Reverse-Osmosis Treatment Vault' },
      { label: 'Smart Integration', value: 'KNX Domotic Automation with Centric Hub' }
    ]
  },
  {
    id: 'cyberflow-nexus',
    name: 'Cyberflow Nexus Campus',
    category: 'Industrial',
    description: 'A massive 40-acre high-performance tech hub and server campus in Bangalore with specialized structural thermal dynamics and hyper-safe layouts.',
    longDescription: 'Specially commissioned to house critical global server grids and state-of-the-art research laboratories, Cyberflow Nexus represents the pinnacle of technology facility engineering. Featuring deep subterranean massive equipment halls, the buildings are structured to mitigate all external ambient vibrations. Specialized isolated inertia-block raft slabs were poured with rubberised polymer membranes. Structural systems integrate heavy steel truss elements with clear spans up to 48 meters, allowing endless server configurations.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    location: 'Whitefield Silicon Corridor, Bangalore',
    size: '2,100,000 Sq. Ft.',
    value: '₹980 Cr',
    client: 'Nexus Cloud Infrastructures',
    completionYear: '2025',
    safetyRating: 'Uptime Institute Tier IV Structural Standard',
    engineeringHighlights: [
      'Inertia-isolated foundation floors that fully decouple micro-vibrations down to less than 0.01g',
      'Dual multi-storey heavy load-bearing structural floors capable of carrying 2,500 kg per square meter',
      'Passive geothermal direct-conduction basement tubes to assist cooling and deliver steady air temp'
    ],
    specs: [
      { label: 'Structural Load Limit', value: '25 kN/Sq. Meter' },
      { label: 'Span Castings', value: '48m Clear Heavy Steel Trusses' },
      { label: 'Seismic Dampers', value: 'Lead Rubber Bearing Base Isolators' },
      { label: 'Acoustic Barrier', value: 'Sound-absorption cladding with rating STC 65' },
      { label: 'Redundant Power Vault', value: 'Reinforced 450mm shear walls protection' }
    ]
  },
  {
    id: 'saraswati-span',
    name: 'Saraswati Estuary Bridge',
    category: 'Infrastructure',
    description: 'An architectural 1.2-kilometer pre-cast pre-stressed express bridge over complex estuarine terrains, incorporating active sensor diagnostic networks.',
    longDescription: 'Navigating highly unstable estuarine mud flats and violent tidal ranges, the Saraswati Estuary Bridge is a masterpiece of modern civil infrastructure. Over 320 pre-cast segmental girders were manufactured off-site in controlled conditions and launched surgically using a massive specialized overhead launching gantry. Each pier is integrated with localized fiber-optic strain sensory nodes, delivering real-time concrete stress, micro-fissure, and deflection analytics directly to the state traffic monitoring system.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80',
    location: 'Coastal Highway Expansion, Goa/Maharashtra',
    size: '1.2 Kilometer Linear Span',
    value: '₹640 Cr',
    client: 'National Highways Development Authority',
    completionYear: '2025',
    safetyRating: 'Premium Infrastructure Durability Index (120-year lifspan)',
    engineeringHighlights: [
      'Pre-stressed segment launching utilizing precision GPS-guided heavy transporters to sub-millimeter level',
      'Self-healing concrete mix infused with dynamic micro-crystalline admixtures that automatically seal fine cracks',
      'Active automated cathodic protection network installed on pile caps to combat estuarine chemical aggression'
    ],
    specs: [
      { label: 'Bridge Type', value: 'Precast Segmental Balanced Cantilever' },
      { label: 'Foundation Type', value: 'Deep Cast-in-Situ RC Piles (up to 45m depth)' },
      { label: 'Structural Monitoring', value: 'Fiber-optic Bragg grating continuous strain sensors' },
      { label: 'Prestressing Steel', value: 'High-tensile low-relaxation tendons (1860 MPa)' },
      { label: 'Concrete Specification', value: 'M60 Silica Fume High-Performance Concrete' }
    ]
  }
];

export const METHODOLOGIES: TechMethodology[] = [
  {
    id: 'bim-5d',
    title: 'Precision 5D BIM Coordination',
    subtitle: 'Absolute certainty in timeline and structural cost.',
    shortDesc: 'We move beyond standard CAD drawing. Our integrated 5D Building Information Modeling connects architectural, structural, and financial metrics in real-time.',
    longDesc: 'By simulating every single component of the construction process in a digital twin environment before a single ounce of concrete is poured, we eradicate site surprises. Our 5D engine factors in real-time supply chain updates, heavy machinery schedules, and micro-climatic weather predictions, creating an absolute blueprint for flawless operational delivery.',
    benefits: [
      'Completely eliminates spatial clashes between HVAC, structural steel, and plumbing elements in advance',
      'Reduces change orders and field adjustments by over 94%',
      'Provides hyper-realistic sub-system walkthroughs with real thermal performance forecasting'
    ],
    techSpec: 'Autodesk BIM 360 Enterprise Sync with custom millimetric API interfaces',
    metric: { label: 'Clash Avoidance', value: '99.8%' }
  },
  {
    id: 'post-tensioning',
    title: 'Pre-stressed & Column-Free Vaulting',
    subtitle: 'Maximizing spatial flexibility and dramatic architectural spans.',
    shortDesc: 'We utilize state-of-the-art post-tensioning techniques with high-tensile steel cables inside concrete floor plates, allowing incredible column-free expanses.',
    longDesc: 'By tensioning high-strength steel strands to thousands of kilonewtons after the concrete has cured, we structurally manipulate stress distribution. This reduces concrete slab depth requirements, lightens overall structural mass by 20%, and unlocks generous custom configurations that traditional frame builders find impossible.',
    benefits: [
      'Safely increases clear floor-to-floor heights, delivering more usable volume and light',
      'Slashes overall structural weight, lessening foundation pressure and concrete volume',
      'Enables cantilever designs extending up to 15 meters without vertical bracing columns'
    ],
    techSpec: 'Low-relaxation 7-wire steel tendons tensioned to 1860 MPa',
    metric: { label: 'Span Enhancement', value: '2.5x' }
  },
  {
    id: 'e-crete',
    title: 'Carbon-Neutral E-Crete™ Matrices',
    subtitle: 'Zero-compromising sustainable structural fortitude.',
    shortDesc: 'Our proprietary concrete formulations incorporate high-volume pozzolans and active basalt micro-dust to curtail carbon footprint while achieving ultimate load capacity.',
    longDesc: 'Traditional concrete is highly carbon-intensive. Our industrial engineering lab pioneered E-Crete™, which utilizes fly ash, ground-granulated blast-furnace slag, and captured carbon particles. The resulting mix actually gains strength faster than conventional cement and offers an ultra-dense structure resistant to chemical and environmental degradation.',
    benefits: [
      'Alleviates carbon output by up to 62% compared to standard Portland Cement',
      'Increases structural resistance against acid, sulfate, and saltwater intrusion by 300%',
      'Elevates ultimate comprehensive compressive strength up to a peak rating of M90'
    ],
    techSpec: 'Integrated carbon-capture particle seeding with volcanic aggregate binders',
    metric: { label: 'CO2 Reduction', value: '62%' }
  },
  {
    id: 'robotic-diagnostics',
    title: 'Autonomous LiDAR Site Compliance',
    subtitle: 'Robotic precision for verifiable grade compliance.',
    shortDesc: 'We inspect physical worksites using autonomous robotic units fitted with sub-millimeter grade LiDAR systems, instantly comparing physical builds with digital designs.',
    longDesc: 'Every morning, our autonomous rovers map built progress down to 1mm resolution. Any minor offset, deflection in rebar, or structural misalignment is highlighted in red on our site dashboards before the next shift starts. This delivers ironclad assurance that your physical structure conforms precisely to engineering plans.',
    benefits: [
      'Finds deflections or misalignment instantly before concrete columns are fully cast',
      'Generates automated, mathematically certified as-built structural logs',
      'Minimizes manual quality auditing times, boosting job site velocity'
    ],
    techSpec: 'Autonomous rovers with Leica Geosystems robotic grade laser scanning scanners',
    metric: { label: 'Audit Accuracy', value: '1.0mm' }
  }
];

export const EXECUTIVE_TEAM: TeamMember[] = [
  {
    name: 'Ar. Vikram Aditya Singh',
    role: 'Chief Engineering Officer & Founder',
    credentials: 'B.Arch (IIT-R), M.S. Structural Engineering (MIT)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'With over 25 years of experience delivering skyscrapers and heavy infrastructure projects worldwide, Vikram oversees the strategic direction, materials engineering innovation, and absolute architectural execution of Agaon.'
  },
  {
    name: 'Dr. Evelyn Nair',
    role: 'Director of Technology & R&D',
    credentials: 'PhD in Materials Science (Stanford University)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Dr. Nair spearheads our green cement research and sustainable materials lab. Her team pioneered E-Crete™ and holds nine patents on structural concrete durability and self-healing bio-mortar.'
  },
  {
    name: 'Rajinder K. Chawla',
    role: 'Chief Client Representative & Ops Excellence',
    credentials: 'MBA (LBS), B.Tech Civil (BITS Pilani)',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Rajinder coordinates critical enterprise stakeholder communication, guaranteeing absolute budget alignment and smooth commissioning across commercial and public portfolios.'
  }
];
