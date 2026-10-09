import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { ProductGrid } from '../components/ProductGrid';
import { CTASection } from '../components/CTASection';
import { FadeInView } from '../components/FadeInView';
import { products } from '../data/products';

export const Products: React.FC = () => {
  return (
    <>
      <SEO
        title="Industrial Filters & Compressor Components | Filtexpert"
        description="Explore the complete industrial filtration and compressor component product catalogue from Filtexpert. High-efficiency air filters, oil filters, air-oil separators, intake valves, and gasket kits."
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Page Header / Hero */}
        <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#123B5D]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Products' }
              ]}
            />

            <FadeInView className="mt-6 max-w-4xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F28C28]">
                B2B Engineering Catalogue · 12 Product Categories
              </span>
              <h1 className="text-display-section font-black font-display tracking-tight text-white uppercase">
                Industrial Filtration & Compressor Components
              </h1>
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
                Explore our full line of industrial filtration cartridges, air-oil coalescing separators, compressor unloader valves, and precision gasket kits designed for harsh operating environments.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Main Product Catalog Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} showFilters={true} showSearch={true} />
        </section>

        <CTASection
          headline="Require a Custom Filtration or Gasket Specification?"
          text="Our engineers match micron ratings, differential pressures, and gasket materials directly to your equipment brand and operating environment."
        />
      </div>
    </>
  );
};
