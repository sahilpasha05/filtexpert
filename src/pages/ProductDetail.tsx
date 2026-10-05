import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  SlidersHorizontal, 
  ShieldCheck, 
  FileText, 
  Layers, 
  Phone,
  ArrowUpRight
} from 'lucide-react';
import { products } from '../data/products';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { SpecificationTable } from '../components/SpecificationTable';
import { FAQ } from '../components/FAQ';
import { ProductCard } from '../components/ProductCard';
import { QuoteForm } from '../components/QuoteForm';
import { CTASection } from '../components/CTASection';
import { companyInfo } from '../data/company';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Related products
  const relatedProducts = products
    .filter((p) => p.slug !== product.slug && (product.relatedProductSlugs?.includes(p.slug) || p.category === product.category))
    .slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.shortDescription,
    "image": product.image,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "FILTEXPERT"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <SEO
        title={`${product.name} | Filtexpert`}
        description={product.shortDescription}
        ogType="product"
        ogImage={product.image}
        schema={productSchema}
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Top Breadcrumb Navigation */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Products', href: '/products' },
                { label: product.name }
              ]}
            />
          </div>
        </div>

        {/* Product Showcase Hero */}
        <section className="bg-white py-10 sm:py-14 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Product Gallery / Hero Image */}
              <div className="lg:col-span-6 space-y-3">
                <div className="aspect-4/3 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1F33]/85 text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-xs">
                    Industrial Specimen
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs text-[#667085]">
                  <span>Application: {product.specifications.find(s => s.label === 'Application')?.value ?? 'Industrial'}</span>
                  <span className="font-mono text-[#0B1F33] font-semibold">Ready for B2B RFQ</span>
                </div>
              </div>

              {/* Product Title, Description & Action Panel */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085] mb-1">
                    {product.category}
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
                    {product.name}
                  </h1>
                  <p className="mt-3 text-sm sm:text-base text-[#17212B]/85 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Quick Trust / Service Signals */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs text-[#17212B]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>Application-matched media</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>Cross-brand interchange</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>Custom dimensions available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>Fast B2B quotation turnaround</span>
                  </div>
                </div>

                {/* Primary Enquiry CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <Link
                    to={`/request-a-quote?product=${encodeURIComponent(product.name)}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#F28C28] rounded-md hover:bg-[#E07D1C] transition-all shadow-xs text-center whitespace-nowrap"
                  >
                    <span>Request a Quote for This Product</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#0B1F33] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-[#123B5D]" />
                    <span>Call Sales Desk</span>
                  </a>
                </div>

                <p className="text-[11px] text-[#667085]">
                  Need engineering confirmation? Send your OEM part code or dimensional sketch for immediate verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              {/* Product Overview */}
              <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
                <h2 className="text-xl font-bold text-[#0B1F33] tracking-tight mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#123B5D]" />
                  <span>Product Overview</span>
                </h2>
                <div className="prose prose-slate max-w-none text-sm leading-relaxed text-[#17212B]/90 space-y-4">
                  <p>{product.description}</p>
                  <p>
                    Manufactured to rigorous industrial tolerances, this component is engineered to operate seamlessly under high temperature gradients, vibration, and continuous pressure cycles.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
                <h2 className="text-xl font-bold text-[#0B1F33] tracking-tight mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#123B5D]" />
                  <span>Key Engineering Features</span>
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#17212B]">
                  {product.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Technical Specifications Table */}
              <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
                <SpecificationTable
                  specifications={product.specifications}
                  title={`${product.name} Specifications`}
                  subtitle="Detailed technical configuration. Exact tolerances are confirmed per application."
                />
              </section>

              {/* Applications & Industries */}
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
                  <h3 className="text-base font-bold text-[#0B1F33] mb-3 flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-[#F28C28]" />
                    <span>Typical Applications</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#17212B]/85">
                    {product.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#123B5D]" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
                  <h3 className="text-base font-bold text-[#0B1F33] mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#F28C28]" />
                    <span>Sectors Served</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#17212B]/85">
                    {product.industries.map((ind, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Product FAQ */}
              {product.faqs.length > 0 && (
                <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
                  <FAQ
                    items={product.faqs}
                    title="Frequently Asked Questions"
                    subtitle={`Common engineering inquiries regarding ${product.name}.`}
                  />
                </section>
              )}
            </div>

            {/* Sticky Desktop RFQ Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Embedded Quick RFQ Card */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F28C28]">
                      Direct RFQ
                    </span>
                    <h3 className="text-base font-bold text-[#0B1F33]">
                      Enquire About {product.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#667085] mb-4">
                    Submit your required quantity, dimensions, or part number to receive a formal B2B quotation.
                  </p>

                  <Link
                    to={`/request-a-quote?product=${encodeURIComponent(product.name)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-[#0B1F33] hover:bg-[#123B5D] rounded-md transition-colors"
                  >
                    <span>Open Full RFQ Form</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                    <div className="flex justify-between">
                      <span>Supply Location:</span>
                      <span className="font-semibold text-slate-700">Ahmedabad, India</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Customization:</span>
                      <span className="font-semibold text-slate-700">Available on request</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Response SLA:</span>
                      <span className="font-semibold text-slate-700">&lt; 24 business hours</span>
                    </div>
                  </div>
                </div>

                {/* Direct Phone Assistance */}
                <div className="bg-[#0B1F33] text-white rounded-xl p-5 border border-slate-800">
                  <div className="text-xs font-mono text-[#F28C28] uppercase tracking-wider mb-1">
                    Technical Support
                  </div>
                  <h4 className="text-sm font-bold">Have an urgent machine breakdown?</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Contact our Ahmedabad technical counter directly for immediate stock check.
                  </p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-white bg-[#123B5D] hover:bg-slate-800 px-3 py-2 rounded transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
                    <span>{companyInfo.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F33]">Related Components</h3>
                  <p className="text-xs text-[#667085] mt-1">
                    Commonly serviced alongside {product.name}
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
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Global CTA */}
        <CTASection
          headline={`Looking for ${product.name} with Specific Dimensions?`}
          text="Send us your equipment model number or technical drawing for a tailored commercial proposal."
        />
      </div>
    </>
  );
};
