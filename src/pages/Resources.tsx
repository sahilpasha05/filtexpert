import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { ArticleCard } from '../components/ArticleCard';
import { CTASection } from '../components/CTASection';
import { FadeInView } from '../components/FadeInView';
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
        <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#123B5D]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Resources' }
              ]}
            />

            <FadeInView className="mt-6 max-w-4xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F28C28]">
                Knowledge & Engineering Best Practices
              </span>
              <h1 className="text-display-section font-black font-display tracking-tight text-white uppercase">
                Technical Resources & Engineering Insights
              </h1>
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
                Detailed maintenance guides, differential pressure troubleshooting, and technical comparisons for plant maintenance managers, compressor technicians, and industrial procurement teams.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Resources Grid & Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
          {/* Segmented Filter Control */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {RESOURCE_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedTab === tab
                    ? 'bg-[#0B1F33] text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <CTASection
          headline="Looking for Specific Equipment Maintenance Guidance?"
          text="Contact our engineering desk directly for equipment manuals, cross-reference advice, and custom operating recommendations."
        />
      </div>
    </>
  );
};
