import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check, AlertCircle, FileCheck, Layers } from 'lucide-react';
import { industries } from '../data/industries';
import { products } from '../data/products';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { ProductCard } from '../components/ProductCard';
import { FAQ } from '../components/FAQ';
import { CTASection } from '../components/CTASection';

export const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  // Get matching relevant products
  const relevantProducts = products.filter((p) =>
    industry.relevantProductSlugs.includes(p.slug)
  );

  return (
    <>
      <SEO
        title={`${industry.name} Filtration Solutions | Filtexpert`}
        description={industry.shortDescription}
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Industries', href: '/industries' },
                { label: industry.name }
              ]}
            />
          </div>
        </div>

        {/* Industry Hero Section */}
        <section className="bg-[#0B1F33] text-white py-12 sm:py-16 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                Sector Solutions
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {industry.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {industry.shortDescription}
              </p>
              <div className="pt-2">
                <Link
                  to="/request-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#F28C28] rounded-md hover:bg-[#E07D1C] transition-colors shadow-xs"
                >
                  <span>Request Sector Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section: Overview, Requirements & Solutions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
          {/* Overview */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
            <h2 className="text-xl font-bold text-[#0B1F33] mb-4">Sector Overview</h2>
            <p className="text-sm sm:text-base text-[#17212B]/85 leading-relaxed">
              {industry.description}
            </p>
          </div>

          {/* Common Requirements vs Filtexpert Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Common Requirements */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F33] mb-4">
                <AlertCircle className="w-4 h-4 text-[#F28C28]" />
                <span>Operating Requirements & Challenges</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#17212B]">
                {industry.commonRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B5D] mt-1.5 shrink-0" />
                    <span className="leading-snug">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filtexpert Solutions */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F33] mb-4">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>Filtexpert Engineering Solutions</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#17212B]">
                {industry.solutions.map((sol, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specific Applications in this industry */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
            <h3 className="text-base font-bold text-[#0B1F33] mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#F28C28]" />
              <span>Key Machinery & Plant Applications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {industry.applications.map((app, i) => (
                <div key={i} className="p-3.5 rounded bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0B1F33]">
                  {app}
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Products Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#0B1F33]">
                  Recommended Products for {industry.name}
                </h3>
                <p className="text-xs text-[#667085] mt-1">
                  Engineered components frequently specified for this industry.
                </p>
              </div>
              <Link
                to="/products"
                className="text-xs font-bold text-[#F28C28] hover:text-[#E07D1C] flex items-center gap-1"
              >
                <span>All Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          {industry.faqs.length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
              <FAQ
                items={industry.faqs}
                title={`${industry.name} FAQs`}
                subtitle="Specific technical and operational considerations."
              />
            </div>
          )}
        </div>

        {/* Global CTA */}
        <CTASection
          headline={`Equipping Your Facility in the ${industry.name}?`}
          text="Send us your machinery brand, quantity requirements, or replacement cycles for customized volume pricing."
        />
      </div>
    </>
  );
};
