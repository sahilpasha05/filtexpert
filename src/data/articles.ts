import { Article } from '../types';
import { IMAGES } from '../assets/images';

export const articles: Article[] = [
  {
    id: "how-to-choose-the-right-air-compressor-air-filter",
    slug: "how-to-choose-the-right-air-compressor-air-filter",
    title: "How to Choose the Right Air Compressor Air Filter",
    category: "Air Compressor",
    date: "March 15, 2026",
    author: "Filtexpert Engineering Team",
    readTime: "6 min read",
    excerpt: "Selecting the correct intake air filter is critical for protecting internal compressor elements, maximizing energy efficiency, and preventing premature airend wear.",
    image: IMAGES.heroCompressor,
    tableOfContents: [
      { title: "The Critical Role of Intake Air Filtration", id: "critical-role" },
      { title: "Key Selection Criteria", id: "selection-criteria" },
      { title: "Understanding Filter Media Types", id: "filter-media" },
      { title: "Environmental & Ambient Factors", id: "ambient-factors" },
      { title: "Maintenance & Total Cost of Ownership", id: "maintenance-cost" }
    ],
    contentSections: [
      {
        id: "critical-role",
        heading: "The Critical Role of Intake Air Filtration",
        paragraphs: [
          "An industrial air compressor ingests immense volumes of atmospheric air daily. Along with that air comes dust, pollen, soot, industrial particulate, and ambient moisture. Without robust intake filtration, these airborne abrasives enter the compression chamber, accelerating mechanical wear on rotary screws, bearings, and cylinder walls.",
          "Choosing the right air compressor filter is therefore not merely a routine procurement task—it is a vital maintenance decision that directly determines equipment longevity and power consumption."
        ]
      },
      {
        id: "selection-criteria",
        heading: "Key Selection Criteria",
        paragraphs: [
          "When evaluating intake air filters for industrial compressors, plant engineers must consider several primary engineering specifications:",
          "Flow Rate Capacity (CFM / m³/min): The filter must handle the maximum intake airflow without inducing excessive restriction or pressure drop across the media.",
          "Initial Differential Pressure: A high initial pressure drop forces the compressor motor to work harder, consuming additional kilowatt-hours every hour of operation.",
          "Dust-Holding Capacity: In high-particulate industrial environments, filter media must retain significant contaminant mass before reaching maximum allowable differential pressure."
        ],
        listItems: [
          "Exact OEM dimensional compatibility and sealing profile",
          "Continuous operating temperature rating",
          "Resistance to ambient oil vapor and moisture saturation",
          "Structural liner integrity under intake pulsation"
        ]
      },
      {
        id: "filter-media",
        heading: "Understanding Filter Media Types",
        paragraphs: [
          "Cellulose-based media remains standard for clean, indoor industrial utility rooms where atmospheric dust concentrations are moderate. For harsher operating environments, synthetic polyester blends and nanofiber-coated media provide superior surface loading, allowing easy pulse cleaning and higher initial capture efficiency.",
          "Composite multi-density media layers allow larger particles to be captured in outer layers while sub-micron particles are arrested in finer internal matrices, prolonging element life."
        ]
      },
      {
        id: "ambient-factors",
        heading: "Environmental & Ambient Factors",
        paragraphs: [
          "Consider the physical installation environment. Compressors operating near quarries, cement plants, or foundries require heavy-duty dual-stage filtration systems featuring pre-cyclonic separators and safety cartridges.",
          "Outdoor portable compressors additionally require weather-resistant housings and water-repellent media treatments to resist rain mist and morning humidity."
        ]
      },
      {
        id: "maintenance-cost",
        heading: "Maintenance & Total Cost of Ownership",
        paragraphs: [
          "While budget replacement filters may seem attractive initially, higher differential pressure and premature media rupture drastically increase electrical costs and risk catastrophic airend failure. Quality filters protect compressor lubricant, extend separator life, and minimize unplanned shutdowns."
        ]
      }
    ],
    relatedProductSlugs: ["air-compressor-filters", "air-oil-separators", "oil-filters"],
    relatedArticleSlugs: ["when-should-you-replace-an-air-compressor-filter", "air-filter-vs-oil-filter-key-differences"],
    faqs: [
      {
        question: "Can an undersized air filter damage an air compressor?",
        answer: "Yes. An undersized filter restricts airflow, creating high vacuum in the airend, which increases operating temperatures, drives up power draw, and can cause oil carryover."
      },
      {
        question: "How do I determine if my filter needs a pre-cleaner?",
        answer: "If your filter elements clog in less than 500 operating hours due to heavy ambient dust, installing a pre-cleaner or cyclone separator is strongly recommended."
      }
    ]
  },
  {
    id: "when-should-you-replace-an-air-compressor-filter",
    slug: "when-should-you-replace-an-air-compressor-filter",
    title: "When Should You Replace an Air Compressor Filter?",
    category: "Maintenance",
    date: "February 28, 2026",
    author: "Filtexpert Engineering Team",
    readTime: "5 min read",
    excerpt: "Learn the primary indicators, differential pressure thresholds, and maintenance intervals that indicate your compressor air filter requires replacement.",
    image: IMAGES.productFilters,
    tableOfContents: [
      { title: "Standard Operating Hour Guidelines", id: "operating-hours" },
      { title: "Differential Pressure Indicators", id: "differential-pressure" },
      { title: "Visual Inspection Signs", id: "visual-signs" },
      { title: "Risks of Delayed Replacement", id: "risks-delayed" }
    ],
    contentSections: [
      {
        id: "operating-hours",
        heading: "Standard Operating Hour Guidelines",
        paragraphs: [
          "Under standard operating conditions in clean plant environments, air compressor intake filters are typically inspected monthly and replaced every 2,000 to 4,000 operating hours, or at least annually.",
          "However, calendar time or operating hours alone should never be the sole trigger for replacement. Heavy industrial environments—such as woodworking shops, metal fabrication, and textile mills—may require filter replacement every 500 to 1,000 hours."
        ]
      },
      {
        id: "differential-pressure",
        heading: "Differential Pressure Indicators",
        paragraphs: [
          "The most accurate indicator of filter condition is the differential pressure drop across the filter element. Most modern compressor packages feature a vacuum indicator or electronic differential sensor.",
          "When the differential pressure gauge enters the red zone, or reaches approximately 50 mbar (0.72 psi) restriction, the element is saturated and must be replaced immediately."
        ]
      },
      {
        id: "visual-signs",
        heading: "Visual Inspection Signs",
        paragraphs: [
          "During routine plant inspections, examine the filter for telltale signs of degradation:",
          "Collapsed or distorted pleats indicating excessive vacuum pull",
          "Media hardening, oil contamination, or moisture damage",
          "Cracked, torn, or embrittled elastomeric radial seals"
        ]
      },
      {
        id: "risks-delayed",
        heading: "Risks of Delayed Replacement",
        paragraphs: [
          "Operating with a clogged air filter reduces air output, forces the compressor to run loaded longer, and significantly increases energy consumption. In worst-case scenarios, the media may tear under excessive vacuum, allowing unfiltered ambient abrasives directly into the compressor airend."
        ]
      }
    ],
    relatedProductSlugs: ["air-compressor-filters", "oil-filters", "air-compressor-gasket-kits"],
    relatedArticleSlugs: ["how-to-choose-the-right-air-compressor-air-filter", "industrial-filter-maintenance-guide"],
    faqs: [
      {
        question: "Is it safe to blow out an air filter with compressed air?",
        answer: "Reverse-blowing should only be done with low pressure (<2 bar) and on filters specifically rated for cleaning. It can create microscopic tears in standard cellulose media, letting dust bypass unnoticed."
      }
    ]
  },
  {
    id: "complete-guide-to-air-compressor-gasket-kits",
    slug: "complete-guide-to-air-compressor-gasket-kits",
    title: "Complete Guide to Air Compressor Gasket Kits",
    category: "Compressor Components",
    date: "February 12, 2026",
    author: "Filtexpert Technical Team",
    readTime: "7 min read",
    excerpt: "Everything maintenance engineers need to know about compressor gasket kits: materials, sealing dynamics, cylinder head overhauls, and preventing leaks.",
    image: IMAGES.productGasketsValves,
    tableOfContents: [
      { title: "Why Compressor Gaskets Matter", id: "why-gaskets-matter" },
      { title: "Common Materials Used", id: "gasket-materials" },
      { title: "What Is Included in a Typical Kit", id: "kit-contents" },
      { title: "Best Practices for Installation", id: "installation-tips" }
    ],
    contentSections: [
      {
        id: "why-gaskets-matter",
        heading: "Why Compressor Gaskets Matter",
        paragraphs: [
          "Industrial air compressors operate under intense mechanical vibration, extreme thermal expansion cycles, and continuous pressure differentials. Gaskets form the critical barriers between high-pressure chambers, cooling water channels, and oil sumps.",
          "Even a minor gasket failure can cause compressed air loss, oil contamination, or hydraulic lock in reciprocating cylinders, leading to extensive mechanical damage."
        ]
      },
      {
        id: "gasket-materials",
        heading: "Common Materials Used",
        paragraphs: [
          "Modern compressor gasket kits use advanced non-asbestos composites, elastomeric polymers, and copper or steel reinforcements engineered for specific operating interfaces:",
          "Non-Asbestos Aramid Fiber: Excellent tensile strength and heat resistance for cylinder head and valve plate gaskets.",
          "Viton / FKM: Superior resistance to high-temperature synthetic compressor lubricants and aggressive chemical environments.",
          "NBR (Nitrile): Cost-effective elastomeric sealing for oil sump covers and low-temperature flanged connections."
        ]
      },
      {
        id: "kit-contents",
        heading: "What Is Included in a Typical Kit",
        paragraphs: [
          "A comprehensive Filtexpert air compressor gasket kit typically contains all sealing elements needed for a specific service procedure:",
          "Cylinder head and valve plate gaskets with pre-punched bolt holes",
          "Crankcase end-cover and inspection plate gaskets",
          "O-rings for oil galleries, unloader pistons, and thermal valves",
          "High-temperature copper or aluminum sealing washers"
        ]
      },
      {
        id: "installation-tips",
        heading: "Best Practices for Installation",
        paragraphs: [
          "Always ensure mating surfaces are meticulously cleaned of old gasket residue, oils, and burrs. Use a calibrated torque wrench and follow the manufacturer's specified bolt tightening sequence in gradual cross-pattern stages to ensure even gasket compression."
        ]
      }
    ],
    relatedProductSlugs: ["air-compressor-gasket-kits", "industrial-rubber-gaskets", "compressor-valve-kits"],
    relatedArticleSlugs: ["industrial-filter-maintenance-guide", "what-is-an-air-oil-separator"]
  },
  {
    id: "air-filter-vs-oil-filter-key-differences",
    slug: "air-filter-vs-oil-filter-key-differences",
    title: "Air Filter vs Oil Filter: Key Differences",
    category: "Filtration",
    date: "January 24, 2026",
    author: "Filtexpert Engineering Team",
    readTime: "5 min read",
    excerpt: "Understand the differing engineering roles, media designs, pressure requirements, and maintenance profiles of compressor air filters and oil filters.",
    image: IMAGES.productFilters,
    tableOfContents: [
      { title: "Distinct Functional Roles", id: "distinct-roles" },
      { title: "Filter Media Comparison", id: "media-comparison" },
      { title: "Pressure & Structural Requirements", id: "pressure-structural" },
      { title: "Service Cycle Coordination", id: "service-coordination" }
    ],
    contentSections: [
      {
        id: "distinct-roles",
        heading: "Distinct Functional Roles",
        paragraphs: [
          "While both components perform filtration, their physical working environments differ completely. An air filter processes dry atmospheric gas at near-ambient pressure, capturing airborne solids. An oil filter works inside a pressurized liquid circuit, capturing sub-micron metallic wear particles, sludge, and carbon deposits suspended in hot compressor lubricant."
        ]
      },
      {
        id: "media-comparison",
        heading: "Filter Media Comparison",
        paragraphs: [
          "Intake air filters use high-volume cellulose or synthetic needlefelt with high air permeability to minimize intake vacuum. In contrast, oil filters use dense glass-fiber or resin-impregnated media designed to withstand viscous hydraulic drag, pressure spikes, and hot oil without collapsing."
        ]
      },
      {
        id: "pressure-structural",
        heading: "Pressure & Structural Requirements",
        paragraphs: [
          "Oil filters must incorporate heavy-duty stamped steel canister shells capable of handling working pressures of 10 to 16 bar (or higher), along with built-in spring-loaded bypass valves to protect lubricated components during cold startup."
        ]
      }
    ],
    relatedProductSlugs: ["oil-filters", "air-compressor-filters", "air-oil-separators"],
    relatedArticleSlugs: ["how-to-choose-the-right-air-compressor-air-filter", "what-is-an-air-oil-separator"]
  },
  {
    id: "what-is-an-air-oil-separator",
    slug: "what-is-an-air-oil-separator",
    title: "What Is an Air Oil Separator?",
    category: "Air Treatment",
    date: "January 10, 2026",
    author: "Filtexpert Technical Team",
    readTime: "6 min read",
    excerpt: "An in-depth explanation of coalescing separation mechanics, residual oil carryover, and how air-oil separators recover lubricant in rotary screw systems.",
    image: IMAGES.heroCompressor,
    tableOfContents: [
      { title: "Working Principle of Coalescence", id: "coalescence-principle" },
      { title: "Separator Construction & Flange Grounding", id: "separator-construction" },
      { title: "Causes of Excessive Oil Carryover", id: "oil-carryover" },
      { title: "Optimizing Separator Life", id: "optimizing-life" }
    ],
    contentSections: [
      {
        id: "coalescence-principle",
        heading: "Working Principle of Coalescence",
        paragraphs: [
          "In an oil-injected screw compressor, oil is introduced directly into the airend chamber for cooling, sealing, and lubrication. Before compressed air is discharged to plant tools, this oil mist must be removed.",
          "The air-oil separator uses microscopic borosilicate glass fibers to coalesce fine aerosol droplets (as small as 0.1 microns) into larger liquid drops, which collect at the bottom of the separator element and are scavenged back into the lubrication loop."
        ]
      },
      {
        id: "separator-construction",
        heading: "Separator Construction & Flange Grounding",
        paragraphs: [
          "Air-oil separators feature high-strength perforated steel support tubes, multi-stage microfiber wraps, and conductive metal grounding tabs on both flanges to prevent dangerous electrostatic discharge inside the pressurized separator vessel."
        ]
      }
    ],
    relatedProductSlugs: ["air-oil-separators", "air-compressor-filters", "refrigerated-air-dryers"],
    relatedArticleSlugs: ["when-should-you-replace-an-air-compressor-filter", "industrial-filter-maintenance-guide"]
  },
  {
    id: "industrial-filter-maintenance-guide",
    slug: "industrial-filter-maintenance-guide",
    title: "Industrial Filter Maintenance Guide",
    category: "Maintenance",
    date: "January 03, 2026",
    author: "Filtexpert Maintenance Engineering",
    readTime: "7 min read",
    excerpt: "A comprehensive checklist and procedural guide for scheduled inspection, cleaning, differential monitoring, and replacement of plant filtration systems.",
    image: IMAGES.industryFacility,
    tableOfContents: [
      { title: "Preventive Maintenance Schedule", id: "pm-schedule" },
      { title: "Daily & Weekly Inspection Checks", id: "daily-weekly-checks" },
      { title: "Record Keeping & Trend Analysis", id: "record-keeping" },
      { title: "Storage & Handling of Spare Filters", id: "storage-handling" }
    ],
    contentSections: [
      {
        id: "pm-schedule",
        heading: "Preventive Maintenance Schedule",
        paragraphs: [
          "Establishing a disciplined preventive maintenance program for plant filtration systems minimizes unplanned downtime, ensures consistent compressed air quality, and optimizes electrical energy efficiency.",
          "A structured schedule should combine routine visual checks, daily differential pressure logging, and scheduled filter replacements coordinated with major machine servicing intervals."
        ]
      },
      {
        id: "daily-weekly-checks",
        heading: "Daily & Weekly Inspection Checks",
        paragraphs: [
          "Check vacuum differential indicators on intake air filters daily. Drain condensate traps on refrigerated dryers and moisture separators. Check oil levels and inspect pipeline connections for any visible weeping."
        ]
      }
    ],
    relatedProductSlugs: ["air-compressor-filters", "oil-filters", "air-compressor-gasket-kits"],
    relatedArticleSlugs: ["when-should-you-replace-an-air-compressor-filter", "complete-guide-to-air-compressor-gasket-kits"]
  }
];
