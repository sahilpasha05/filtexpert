import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Package, BookOpen, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { articles } from '../data/articles';
import { industries } from '../data/industries';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmedQuery = query.toLowerCase().trim();

  // Search products
  const matchedProducts = !trimmedQuery
    ? products.slice(0, 4)
    : products.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmedQuery) ||
          p.shortDescription.toLowerCase().includes(trimmedQuery) ||
          p.category.toLowerCase().includes(trimmedQuery) ||
          p.applications.some((app) => app.toLowerCase().includes(trimmedQuery))
      );

  // Search articles
  const matchedArticles = !trimmedQuery
    ? articles.slice(0, 2)
    : articles.filter(
        (a) =>
          a.title.toLowerCase().includes(trimmedQuery) ||
          a.excerpt.toLowerCase().includes(trimmedQuery) ||
          a.category.toLowerCase().includes(trimmedQuery)
      );

  // Search industries
  const matchedIndustries = !trimmedQuery
    ? []
    : industries.filter(
        (ind) =>
          ind.name.toLowerCase().includes(trimmedQuery) ||
          ind.shortDescription.toLowerCase().includes(trimmedQuery)
      );

  const totalResults = matchedProducts.length + matchedArticles.length + matchedIndustries.length;

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#0B1F33]/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Search FILTEXPERT"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-4xl mx-auto px-4 pt-10 sm:pt-16 pb-6 flex-1 flex flex-col">
        {/* Search Modal Card */}
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
          {/* Header & Search Bar */}
          <div className="relative border-b border-slate-200 p-4 sm:p-5 flex items-center gap-3">
            <Search className="w-5 h-5 text-[#667085] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products (e.g. 'gasket', 'filter', 'separator')..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 text-base sm:text-lg bg-transparent text-[#0B1F33] placeholder:text-slate-400 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-2.5 py-1 text-xs font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
            >
              ESC
            </button>
          </div>

          {/* Results Summary Bar */}
          <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between text-xs text-[#667085]">
            <span>
              {query ? (
                <>
                  Found <strong className="text-[#0B1F33] font-mono tabular-nums">{totalResults}</strong> results for &ldquo;{query}&rdquo;
                </>
              ) : (
                'Suggested Products & Technical Resources'
              )}
            </span>
            <span className="font-mono text-[11px] hidden sm:inline text-slate-400">
              Press Enter or click to navigate
            </span>
          </div>

          {/* Results Scroll Area */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
            {/* Products Section */}
            {matchedProducts.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#667085] mb-3">
                  <Package className="w-4 h-4 text-[#F28C28]" />
                  <span>Products ({matchedProducts.length})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {matchedProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelect(`/products/${p.slug}`)}
                      className="group p-3.5 rounded-lg border border-slate-200 hover:border-[#F28C28] hover:bg-slate-50/60 cursor-pointer transition-all flex items-start gap-3"
                    >
                      <div className="w-12 h-12 rounded bg-slate-100 overflow-hidden shrink-0 border border-slate-200/60">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase font-bold text-[#667085] tracking-wider">
                          {p.category}
                        </div>
                        <h4 className="text-sm font-bold text-[#0B1F33] group-hover:text-[#F28C28] transition-colors truncate">
                          {p.name}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {p.shortDescription}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#F28C28] group-hover:translate-x-0.5 transition-all self-center shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Articles Section */}
            {matchedArticles.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#667085] mb-3">
                  <BookOpen className="w-4 h-4 text-[#123B5D]" />
                  <span>Technical Guides & Articles ({matchedArticles.length})</span>
                </div>
                <div className="space-y-2">
                  {matchedArticles.map((a) => (
                    <div
                      key={a.id}
                      onClick={() => handleSelect(`/resources/${a.slug}`)}
                      className="group p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 cursor-pointer transition-all flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] text-[#667085] font-medium">
                          {a.category} · {a.readTime}
                        </div>
                        <h4 className="text-sm font-semibold text-[#0B1F33] group-hover:text-[#123B5D] transition-colors truncate">
                          {a.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0B1F33] shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Industries Section if matching */}
            {matchedIndustries.length > 0 && (
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#667085] mb-3">
                  Industries ({matchedIndustries.length})
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {matchedIndustries.map((ind) => (
                    <div
                      key={ind.id}
                      onClick={() => handleSelect(`/industries/${ind.slug}`)}
                      className="p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 cursor-pointer text-xs font-bold text-[#0B1F33] flex items-center justify-between"
                    >
                      <span>{ind.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Zero State */}
            {totalResults === 0 && (
              <div className="py-12 text-center">
                <p className="text-sm font-semibold text-[#0B1F33]">
                  No matching products or resources found
                </p>
                <p className="text-xs text-[#667085] mt-1 max-w-sm mx-auto">
                  Try searching for general terms like &ldquo;filters&rdquo;, &ldquo;gaskets&rdquo;, &ldquo;valves&rdquo;, or &ldquo;compressor&rdquo;.
                </p>
              </div>
            )}
          </div>

          {/* Quick Suggestions Footer */}
          <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center gap-2 text-xs text-[#667085]">
            <span className="font-semibold text-[#0B1F33]">Popular:</span>
            {['air compressor filter', 'oil filter', 'gasket kit', 'intake valve', 'air oil separator'].map(
              (term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuery(term)}
                  className="px-2 py-0.5 rounded bg-white border border-slate-200 hover:border-slate-300 text-[11px] text-slate-700 transition-colors"
                >
                  {term}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
