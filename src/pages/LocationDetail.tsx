import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight, Package } from 'lucide-react';
import { locations } from '../data/locations';
import { products } from '../data/products';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { ProductCard } from '../components/ProductCard';
import { QuoteForm } from '../components/QuoteForm';
import { CTASection } from '../components/CTASection';

export const LocationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  // Matching popular products
  const matchingProducts = products
    .filter((p) => location.popularProducts.includes(p.name))
    .slice(0, 3);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `FILTEXPERT - ${location.name}`,
    "description": location.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shed No. 17, B/H Naroda, Fortune South, GIDC Naroda",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "382330",
      "addressCountry": "IN"
    },
    "telephone": location.phone,
    "email": location.email
  };

  return (
    <>
      <SEO
        title={`${location.headline} | Filtexpert`}
        description={location.description}
        schema={localBusinessSchema}
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Locations', href: '/locations' },
                { label: location.name }
              ]}
            />
          </div>
        </div>

        {/* Hero */}
        <section className="bg-[#0B1F33] text-white py-12 sm:py-16 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                  {location.regionType}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-300 font-mono">B2B Distribution</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {location.headline}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {location.description}
              </p>
            </div>
          </div>
        </section>

        {/* Main Hub Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-4">
                <h2 className="text-xl font-bold text-[#0B1F33]">
                  Service Scope & Distribution Highlights
                </h2>
                <div className="space-y-3 pt-2">
                  {location.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#17212B] leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-[#0B1F33] mb-1">Service Radius:</div>
                  <div className="text-xs text-slate-600 font-mono">{location.serviceRadius}</div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-3">
                <h3 className="text-base font-bold text-[#0B1F33]">Contact Operations Desk</h3>
                <div className="text-xs text-slate-600 space-y-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span className="font-semibold text-[#0B1F33]">{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span>{location.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right RFQ Form */}
            <div className="lg:col-span-5">
              <QuoteForm defaultProduct={matchingProducts[0]?.name ?? 'Air Compressor Filters'} />
            </div>
          </div>

          {/* Popular Products in this Hub */}
          {matchingProducts.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F33]">
                    Popular Components Supplied in {location.name}
                  </h3>
                  <p className="text-xs text-[#667085] mt-1">
                    Readily dispatched for continuous maintenance operations.
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
                {matchingProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>

        <CTASection />
      </div>
    </>
  );
};
