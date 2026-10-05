import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { IndustryCard } from '../components/IndustryCard';
import { CTASection } from '../components/CTASection';
import { industries } from '../data/industries';

export const Industries: React.FC = () => {
  return (
    <>
      <SEO
        title="Industries We Serve | Filtexpert"
        description="Filtexpert supplies heavy-duty industrial filtration and compressor components engineered for air compressors, manufacturing, heavy machinery, construction, mining, and power generation."
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0B1F33] text-white py-12 sm:py-16 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Industries' }
              ]}
            />

            <div className="mt-4 max-w-3xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                Sectors & Operating Environments
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
                Industries We Serve
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Industrial equipment operates under vastly different stresses depending on the environment. From sterile factory utility rooms to dusty open-pit mines, Filtexpert engineers filtration and sealing solutions to withstand your operational realities.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </section>

        {/* Global CTA */}
        <CTASection
          headline="Have an Industry-Specific Operating Challenge?"
          text="Our engineers analyze your operating temperature, media compatibility, and particulate loads to propose the right component specification."
        />
      </div>
    </>
  );
};
