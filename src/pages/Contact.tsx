import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';
import { FadeInView } from '../components/FadeInView';
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
        <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#123B5D]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Contact' }
              ]}
            />

            <FadeInView className="mt-6 max-w-4xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F28C28]">
                Technical Enquiries & Commercial Quotations
              </span>
              <h1 className="text-display-section font-black font-display tracking-tight text-white uppercase">
                Contact Filtexpert
              </h1>
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
                Connect with our sales and application engineering desk in Ahmedabad for technical consultations, product compatibility checks, or immediate delivery requests.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Contact Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards */}
            <FadeInView className="lg:col-span-5 space-y-6">
              {/* Contact Information Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#667085]">
                    Corporate Entity
                  </span>
                  <h2 className="text-xl font-bold text-[#0B1F33] mt-1 font-display">
                    {companyInfo.legalDisplayName}
                  </h2>
                  <p className="text-xs text-[#667085] mt-1">
                    {companyInfo.positioning}
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#17212B]/85">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0B1F33] font-semibold">Works & Commercial Office</strong>
                      <span className="text-slate-600">{companyInfo.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <Phone className="w-5 h-5 text-[#F28C28] shrink-0" />
                    <div>
                      <strong className="block text-[#0B1F33] font-semibold">Phone Desk</strong>
                      <a href={`tel:${companyInfo.phone}`} className="font-mono text-[#0B1F33] hover:underline font-bold">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <Mail className="w-5 h-5 text-[#F28C28] shrink-0" />
                    <div>
                      <strong className="block text-[#0B1F33] font-semibold">Commercial Email</strong>
                      <a href={`mailto:${companyInfo.email}`} className="text-slate-600 hover:text-[#0B1F33]">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <Clock className="w-5 h-5 text-[#F28C28] shrink-0" />
                    <div>
                      <strong className="block text-[#0B1F33] font-semibold">Operating Hours</strong>
                      <span className="text-slate-600">{companyInfo.businessHours}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#0B1F33] block">Need an immediate RFQ?</span>
                    <span className="text-slate-500">Fast 24-hr quotation turnaround</span>
                  </div>
                  <Link
                    to="/request-a-quote"
                    className="px-3.5 py-2 bg-[#F28C28] text-white font-bold rounded-lg hover:bg-[#E07D1C] transition-colors"
                  >
                    B2B RFQ →
                  </Link>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-[#0B1F33] text-white rounded-2xl border border-slate-800 p-8 shadow-md space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F28C28]">
                  Industrial Hub Context
                </span>
                <h3 className="text-lg font-bold text-white font-display">
                  GIDC Naroda Industrial Estate
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Situated in Ahmedabad's premier engineering corridor with convenient logistics links to the Sardar Patel Ring Road, NH-48, and direct national cargo transport terminals.
                </p>
                <div className="pt-2">
                  <Link
                    to="/locations/ahmedabad-hub"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F28C28] hover:underline"
                  >
                    <span>View Ahmedabad Hub Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </FadeInView>

            {/* Right Column: Contact Form */}
            <FadeInView delay={0.2} className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
                <div className="mb-6">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                    Online Inquiry
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] mt-1 font-display uppercase">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#667085] mt-1">
                    Fill out the form below. An engineer will respond within 24 business hours.
                  </p>
                </div>

                <ContactForm />
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </>
  );
};
