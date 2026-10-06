import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onRequestQuote?: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="group flex flex-col bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-200 ease-out hover:shadow-lg hover:border-slate-300 hover:-translate-y-1">
      {/* Product Image Area */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100 border-b border-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback gracefully to industrial gradient if missing
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
        {/* Fallback container under image if image fails */}
        <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
          <SlidersHorizontal className="w-10 h-10 mb-2 stroke-1 text-[#123B5D]" />
          <span className="text-xs font-mono text-[#0B1F33] font-medium text-center">{product.name}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
        <div>
          {/* Zero-Pill category: clean unboxed metadata */}
          <div className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-2">
            {product.category}
          </div>

          <h3 className="text-lg font-bold text-[#0B1F33] leading-snug group-hover:text-[#123B5D] transition-colors">
            <Link to={`/products/${product.slug}`} className="focus:outline-none">
              {product.name}
            </Link>
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-[#17212B]/80 leading-relaxed line-clamp-3">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Footers */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] hover:text-[#F28C28] transition-colors group/link"
          >
            <span>View Product</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>

          <Link
            to={`/request-a-quote?product=${encodeURIComponent(product.name)}`}
            className="text-[11px] font-medium text-[#667085] hover:text-[#0B1F33] hover:underline transition-colors"
          >
            Quote
          </Link>
        </div>
      </div>
    </article>
  );
};
