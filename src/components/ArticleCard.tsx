import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-16/9 overflow-hidden bg-slate-900 relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 will-change-transform"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 bg-[#0B1F33]/90 text-white text-[10px] font-mono px-2 py-0.5 rounded border border-white/10">
          {article.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
          </div>

          <h3 className="text-base font-bold text-[#0B1F33] group-hover:text-[#F28C28] transition-colors leading-snug">
            <Link to={`/resources/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-[#17212B]/75 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <Link
            to={`/resources/${article.slug}`}
            className="font-bold text-[#0B1F33] group-hover:text-[#F28C28] flex items-center gap-1.5 transition-colors"
          >
            <span>Read Technical Guide</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-[11px] font-mono text-slate-400">By {article.author}</span>
        </div>
      </div>
    </motion.article>
  );
};
