import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Industry } from '../types';

interface IndustryCardProps {
  industry: Industry;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-16/9 overflow-hidden bg-slate-900 relative">
        <img
          src={industry.heroImage || '/images/industries/industry_heavy_facility.jpg'}
          alt={industry.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 will-change-transform"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/30 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <h3 className="text-white font-bold text-lg sm:text-xl font-display">
            {industry.name}
          </h3>
          <span className="text-[10px] font-mono text-[#F28C28] bg-black/40 px-2 py-0.5 rounded border border-white/10">
            {industry.relevantProductSlugs.length} Spares
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <p className="text-xs sm:text-sm text-[#17212B]/80 leading-relaxed line-clamp-3">
          {industry.shortDescription}
        </p>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <Link
            to={`/industries/${industry.slug}`}
            className="font-bold text-[#0B1F33] group-hover:text-[#F28C28] flex items-center gap-1.5 transition-colors"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="font-mono text-slate-400 text-[11px]">Industrial Sector</span>
        </div>
      </div>
    </motion.article>
  );
};
