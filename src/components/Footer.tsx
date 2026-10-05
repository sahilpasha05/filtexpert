import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo } from '../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1F33] text-slate-300 border-t border-slate-800 text-xs sm:text-sm">
      {/* Upper Footer: 4 Main Columns + Contact Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block text-xl font-black tracking-wider text-white">
              FILTEXPERT<span className="text-[#F28C28]">.</span>
            </Link>
            
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              Industrial filtration and compressor components for demanding applications. Engineered for performance, operational longevity, and reliable B2B supply.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span className="text-white font-medium">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span>{companyInfo.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span>{companyInfo.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/products/air-compressor-filters" className="hover:text-white transition-colors">
                  Air Compressor Filters
                </Link>
              </li>
              <li>
                <Link to="/products/oil-filters" className="hover:text-white transition-colors">
                  Oil Filters
                </Link>
              </li>
              <li>
                <Link to="/products/air-filters" className="hover:text-white transition-colors">
                  Air Filters
                </Link>
              </li>
              <li>
                <Link to="/products/air-oil-separators" className="hover:text-white transition-colors">
                  Air Oil Separators
                </Link>
              </li>
              <li>
                <Link to="/products/air-compressor-gasket-kits" className="hover:text-white transition-colors">
                  Gasket Kits
                </Link>
              </li>
              <li>
                <Link to="/products/intake-valves" className="hover:text-white transition-colors">
                  Intake Valves
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/products" className="text-[#F28C28] hover:underline font-semibold">
                  + All 12 Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/industries/air-compressor-industry" className="hover:text-white transition-colors">
                  Air Compressors
                </Link>
              </li>
              <li>
                <Link to="/industries/manufacturing" className="hover:text-white transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/industries/heavy-machinery" className="hover:text-white transition-colors">
                  Heavy Machinery
                </Link>
              </li>
              <li>
                <Link to="/industries/construction" className="hover:text-white transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/industries/mining" className="hover:text-white transition-colors">
                  Mining
                </Link>
              </li>
              <li>
                <Link to="/industries/power-generation" className="hover:text-white transition-colors">
                  Power Generation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Filtexpert
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-white transition-colors">
                  Quality & Inspection
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Technical Resources
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors">
                  Locations & Hubs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/request-a-quote"
                  className="inline-block px-3 py-1.5 text-xs font-bold text-white bg-[#F28C28] hover:bg-[#E07D1C] rounded transition-colors"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-slate-800/80 bg-[#081726] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Filtexpert. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Supply
            </Link>
            <Link to="/sitemap" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>

          {/* Social Icons Placeholder */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
