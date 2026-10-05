import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  initialCategory?: string;
  showFilters?: boolean;
  showSearch?: boolean;
}

const CATEGORIES = [
  'All',
  'Filters',
  'Compressor Components',
  'Gaskets',
  'Valves',
  'Air Treatment',
  'Industrial Components'
];

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  initialCategory = 'All',
  showFilters = true,
  showSearch = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.applications.some((app) => app.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Controls Bar: Search & Category Tabs */}
      {(showSearch || showFilters) && (
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            {showSearch && (
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667085]" />
                <input
                  type="text"
                  placeholder="Search products by name, type, application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-md text-[#17212B] placeholder:text-[#667085] focus:outline-none focus:border-[#0B1F33] focus:ring-1 focus:ring-[#0B1F33] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}

            {/* Product Count Display */}
            <div className="text-xs text-[#667085] flex items-center gap-1.5 self-start md:self-auto">
              <span>Showing</span>
              <strong className="font-semibold text-[#0B1F33] font-mono tabular-nums">
                {filteredProducts.length}
              </strong>
              <span>of</span>
              <strong className="font-semibold text-[#0B1F33] font-mono tabular-nums">
                {products.length}
              </strong>
              <span>products</span>
            </div>
          </div>

          {/* Category Filter Tabs (Interactive segmented buttons allowed by skill) */}
          {showFilters && (
            <div className="overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex items-center gap-1.5 min-w-max p-1 bg-slate-100/90 rounded-lg border border-slate-200/60">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-white text-[#0B1F33] shadow-xs'
                          : 'text-[#667085] hover:text-[#0B1F33] hover:bg-slate-200/60'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Grid Display */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-12 text-center">
          <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 mb-3">
            <SlidersHorizontal className="w-6 h-6 stroke-1 text-[#123B5D]" />
          </div>
          <h3 className="text-base font-bold text-[#0B1F33]">No products found</h3>
          <p className="mt-1 text-xs text-[#667085] max-w-sm mx-auto">
            No matching items found for "{searchQuery}". Try selecting another category or clear your search query.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#0B1F33] rounded-md hover:bg-[#123B5D] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
