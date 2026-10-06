import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Common technical and commercial questions about our products and services."
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="text-xl font-bold text-[#0B1F33] tracking-tight">{title}</h3>}
          {subtitle && <p className="text-sm text-[#667085] mt-1">{subtitle}</p>}
        </div>
      )}

      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4 transition-colors">
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="flex w-full items-start justify-between gap-4 text-left font-semibold text-[#0B1F33] hover:text-[#123B5D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] rounded-xs"
                aria-expanded={isOpen}
              >
                <span className="text-base leading-snug">{item.question}</span>
                <span className="shrink-0 p-1 text-[#667085]">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#F28C28]' : ''}`}
                  />
                </span>
              </button>

              <div
                className={`grid transition-all duration-200 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden pr-8 text-sm leading-relaxed text-[#17212B]">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
