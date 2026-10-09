import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { locations } from '../data/locations';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';
import { FadeInView } from '../components/FadeInView';

export const Locations: React.FC = () => {
  return (
    <>
      <SEO
        title="Regional Operations & Distribution Hubs | Filtexpert"
        description="Filtexpert operations, distribution coverage, and local technical assistance across Ahmedabad, Gujarat industrial estates, and Pan-India manufacturing belts."
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#123B5D]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Locations' }
              ]}
            />

            <FadeInView className="mt-6 max-w-4xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F28C28]">
                Distribution & Regional Supply Hubs
              </span>
              <h1 className="text-display-section font-black font-display tracking-tight text-white uppercase">
                Regional Hubs & Supply Infrastructure
              </h1>
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
                Headquartered in GIDC Naroda, Ahmedabad, Filtexpert supplies precision filtration and compressor components throughout Gujarat and coordinates scheduled dispatches across India.
              </p>
            </FadeInView>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, idx) => (
              <FadeInView
                key={loc.slug}
                delay={idx * 0.1}
                className="bg-white rounded-2xl border border-slate-200/90 p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F28C28] px-2.5 py-1 rounded bg-orange-50 border border-orange-200/60">
                      {loc.regionType}
                    </span>
                    <MapPin className="w-5 h-5 text-[#123B5D]" />
                  </div>

                  <h2 className="text-2xl font-bold text-[#0B1F33] mb-3 font-display">
                    <Link to={`/locations/${loc.slug}`} className="hover:text-[#F28C28] transition-colors">
                      {loc.name}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
                    {loc.description}
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#F28C28] shrink-0" />
                      <span className="font-mono">{loc.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#F28C28] shrink-0" />
                      <span>{loc.email}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-[#0B1F33] hover:text-[#F28C28] transition-colors group"
                  >
                    <span>View Hub Capabilities & Stock</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>

        <CTASection />
      </div>
    </>
  );
};
