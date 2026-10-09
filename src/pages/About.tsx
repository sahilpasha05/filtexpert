import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, Cog, MapPin, CheckCircle, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';
import { FadeInView } from '../components/FadeInView';
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
        <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#123B5D]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'About' }
              ]}
            />

            <FadeInView className="mt-6 max-w-4xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F28C28]">
                Company Profile & Engineering Philosophy
              </span>
              <h1 className="text-display-section font-black font-display tracking-tight text-white uppercase">
                About Filtexpert
              </h1>
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
                Industrial filtration and compressor-related components engineered for demanding equipment and severe operating applications.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
          {/* Main Profile */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <FadeInView className="lg:col-span-7 space-y-5">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
                  Industrial Heritage & Purpose
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight font-display uppercase">
                  Filtration Solutions Built for Demanding Applications
                </h2>
                <p className="text-base text-[#17212B]/90 leading-relaxed">
                  Filtexpert (operated as <strong>{companyInfo.legalDisplayName}</strong>) specializes in the supply, customization, and engineering support of industrial filtration media, air-oil separation cartridges, compressor unloader valves, and elastomeric gasket solutions.
                </p>
                <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                  Based in GIDC Naroda, Ahmedabad—one of Western India's prominent industrial engineering clusters—we serve as a dependable supply partner for manufacturing facilities, plant engineering contractors, equipment OEMs, and continuous-process plants across India and international markets.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#0B1F33] rounded-xl hover:bg-[#123B5D] transition-colors"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/request-a-quote"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-[#0B1F33] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                  >
                    <span>Request Technical RFQ</span>
                  </Link>
                </div>
              </FadeInView>

              <FadeInView delay={0.2} className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl group">
                  <img
                    src={IMAGES.industryFacility}
                    alt="Filtexpert manufacturing hub"
                    className="w-full aspect-4/3 object-cover transition-transform duration-700 ease-out group-hover:scale-106 will-change-transform"
                  />
                  <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold block">Engineering Facility</span>
                      <span className="text-slate-400 text-[11px] font-mono">GIDC Naroda, Ahmedabad</span>
                    </div>
                    <span className="text-[#F28C28] font-mono font-semibold">ISO COMPLIANT</span>
                  </div>
                </div>
              </FadeInView>
            </div>
          </section>

          {/* Operational Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInView delay={0.1} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center">
                <Target className="w-6 h-6 text-[#F28C28]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] font-display">
                Precision & Quality Focus
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Every component is dimensionally audited against OEM standards to guarantee seamless interchangeability and optimal air-end protection under pressure.
              </p>
            </FadeInView>

            <FadeInView delay={0.2} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#F28C28]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] font-display">
                Demanding Duty Cycles
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Selected for thermal integrity and multi-stage particulate retention, our media performs under high ambient heat, pulsating flow, and corrosive environments.
              </p>
            </FadeInView>

            <FadeInView delay={0.3} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center">
                <Cog className="w-6 h-6 text-[#F28C28]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] font-display">
                Direct Engineering Support
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Our application engineering desk assists plant managers in cross-referencing legacy equipment part numbers and designing custom gasket solutions.
              </p>
            </FadeInView>
          </div>
        </div>

        <CTASection />
      </div>
    </>
  );
};
