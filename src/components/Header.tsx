import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Wrench,
  Sparkles,
  PhoneCall,
  SlidersHorizontal
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';
import { industries } from '../data/industries';
import { SearchOverlay } from './SearchOverlay';

export const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'industries' | 'resources' | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Track scroll position for subtle header elevation & dark/glass transitions
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <header className="sticky top-0 z-40 w-full pt-2 sm:pt-3 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
        <div 
          className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-300 rounded-xl sm:rounded-2xl border ${
            scrolled 
              ? 'bg-[#0B1F33]/92 text-white border-slate-700/80 shadow-2xl backdrop-blur-xl' 
              : 'bg-white/95 text-[#17212B] border-slate-200/90 shadow-md backdrop-blur-xl'
          } px-4 sm:px-6`}
        >
          <div className="flex items-center justify-between h-16 sm:h-17">
            {/* Zone 1: Single text element brand wordmark */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-1.5 focus:outline-none group font-display"
              >
                <span className={`transition-colors font-black tracking-tighter ${scrolled ? 'text-white group-hover:text-slate-200' : 'text-[#0B1F33] group-hover:text-[#123B5D]'}`}>
                  FILTEXPERT
                </span>
                <span className="w-2 h-2 rounded-full bg-[#F28C28] inline-block mb-1 group-hover:scale-125 transition-transform" />
              </Link>
            </div>

            {/* Zone 2: Clean primary navigation links with dropdowns */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
              {/* Products Mega Dropdown */}
              <div
                className="relative py-4"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/products"
                  className={`inline-flex items-center gap-1 transition-colors py-1 ${
                    location.pathname.startsWith('/products')
                      ? scrolled ? 'text-[#F28C28] font-bold' : 'text-[#0B1F33] font-bold'
                      : scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-[#0B1F33]'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'products' ? 'rotate-180 text-[#F28C28]' : 'text-slate-400'
                    }`}
                  />
                </Link>

                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full w-[440px] bg-white rounded-xl shadow-2xl border border-slate-200 p-5 text-[#17212B] z-50"
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085]">
                          Component Categories
                        </span>
                        <Link
                          to="/products"
                          className="text-xs font-bold text-[#F28C28] hover:underline flex items-center gap-1"
                        >
                          <span>Full Catalogue</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {products.slice(0, 8).map((p) => (
                          <Link
                            key={p.id}
                            to={`/products/${p.slug}`}
                            className="p-2 rounded-lg hover:bg-slate-50 transition-colors group/item block"
                          >
                            <span className="font-semibold text-[#0B1F33] group-hover/item:text-[#F28C28] transition-colors block truncate">
                              {p.name}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono block">
                              {p.category}
                            </span>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 -mx-5 -mb-5 p-3 rounded-b-xl flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-medium">Need custom micron or dimensions?</span>
                        <Link to="/request-a-quote" className="font-bold text-[#0B1F33] hover:text-[#F28C28]">
                          Request RFQ →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative py-4"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/industries"
                  className={`inline-flex items-center gap-1 transition-colors py-1 ${
                    location.pathname.startsWith('/industries')
                      ? scrolled ? 'text-[#F28C28] font-bold' : 'text-[#0B1F33] font-bold'
                      : scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-[#0B1F33]'
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'industries' ? 'rotate-180 text-[#F28C28]' : 'text-slate-400'
                    }`}
                  />
                </Link>

                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full w-80 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 text-[#17212B] z-50"
                    >
                      <div className="pb-2 mb-2 border-b border-slate-100">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085]">
                          Applications & Sectors
                        </span>
                      </div>
                      <div className="space-y-1 text-xs">
                        {industries.map((ind) => (
                          <Link
                            key={ind.id}
                            to={`/industries/${ind.slug}`}
                            className="block p-2 rounded-lg hover:bg-slate-50 font-medium text-[#0B1F33] hover:text-[#F28C28] transition-colors"
                          >
                            {ind.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company & Technical */}
              <Link
                to="/about"
                className={`transition-colors py-1 ${
                  location.pathname === '/about'
                    ? scrolled ? 'text-[#F28C28] font-bold' : 'text-[#0B1F33] font-bold'
                    : scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-[#0B1F33]'
                }`}
              >
                About
              </Link>

              <Link
                to="/quality"
                className={`transition-colors py-1 ${
                  location.pathname === '/quality'
                    ? scrolled ? 'text-[#F28C28] font-bold' : 'text-[#0B1F33] font-bold'
                    : scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-[#0B1F33]'
                }`}
              >
                Quality
              </Link>

              <Link
                to="/resources"
                className={`transition-colors py-1 ${
                  location.pathname.startsWith('/resources')
                    ? scrolled ? 'text-[#F28C28] font-bold' : 'text-[#0B1F33] font-bold'
                    : scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-[#0B1F33]'
                }`}
              >
                Resources
              </Link>

              <Link
                to="/locations"
                className={`transition-colors py-1 ${
                  location.pathname.startsWith('/locations')
                    ? scrolled ? 'text-[#F28C28] font-bold' : 'text-[#0B1F33] font-bold'
                    : scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-[#0B1F33]'
                }`}
              >
                Hubs
              </Link>

              <Link
                to="/contact"
                className={`transition-colors py-1 ${
                  location.pathname === '/contact'
                    ? scrolled ? 'text-[#F28C28] font-bold' : 'text-[#0B1F33] font-bold'
                    : scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-[#0B1F33]'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Zone 3: Actions (Search, Direct Phone, RFQ Button) */}
            <div className="flex items-center gap-3">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-lg transition-colors focus:outline-none ${
                  scrolled 
                    ? 'text-slate-300 hover:text-white hover:bg-white/10' 
                    : 'text-slate-600 hover:text-[#0B1F33] hover:bg-slate-100'
                }`}
                title="Search products, parts & specs"
                aria-label="Open search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Direct Call Button (Desktop) */}
              <a
                href="tel:09104383713"
                className={`hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                  scrolled
                    ? 'border-slate-700 text-slate-300 hover:text-white hover:border-slate-500'
                    : 'border-slate-200 text-slate-700 hover:text-[#0B1F33] hover:border-slate-300'
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F28C28]" />
                <span>091043 83713</span>
              </a>

              {/* Request a Quote CTA */}
              <Link
                to="/request-a-quote"
                className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#F28C28] hover:bg-[#E07D1C] transition-all duration-200 shadow-md shadow-[#F28C28]/20 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none whitespace-nowrap"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
                  scrolled ? 'text-white' : 'text-[#0B1F33]'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden pointer-events-auto mt-2 max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-2xl p-5 text-[#17212B]"
            >
              <div className="space-y-3 max-h-[75vh] overflow-y-auto">
                <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085]">
                    Navigation
                  </span>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsSearchOpen(true);
                    }}
                    className="text-xs text-[#0B1F33] font-bold flex items-center gap-1"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Search</span>
                  </button>
                </div>

                <div className="space-y-1">
                  <Link
                    to="/products"
                    className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-lg"
                  >
                    All Products (12 Categories)
                  </Link>
                  <Link
                    to="/industries"
                    className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-lg"
                  >
                    Industries We Serve
                  </Link>
                  <Link
                    to="/quality"
                    className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-lg"
                  >
                    Quality Standards & Inspection
                  </Link>
                  <Link
                    to="/about"
                    className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-lg"
                  >
                    About Filtexpert
                  </Link>
                  <Link
                    to="/resources"
                    className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-lg"
                  >
                    Technical Guides & Articles
                  </Link>
                  <Link
                    to="/locations"
                    className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-lg"
                  >
                    Regional Hubs (Ahmedabad / Pan-India)
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-3 py-2 text-sm font-bold text-[#0B1F33] hover:bg-slate-50 rounded-lg"
                  >
                    Contact Desk
                  </Link>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <Link
                    to="/request-a-quote"
                    className="w-full text-center py-3 text-xs font-bold text-white bg-[#F28C28] hover:bg-[#E07D1C] rounded-xl transition-colors shadow-sm"
                  >
                    Request a Technical Quotation
                  </Link>
                  <a
                    href="tel:09104383713"
                    className="w-full text-center py-2.5 text-xs font-semibold text-[#0B1F33] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                  >
                    Direct Phone: 091043 83713
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
