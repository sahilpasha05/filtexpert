import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, FileText, Microscope, Ruler, FileSearch, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';

export const Quality: React.FC = () => {
  return (
    <>
      <SEO
        title="Quality & Engineering Focus | Filtexpert"
        description="Filtexpert's engineering quality assurance, inspection procedures, material specifications, and product consistency protocols for industrial components."
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Hero */}
        <section className="bg-[#0B1F33] text-white py-12 sm:py-16 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Quality' }
              ]}
            />

            <div className="mt-4 max-w-3xl space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                Quality Assurance & Engineering Focus
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Quality & Inspection Standards
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Reliable industrial components require consistent materials, dimensions, and application-focused engineering. Filtexpert presents every component with a focus on durability, dimensional accuracy, and operational reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Main Quality Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
          {/* Quality Philosophy */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-2xs">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F33] mb-4">
              Quality Philosophy
            </h2>
            <p className="text-sm sm:text-base text-[#17212B]/85 leading-relaxed">
              Industrial air compressors, hydraulic packs, and heavy processing machinery operate in unforgiving conditions. A compromised filter element or poorly dimensioned gasket can induce severe equipment wear, loss of pneumatic pressure, or costly oil carryover.
            </p>
            <p className="mt-3 text-sm text-[#667085] leading-relaxed">
              Our quality approach focuses on eliminating variables: utilizing premium certified filter media blends, precision stamping for gasket bolt patterns, and rigorous dimensional inspection prior to packaging and dispatch.
            </p>
          </section>

          {/* 4 Pillars: Materials, Consistency, Inspection, Testing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-[#123B5D]">
                <Microscope className="w-5 h-5 text-[#F28C28]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F33]">Material Focus</h3>
              <p className="text-xs sm:text-sm text-[#17212B]/80 leading-relaxed">
                We select filter media formulations suited specifically for target media—borosilicate microfibers for coalescing separation, high-permeability synthetic blends for intake air, and oil-resistant NBR/Viton polymers for critical block gaskets.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-[#123B5D]">
                <Ruler className="w-5 h-5 text-[#F28C28]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F33]">Product Consistency & Dimensions</h3>
              <p className="text-xs sm:text-sm text-[#17212B]/80 leading-relaxed">
                Precision tooling guarantees that outer diameters, inner cores, thread pitches, and flange profiles match OEM equipment requirements, preventing bypass leaks and installation friction.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-[#123B5D]">
                <FileSearch className="w-5 h-5 text-[#F28C28]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F33]">Batch Inspection</h3>
              <p className="text-xs sm:text-sm text-[#17212B]/80 leading-relaxed">
                Filter pleat spacing, adhesive bonding integrity between end-caps and media, and conductive earthing flanges on air-oil separators undergo 100% visual and physical verification before packing.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-[#123B5D]">
                <ShieldCheck className="w-5 h-5 text-[#F28C28]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F33]">Mechanical & Thermal Testing</h3>
              <p className="text-xs sm:text-sm text-[#17212B]/80 leading-relaxed">
                Components are validated against pressure differential thresholds, burst resistance, and temperature degradation under typical oil mist immersion.
              </p>
            </div>
          </div>

          {/* Certifications & Documentation Placeholder (strictly placeholder per user instructions) */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                Formal Compliance
              </span>
              <h3 className="text-xl font-bold text-[#0B1F33] mt-1">
                Certifications & Documentation
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] mt-1">
                Formal compliance records and technical documentation available for B2B procurement verification.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-dashed border-slate-300 bg-slate-50/60">
                <FileText className="w-5 h-5 text-[#123B5D] mb-2" />
                <h4 className="text-xs font-bold text-[#0B1F33]">Material Test Reports (MTR)</h4>
                <p className="text-[11px] text-[#667085] mt-1">
                  Certification information: To be updated with verified documentation per batch on request.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-dashed border-slate-300 bg-slate-50/60">
                <FileText className="w-5 h-5 text-[#123B5D] mb-2" />
                <h4 className="text-xs font-bold text-[#0B1F33]">Dimensional Compliance Sheets</h4>
                <p className="text-[11px] text-[#667085] mt-1">
                  Dimensional inspection drawings provided for custom die-cut rubber gaskets and valve kits.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-dashed border-slate-300 bg-slate-50/60">
                <FileText className="w-5 h-5 text-[#123B5D] mb-2" />
                <h4 className="text-xs font-bold text-[#0B1F33]">Operating Certificate Records</h4>
                <p className="text-[11px] text-[#667085] mt-1">
                  To be updated with verified third-party documentation and laboratory test records.
                </p>
              </div>
            </div>
          </section>
        </div>

        <CTASection
          headline="Have Strict Technical Compliance Requirements?"
          text="Send us your tender specifications or engineering parameters. Our team prepares full dimensional and material verification sheets."
        />
      </div>
    </>
  );
};
