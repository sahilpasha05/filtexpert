import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Phone } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const location = useLocation();

  // If already on request quote or contact, hide to avoid redundancy
  const isQuotePage = location.pathname === '/request-a-quote';

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg safe-area-bottom">
      <div className="flex items-center gap-2">
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-slate-100 text-[#0B1F33] text-xs font-bold hover:bg-slate-200 transition-colors whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-[#123B5D]" />
          <span>Contact</span>
        </Link>

        <Link
          to={isQuotePage ? '/products' : '/request-a-quote'}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#F28C28] text-white text-xs font-bold hover:bg-[#E07D1C] transition-colors whitespace-nowrap shadow-xs"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{isQuotePage ? 'Catalogue' : 'Request Quote'}</span>
        </Link>
      </div>
    </div>
  );
};
