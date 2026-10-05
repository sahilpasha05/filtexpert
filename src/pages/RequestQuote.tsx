import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/QuoteForm';
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
        <section className="bg-[#0B1F33] text-white py-12 sm:py-16 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Request a Quote' }
              ]}
            />

            <div className="mt-4 max-w-3xl space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F28C28]">
                B2B Procurement & Engineering RFQ
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Request a Technical Quotation
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Provide your compressor specifications, equipment brand, required quantity, or part numbers below. Our sales engineering desk prepares comprehensive commercial offers within 24 business hours.
              </p>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: The Form */}
            <div className="lg:col-span-8">
              <QuoteForm defaultProduct={defaultProduct} />
            </div>

            {/* Right Column: B2B Support Information */}
            <div className="lg:col-span-4 space-y-6">
              {/* RFQ Guarantees Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-4">
                <h3 className="text-base font-bold text-[#0B1F33]">
                  B2B Commercial Service Commitments
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-[#17212B]/85">
                  <li className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span><strong>24-Hour SLA:</strong> Quick turnaround on formal quotations and technical datasheets.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FileCheck className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span><strong>Cross-Reference Validation:</strong> We verify OEM model numbers, thread pitches, and sealing dimensions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span><strong>Commercial Confidentiality:</strong> Proprietary client drawings and manufacturing volumes kept strictly confidential.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span><strong>Volume & Tender Pricing:</strong> Special tiered pricing for routine maintenance contracts and OEM assemblies.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Telephone Support */}
              <div className="bg-[#0B1F33] text-white rounded-xl p-6 border border-slate-800 space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F28C28]">
                  Urgent Requirement?
                </span>
                <h4 className="text-base font-bold">Speak Directly With an Application Engineer</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  If your plant is experiencing an unexpected compressor breakdown, contact our desk directly for rapid stock confirmation and priority dispatch.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="inline-block text-sm font-bold text-white bg-[#F28C28] hover:bg-[#E07D1C] px-4 py-2.5 rounded transition-colors"
                  >
                    Call {companyInfo.phone}
                  </a>
                </div>
              </div>

              {/* Dispatch Office */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs text-xs text-slate-600 space-y-2">
                <div className="font-bold text-[#0B1F33] text-sm">Dispatched From:</div>
                <p>{companyInfo.legalDisplayName}</p>
                <p>{companyInfo.address}</p>
                <p className="text-slate-400 font-mono text-[11px] pt-1">
                  Operating Hours: {companyInfo.businessHours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
