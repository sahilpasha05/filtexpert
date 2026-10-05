import { Product } from '../types';
import { IMAGES } from '../assets/images';

export const products: Product[] = [
  {
    id: "air-compressor-filters",
    name: "Air Compressor Filters",
    slug: "air-compressor-filters",
    category: "Filters",
    isFeatured: true,
    shortDescription: "Filtration solutions for air compressor applications and industrial equipment.",
    description: "Filtexpert air compressor filters are engineered to protect compressed air systems from airborne particulate contaminants, dust, and particulate debris. Designed for rotary screw, reciprocating, and centrifugal air compressors, our filtration solutions ensure consistent system protection and operational efficiency.",
    image: IMAGES.productFilters,
    applications: [
      "Rotary screw air compressors",
      "Reciprocating compressor air intake systems",
      "Pneumatic air lines and workshop distribution",
      "Industrial compressed air supply stations"
    ],
    industries: [
      "Air Compressor Industry",
      "Manufacturing",
      "Heavy Machinery",
      "Construction Equipment"
    ],
    features: [
      "Industrial-grade synthetic and cellulose filter media",
      "Rigid perforated internal and external steel support frames",
      "High dust-holding capacity for continuous duty cycles",
      "Corrosion-resistant metal end caps and resilient sealing rings",
      "Custom configuration and OEM replacement interchangeability"
    ],
    specifications: [
      { label: "Product Type", value: "Air Compressor Filter" },
      { label: "Application", value: "Compressed Air Systems" },
      { label: "Material", value: "Industrial-grade filter media" },
      { label: "Media Construction", value: "Pleated synthetic / cellulose blend" },
      { label: "Use", value: "Air compressor filtration" },
      { label: "End Cap Finish", value: "Galvanized / zinc-coated steel" },
      { label: "Operating Temperature", value: "Available on request" },
      { label: "Micron Rating", value: "Available on request" },
      { label: "Flow Rate Capacity", value: "To be confirmed based on application" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "What are air compressor filters used for?",
        answer: "Air compressor filters help remove contaminants and atmospheric dust from intake air before compression, safeguarding internal airends, rotors, and downstream pneumatic equipment."
      },
      {
        question: "Can Filtexpert products be customized?",
        answer: "Product availability and customization depend on the application, equipment model, and technical dimensional requirements."
      },
      {
        question: "How do I specify the right replacement filter?",
        answer: "Provide the equipment brand, model number, existing part reference, or dimensional drawings when submitting your quote enquiry."
      }
    ],
    relatedProductSlugs: ["air-oil-separators", "oil-filters", "air-compressor-gasket-kits"]
  },
  {
    id: "oil-filters",
    name: "Oil Filters",
    slug: "oil-filters",
    category: "Filters",
    isFeatured: true,
    shortDescription: "Industrial oil filtration solutions designed for demanding operating environments.",
    description: "Filtexpert industrial oil filters provide critical lubrication protection for rotary compressors, hydraulic circuits, and heavy industrial machinery. By capturing metallic wear debris, carbon deposits, and oxidation particulates, these filters prolong lubricating oil life and prevent premature component failure.",
    image: IMAGES.productFilters,
    applications: [
      "Compressor lubrication circuits",
      "Hydraulic power packs",
      "Industrial gearboxes and reduction units",
      "Turbine and heavy bearing lubrication"
    ],
    industries: [
      "Air Compressor Industry",
      "Manufacturing",
      "Heavy Machinery",
      "Power Generation"
    ],
    features: [
      "High-efficiency micro-glass or reinforced paper media",
      "Heavy-duty spin-on housing resistant to pressure surges",
      "Integrated bypass valves calibrated for cold start protection",
      "Leak-resistant elastomeric sealing gaskets",
      "Extended service intervals under continuous industrial duty"
    ],
    specifications: [
      { label: "Product Type", value: "Industrial Oil Filter" },
      { label: "Application", value: "Lubricating oil and hydraulic circuits" },
      { label: "Material", value: "Industrial-grade filter media" },
      { label: "Housing Type", value: "Spin-on canister / cartridge replacement" },
      { label: "Bypass Valve", value: "Available on request" },
      { label: "Pressure Rating", value: "Available on request" },
      { label: "Micron Rating", value: "Available on request" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "How often should compressor oil filters be replaced?",
        answer: "Replacement intervals depend on operating hours, ambient operating conditions, and oil analysis; routine replacement is generally performed during standard 2,000 to 4,000-hour service cycles."
      },
      {
        question: "Are these filters suitable for synthetic compressor fluids?",
        answer: "Yes, our oil filter media formulations are compatible with standard mineral oils, synthetic polyalphaolefins (PAO), and ester-based lubricants."
      }
    ],
    relatedProductSlugs: ["air-compressor-filters", "air-oil-separators", "compressor-valve-kits"]
  },
  {
    id: "air-filters",
    name: "Air Filters",
    slug: "air-filters",
    category: "Filters",
    isFeatured: false,
    shortDescription: "Air filtration products for industrial machinery and equipment.",
    description: "Filtexpert general industrial air filters provide particulate intake protection for engines, ventilation systems, industrial blowers, and stationary plant machinery. Engineered with robust media pleating, these elements maintain low initial pressure drop while delivering dependable dust capture.",
    image: IMAGES.heroCompressor,
    applications: [
      "Stationary industrial engines",
      "Industrial blowers and vacuum pumps",
      "Manufacturing plant air intake ducts",
      "Machinery room ventilation and conditioning"
    ],
    industries: [
      "Manufacturing",
      "Construction Equipment",
      "Mining",
      "Power Generation"
    ],
    features: [
      "Uniform pleat spacing with glue bead stabilization",
      "Moisture-resistant synthetic and cellulose filtration elements",
      "Sturdy metal mesh protective liners",
      "Molded polyurethane or resilient rubber radial seals",
      "Long operational lifespan in harsh airborne dust conditions"
    ],
    specifications: [
      { label: "Product Type", value: "Industrial Air Filter" },
      { label: "Application", value: "Plant machinery and intake filtration" },
      { label: "Material", value: "Industrial-grade filter media" },
      { label: "Seal Construction", value: "Molded polyurethane / radial gasket" },
      { label: "Temperature Rating", value: "Available on request" },
      { label: "Dust Retention Efficiency", value: "To be confirmed based on application" },
      { label: "Dimensions", value: "Available on request" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "Can industrial air filters be cleaned and reused?",
        answer: "Certain heavy-duty elements can be gently reverse-blown with compressed air for temporary cleaning, but replacement is always recommended to ensure filtration efficiency and prevent media fatigue."
      }
    ],
    relatedProductSlugs: ["air-compressor-filters", "heavy-duty-machinery-filters", "oil-filters"]
  },
  {
    id: "air-oil-separators",
    name: "Air Oil Separators",
    slug: "air-oil-separators",
    category: "Air Treatment",
    isFeatured: true,
    shortDescription: "Air oil separation solutions for compressor applications.",
    description: "Filtexpert air oil separators are vital elements for oil-injected rotary screw and vane compressors. Using progressive multi-stage coalescing borosilicate micro-glass media, they separate lubricating oil mist from compressed air, minimizing residual oil carryover and recovering valuable compressor fluid.",
    image: IMAGES.productFilters,
    applications: [
      "Oil-injected rotary screw compressors",
      "Rotary vane compressor systems",
      "Vacuum pump exhaust coalescing",
      "High-pressure industrial air packages"
    ],
    industries: [
      "Air Compressor Industry",
      "Manufacturing",
      "Mining",
      "Heavy Machinery"
    ],
    features: [
      "Multi-stage borosilicate microfiber coalescing layers",
      "Low initial differential pressure drop for energy savings",
      "Minimal residual oil carryover under nominal operating flows",
      "Grounded conductive flanges to prevent static discharge",
      "Deep-pleated and wrap-style configurations available"
    ],
    specifications: [
      { label: "Product Type", value: "Air Oil Separator" },
      { label: "Application", value: "Compressed Air Systems" },
      { label: "Material", value: "Industrial-grade filter media & borosilicate glass" },
      { label: "Configuration", value: "Spin-on or internal drop-in cartridge" },
      { label: "Residual Oil Carryover", value: "Available on request" },
      { label: "Max Operating Temperature", value: "Available on request" },
      { label: "Pressure Differential", value: "To be confirmed based on application" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "What is the primary function of an air oil separator?",
        answer: "The separator coalesces fine aerosol oil droplets suspended in hot compressed air into liquid oil, which is then returned to the compressor sump via the scavenger line."
      },
      {
        question: "What causes premature separator failure?",
        answer: "Common factors include contaminated intake air, degraded compressor lubricant, poor scavenging line maintenance, or operating outside recommended temperatures."
      }
    ],
    relatedProductSlugs: ["air-compressor-filters", "oil-filters", "refrigerated-air-dryers"]
  },
  {
    id: "air-compressor-gasket-kits",
    name: "Air Compressor Gasket Kits",
    slug: "air-compressor-gasket-kits",
    category: "Gaskets",
    isFeatured: true,
    shortDescription: "Gasket kits for air compressor maintenance and component sealing.",
    description: "Filtexpert air compressor gasket kits provide complete sealing solutions for overhaul and preventive maintenance of rotary screw and reciprocating compressors. Manufactured with precision die-cutting and non-asbestos composite or elastomeric materials, they prevent air leaks, oil weeping, and vacuum loss.",
    image: IMAGES.productGasketsValves,
    applications: [
      "Compressor cylinder head rebuilds",
      "Valve plate and unloader overhaul",
      "Crankcase and sump cover sealing",
      "Flange and pipeline connection sealing"
    ],
    industries: [
      "Air Compressor Industry",
      "Manufacturing",
      "Heavy Machinery",
      "Construction Equipment"
    ],
    features: [
      "High thermal stability and compression recovery",
      "Oil, fuel, and refrigerant resistance",
      "Pre-cut kits tailored for specific compressor blocks",
      "Non-stick surface treatments for clean maintenance removal",
      "Precision cut for exact bolt-hole and port alignment"
    ],
    specifications: [
      { label: "Product Type", value: "Air Compressor Gasket Kit" },
      { label: "Application", value: "Compressor servicing and component sealing" },
      { label: "Material", value: "Non-asbestos composite, copper, nitrile, Viton" },
      { label: "Kit Contents", value: "Head gaskets, valve plate gaskets, o-rings, shaft seals" },
      { label: "Operating Temperature", value: "Available on request" },
      { label: "Pressure Tolerance", value: "To be confirmed based on application" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "Why should gasket kits be replaced during major servicing?",
        answer: "Gaskets take a compression set over time under thermal cycling. Reusing old gaskets frequently leads to pressure leaks, oil contamination, and improper torque distribution."
      }
    ],
    relatedProductSlugs: ["industrial-rubber-gaskets", "compressor-valve-kits", "intake-valves"]
  },
  {
    id: "intake-valves",
    name: "Intake Valves",
    slug: "intake-valves",
    category: "Valves",
    isFeatured: false,
    shortDescription: "Intake valve components for air compressor applications.",
    description: "Filtexpert intake valves (also known as inlet unloader valves) modulate air intake into rotary screw and reciprocating compressors. Designed for responsive pneumatic or electro-pneumatic actuation, they ensure smooth transition between loaded, modulated, and unloaded operational cycles.",
    image: IMAGES.productGasketsValves,
    applications: [
      "Rotary screw compressor inlet control",
      "Capacity modulation systems",
      "Blowdown and unloader control circuits",
      "Cold-start protection mechanisms"
    ],
    industries: [
      "Air Compressor Industry",
      "Manufacturing",
      "Power Generation"
    ],
    features: [
      "Robust cast aluminium or ductile iron valve bodies",
      "Wear-resistant internal pistons, seals, and springs",
      "Fast response actuation for efficient pressure regulation",
      "Integrated check valve mechanism to prevent oil backflow on shutdown",
      "Modular design for simplified field rebuild and seal kit replacement"
    ],
    specifications: [
      { label: "Product Type", value: "Intake Valve / Unloader Valve" },
      { label: "Application", value: "Compressed Air Systems" },
      { label: "Material", value: "Cast aluminium alloy / stainless components" },
      { label: "Actuation Type", value: "Pneumatic / electro-pneumatic" },
      { label: "Operating Pressure", value: "Available on request" },
      { label: "Port Size", value: "Available on request" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "What are the common symptoms of a failing intake valve?",
        answer: "Common symptoms include failure to build air pressure, inability to unload, compressor venting oil through the air filter on shutdown, or erratic pressure cycling."
      }
    ],
    relatedProductSlugs: ["compressor-valve-kits", "air-compressor-filters", "compressor-controllers"]
  },
  {
    id: "compressor-valve-kits",
    name: "Compressor Valve Kits",
    slug: "compressor-valve-kits",
    category: "Valves",
    isFeatured: false,
    shortDescription: "Valve kits for compressor servicing and maintenance applications.",
    description: "Filtexpert compressor valve kits include matched sets of minimum pressure valves, check valves, thermostatic valves, and blowdown valves. These kits provide service technicians with all essential precision internals required to restore system pressure regulation and thermal stability.",
    image: IMAGES.productGasketsValves,
    applications: [
      "Minimum pressure valve (MPV) maintenance",
      "Thermostatic mixing valve rebuilds",
      "Non-return check valve replacement",
      "Scheduled preventive maintenance overhauls"
    ],
    industries: [
      "Air Compressor Industry",
      "Manufacturing",
      "Heavy Machinery"
    ],
    features: [
      "Calibrated springs with high fatigue resistance",
      "Precision machined brass, stainless steel, and Teflon seals",
      "Complete set of replacement elastomeric o-rings and guides",
      "Maintains optimal minimum system pressure for continuous lubrication",
      "Interchangeable with leading industrial compressor platforms"
    ],
    specifications: [
      { label: "Product Type", value: "Compressor Valve Kit" },
      { label: "Application", value: "Compressor servicing and maintenance" },
      { label: "Material", value: "Brass, stainless steel, fluorocarbon seals" },
      { label: "Components Included", value: "Springs, pistons, seats, seals, gaskets" },
      { label: "Pressure Range", value: "Available on request" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "Why is the minimum pressure valve critical?",
        answer: "The minimum pressure valve maintains essential internal pressure in the separator tank during start-up, ensuring oil circulates properly to lubricate the compressor bearings."
      }
    ],
    relatedProductSlugs: ["intake-valves", "air-compressor-gasket-kits", "air-oil-separators"]
  },
  {
    id: "hose-pipe-assemblies",
    name: "Hose Pipe Assemblies",
    slug: "hose-pipe-assemblies",
    category: "Industrial Components",
    isFeatured: false,
    shortDescription: "Industrial hose pipe assemblies for compressor and equipment applications.",
    description: "Filtexpert industrial hose pipe assemblies are engineered for high-temperature compressed air transfer, oil return lines, hydraulic connections, and cooling water circuits. Built with wire-braided synthetic elastomers and crimped steel end fittings, they isolate vibration and provide leak-tight fluid conveyance.",
    image: IMAGES.industryFacility,
    applications: [
      "Compressor discharge lines",
      "Oil cooler connection hoses",
      "Flexible pneumatic plant piping loops",
      "Equipment vibration isolation"
    ],
    industries: [
      "Air Compressor Industry",
      "Manufacturing",
      "Heavy Machinery",
      "Construction Equipment"
    ],
    features: [
      "Single or double wire braid reinforcement",
      "Abrasion, weather, and ozone-resistant synthetic rubber covers",
      "Heat-resistant inner tubes compatible with synthetic lubricants",
      "Crimped carbon steel or stainless steel end fittings",
      "Tested for burst resistance and impulse longevity"
    ],
    specifications: [
      { label: "Product Type", value: "Hose Pipe Assembly" },
      { label: "Application", value: "Compressor and equipment fluid transfer" },
      { label: "Material", value: "Synthetic rubber with high-tensile steel braid" },
      { label: "Fitting Types", value: "BSP, NPT, JIC, Flange configurations" },
      { label: "Operating Temperature", value: "Available on request" },
      { label: "Working Pressure", value: "Available on request" },
      { label: "Length / Diameters", value: "Custom fabricated to specification" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "Can hose assemblies be supplied with custom end connections?",
        answer: "Yes, Filtexpert supplies custom assemblies with male/female threads, swivels, and flange terminations based on technical drawings or samples."
      }
    ],
    relatedProductSlugs: ["industrial-rubber-gaskets", "air-compressor-filters", "refrigerated-air-dryers"]
  },
  {
    id: "industrial-rubber-gaskets",
    name: "Industrial Rubber Gaskets",
    slug: "industrial-rubber-gaskets",
    category: "Gaskets",
    isFeatured: false,
    shortDescription: "Industrial rubber gasket solutions for sealing applications.",
    description: "Filtexpert industrial rubber gaskets are custom die-cut and molded for sealing critical interfaces against oil, air, water, and industrial chemical exposure. Available in NBR, EPDM, Silicone, and Viton (FKM), these gaskets ensure long-term compression set resistance in severe industrial operating environments.",
    image: IMAGES.productGasketsValves,
    applications: [
      "Pipe flange joints and duct connections",
      "Enclosure and housing sealing",
      "Air receiver inspection port covers",
      "Fluid filtration vessel seals"
    ],
    industries: [
      "Manufacturing",
      "Heavy Machinery",
      "Mining",
      "Power Generation"
    ],
    features: [
      "Precision die-cutting from premium industrial sheet elastomers",
      "Excellent resistance to ozone, aging, and thermal stress",
      "Low compression set for sustained sealing under bolt load",
      "Wide choice of hardness grades (Shore A durometer)",
      "Bespoke prototyping and batch production capabilities"
    ],
    specifications: [
      { label: "Product Type", value: "Industrial Rubber Gasket" },
      { label: "Application", value: "Industrial sealing applications" },
      { label: "Material", value: "NBR, EPDM, Neoprene, Silicone, Viton (FKM)" },
      { label: "Hardness", value: "50 to 80 Shore A (available on request)" },
      { label: "Thickness", value: "Available on request" },
      { label: "Temperature Range", value: "Available on request" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "Which elastomer is recommended for synthetic compressor oil?",
        answer: "Viton (FKM) or specially formulated fluorocarbon elastomers provide the best chemical and thermal stability for synthetic PAO and diester compressor lubricants."
      }
    ],
    relatedProductSlugs: ["air-compressor-gasket-kits", "hose-pipe-assemblies", "intake-valves"]
  },
  {
    id: "refrigerated-air-dryers",
    name: "Refrigerated Air Dryers",
    slug: "refrigerated-air-dryers",
    category: "Air Treatment",
    isFeatured: false,
    shortDescription: "Air treatment solutions for compressed air systems.",
    description: "Filtexpert refrigerated air dryers remove moisture vapor from compressed air streams, preventing condensation, pipe corrosion, and tool malfunction in downstream plant processes. Operating with eco-friendly refrigerants and high-efficiency heat exchangers, they deliver reliable dew point performance.",
    image: IMAGES.heroCompressor,
    applications: [
      "Plant compressed air moisture removal",
      "Pneumatic automated production lines",
      "Paint spraying and surface finishing facilities",
      "Packaging and pharmaceutical air preparation"
    ],
    industries: [
      "Air Compressor Industry",
      "Manufacturing",
      "Construction Equipment"
    ],
    features: [
      "Compact brazed plate or tube-in-tube heat exchangers",
      "Environmentally compliant refrigerants (R134a / R410a)",
      "Electronic timed or zero-loss condensate drain valves",
      "Digital dew point temperature indicator panel",
      "Low pressure drop design to optimize electrical efficiency"
    ],
    specifications: [
      { label: "Product Type", value: "Refrigerated Air Dryer" },
      { label: "Application", value: "Compressed Air Systems" },
      { label: "Pressure Dew Point", value: "Available on request" },
      { label: "Refrigerant", value: "Eco-friendly compliant refrigerant" },
      { label: "Inlet Temperature", value: "Available on request" },
      { label: "Operating Pressure", value: "Available on request" },
      { label: "Flow Capacity", value: "To be confirmed based on application" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "Why is an air dryer necessary with an air compressor?",
        answer: "Atmospheric air contains water vapor that condenses into liquid inside compressor storage tanks and pipes, causing rust, pneumatic tool wear, and product contamination unless removed by a dryer."
      }
    ],
    relatedProductSlugs: ["air-oil-separators", "air-compressor-filters", "compressor-controllers"]
  },
  {
    id: "compressor-controllers",
    name: "Compressor Controllers",
    slug: "compressor-controllers",
    category: "Compressor Components",
    isFeatured: false,
    shortDescription: "Control components for compressor and industrial equipment applications.",
    description: "Filtexpert compressor controllers provide intelligent microprocessor-based monitoring, sequencing, and fault protection for single and multi-compressor installations. Featuring crisp industrial displays and configurable setpoints, they optimize running hours and safeguard equipment against abnormal parameters.",
    image: IMAGES.industryFacility,
    applications: [
      "Rotary screw compressor control panels",
      "Multi-machine lead-lag sequencing",
      "Remote telemetry and RS485 / Modbus integration",
      "Retrofit control upgrades on legacy compressors"
    ],
    industries: [
      "Air Compressor Industry",
      "Manufacturing",
      "Power Generation"
    ],
    features: [
      "Real-time pressure, discharge temperature, and current monitoring",
      "Automatic unload/load timer and auto-stop energy conservation",
      "Comprehensive alarm logging (over-temperature, overload, maintenance due)",
      "Standard industrial communication protocol support",
      "Rugged dust-proof front panel with tactile user interface"
    ],
    specifications: [
      { label: "Product Type", value: "Compressor Controller" },
      { label: "Application", value: "Compressor and industrial equipment" },
      { label: "Display", value: "Backlit industrial LCD / LED display" },
      { label: "Control Modes", value: "Auto / Manual / Continuous / Modulated" },
      { label: "Input Power", value: "Available on request" },
      { label: "Communication Interface", value: "RS485 / Modbus (available on request)" },
      { label: "Sensor Compatibility", value: "PT100, 4-20mA pressure transducers" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "Can Filtexpert controllers replace third-party OEM units?",
        answer: "Yes, many of our controllers are configured for drop-in retrofit on popular industrial compressor models; wiring schematics and pinout details can be supplied."
      }
    ],
    relatedProductSlugs: ["intake-valves", "refrigerated-air-dryers", "air-compressor-filters"]
  },
  {
    id: "heavy-duty-machinery-filters",
    name: "Heavy-Duty Machinery Filters",
    slug: "heavy-duty-machinery-filters",
    category: "Filters",
    isFeatured: false,
    shortDescription: "Filtration products for heavy machinery and demanding industrial environments.",
    description: "Filtexpert heavy-duty machinery filters are built to withstand extreme vibration, severe dust storms, and shock loads encountered in mining, quarrying, construction, and earthmoving applications. Engineered with reinforced outer casings and high-capacity multi-density media, they protect engines and hydraulics under non-stop operations.",
    image: IMAGES.productFilters,
    applications: [
      "Excavators, wheel loaders, and bulldozers",
      "Crushers, screeners, and quarry processing equipment",
      "Mining haul trucks and drilling rigs",
      "Mobile diesel-driven air compressors"
    ],
    industries: [
      "Heavy Machinery",
      "Mining",
      "Construction Equipment",
      "Manufacturing"
    ],
    features: [
      "High-efficiency particulate arrestance under pulsating intake flows",
      "Heavy-gauge corrosion-protected structural steel cores",
      "Dual-element safety secondary cartridge configurations",
      "Vibration-resistant polyurethane seal bonding",
      "High dirt-capacity media for extended service intervals"
    ],
    specifications: [
      { label: "Product Type", value: "Heavy-Duty Machinery Filter" },
      { label: "Application", value: "Off-highway and heavy industrial equipment" },
      { label: "Material", value: "Reinforced synthetic / cellulose composite" },
      { label: "Element Type", value: "Primary air filter / hydraulic return / oil" },
      { label: "Dust Holding Capacity", value: "Available on request" },
      { label: "Efficiency Rating", value: "Available on request" },
      { label: "Compatibility", value: "Application dependent" },
      { label: "Customization", value: "Available based on requirement" }
    ],
    faqs: [
      {
        question: "How do heavy-duty filters differ from standard industrial filters?",
        answer: "Heavy-duty filters feature heavier gauge internal liners, higher mechanical burst strength, and deep-pleat multi-density media specifically designed for severe vibrational shock and high dust loading."
      }
    ],
    relatedProductSlugs: ["air-filters", "oil-filters", "hose-pipe-assemblies"]
  }
];
