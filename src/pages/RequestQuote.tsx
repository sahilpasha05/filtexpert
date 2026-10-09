import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/QuoteForm';
import { FadeInView } from '../components/FadeInView';
import { CheckCircle2, ShieldAlert, Clock, FileCheck } from 'lucide-react';
import { companyInfo } from '../data/company';

export const RequestQuote: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultProduct = searchParams.get('product') || '';

  return (
    <>
      <SEO
        title="Request a Quote | Filtexpert"
        description="Submit your industrial filtration and compressor component quotation requirements to Filtexpert. Quick 24-hour turnaround for industrial buyers and maintenance teams."
      />

      <div className="bg-[#F5F7F9] min-h-screen">
        {/* Page Hero */}
        <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#123B5D]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Request a Quote' }
              ]}
            />

            <FadeInView className="mt-6 max-w-4xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F28C28]">
                B2B Procurement & Engineering RFQ Desk
              </span>
              <h1 className="text-display-section font-black font-display tracking-tight text-white uppercase">
                Request a Technical Quotation
              </h1>
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
                Provide your compressor specifications, equipment brand, required quantity, or part numbers below. Our sales engineering desk prepares comprehensive commercial offers within 24 business hours.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: The Form */}
            <FadeInView className="lg:col-span-8">
              <QuoteForm defaultProduct={defaultProduct} />
            </FadeInView>

            {/* Right Column: B2B Support Information */}
            <FadeInView delay={0.2} className="lg:col-span-4 space-y-6">
              {/* RFQ Guarantees Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-5">
                <h3 className="text-lg font-bold text-[#0B1F33] font-display">
                  B2B Service Commitments
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0B1F33] font-semibold">24-Hour Quotation Turnaround</strong>
                      <span className="text-slate-500 text-xs">Standard commercial offers sent within one business day.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0B1F33] font-semibold">Dimensional Verification</strong>
                      <span className="text-slate-500 text-xs">Technical double-check of thread pitch, gasket size, and OEM number.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-[#123B5D] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0B1F33] font-semibold">GST Compliance & Invoicing</strong>
                      <span className="text-slate-500 text-xs">Official corporate invoicing and Pan-India freight dispatch.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Technical Helpline */}
              <div className="bg-[#0B1F33] text-white rounded-2xl border border-slate-800 p-8 shadow-md space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F28C28]">
                  Urgent Breakdown Inquiries
                </span>
                <h4 className="text-base font-bold text-white">
                  Need Immediate Sizing Support?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call our application desk directly with your machine model and operating hours for expedited stock allocation.
                </p>
                <div className="pt-2 font-mono text-sm text-[#F28C28] font-bold">
                  Direct: {companyInfo.phone}
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </>
  );
};
