import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group flex flex-col bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5">
      <div className="relative aspect-16/9 overflow-hidden bg-slate-100 border-b border-slate-100">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
          <BookOpen className="w-8 h-8 mb-2 stroke-1 text-[#123B5D]" />
          <span className="text-xs font-mono text-[#0B1F33] font-medium text-center">{article.title}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
        <div>
          {/* Zero-Pill clean metadata */}
          <div className="flex items-center gap-2 text-[11px] font-medium text-[#667085] mb-2.5">
            <span className="text-[#0B1F33] font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#0B1F33] leading-snug group-hover:text-[#123B5D] transition-colors">
            <Link to={`/resources/${article.slug}`} className="focus:outline-none">
              {article.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-[#17212B]/80 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/resources/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] hover:text-[#F28C28] transition-colors group/link"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
          <span className="text-[11px] text-[#667085]">
            By {article.author}
          </span>
        </div>
      </div>
    </article>
  );
};
