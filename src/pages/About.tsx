import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, Cog, MapPin, CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';
import { companyInfo } from '../data/company';
import { IMAGES } from '../assets/images';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Filtexpert | Industrial Filtration Solutions"
        description="Learn about Filtexpert (Filtxpert Industrial Solution), an industrial filtration and compressor component specialist based in Ahmedabad, Gujarat, India."
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0B1F33] text-white py-12 sm:py-16 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'About' }
              ]}
            />

            <div className="mt-4 max-w-3xl space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                Company Overview & Philosophy
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                About Filtexpert
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Industrial filtration and compressor-related components engineered for demanding equipment and severe operating applications.
              </p>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
          {/* Main Profile */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                  Industrial Heritage & Purpose
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] tracking-tight">
                  Industrial Filtration Solutions Built for Demanding Applications
                </h2>
                <p className="text-sm sm:text-base text-[#17212B]/85 leading-relaxed">
                  Filtexpert (operated as <strong>{companyInfo.legalDisplayName}</strong>) specializes in the supply, customization, and engineering support of industrial filtration media, air-oil separation cartridges, compressor unloader valves, and elastomeric gasket solutions.
                </p>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Based in GIDC Naroda, Ahmedabad—one of Western India's prominent industrial engineering clusters—we serve as a dependable supply partner for manufacturing facilities, plant engineering contractors, equipment OEMs, and continuous-process plants across India and international markets.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <Link
                    to="/products"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#0B1F33] rounded-md hover:bg-[#123B5D] transition-colors"
                  >
                    View Product Range
                  </Link>
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 text-xs font-semibold text-[#0B1F33] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                  >
                    Contact Ahmedabad Desk
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src={IMAGES.industryFacility}
                    alt="Filtexpert industrial facility operations"
                    className="w-full aspect-4/3 object-cover"
                  />
                  <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs font-mono text-[#667085] flex items-center justify-between">
                    <span>HUB: Ahmedabad, Gujarat</span>
                    <span className="text-[#0B1F33] font-semibold">GIDC Naroda</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pillars / Engineering Approach */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-[#123B5D] mb-4">
                <Cog className="w-5 h-5 text-[#F28C28]" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F33] mb-2">Our Product Focus</h3>
              <p className="text-xs sm:text-sm text-[#17212B]/80 leading-relaxed">
                We concentrate strictly on industrial-grade filtration elements, sealing elastomers, and compressor pneumatic valves where precision dimensions and media integrity are vital to equipment survival.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-[#123B5D] mb-4">
                <Target className="w-5 h-5 text-[#F28C28]" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F33] mb-2">Engineering Approach</h3>
              <p className="text-xs sm:text-sm text-[#17212B]/80 leading-relaxed">
                Rather than offering generic off-the-shelf items, our team evaluates working temperature, pressure cycles, and media chemistry to ensure complete compatibility and minimal pressure drop.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-[#123B5D] mb-4">
                <ShieldCheck className="w-5 h-5 text-[#F28C28]" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F33] mb-2">Quality Focus</h3>
              <p className="text-xs sm:text-sm text-[#17212B]/80 leading-relaxed">
                Consistent materials, robust metal liners, and calibrated bypass valves ensure that every component delivered matches expected industrial life cycles.
              </p>
            </div>
          </section>

          {/* Regional Hub Focus */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
            <h3 className="text-lg font-bold text-[#0B1F33] mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#F28C28]" />
              <span>Operations & Distribution Infrastructure</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
              Strategically situated in Gujarat’s industrial manufacturing epicenter, allowing rapid road and express freight dispatch to manufacturing clusters throughout India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3 rounded bg-slate-50 border border-slate-100">
                <div className="text-slate-500">Corporate Entity</div>
                <div className="font-bold text-[#0B1F33] mt-0.5">{companyInfo.legalDisplayName}</div>
              </div>
              <div className="p-3 rounded bg-slate-50 border border-slate-100">
                <div className="text-slate-500">Primary Hub</div>
                <div className="font-bold text-[#0B1F33] mt-0.5">Ahmedabad, Gujarat</div>
              </div>
              <div className="p-3 rounded bg-slate-50 border border-slate-100">
                <div className="text-slate-500">Service Coverage</div>
                <div className="font-bold text-[#0B1F33] mt-0.5">Gujarat & Pan-India</div>
              </div>
              <div className="p-3 rounded bg-slate-50 border border-slate-100">
                <div className="text-slate-500">Support Desk</div>
                <div className="font-bold text-[#0B1F33] mt-0.5">{companyInfo.phone}</div>
              </div>
            </div>
          </section>
        </div>

        <CTASection
          headline="Looking for an Industrial Filtration Partner?"
          text="Connect with our sales engineering office in Ahmedabad to discuss repetitive supply agreements or immediate machine overhauls."
        />
      </div>
    </>
  );
};
