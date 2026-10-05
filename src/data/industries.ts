import { Industry } from '../types';
import { IMAGES } from '../assets/images';

export const industries: Industry[] = [
  {
    id: "air-compressor-industry",
    name: "Air Compressor Industry",
    slug: "air-compressor-industry",
    shortDescription: "Specialized filtration, separation, and valve components for rotary screw and reciprocating compressors.",
    description: "The air compressor industry requires precision engineered components that handle continuous thermal stress, high cyclic pressures, and stringent fluid recovery demands. Filtexpert supplies air filters, spin-on and cartridge oil filters, coalescing air-oil separators, unloader valves, and complete block gasket kits to maintain peak operational reliability.",
    iconName: "Wind",
    heroImage: IMAGES.heroCompressor,
    commonRequirements: [
      "Low differential pressure drop to minimize energy consumption",
      "Reliable oil aerosol recovery with low ppm carryover",
      "Accurate unloader and intake valve actuation response",
      "High thermal stability for non-asbestos and elastomeric seals",
      "Immediate parts availability for scheduled maintenance overhauls"
    ],
    solutions: [
      "Direct-fit air filter elements tailored for industrial airends",
      "Spin-on oil filters with calibrated bypass protection valves",
      "Precision air-oil separators with conductive grounding flanges",
      "Custom die-cut gasket kits for cylinder heads and unloader blocks",
      "Compressor controller retrofits and telemetry integrations"
    ],
    relevantProductSlugs: [
      "air-compressor-filters",
      "oil-filters",
      "air-oil-separators",
      "air-compressor-gasket-kits",
      "intake-valves",
      "compressor-valve-kits",
      "refrigerated-air-dryers",
      "compressor-controllers"
    ],
    applications: [
      "Rotary screw compressor packages",
      "High-pressure reciprocating compressors",
      "Industrial compressed air utility rooms",
      "OEM assembly lines and aftermarket service fleets"
    ],
    faqs: [
      {
        question: "How does Filtexpert support compressor service contractors?",
        answer: "We supply comprehensive maintenance kits containing matching air filters, oil filters, separators, and replacement gaskets so technicians have all needed parts in a single package."
      },
      {
        question: "Are Filtexpert components suitable for continuous duty compressors?",
        answer: "Yes, our components are tested and selected for severe industrial service under 24/7 continuous duty cycles."
      }
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    slug: "manufacturing",
    shortDescription: "Filtration and fluid handling solutions across general assembly, chemical, and automated production facilities.",
    description: "Modern manufacturing facilities depend on uncontaminated compressed air, reliable hydraulic systems, and leak-free fluid loops to keep assembly lines moving. Filtexpert delivers robust filtration, intake valves, and durable gasket materials that prevent unexpected plant downtime and ensure product consistency.",
    iconName: "Factory",
    heroImage: IMAGES.industryFacility,
    commonRequirements: [
      "Consistent particulate removal in dusty factory environments",
      "Dry, oil-free compressed air for sensitive pneumatic controls",
      "Chemical resistance to industrial solvents and cleaning agents",
      "Low maintenance footprint with extended replacement intervals"
    ],
    solutions: [
      "High-efficiency plant intake air filters and blowers",
      "In-line refrigerated air dryers for moisture-free pneumatic air",
      "Industrial rubber gaskets for pipe flanges and processing tanks",
      "Reinforced flexible hose pipe assemblies for fluid distribution"
    ],
    relevantProductSlugs: [
      "air-filters",
      "oil-filters",
      "refrigerated-air-dryers",
      "industrial-rubber-gaskets",
      "hose-pipe-assemblies",
      "air-compressor-filters"
    ],
    applications: [
      "Pneumatically actuated robotic assembly lines",
      "Automotive painting and metal finishing booths",
      "Chemical processing fluid transfer loops",
      "Packaging and material handling systems"
    ],
    faqs: [
      {
        question: "Can you supply custom rubber gaskets for manufacturing piping?",
        answer: "Yes, we produce custom die-cut rubber gaskets in NBR, EPDM, Silicone, and Viton based on pipe flange specifications or engineering CAD files."
      }
    ]
  },
  {
    id: "heavy-machinery",
    name: "Heavy Machinery",
    slug: "heavy-machinery",
    shortDescription: "Rugged filtration elements and high-tensile hose assemblies built for high vibration and shock loads.",
    description: "Heavy machinery operating in demanding environments requires filtration media and fluid components that do not fatigue under extreme vibrational cycles, sudden pressure spikes, and abrasive airborne particulate matter. Filtexpert delivers ruggedized filtration and high-pressure hose assemblies engineered for endurance.",
    iconName: "Wrench",
    heroImage: IMAGES.industryFacility,
    commonRequirements: [
      "High mechanical burst resistance under pressure spikes",
      "Shock-resistant polyurethane and metal end-cap bonding",
      "Dual-stage filtration elements with secondary safety cartridges",
      "Abrasion-resistant outer sleeves for hydraulic hose assemblies"
    ],
    solutions: [
      "Heavy-duty machinery air intake filter elements",
      "High-pressure hydraulic and engine oil filters",
      "Reinforced steel-braided hose assemblies",
      "High-compression elastomeric flange gaskets"
    ],
    relevantProductSlugs: [
      "heavy-duty-machinery-filters",
      "oil-filters",
      "hose-pipe-assemblies",
      "industrial-rubber-gaskets"
    ],
    applications: [
      "Excavation and earthmoving plant equipment",
      "Hydraulic power units and mobile cranes",
      "Stationary crushing and screening plants",
      "Heavy transport and industrial tractors"
    ],
    faqs: [
      {
        question: "What makes heavy machinery filters different from standard filters?",
        answer: "Heavy machinery filters employ thicker metal perforated liners, heavy-duty polyurethane bonding, and high-tensile media pleats capable of handling continuous engine pulsations without collapsing."
      }
    ]
  },
  {
    id: "construction",
    name: "Construction Equipment",
    slug: "construction",
    shortDescription: "Dust-tolerant filtration and resilient sealing components for mobile site machinery and portable compressors.",
    description: "Construction job sites subject equipment to concrete dust, silica, fluctuating ambient temperatures, and rigorous operating schedules. Filtexpert components are engineered to resist heavy dust accumulation, prevent intake throttling, and keep site compressors and earthmoving tools working reliably.",
    iconName: "HardHat",
    heroImage: IMAGES.heroCompressor,
    commonRequirements: [
      "Extreme fine-dust handling capacity (silica, cement dust)",
      "Vibration tolerance on portable diesel air compressors",
      "Simple field serviceability without specialized tooling",
      "Corrosion resistance in outdoor weathering conditions"
    ],
    solutions: [
      "Heavy-duty radial seal air filter cartridges",
      "Diesel-driven portable air compressor filtration kits",
      "Weather-resistant hydraulic and compressed air hose assemblies",
      "Resilient sealing gaskets for outdoor equipment enclosures"
    ],
    relevantProductSlugs: [
      "air-compressor-filters",
      "heavy-duty-machinery-filters",
      "air-compressor-gasket-kits",
      "hose-pipe-assemblies"
    ],
    applications: [
      "Portable diesel-driven screw compressors",
      "Pneumatic breaker and jackhammer air lines",
      "Cement batching plants and concrete pumps",
      "Site utility generation packages"
    ],
    faqs: [
      {
        question: "Do you supply filtration kits for portable diesel compressors?",
        answer: "Yes, we support major portable compressor models with matched air intake, engine oil, and separator kits designed for construction site conditions."
      }
    ]
  },
  {
    id: "mining",
    name: "Mining",
    slug: "mining",
    shortDescription: "Severe-service filtration and heavy-gauge components engineered for underground and surface mining operations.",
    description: "In open-pit and underground mining operations, equipment downtime translates directly into substantial productivity losses. Filtexpert provides severe-duty filtration media, heavy-duty separators, and rugged sealing kits that handle abrasive mineral dust, high moisture, and 24/7 demanding duty cycles.",
    iconName: "Mountain",
    heroImage: IMAGES.industryFacility,
    commonRequirements: [
      "Maximum dirt-holding capacity under severe particulate density",
      "Non-conductive and antistatic separator assemblies to prevent sparks",
      "Rugged steel components resistant to corrosive mine atmospheres",
      "Long service intervals to minimize hazardous underground maintenance"
    ],
    solutions: [
      "Reinforced heavy-duty air filtration elements",
      "Antistatic grounded air oil separators for mining compressors",
      "Abrasion-resistant industrial rubber gaskets and seals",
      "High-pressure hose assemblies with protective outer armor"
    ],
    relevantProductSlugs: [
      "heavy-duty-machinery-filters",
      "air-oil-separators",
      "industrial-rubber-gaskets",
      "hose-pipe-assemblies"
    ],
    applications: [
      "Underground mining ventilation and pneumatic supply",
      "Surface haul trucks and blasting drill rigs",
      "Mineral processing and slurry handling systems",
      "Quarry crushing plants and conveyors"
    ],
    faqs: [
      {
        question: "Are your air oil separators grounded for hazardous mining environments?",
        answer: "Yes, our air oil separators feature conductive metal flanges and grounding pins to dissipate electrostatic charges and prevent spark hazards."
      }
    ]
  },
  {
    id: "power-generation",
    name: "Power Generation",
    slug: "power-generation",
    shortDescription: "High-integrity filtration and thermal-rated components for turbine, generator, and substation utilities.",
    description: "Power generation plants require uncompromised filtration purity and high thermal resistance for gas turbines, diesel backup gen-sets, and plant instrument air systems. Filtexpert supplies dependable intake filtration, turbine lube oil filters, and high-temperature sealing solutions for continuous utility reliability.",
    iconName: "Zap",
    heroImage: IMAGES.industryFacility,
    commonRequirements: [
      "High particulate capture efficiency for turbine protection",
      "High-temperature resistance up to critical thermal limits",
      "Zero fiber shedding from filter media into sensitive bearings",
      "Strict quality traceability and inspection documentation"
    ],
    solutions: [
      "Micro-glass lube oil filtration elements",
      "Gas turbine and gen-set intake air filters",
      "High-temperature fluorocarbon and composite gaskets",
      "Precision valve overhaul kits for utility compressor sets"
    ],
    relevantProductSlugs: [
      "oil-filters",
      "air-filters",
      "compressor-valve-kits",
      "industrial-rubber-gaskets",
      "compressor-controllers"
    ],
    applications: [
      "Gas and steam turbine lube oil purification",
      "Standby diesel generation intake and cooling systems",
      "Substation instrument air and circuit breaker pneumatic systems",
      "Cogeneration and combined-cycle plant air systems"
    ],
    faqs: [
      {
        question: "Can Filtexpert provide micro-glass lube oil filters for turbines?",
        answer: "Yes, we provide micro-glass filter elements that capture fine sub-micron metallic contaminants without degrading oil additive packages."
      }
    ]
  }
];
