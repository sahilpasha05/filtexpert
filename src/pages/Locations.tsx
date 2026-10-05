import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { locations } from '../data/locations';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';

export const Locations: React.FC = () => {
  return (
    <>
      <SEO
        title="Regional Operations & Distribution Hubs | Filtexpert"
        description="Filtexpert operations, distribution coverage, and local technical assistance across Ahmedabad, Gujarat industrial estates, and Pan-India manufacturing belts."
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        <section className="bg-[#0B1F33] text-white py-12 sm:py-16 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Locations' }
              ]}
            />

            <div className="mt-4 max-w-3xl space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                Distribution & Regional Supply Hubs
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Regional Hubs & Supply Infrastructure
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Headquartered in GIDC Naroda, Ahmedabad, Filtexpert supplies precision filtration and compressor components throughout Gujarat and coordinates scheduled dispatches across India.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F28C28] px-2 py-0.5 rounded bg-orange-50 border border-orange-100">
                      {loc.regionType}
                    </span>
                    <MapPin className="w-4 h-4 text-[#123B5D]" />
                  </div>

                  <h2 className="text-xl font-bold text-[#0B1F33] mb-2">
                    <Link to={`/locations/${loc.slug}`} className="hover:text-[#123B5D]">
                      {loc.name}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#17212B]/80 line-clamp-3 leading-relaxed mb-4">
                    {loc.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
                      <span>{loc.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#F28C28]" />
                      <span>{loc.email}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="text-xs font-bold text-[#0B1F33] hover:text-[#F28C28] flex items-center gap-1.5"
                  >
                    <span>View Hub Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CTASection
          headline="Looking for Local Dispatch in Gujarat or Pan-India?"
          text="Contact our Ahmedabad headquarters directly to confirm immediate inventory and delivery timeframes."
        />
      </div>
    </>
  );
};
