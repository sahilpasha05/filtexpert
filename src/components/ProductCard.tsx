import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onRequestQuote?: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:border-slate-300 hover:-translate-y-1"
    >
      {/* Product Image Area */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100 border-b border-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 will-change-transform"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
        {/* Fallback container under image if image fails */}
        <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
          <SlidersHorizontal className="w-10 h-10 mb-2 stroke-1 text-[#123B5D]" />
          <span className="text-xs font-mono text-[#0B1F33] font-medium text-center">{product.name}</span>
        </div>

        {/* Minimal Category Marker */}
        <div className="absolute top-3 left-3 bg-[#0B1F33]/85 text-white border border-white/10 text-[10px] font-mono tracking-wider px-2 py-0.5 rounded backdrop-blur-xs">
          {product.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#0B1F33] leading-snug group-hover:text-[#F28C28] transition-colors">
            <Link to={`/products/${product.slug}`} className="focus:outline-none flex items-start justify-between gap-2">
              <span>{product.name}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#F28C28] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-0.5" />
            </Link>
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-[#17212B]/75 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Footers */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <Link
            to={`/products/${product.slug}`}
            className="font-bold text-[#0B1F33] group-hover:text-[#F28C28] transition-colors"
          >
            Technical Dossier →
          </Link>
          
          <Link
            to={`/request-a-quote?product=${encodeURIComponent(product.name)}`}
            className="font-mono text-[#667085] hover:text-[#0B1F33] transition-colors text-[11px]"
          >
            RFQ Quote
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
