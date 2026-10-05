import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  SlidersHorizontal, 
  Layers, 
  Headphones, 
  FileCheck2, 
  Target, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  Cpu,
  Factory,
  Wrench,
  Cog,
  Gauge,
  Wind
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ProductCard } from '../components/ProductCard';
import { IndustryCard } from '../components/IndustryCard';
import { ArticleCard } from '../components/ArticleCard';
import { CTASection } from '../components/CTASection';
import { products } from '../data/products';
import { industries } from '../data/industries';
import { articles } from '../data/articles';
import { companyInfo } from '../data/company';
import { IMAGES } from '../assets/images';

export const Home: React.FC = () => {
  const featuredProducts = products.filter((p) => p.isFeatured);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FILTEXPERT",
    "legalName": companyInfo.legalDisplayName,
    "url": "https://filtxpert.com",
    "description": "Industrial filtration and compressor components engineered for performance and demanding applications.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shed No. 17, B/H Naroda, Fortune South, GIDC Naroda",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "382330",
      "addressCountry": "IN"
    },
    "telephone": companyInfo.phone,
    "email": companyInfo.email
  };

  return (
    <>
      <SEO
        title="Filtexpert | Industrial Filters & Compressor Components"
        description="Filtexpert provides industrial filtration and compressor components engineered for demanding applications. Air filters, oil filters, separators, intake valves, and gasket kits."
        schema={homeSchema}
      />

      <div className="flex flex-col">
        {/* SECTION 1 — HERO */}
        <section className="relative overflow-hidden bg-[#0B1F33] text-white pt-12 pb-16 sm:py-20 lg:py-24 border-b border-slate-800">
          {/* Subtle industrial grid and lines */}
          <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#123B5D]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headlines & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#F28C28] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />
                  <span>Engineering & Industrial Filtration Solutions</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
                  Industrial Filtration & Compressor Components Engineered for Performance
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  Reliable filtration, sealing and compressor components for demanding industrial applications. Designed for maximum uptime and operational protection.
                </p>

                {/* Primary & Secondary Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#F28C28] rounded-md hover:bg-[#E07D1C] transition-all shadow-sm focus:outline-none whitespace-nowrap"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/request-a-quote"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#123B5D] border border-slate-700 rounded-md hover:bg-slate-800 transition-all focus:outline-none whitespace-nowrap"
                  >
                    <span>Request a Quote</span>
                  </Link>
                </div>

                {/* Trust Points (strictly no fake statistics) */}
                <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>Industrial Applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>Technical Product Range</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>B2B Enquiry Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>Quality-Focused Solutions</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Asset */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={IMAGES.heroCompressor}
                      alt="Industrial air compressor filtration system"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                    />
                  </div>

                  {/* Measured contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Technical Overlay Caption */}
                  <div className="absolute bottom-4 inset-x-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-lg border border-slate-700 text-xs">
                    <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 mb-1">
                      <span>SYSTEM CODE: FX-COMP-IND</span>
                      <span className="text-[#F28C28]">COMPONENTS</span>
                    </div>
                    <div className="text-white font-semibold truncate">
                      Heavy-Duty Rotary Screw & Plant Filtration Systems
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — BRAND INTRODUCTION */}
        <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                  Engineered Reliability
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] tracking-tight" style={{ textWrap: 'balance' }}>
                  Industrial Filtration Solutions Built for Demanding Applications
                </h2>
                <p className="text-sm sm:text-base text-[#17212B]/85 leading-relaxed">
                  Filtexpert provides industrial filtration and compressor-related components designed for demanding equipment and industrial applications. Our catalog encompasses heavy-duty air filtration, lube oil cleaning, coalescing air-oil separation, custom elastomeric gasket kits, and precision pneumatic intake valves.
                </p>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Whether maintaining rotary screw compressors in factory utility rooms or servicing severe-duty excavators on mining sites, we support maintenance teams and procurement managers with rapid technical support and dependable parts availability.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0B1F33] rounded-md hover:bg-[#123B5D] transition-colors"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0B1F33] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                  >
                    <span>Learn About Filtexpert</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                  <img
                    src={IMAGES.productFilters}
                    alt="Industrial filtration components showcase"
                    className="w-full aspect-4/3 object-cover"
                  />
                  <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0B1F33]">High-Flow Filtration Cartridges</span>
                    <span className="text-[#667085] font-mono">Continuous Duty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — PRODUCT CATEGORIES GRID */}
        <section className="py-16 sm:py-20 bg-[#F5F7F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                  Comprehensive Catalogue
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] tracking-tight mt-1">
                  Explore Our Product Range
                </h2>
                <p className="text-sm text-[#667085] mt-1.5">
                  Filtration and compressor components for industrial applications.
                </p>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F28C28] hover:text-[#E07D1C] transition-colors self-start md:self-auto"
              >
                <span>View all 12 categories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 12 Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — FEATURED PRODUCTS SHOWCASE */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                Key Service Components
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] tracking-tight mt-1">
                Featured Product Showcase
              </h2>
              <p className="text-sm text-[#667085] mt-2">
                Critical filtration and sealing assemblies engineered for routine plant servicing and major machine overhauls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((p) => (
                <div
                  key={p.id}
                  className="rounded-lg border border-slate-200 bg-white p-5 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div>
                    <div className="aspect-4/3 rounded bg-slate-100 overflow-hidden mb-4 border border-slate-100">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-[11px] font-semibold uppercase text-[#667085] mb-1">
                      {p.category}
                    </div>
                    <h3 className="text-base font-bold text-[#0B1F33]">
                      <Link to={`/products/${p.slug}`} className="hover:text-[#123B5D]">
                        {p.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs text-[#17212B]/80 line-clamp-2">
                      {p.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/products/${p.slug}`}
                      className="text-xs font-bold text-[#0B1F33] hover:text-[#F28C28] flex items-center gap-1"
                    >
                      <span>View Product</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link
                      to={`/request-a-quote?product=${encodeURIComponent(p.name)}`}
                      className="px-2.5 py-1 text-xs font-bold text-white bg-[#0B1F33] rounded hover:bg-[#123B5D] transition-colors"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — INDUSTRIES WE SERVE */}
        <section className="py-16 sm:py-20 bg-[#F5F7F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                  Tailored Applications
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] tracking-tight mt-1">
                  Industries We Serve
                </h2>
                <p className="text-sm text-[#667085] mt-1.5">
                  Component reliability tailored for demanding industrial operational conditions.
                </p>
              </div>

              <Link
                to="/industries"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F28C28] hover:text-[#E07D1C] transition-colors"
              >
                <span>View all sectors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <IndustryCard key={ind.id} industry={ind} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — SOLUTIONS FOR INDUSTRIAL APPLICATIONS */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                Engineering Versatility
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] tracking-tight mt-1">
                Solutions for Industrial Applications
              </h2>
              <p className="text-sm sm:text-base text-[#17212B]/85 mt-2 leading-relaxed">
                Filtexpert provides modular components matched to the specific mechanical and environmental demands of heavy plant equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Air Compressors",
                  desc: "Rotary screw, reciprocating, and centrifugal systems requiring intake air cleanliness, minimal oil carryover, and responsive intake throttling.",
                  icon: <Wind className="w-5 h-5 text-[#123B5D]" />
                },
                {
                  title: "Industrial Machinery",
                  desc: "Production machinery requiring continuous lube oil filtration, hydraulic fluid protection, and high-tolerance elastomeric flange gaskets.",
                  icon: <Cog className="w-5 h-5 text-[#123B5D]" />
                },
                {
                  title: "Heavy Equipment",
                  desc: "High-vibration off-highway vehicles and earthmovers exposed to heavy airborne dust storms, requiring multi-density filter media.",
                  icon: <Wrench className="w-5 h-5 text-[#123B5D]" />
                },
                {
                  title: "Manufacturing Systems",
                  desc: "Automated pneumatic robotic cells and conveyor systems demanding dry, clean instrument air to avoid valve jamming.",
                  icon: <Factory className="w-5 h-5 text-[#123B5D]" />
                },
                {
                  title: "Compressed Air Systems",
                  desc: "Plant distribution headers, refrigerated dryers, oil coalescing units, and automated condensate management systems.",
                  icon: <Gauge className="w-5 h-5 text-[#123B5D]" />
                },
                {
                  title: "Power & Engineering",
                  desc: "High-temperature turbine lubrication, utility standby generators, and high-pressure steam/air utility plants.",
                  icon: <Cpu className="w-5 h-5 text-[#123B5D]" />
                }
              ].map((app, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xs transition-all"
                >
                  <div className="w-10 h-10 rounded-md bg-white border border-slate-200 flex items-center justify-center mb-4">
                    {app.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F33] mb-2">{app.title}</h3>
                  <p className="text-xs sm:text-sm text-[#17212B]/80 leading-relaxed">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — WHY FILTEXPERT */}
        <section className="py-16 sm:py-20 bg-[#0B1F33] text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                Core Competencies
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Why Filtexpert
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                Focused on delivering dependable engineering components without marketing exaggerations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Technical Product Range",
                  desc: "Comprehensive portfolio spanning filters, separators, intake valves, and gasket kits designed for cross-brand industrial equipment interchangeability.",
                  icon: <SlidersHorizontal className="w-5 h-5 text-[#F28C28]" />
                },
                {
                  title: "Industrial Applications",
                  desc: "Products selected and manufactured specifically for high-stress industrial environments rather than generic light-duty applications.",
                  icon: <Layers className="w-5 h-5 text-[#F28C28]" />
                },
                {
                  title: "Quality-Focused Solutions",
                  desc: "Rigorous attention to material formulation, pleat uniformity, sealing elastomeric recovery, and dimensional tolerances.",
                  icon: <ShieldCheck className="w-5 h-5 text-[#F28C28]" />
                },
                {
                  title: "B2B Enquiry Support",
                  desc: "Dedicated response desk providing technical datasheets, dimension verification, and formal commercial quotations within 24 business hours.",
                  icon: <Headphones className="w-5 h-5 text-[#F28C28]" />
                },
                {
                  title: "Product Documentation",
                  desc: "Structured specification parameters, material test reports, and compatibility cross-references provided for procurement compliance.",
                  icon: <FileCheck2 className="w-5 h-5 text-[#F28C28]" />
                },
                {
                  title: "Application-Focused Approach",
                  desc: "Consultative approach matching filter micron ratings and gasket elastomers directly to your working media and thermal profile.",
                  icon: <Target className="w-5 h-5 text-[#F28C28]" />
                }
              ].map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center mb-4">
                    {feat.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 — QUALITY SECTION */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                  Manufacturing Integrity
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] tracking-tight">
                  Quality & Engineering Focus
                </h2>
                <p className="text-sm sm:text-base text-[#17212B]/85 leading-relaxed">
                  Reliable industrial components require consistent materials, dimensions and application-focused engineering. Filtexpert's product range is presented with a focus on quality, reliability and industrial usability.
                </p>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Every filter element, gasket kit, and valve assembly is verified for mechanical integrity, pleat spacing, and dimensional accuracy prior to dispatch.
                </p>
                <div className="pt-2">
                  <Link
                    to="/quality"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0B1F33] rounded-md hover:bg-[#123B5D] transition-colors"
                  >
                    <span>Explore Quality Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Placeholder Certifications & Documentation Cards (strictly placeholder per Section 14) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-lg border border-dashed border-slate-300 bg-slate-50/60">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1">
                    Certifications & Documentation
                  </h3>
                  <p className="text-xs text-[#667085]">
                    Certification information: To be updated with verified documentation and formal compliance reports.
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-500">
                    <div className="p-2 rounded bg-white border border-slate-200">
                      Material Test Sheets
                    </div>
                    <div className="p-2 rounded bg-white border border-slate-200">
                      Dimensional Verification
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — ABOUT SECTION PREVIEW */}
        <section className="py-14 sm:py-18 bg-[#F5F7F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                Company Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] tracking-tight">
                About Filtexpert
              </h2>
              <p className="text-sm sm:text-base text-[#17212B]/85 leading-relaxed">
                Filtexpert focuses on industrial filtration and compressor-related components for demanding applications. Based in Ahmedabad, Gujarat, we support industrial plants, service contractors, and manufacturing operations with dependable components and engineering advice.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/about"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#0B1F33] rounded-md hover:bg-[#123B5D] transition-colors"
                >
                  About Filtexpert
                </Link>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 text-xs font-semibold text-[#0B1F33] bg-white border border-slate-200 hover:bg-slate-50 rounded-md transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10 — TECHNICAL RESOURCES */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                  Knowledge Base
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] tracking-tight mt-1">
                  Technical Resources
                </h2>
                <p className="text-sm text-[#667085] mt-1.5">
                  Engineering guides, maintenance procedures, and component selection insights.
                </p>
              </div>

              <Link
                to="/resources"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F28C28] hover:text-[#E07D1C] transition-colors"
              >
                <span>View all articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11 — CONTACT PREVIEW & MAP PLACEHOLDER */}
        <section className="py-16 sm:py-20 bg-[#F5F7F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                    Ahmedabad Operations Desk
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] tracking-tight mt-1">
                    Connect with Filtexpert
                  </h2>
                  <p className="text-sm text-[#17212B]/80 mt-2">
                    Our sales engineering team is based in GIDC Naroda, providing direct technical support across Gujarat and coordinating Pan-India supply.
                  </p>
                </div>

                <div className="rounded-lg bg-white border border-slate-200 p-6 space-y-4 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                        Office & Dispatch Address
                      </h3>
                      <p className="text-xs sm:text-sm text-[#17212B]/90 mt-1">
                        {companyInfo.address}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {companyInfo.city}, {companyInfo.state}, {companyInfo.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <Phone className="w-5 h-5 text-[#F28C28] shrink-0" />
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                        Direct Phone
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#0B1F33]">
                        {companyInfo.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <Mail className="w-5 h-5 text-[#F28C28] shrink-0" />
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                        Business Email
                      </h3>
                      <p className="text-xs sm:text-sm text-[#0B1F33]">
                        {companyInfo.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <Clock className="w-5 h-5 text-[#F28C28] shrink-0" />
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                        Operating Hours
                      </h3>
                      <p className="text-xs sm:text-sm text-[#17212B]/80">
                        {companyInfo.businessHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder per Section 18 */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div className="h-full min-h-[300px] rounded-lg border border-slate-300 bg-white p-6 flex flex-col justify-between shadow-2xs">
                  <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                        Facility Location Placeholder
                      </h4>
                      <p className="text-[11px] text-[#667085]">
                        GIDC Naroda Industrial Zone, Ahmedabad 382330
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      MAP PREVIEW
                    </span>
                  </div>

                  {/* Clean Technical Map Grid Representation */}
                  <div className="my-6 flex-1 rounded bg-slate-100 border border-slate-200 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                    <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#0B1F33] text-white flex items-center justify-center shadow-md mb-2">
                      <MapPin className="w-6 h-6 text-[#F28C28]" />
                    </div>
                    <h5 className="relative z-10 text-xs font-bold text-[#0B1F33]">
                      Filtxpert Industrial Solution
                    </h5>
                    <p className="relative z-10 text-[11px] text-[#667085] max-w-xs mt-1">
                      Fortune South, GIDC Naroda Industrial Estate, Ahmedabad
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2">
                    <Link
                      to="/contact"
                      className="font-bold text-[#0B1F33] hover:text-[#F28C28] flex items-center gap-1"
                    >
                      <span>Open Full Contact Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/locations/ahmedabad"
                      className="text-xs text-[#667085] hover:underline"
                    >
                      Ahmedabad Hub Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12 — CTA SECTION */}
        <CTASection />
      </div>
    </>
  );
};
