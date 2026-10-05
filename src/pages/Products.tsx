import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { ProductGrid } from '../components/ProductGrid';
import { CTASection } from '../components/CTASection';
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
        <section className="bg-[#0B1F33] text-white py-12 sm:py-16 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Products' }
              ]}
            />

            <div className="mt-4 max-w-3xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                B2B Engineering Catalogue
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
                Industrial Filtration & Compressor Components
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Explore our full line of industrial filtration cartridges, air-oil coalescing separators, compressor unloader valves, and precision gasket kits designed for harsh operating environments.
              </p>
            </div>
          </div>
        </section>

        {/* Main Product Catalog Section */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
