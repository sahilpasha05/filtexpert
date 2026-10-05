import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { ArticleCard } from '../components/ArticleCard';
import { CTASection } from '../components/CTASection';
import { articles } from '../data/articles';

const RESOURCE_TABS = [
  'All',
  'Technical Guides',
  'Product Guides',
  'Maintenance',
  'Industry'
];

export const Resources: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('All');

  const filteredArticles = useMemo(() => {
    if (selectedTab === 'All') return articles;
    if (selectedTab === 'Technical Guides') {
      return articles.filter((a) => a.category === 'Air Compressor' || a.category === 'Technical Guides');
    }
    if (selectedTab === 'Product Guides') {
      return articles.filter((a) => a.category === 'Compressor Components' || a.category === 'Air Treatment');
    }
    if (selectedTab === 'Maintenance') {
      return articles.filter((a) => a.category === 'Maintenance');
    }
    if (selectedTab === 'Industry') {
      return articles.filter((a) => a.category === 'Filtration');
    }
    return articles;
  }, [selectedTab]);

  return (
    <>
      <SEO
        title="Technical Resources & Guides | Filtexpert"
        description="Comprehensive technical guides, filter maintenance protocols, air-oil separation guides, and compressor component selection insights from the Filtexpert engineering team."
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Hero */}
        <section className="bg-[#0B1F33] text-white py-12 sm:py-16 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Resources' }
              ]}
            />

            <div className="mt-4 max-w-3xl space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                Knowledge & Engineering Best Practices
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Technical Resources & Engineering Insights
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Practical engineering articles, maintenance intervals, and component selection guides designed for plant engineers and maintenance technicians.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid & Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Segmented Category Buttons */}
          <div className="mb-8 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-1.5 min-w-max p-1 bg-slate-100/90 rounded-lg border border-slate-200/60">
              {RESOURCE_TABS.map((tab) => {
                const isActive = selectedTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setSelectedTab(tab)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-white text-[#0B1F33] shadow-xs'
                        : 'text-[#667085] hover:text-[#0B1F33] hover:bg-slate-200/60'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <CTASection
          headline="Need Specific Technical Advice on Your Plant Equipment?"
          text="Our engineering team can evaluate your current filter differential readings and recommend optimized replacement cycles."
        />
      </div>
    </>
  );
};
