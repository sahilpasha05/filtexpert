import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, ArrowRight, ShieldCheck, Wrench, FileText } from 'lucide-react';
import { products } from '../data/products';
import { industries } from '../data/industries';
import { SearchOverlay } from './SearchOverlay';

export const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'industries' | 'resources' | null>(null);
  
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (menu: 'products' | 'industries' | 'resources') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Zone 1: Single text element brand wordmark */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-xl sm:text-2xl font-black tracking-wider text-[#0B1F33] hover:text-[#123B5D] transition-colors flex items-center gap-1.5 focus:outline-none"
              >
                <span className="font-extrabold tracking-tight">FILTEXPERT</span>
                <span className="w-2 h-2 rounded-full bg-[#F28C28] inline-block mb-1" />
              </Link>
            </div>

            {/* Zone 2: Clean primary navigation links with dropdowns */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#17212B]">
              {/* Products Mega Dropdown */}
              <div
                className="relative py-5"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/products"
                  className={`inline-flex items-center gap-1 hover:text-[#0B1F33] transition-colors py-1 ${
                    location.pathname.startsWith('/products') ? 'text-[#0B1F33] font-bold' : 'text-[#17212B]/85'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'products' ? 'rotate-180 text-[#F28C28]' : 'text-slate-400'
                    }`}
                  />
                </Link>

                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-xl shadow-xl border border-slate-200 p-6 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                          Industrial Product Catalogue
                        </h4>
                        <p className="text-[11px] text-[#667085]">
                          12 Specialized filtration and compressor component categories
                        </p>
                      </div>
                      <Link
                        to="/products"
                        className="text-xs font-bold text-[#F28C28] hover:text-[#E07D1C] flex items-center gap-1"
                      >
                        <span>View All Products</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                      {products.map((p) => (
                        <Link
                          key={p.id}
                          to={`/products/${p.slug}`}
                          className="group p-2 rounded-md hover:bg-slate-50 transition-colors block"
                        >
                          <div className="text-xs font-bold text-[#0B1F33] group-hover:text-[#F28C28] transition-colors truncate">
                            {p.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {p.shortDescription}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative py-5"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/industries"
                  className={`inline-flex items-center gap-1 hover:text-[#0B1F33] transition-colors py-1 ${
                    location.pathname.startsWith('/industries') ? 'text-[#0B1F33] font-bold' : 'text-[#17212B]/85'
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'industries' ? 'rotate-180 text-[#F28C28]' : 'text-slate-400'
                    }`}
                  />
                </Link>

                {activeDropdown === 'industries' && (
                  <div className="absolute top-full left-0 w-[420px] bg-white rounded-xl shadow-xl border border-slate-200 p-5 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="pb-3 border-b border-slate-100 mb-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                        Sectors & Industrial Applications
                      </h4>
                    </div>
                    <div className="space-y-1.5">
                      {industries.map((ind) => (
                        <Link
                          key={ind.id}
                          to={`/industries/${ind.slug}`}
                          className="group p-2.5 rounded-md hover:bg-slate-50 transition-colors flex items-center justify-between"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#0B1F33] group-hover:text-[#F28C28] transition-colors">
                              {ind.name}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {ind.shortDescription}
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#F28C28] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* About Link */}
              <Link
                to="/about"
                className={`hover:text-[#0B1F33] transition-colors py-1 ${
                  location.pathname === '/about' ? 'text-[#0B1F33] font-bold' : 'text-[#17212B]/85'
                }`}
              >
                About
              </Link>

              {/* Quality Link */}
              <Link
                to="/quality"
                className={`hover:text-[#0B1F33] transition-colors py-1 ${
                  location.pathname === '/quality' ? 'text-[#0B1F33] font-bold' : 'text-[#17212B]/85'
                }`}
              >
                Quality
              </Link>

              {/* Resources Dropdown */}
              <div
                className="relative py-5"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/resources"
                  className={`inline-flex items-center gap-1 hover:text-[#0B1F33] transition-colors py-1 ${
                    location.pathname.startsWith('/resources') ? 'text-[#0B1F33] font-bold' : 'text-[#17212B]/85'
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'resources' ? 'rotate-180 text-[#F28C28]' : 'text-slate-400'
                    }`}
                  />
                </Link>

                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 w-[280px] bg-white rounded-xl shadow-xl border border-slate-200 p-4 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="space-y-1">
                      <Link
                        to="/resources"
                        className="p-2.5 rounded-md hover:bg-slate-50 transition-colors flex items-center gap-2.5"
                      >
                        <FileText className="w-4 h-4 text-[#F28C28]" />
                        <div>
                          <div className="text-xs font-bold text-[#0B1F33]">Technical Articles & Blog</div>
                          <div className="text-[11px] text-slate-500">Guides, tips & engineering analysis</div>
                        </div>
                      </Link>
                      <Link
                        to="/quality"
                        className="p-2.5 rounded-md hover:bg-slate-50 transition-colors flex items-center gap-2.5"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#123B5D]" />
                        <div>
                          <div className="text-xs font-bold text-[#0B1F33]">Quality & Inspection</div>
                          <div className="text-[11px] text-slate-500">Testing & material specifications</div>
                        </div>
                      </Link>
                      <Link
                        to="/locations"
                        className="p-2.5 rounded-md hover:bg-slate-50 transition-colors flex items-center gap-2.5"
                      >
                        <Wrench className="w-4 h-4 text-slate-600" />
                        <div>
                          <div className="text-xs font-bold text-[#0B1F33]">Regional Hubs</div>
                          <div className="text-[11px] text-slate-500">Ahmedabad, Gujarat & Pan-India</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Link */}
              <Link
                to="/contact"
                className={`hover:text-[#0B1F33] transition-colors py-1 ${
                  location.pathname === '/contact' ? 'text-[#0B1F33] font-bold' : 'text-[#17212B]/85'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Zone 3: Search button + 1 primary action */}
            <div className="flex items-center gap-3">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 text-[#17212B] hover:text-[#0B1F33] hover:bg-slate-100 rounded-md transition-colors focus:outline-none"
                aria-label="Search website"
                title="Search products and resources"
              >
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Primary Quote Action Button */}
              <Link
                to="/request-a-quote"
                className="hidden sm:inline-flex items-center justify-center px-4.5 py-2.5 text-xs font-bold text-white bg-[#0B1F33] rounded-md hover:bg-[#123B5D] transition-colors shadow-xs whitespace-nowrap"
              >
                Request a Quote
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#0B1F33] hover:bg-slate-100 rounded-md transition-colors focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white max-h-[80vh] overflow-y-auto px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                Navigation
              </div>
              <Link
                to="/products"
                className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-md"
              >
                Products (12 Categories)
              </Link>
              <div className="pl-6 space-y-1 border-l-2 border-slate-100 my-1">
                {products.slice(0, 6).map((p) => (
                  <Link
                    key={p.id}
                    to={`/products/${p.slug}`}
                    className="block py-1 text-xs text-[#667085] hover:text-[#0B1F33]"
                  >
                    {p.name}
                  </Link>
                ))}
                <Link
                  to="/products"
                  className="block py-1 text-xs font-semibold text-[#F28C28]"
                >
                  + View all 12 categories →
                </Link>
              </div>

              <Link
                to="/industries"
                className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-md"
              >
                Industries Served
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-md"
              >
                About Filtexpert
              </Link>
              <Link
                to="/quality"
                className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-md"
              >
                Quality & Inspection
              </Link>
              <Link
                to="/resources"
                className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-md"
              >
                Technical Resources & Guides
              </Link>
              <Link
                to="/locations"
                className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-md"
              >
                Locations (Ahmedabad / Gujarat / India)
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-md"
              >
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/request-a-quote"
                className="w-full text-center py-3 text-xs font-bold text-white bg-[#F28C28] hover:bg-[#E07D1C] rounded-md transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="w-full text-center py-2.5 text-xs font-semibold text-[#0B1F33] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                Contact Filtexpert Desk
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
