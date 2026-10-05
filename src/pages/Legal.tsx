import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { companyInfo } from '../data/company';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Filtexpert"
        description="Filtexpert B2B corporate privacy policy and data protection practices."
      />
      <div className="bg-[#F5F7F9] min-h-screen py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <div className="mt-6 bg-white rounded-xl border border-slate-200 p-8 sm:p-12 shadow-2xs space-y-6 text-[#17212B]">
            <h1 className="text-3xl font-extrabold text-[#0B1F33]">Privacy Policy</h1>
            <p className="text-xs text-[#667085] font-mono">Last updated: March 2026</p>
            <p className="text-sm leading-relaxed">
              At <strong>{companyInfo.legalDisplayName}</strong> (&ldquo;FILTEXPERT&rdquo;), we respect the privacy of our industrial clients, procurement representatives, and website visitors. This policy outlines how we handle commercial enquiry details and communication data.
            </p>
            <h2 className="text-lg font-bold text-[#0B1F33]">1. Information We Collect</h2>
            <p className="text-sm leading-relaxed">
              When you submit a Request for Quote or general enquiry, we collect business contact details including your name, company name, corporate email address, telephone number, equipment model information, and technical specifications.
            </p>
            <h2 className="text-lg font-bold text-[#0B1F33]">2. Use of Commercial Data</h2>
            <p className="text-sm leading-relaxed">
              Information provided is used strictly to prepare technical proposals, confirm product availability, process supply orders, and provide application engineering support. We do not sell or rent commercial contact details to third parties.
            </p>
            <h2 className="text-lg font-bold text-[#0B1F33]">3. Technical Drawing Confidentiality</h2>
            <p className="text-sm leading-relaxed">
              CAD drawings, dimensional specifications, and proprietary equipment details shared for quote evaluation are handled with strict commercial confidentiality.
            </p>
            <h2 className="text-lg font-bold text-[#0B1F33]">4. Contact</h2>
            <p className="text-sm leading-relaxed">
              For any questions regarding commercial data privacy, contact our office at {companyInfo.email} or by post at {companyInfo.address}.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Terms: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Supply | Filtexpert"
        description="Filtexpert commercial terms of supply and quotation guidelines."
      />
      <div className="bg-[#F5F7F9] min-h-screen py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms of Supply' }]} />
          <div className="mt-6 bg-white rounded-xl border border-slate-200 p-8 sm:p-12 shadow-2xs space-y-6 text-[#17212B]">
            <h1 className="text-3xl font-extrabold text-[#0B1F33]">Terms of Supply</h1>
            <p className="text-xs text-[#667085] font-mono">Last updated: March 2026</p>
            <h2 className="text-lg font-bold text-[#0B1F33]">1. Quotations & Validity</h2>
            <p className="text-sm leading-relaxed">
              All commercial quotations provided by Filtexpert are indicative until formally confirmed via proforma invoice or purchase order acknowledgment. Quotations are typically valid for thirty (30) days unless specified otherwise due to raw material fluctuations.
            </p>
            <h2 className="text-lg font-bold text-[#0B1F33]">2. Technical Suitability & Dimensional Verification</h2>
            <p className="text-sm leading-relaxed">
              While our engineering team offers compatibility guidance based on OEM model references, the purchasing entity remains responsible for verifying that component operating parameters (temperature, pressure, chemical media) meet their equipment requirements.
            </p>
            <h2 className="text-lg font-bold text-[#0B1F33]">3. Dispatch & Delivery</h2>
            <p className="text-sm leading-relaxed">
              Standard elements are dispatched from our Ahmedabad works via designated logistics carriers. Delivery timeframes for custom die-cut gaskets or tailored unloader valves will be confirmed upon drawing approval.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
