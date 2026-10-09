import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { companyInfo } from '../data/company';

interface CTASectionProps {
  headline?: string;
  text?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline = "Engineered for Demanding Industrial Equipment Uptime.",
  text = "Connect directly with our application engineering desk in GIDC Naroda, Ahmedabad for technical cross-referencing, custom fabrication, and priority commercial quotations.",
  primaryBtnText = "Request a Technical Quote",
  secondaryBtnText = "Speak with Engineering Desk"
}) => {
  return (
    <section className="relative overflow-hidden bg-[#0B1F33] text-white py-24 sm:py-32 border-t border-slate-800">
      {/* Background radial highlight & subtle industrial grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#123B5D]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#F28C28]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Accent hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F28C28]/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-[#F28C28] uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>24-Hour B2B Commercial SLA · Direct Naroda Dispatch</span>
          </div>

          <h2 
            className="text-display-section font-black font-display tracking-tight text-white max-w-4xl mx-auto uppercase"
            style={{ textWrap: 'balance' }}
          >
            {headline}
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {text}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/request-a-quote"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-[#F28C28] hover:bg-[#E07D1C] rounded-xl transition-all duration-200 shadow-xl shadow-[#F28C28]/25 hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none whitespace-nowrap"
            >
              <span>{primaryBtnText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:09104383713"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-slate-900/90 border border-slate-700 hover:border-slate-500 rounded-xl hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-[#F28C28]" />
              <span>{secondaryBtnText}</span>
            </a>
          </div>

          {/* Technical guarantees strip */}
          <div className="pt-8 border-t border-slate-800/80 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0" />
              <span>OEM Direct Interchange</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0" />
              <span>100% Dimensional Check</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0" />
              <span>Immediate Technical Desk</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
