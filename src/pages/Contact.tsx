import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';
import { companyInfo } from '../data/company';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Filtexpert | Request a Quote"
        description="Contact Filtexpert (Filtxpert Industrial Solution) in GIDC Naroda, Ahmedabad, Gujarat, India. Direct phone, email, and technical inquiry form for industrial filtration and compressor components."
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0B1F33] text-white py-12 sm:py-16 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Contact' }
              ]}
            />

            <div className="mt-4 max-w-3xl space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                Technical Enquiries & Commercial Quotations
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Contact Filtexpert
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Connect with our sales and application engineering desk in Ahmedabad for technical consultations, product compatibility checks, or immediate delivery requests.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Contact Cards & Map Placeholder */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Information Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-5">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#667085]">
                    Corporate Entity
                  </span>
                  <h2 className="text-lg font-bold text-[#0B1F33] mt-0.5">
                    {companyInfo.legalDisplayName}
                  </h2>
                  <p className="text-xs text-[#667085] mt-1">
                    {companyInfo.positioning}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-100 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#0B1F33]">Office & Dispatch Works:</div>
                      <p className="text-[#17212B]/90 mt-0.5 leading-relaxed">
                        {companyInfo.address}
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5">
                        {companyInfo.city}, {companyInfo.state} {companyInfo.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                    <Phone className="w-5 h-5 text-[#F28C28] shrink-0" />
                    <div>
                      <div className="font-semibold text-[#0B1F33]">Direct Telephone:</div>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-[#0B1F33] font-bold hover:text-[#F28C28] transition-colors"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                    <Mail className="w-5 h-5 text-[#F28C28] shrink-0" />
                    <div>
                      <div className="font-semibold text-[#0B1F33]">Email Address:</div>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-[#0B1F33] hover:text-[#F28C28] transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                    <Clock className="w-5 h-5 text-[#F28C28] shrink-0" />
                    <div>
                      <div className="font-semibold text-[#0B1F33]">Working Hours:</div>
                      <p className="text-[#17212B]/80">{companyInfo.businessHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Card (Section 18/19: "Map: Use a visual placeholder for now. Do not build a real map integration.") */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                    Location Map Preview
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    GIDC NARODA
                  </span>
                </div>

                <div className="h-44 rounded-lg bg-slate-100 border border-slate-200 relative overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                  <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[#0B1F33] text-white flex items-center justify-center shadow-md mb-2">
                    <MapPin className="w-5 h-5 text-[#F28C28]" />
                  </div>
                  <div className="relative z-10 text-xs font-bold text-[#0B1F33]">
                    Fortune South, Shed No. 17
                  </div>
                  <p className="relative z-10 text-[11px] text-[#667085] mt-0.5">
                    GIDC Naroda, Ahmedabad, Gujarat 382330
                  </p>
                </div>
              </div>

              {/* Quick RFQ link box */}
              <div className="bg-[#0B1F33] text-white rounded-xl p-6 border border-slate-800 space-y-3">
                <span className="text-xs font-mono text-[#F28C28] uppercase tracking-wider">
                  Formal RFQ
                </span>
                <h4 className="text-base font-bold">Need a Detailed Itemized Quotation?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Use our specialized B2B quotation form to attach technical drawings, part lists, and application parameters.
                </p>
                <Link
                  to="/request-a-quote"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#F28C28] hover:bg-[#E07D1C] px-4 py-2.5 rounded transition-colors"
                >
                  <span>Go to Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
