import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wind, Factory, Wrench, HardHat, Mountain, Zap } from 'lucide-react';
import { Industry } from '../types';

interface IndustryCardProps {
  industry: Industry;
}

const getIndustryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Wind':
      return <Wind className="w-5 h-5 text-[#F28C28]" />;
    case 'Factory':
      return <Factory className="w-5 h-5 text-[#F28C28]" />;
    case 'Wrench':
      return <Wrench className="w-5 h-5 text-[#F28C28]" />;
    case 'HardHat':
      return <HardHat className="w-5 h-5 text-[#F28C28]" />;
    case 'Mountain':
      return <Mountain className="w-5 h-5 text-[#F28C28]" />;
    case 'Zap':
      return <Zap className="w-5 h-5 text-[#F28C28]" />;
    default:
      return <Factory className="w-5 h-5 text-[#F28C28]" />;
  }
};

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-lg border border-slate-200 p-6 transition-all duration-200 ease-out hover:shadow-lg hover:border-slate-300 hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center transition-all duration-200 group-hover:bg-[#0B1F33]/5 group-hover:scale-105">
            {getIndustryIcon(industry.iconName)}
          </div>
          <span className="text-[11px] font-mono text-[#667085] uppercase tracking-wider">
            Industrial
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#0B1F33] group-hover:text-[#123B5D] transition-colors">
          <Link to={`/industries/${industry.slug}`} className="focus:outline-none">
            {industry.name}
          </Link>
        </h3>

        <p className="mt-2.5 text-xs sm:text-sm text-[#17212B]/80 leading-relaxed">
          {industry.shortDescription}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/industries/${industry.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] hover:text-[#F28C28] transition-colors group/link"
        >
          <span>Explore Industry</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
        
        <span className="text-[11px] text-[#667085] font-mono">
          {industry.relevantProductSlugs.length} Products
        </span>
      </div>
    </div>
  );
};
