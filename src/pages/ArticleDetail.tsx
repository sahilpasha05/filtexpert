import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, User, Calendar, Share2, HelpCircle } from 'lucide-react';
import { articles } from '../data/articles';
import { products } from '../data/products';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { ProductCard } from '../components/ProductCard';
import { ArticleCard } from '../components/ArticleCard';
import { FAQ } from '../components/FAQ';
import { CTASection } from '../components/CTASection';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  // Related products
  const relatedProducts = products.filter((p) =>
    article.relatedProductSlugs.includes(p.slug)
  );

  // Related articles
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug && (article.relatedArticleSlugs.includes(a.slug) || a.category === article.category))
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "FILTEXPERT"
    },
    "datePublished": "2026-02-01",
    "mainEntityOfPage": `https://filtxpert.com/resources/${article.slug}`
  };

  return (
    <>
      <SEO
        title={`${article.title} | Filtexpert`}
        description={article.excerpt}
        ogType="article"
        ogImage={article.image}
        schema={articleSchema}
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Resources', href: '/resources' },
                { label: article.category, href: '/resources' },
                { label: article.title }
              ]}
            />
          </div>
        </div>

        {/* Article Header */}
        <header className="bg-white py-10 sm:py-14 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#667085] mb-3">
              <span className="text-[#F28C28]">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.date}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33] tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#17212B]/85 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#123B5D]" />
                <span className="font-medium text-[#0B1F33]">{article.author}</span>
              </div>
              <div className="flex items-center gap-1 font-mono text-[11px]">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body + Sidebar Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Table of Contents Sticky (Desktop) */}
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24 bg-white rounded-xl border border-slate-200 p-5 shadow-2xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#F28C28]" />
                    <span>Table of Contents</span>
                  </h3>
                  <nav className="space-y-2 text-xs">
                    {article.tableOfContents.map((toc) => (
                      <a
                        key={toc.id}
                        href={`#${toc.id}`}
                        className="block text-[#667085] hover:text-[#0B1F33] hover:underline transition-colors py-0.5"
                      >
                        {toc.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Article Main Content */}
            <main className={`${article.tableOfContents && article.tableOfContents.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12 max-w-4xl mx-auto'} space-y-8`}>
              {/* Hero Image */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white aspect-16/9 shadow-2xs">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Sections */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-2xs space-y-8">
                {article.contentSections.map((section, idx) => (
                  <section key={idx} id={section.id} className="scroll-mt-24 space-y-4">
                    {section.heading && (
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F33] tracking-tight">
                        {section.heading}
                      </h2>
                    )}

                    <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-[#17212B]/90">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {section.listItems && section.listItems.length > 0 && (
                      <ul className="space-y-2 pt-2 text-sm text-[#17212B]">
                        {section.listItems.map((item, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] mt-2 shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Article FAQ if present */}
              {article.faqs && article.faqs.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
                  <FAQ
                    items={article.faqs}
                    title="Frequently Asked Questions on This Topic"
                  />
                </div>
              )}

              {/* Relevant Products Grid */}
              {relatedProducts.length > 0 && (
                <div className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[#0B1F33]">
                      Products Referenced in This Guide
                    </h3>
                    <Link
                      to="/products"
                      className="text-xs font-bold text-[#F28C28] hover:text-[#E07D1C] flex items-center gap-1"
                    >
                      <span>Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedProducts.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </div>
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-[#0B1F33] mb-4">
                    Further Technical Reading
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedArticles.map((a) => (
                      <ArticleCard key={a.id} article={a} />
                    ))}
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>

        <CTASection
          headline="Have Questions on Filter Maintenance or Replacement?"
          text="Send us your equipment model number or current differential pressure reading for technical advice."
        />
      </div>
    </>
  );
};
