import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { products } from '../data/products';
import { industries } from '../data/industries';
import { articles } from '../data/articles';
import { locations } from '../data/locations';

export const Sitemap: React.FC = () => {
  return (
    <>
      <SEO
        title="Sitemap | Filtexpert"
        description="Comprehensive index of products, industries, resources, and corporate pages on the Filtexpert website."
      />
      <div className="bg-[#F5F7F9] min-h-screen py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Sitemap' }]} />
          <div className="mt-6 bg-white rounded-xl border border-slate-200 p-8 sm:p-12 shadow-2xs space-y-8">
            <div>
              <h1 className="text-3xl font-extrabold text-[#0B1F33]">Sitemap</h1>
              <p className="text-xs text-[#667085] mt-1">Directory of all website routes and product pages.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xs">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B1F33] mb-3 border-b border-slate-100 pb-2">
                  Main Navigation
                </h2>
                <ul className="space-y-2 text-[#667085]">
                  <li><Link to="/" className="hover:text-[#0B1F33]">Home</Link></li>
                  <li><Link to="/products" className="hover:text-[#0B1F33]">All Products</Link></li>
                  <li><Link to="/industries" className="hover:text-[#0B1F33]">Industries We Serve</Link></li>
                  <li><Link to="/about" className="hover:text-[#0B1F33]">About Filtexpert</Link></li>
                  <li><Link to="/quality" className="hover:text-[#0B1F33]">Quality & Inspection</Link></li>
                  <li><Link to="/resources" className="hover:text-[#0B1F33]">Technical Resources</Link></li>
                  <li><Link to="/locations" className="hover:text-[#0B1F33]">Regional Hubs</Link></li>
                  <li><Link to="/contact" className="hover:text-[#0B1F33]">Contact Desk</Link></li>
                  <li><Link to="/request-a-quote" className="hover:text-[#0B1F33]">Request a Quote</Link></li>
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B1F33] mb-3 border-b border-slate-100 pb-2">
                  Products ({products.length})
                </h2>
                <ul className="space-y-1.5 text-[#667085]">
                  {products.map((p) => (
                    <li key={p.id}>
                      <Link to={`/products/${p.slug}`} className="hover:text-[#0B1F33]">
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B1F33] mb-3 border-b border-slate-100 pb-2">
                  Industries ({industries.length})
                </h2>
                <ul className="space-y-1.5 text-[#667085] mb-6">
                  {industries.map((ind) => (
                    <li key={ind.id}>
                      <Link to={`/industries/${ind.slug}`} className="hover:text-[#0B1F33]">
                        {ind.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B1F33] mb-3 border-b border-slate-100 pb-2">
                  Technical Guides ({articles.length})
                </h2>
                <ul className="space-y-1.5 text-[#667085] mb-6">
                  {articles.map((art) => (
                    <li key={art.id}>
                      <Link to={`/resources/${art.slug}`} className="hover:text-[#0B1F33] truncate block">
                        {art.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B1F33] mb-3 border-b border-slate-100 pb-2">
                  Locations ({locations.length})
                </h2>
                <ul className="space-y-1.5 text-[#667085]">
                  {locations.map((loc) => (
                    <li key={loc.slug}>
                      <Link to={`/locations/${loc.slug}`} className="hover:text-[#0B1F33]">
                        {loc.name} Hub
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
