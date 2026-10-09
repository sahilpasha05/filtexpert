import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Microscope, Ruler, FileSearch, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';
import { FadeInView } from '../components/FadeInView';

export const Quality: React.FC = () => {
  return (
    <>
      <SEO
        title="Quality & Engineering Focus | Filtexpert"
        description="Filtexpert's engineering quality assurance, inspection procedures, material specifications, and product consistency protocols for industrial components."
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Hero */}
        <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#123B5D]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Quality' }
              ]}
            />

            <FadeInView className="mt-6 max-w-4xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F28C28]">
                Quality Assurance & Inspection Protocols
              </span>
              <h1 className="text-display-section font-black font-display tracking-tight text-white uppercase">
                Quality & Inspection Standards
              </h1>
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
                Reliable industrial components require consistent materials, dimensions, and application-focused engineering. Filtexpert presents every component with a focus on durability, dimensional accuracy, and operational reliability.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Main Quality Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
          {/* Quality Philosophy */}
          <FadeInView className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-4 font-display uppercase">
              Quality Philosophy
            </h2>
            <p className="text-base sm:text-lg text-[#17212B]/90 leading-relaxed">
              Industrial air compressors, hydraulic packs, and heavy processing machinery operate in unforgiving conditions. A compromised filter element or poorly dimensioned gasket can induce severe equipment wear, loss of pneumatic pressure, or costly oil carryover.
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#667085] leading-relaxed">
              Our quality approach focuses on eliminating variables: utilizing premium certified filter media blends, precision stamping for gasket bolt patterns, and rigorous dimensional inspection prior to packaging and dispatch.
            </p>
          </FadeInView>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInView delay={0.1} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F33]/5 flex items-center justify-center text-[#123B5D]">
                <Microscope className="w-6 h-6 text-[#F28C28]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] font-display">
                Material Selection & Certification
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Filter media is sourced from qualified industrial suppliers, including borosilicate micro-glass and synthetic non-wovens, tested for collapse rating and thermal resilience.
              </p>
            </FadeInView>

            <FadeInView delay={0.2} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F33]/5 flex items-center justify-center text-[#123B5D]">
                <Ruler className="w-6 h-6 text-[#F28C28]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] font-display">
                Dimensional Accuracy & Tolerance
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Thread profiles, flange thickness, gasket bolt-hole coordinates, and overall height are verified using precision verniers to assure exact fit in customer housings.
              </p>
            </FadeInView>

            <FadeInView delay={0.3} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F33]/5 flex items-center justify-center text-[#123B5D]">
                <FileSearch className="w-6 h-6 text-[#F28C28]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] font-display">
                Batch Consistency Auditing
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Production runs undergo lot-based visual, structural, and bond integrity inspections to confirm uniformity of pleating, end-cap sealing, and potting compound bonding.
              </p>
            </FadeInView>

            <FadeInView delay={0.4} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F33]/5 flex items-center justify-center text-[#123B5D]">
                <ShieldCheck className="w-6 h-6 text-[#F28C28]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] font-display">
                Pressure & Grounding Verification
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Air-oil separator elements include conductive grounding continuity checks to dissipate electrostatic charges and prevent spark hazards inside pressurized oil receivers.
              </p>
            </FadeInView>
          </div>
        </div>

        <CTASection />
      </div>
    </>
  );
};
