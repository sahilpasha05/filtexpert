import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  SlidersHorizontal, 
  Layers, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2,
  Cpu,
  Factory,
  Wrench,
  Cog,
  Gauge,
  Wind,
  HardHat,
  Mountain,
  Zap,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { ProductCard } from '../components/ProductCard';
import { IndustryCard } from '../components/IndustryCard';
import { ArticleCard } from '../components/ArticleCard';
import { CTASection } from '../components/CTASection';
import { TextReveal } from '../components/TextReveal';
import { FadeInView } from '../components/FadeInView';
import { ImageReveal } from '../components/ImageReveal';
import { products } from '../data/products';
import { industries } from '../data/industries';
import { articles } from '../data/articles';
import { companyInfo } from '../data/company';
import { IMAGES } from '../assets/images';

export const Home: React.FC = () => {
  const [activeSpotlightSlug, setActiveSpotlightSlug] = useState('air-compressor-filters');

  const spotlightProducts = products.filter((p) => 
    ['air-compressor-filters', 'air-oil-separators', 'oil-filters', 'air-compressor-gasket-kits', 'intake-valves'].includes(p.slug)
  );

  const activeSpotlight = spotlightProducts.find((p) => p.slug === activeSpotlightSlug) || spotlightProducts[0];

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
        title="Filtexpert | Industrial Filtration & Compressor Components"
        description="Filtexpert provides industrial filtration and compressor components engineered for demanding applications. Air filters, oil filters, separators, intake valves, and gasket kits."
        schema={homeSchema}
      />

      <div className="flex flex-col bg-[#F5F7F9]">
        {/* ============================================================ */}
        {/* SECTION 1 — CINEMATIC OVERSIZED HERO                         */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-[#0B1F33] text-white min-h-[94vh] flex items-center pt-8 pb-16 sm:py-24 lg:py-28 border-b border-slate-800">
          {/* Subtle industrial background grid & radial glow effects */}
          <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />
          <div className="absolute -top-32 right-1/4 w-[650px] h-[650px] bg-[#123B5D]/45 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F28C28]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1F33] to-transparent pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Oversized Typography & CTAs */}
              <div className="lg:col-span-7 space-y-8">
                {/* Technical status indicator */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-[#F28C28] uppercase"
                >
                  <span className="w-2 h-2 rounded-full bg-[#F28C28] animate-pulse" />
                  <span>ISO-COMPLIANT SPECIFICATION · 24-HR B2B RFQ DESK</span>
                </motion.div>

                {/* Oversized Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1 
                    className="text-display-hero font-black font-display text-white tracking-tighter uppercase"
                    style={{ textWrap: 'balance' }}
                  >
                    Engineered to keep <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">industry</span> <span className="text-[#F28C28]">moving.</span>
                  </h1>
                </motion.div>

                {/* Supporting Copy */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal"
                >
                  Filtexpert supplies heavy-duty air filtration, coalescing air-oil separators, unloader valves, and precision gasket kits engineered for rotary screw and reciprocating compressor packages across global manufacturing.
                </motion.p>

                {/* Primary & Secondary Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                >
                  <Link
                    to="/products"
                    className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-[#F28C28] hover:bg-[#E07D1C] rounded-xl transition-all duration-200 shadow-xl shadow-[#F28C28]/25 hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none whitespace-nowrap"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/request-a-quote"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-slate-900/90 border border-slate-700 hover:border-slate-500 rounded-xl hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none whitespace-nowrap"
                  >
                    <span>Request a Quote</span>
                  </Link>
                </motion.div>

                {/* Technical Trust Strip */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-300"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>OEM Interchange</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>12 Categories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>Micron Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>24h Quote SLA</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Large Cinematic Industrial Visual Showcase */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5"
              >
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                  <div className="aspect-4/3 overflow-hidden relative">
                    <img
                      src={IMAGES.heroCompressor}
                      alt="Industrial air compressor filtration system"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/25 to-transparent pointer-events-none" />
                  </div>

                  {/* Technical Overlay Caption Card */}
                  <div className="absolute bottom-5 inset-x-5 p-4 bg-slate-950/90 backdrop-blur-md rounded-xl border border-slate-800 text-xs">
                    <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 mb-1.5">
                      <span>SPEC REF: FX-IND-2026</span>
                      <span className="text-[#F28C28] font-semibold">ROTARY SCREW SPARES</span>
                    </div>
                    <div className="text-white font-bold text-sm">
                      Heavy-Duty Filtration & Pressure Component Systems
                    </div>
                    <div className="text-slate-400 text-[11px] mt-1 font-mono">
                      GIDC Naroda Industrial Estate · Ahmedabad Works
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2 — BRAND INTRODUCTION & CAPABILITIES STATS         */}
        {/* ============================================================ */}
        <section className="py-24 sm:py-32 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <FadeInView className="lg:col-span-7 space-y-6">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                  Precision Engineering · Continuous Operational Uptime
                </div>

                <h2 
                  className="text-display-section font-black font-display text-[#0B1F33] tracking-tight leading-tight uppercase"
                  style={{ textWrap: 'balance' }}
                >
                  Precision Components. Industrial Reliability.
                </h2>

                <p className="text-base sm:text-lg text-[#17212B]/90 leading-relaxed">
                  Filtexpert (operated as <strong>{companyInfo.legalDisplayName}</strong>) engineers and distributes mission-critical filtration media, air-oil separation cartridges, unloader intake valves, and tailored elastomeric gasket solutions built to survive severe duty cycles.
                </p>

                <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                  Operating directly out of GIDC Naroda, Ahmedabad—one of Western India's primary precision engineering clusters—we serve as a trusted technical supply partner for plant engineering contractors, equipment OEMs, and continuous-process manufacturing plants.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#0B1F33] rounded-xl hover:bg-[#123B5D] transition-colors shadow-md"
                  >
                    <span>Our Technical Capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/quality"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#0B1F33] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                  >
                    <span>Quality Standards & Testing</span>
                  </Link>
                </div>
              </FadeInView>

              {/* Asymmetric Split Image */}
              <FadeInView delay={0.2} className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl group">
                  <img
                    src="/images/products/flitexpert/IMG-20261009-WA0003.jpg"
                    alt="Filtexpert precision industrial filters"
                    className="w-full aspect-4/3 object-cover transition-transform duration-700 ease-out group-hover:scale-106 will-change-transform"
                  />
                  <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold block">Production & Assembly Works</span>
                      <span className="text-slate-400 text-[11px] font-mono">GIDC Naroda, Ahmedabad</span>
                    </div>
                    <span className="text-[#F28C28] font-mono font-semibold">100% INSPECTED</span>
                  </div>
                </div>
              </FadeInView>
            </div>

            {/* 4-Column Editorial Metric Strip */}
            <FadeInView delay={0.3} className="mt-20 pt-12 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl sm:text-5xl font-black font-display text-[#0B1F33] tabular-nums tracking-tight">
                  12
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#F28C28] mt-2">
                  Product Categories
                </div>
                <p className="text-xs text-[#667085] mt-1">
                  Comprehensive compressor filtration, separation & sealing coverage.
                </p>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-black font-display text-[#0B1F33] tabular-nums tracking-tight">
                  100%
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#F28C28] mt-2">
                  Dimensional Verification
                </div>
                <p className="text-xs text-[#667085] mt-1">
                  Every thread pitch, flange seal, and media pleat pre-tested for fit.
                </p>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-black font-display text-[#0B1F33] tabular-nums tracking-tight">
                  24 hrs
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#F28C28] mt-2">
                  Quotation Turnaround
                </div>
                <p className="text-xs text-[#667085] mt-1">
                  Fast commercial offers and cross-reference validation for B2B buyers.
                </p>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-black font-display text-[#0B1F33] tabular-nums tracking-tight">
                  Pan-India
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#F28C28] mt-2">
                  Logistics Network
                </div>
                <p className="text-xs text-[#667085] mt-1">
                  Rapid industrial dispatch from central logistics hubs in Gujarat.
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3 — PRODUCT CATEGORIES SHOWCASE                      */}
        {/* ============================================================ */}
        <section className="py-24 sm:py-32 bg-[#F5F7F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                  Component Portfolio
                </span>
                <h2 className="text-display-section font-black font-display text-[#0B1F33] tracking-tight mt-1 uppercase" style={{ textWrap: 'balance' }}>
                  Industrial Product Range
                </h2>
                <p className="text-base text-[#667085] max-w-2xl mt-2">
                  Engineered components designed for direct OEM interchangeability, preventive overhaul, and heavy-duty machinery protection.
                </p>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1F33] hover:text-[#F28C28] transition-colors shrink-0 group"
              >
                <span>Browse All 12 Categories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInView>

            {/* 12-Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4 — PRODUCT SPOTLIGHT (VISUALLY DOMINANT)            */}
        {/* ============================================================ */}
        <section className="py-24 sm:py-32 bg-[#0B1F33] text-white border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-30" />
          <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[#123B5D]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                Featured Core Spares
              </span>
              <h2 className="text-display-section font-black font-display text-white tracking-tight mt-1 uppercase" style={{ textWrap: 'balance' }}>
                Engineered for High-Pressure Reliability
              </h2>
              <p className="text-base text-slate-300 mt-2">
                Explore our primary mechanical filtration elements and compressor pneumatic controls selected for high continuous operating hours.
              </p>
            </FadeInView>

            {/* Spotlight Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
              {spotlightProducts.map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setActiveSpotlightSlug(p.slug)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    activeSpotlightSlug === p.slug
                      ? 'bg-[#F28C28] text-white shadow-lg shadow-[#F28C28]/25'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Spotlight Feature Card */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Product Image */}
                <div className="lg:col-span-6">
                  <div className="aspect-4/3 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 relative group">
                    <img
                      src={activeSpotlight.image}
                      alt={activeSpotlight.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-106 will-change-transform"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B1F33]/90 text-white text-[10px] font-mono px-2.5 py-1 rounded backdrop-blur-xs border border-white/10">
                      {activeSpotlight.category} · OEM REPLACEMENT
                    </div>
                  </div>
                </div>

                {/* Right: Technical Specs & Callout */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-mono text-[#F28C28] font-bold uppercase tracking-wider">
                      SPECIFICATION DOSSIER
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-display">
                      {activeSpotlight.name}
                    </h3>
                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                      {activeSpotlight.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Technical Parameters
                    </div>
                    {activeSpotlight.specifications.slice(0, 4).map((spec, idx) => (
                      <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-800/60 text-xs">
                        <span className="text-slate-400">{spec.label}</span>
                        <span className="text-white font-mono font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/request-a-quote?product=${encodeURIComponent(activeSpotlight.name)}`}
                      className="px-6 py-3.5 text-xs font-bold text-white bg-[#F28C28] hover:bg-[#E07D1C] rounded-xl transition-all shadow-md shadow-[#F28C28]/20"
                    >
                      Request Quotation for {activeSpotlight.name}
                    </Link>

                    <Link
                      to={`/products/${activeSpotlight.slug}`}
                      className="px-5 py-3.5 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                    >
                      Full Technical Specifications →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5 — INDUSTRIES SERVED                                */}
        {/* ============================================================ */}
        <section className="py-24 sm:py-32 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                  Sector Solutions
                </span>
                <h2 className="text-display-section font-black font-display text-[#0B1F33] tracking-tight mt-1 uppercase" style={{ textWrap: 'balance' }}>
                  Industries We Support
                </h2>
                <p className="text-base text-[#667085] max-w-2xl mt-2">
                  From high-vibration mining excavators to precision automotive paint lines, our components are tested against severe airborne contaminants and continuous duty cycles.
                </p>
              </div>

              <Link
                to="/industries"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1F33] hover:text-[#F28C28] transition-colors shrink-0 group"
              >
                <span>View All Industries</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInView>

            {/* 6 Industries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6 — WHY FILTEXPERT (TECHNICAL PILLARS)               */}
        {/* ============================================================ */}
        <section className="py-24 sm:py-32 bg-[#F5F7F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                B2B Operational Strengths
              </span>
              <h2 className="text-display-section font-black font-display text-[#0B1F33] tracking-tight mt-1 uppercase" style={{ textWrap: 'balance' }}>
                Why Industrial Plants Partner With Filtexpert
              </h2>
              <p className="text-base text-[#667085] mt-2">
                We bridge the gap between expensive OEM parts and unreliable generic substitutes with rigorous testing, accurate cross-referencing, and direct engineering support.
              </p>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FadeInView delay={0.1} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center">
                  <SlidersHorizontal className="w-6 h-6 text-[#F28C28]" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F33]">
                  Precision OEM Cross-Referencing
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  We cross-match model numbers, thread pitches, and sealing face dimensions for leading industrial compressors and heavy equipment platforms.
                </p>
              </FadeInView>

              <FadeInView delay={0.2} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center">
                  <Layers className="w-6 h-6 text-[#F28C28]" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F33]">
                  Multi-Stage Separation Media
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Borosilicate glass micro-fibers engineered for low differential pressure and minimal oil carryover under severe industrial load cycles.
                </p>
              </FadeInView>

              <FadeInView delay={0.3} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#F28C28]" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F33]">
                  Thermal & Pressure Integrity
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Non-asbestos and fluoroelastomer gasket materials resistant to hot synthetic compressor oils, continuous thermal cycling, and pressure spikes.
                </p>
              </FadeInView>

              <FadeInView delay={0.4} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#F28C28]" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F33]">
                  Rapid Ahmedabad Dispatch SLA
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Central inventory at GIDC Naroda ensures standard components and maintenance overhaul kits are packed and dispatched swiftly.
                </p>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 7 — QUALITY ASSURANCE & INSPECTION STANDARDS          */}
        {/* ============================================================ */}
        <section className="py-24 sm:py-32 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <FadeInView className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                  Quality Assurance Protocols
                </span>
                <h2 className="text-display-section font-black font-display text-[#0B1F33] tracking-tight leading-tight uppercase" style={{ textWrap: 'balance' }}>
                  Every Micron Verified. Every Seal Pressure-Tested.
                </h2>
                <p className="text-base text-[#17212B]/90 leading-relaxed">
                  Component failure in industrial compressed air systems leads to unplanned production stoppages, downstream pneumatic damage, and catastrophic rotor seizure. Filtexpert adheres to strict inspection gates.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sm text-[#0B1F33] block">Perforated Core & Structural Burst Strength</strong>
                      <span className="text-xs text-[#667085]">Heavy-gauge internal center-tubes tested against hydraulic pressure spikes and pulsating flows.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sm text-[#0B1F33] block">Conductive Flange Grounding</strong>
                      <span className="text-xs text-[#667085]">Conductive grounding staples on separator elements to prevent dangerous electrostatic discharge inside vessels.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sm text-[#0B1F33] block">Elastomeric Compression Set Resistance</strong>
                      <span className="text-xs text-[#667085]">NBR, EPDM, and Viton formulations tested for long-term sealing recovery without bolt loosening.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/quality"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#0B1F33] hover:bg-[#123B5D] rounded-xl transition-colors shadow-sm"
                  >
                    <span>Read Full Quality Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </FadeInView>

              <FadeInView delay={0.2} className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl group">
                  <img
                    src="/images/products/flitexpert/IMG-20261009-WA0004.jpg"
                    alt="Industrial filter media inspection"
                    className="w-full aspect-4/3 object-cover transition-transform duration-700 ease-out group-hover:scale-106 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 inset-x-4 p-4 bg-slate-950/90 backdrop-blur-md rounded-xl border border-slate-800 text-xs">
                    <div className="text-[#F28C28] font-mono text-[10px] font-bold uppercase mb-0.5">
                      INSPECTION CRITERIA · ZERO DEVIATION
                    </div>
                    <div className="text-white font-bold text-sm">
                      Pleat Geometry, End-Cap Bonding & Sealing Profiles
                    </div>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 8 — TECHNICAL RESOURCES & GUIDES                     */}
        {/* ============================================================ */}
        <section className="py-24 sm:py-32 bg-[#F5F7F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                  Engineering Knowledge
                </span>
                <h2 className="text-display-section font-black font-display text-[#0B1F33] tracking-tight mt-1 uppercase" style={{ textWrap: 'balance' }}>
                  Technical Guides & Maintenance Insights
                </h2>
                <p className="text-base text-[#667085] max-w-2xl mt-2">
                  Detailed technical articles on compressor air treatment, filtration differential indicators, and gasket maintenance procedures.
                </p>
              </div>

              <Link
                to="/resources"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1F33] hover:text-[#F28C28] transition-colors shrink-0 group"
              >
                <span>All Articles & Guides</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 9 & 10 — CTA & REGIONAL FOOTER                        */}
        {/* ============================================================ */}
        <CTASection />
      </div>
    </>
  );
};
