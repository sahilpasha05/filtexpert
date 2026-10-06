import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { companyInfo } from '../data/company';

interface CTASectionProps {
  headline?: string;
  text?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline = "Looking for the Right Industrial Filter or Compressor Component?",
  text = "Tell us what you need and our team can help you identify the right product for your application.",
  primaryBtnText = "Request a Quote",
  secondaryBtnText = "Contact Filtexpert"
}) => {
  return (
    <section className="relative overflow-hidden bg-[#0B1F33] text-white py-14 sm:py-16 md:py-20">
      {/* Subtle industrial grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

      {/* Decorative hairline accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F28C28]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-mono font-medium tracking-widest text-[#F28C28] uppercase mb-3">
          Industrial Solutions & Technical Support
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto" style={{ textWrap: 'balance' }}>
          {headline}
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {text}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            to="/request-a-quote"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#F28C28] rounded-md hover:bg-[#E07D1C] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F28C28] whitespace-nowrap"
          >
            <span>{primaryBtnText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#123B5D] border border-slate-700 rounded-md hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4 text-slate-300" />
            <span>{secondaryBtnText}</span>
          </Link>
        </div>

        {/* Small trust point */}
        <p className="mt-6 text-xs text-slate-400 font-mono">
          Direct Telephone Support: <span className="text-white font-semibold">{companyInfo.phone}</span> · Ahmedabad, Gujarat, India
        </p>
      </div>
    </section>
  );
};
