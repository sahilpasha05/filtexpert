import React, { useState } from 'react';
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { ContactFormData } from '../types';
import { submitContact, SubmissionResponse } from '../services/productService';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResponse | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.company.trim()) errs.company = 'Company is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your enquiry';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await submitContact(formData);
      setResult(res);
    } catch {
      setErrors({ name: 'Failed to send enquiry. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (result?.success) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-white p-8 text-center shadow-xs">
        <div className="mx-auto w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-[#0B1F33]">Thank you. Your enquiry has been received.</h3>
        <p className="mt-2 text-xs sm:text-sm text-[#17212B]/80 max-w-md mx-auto">
          {result.message}
        </p>
        <p className="mt-4 text-xs font-mono text-slate-500">
          Enquiry ID: <span className="font-bold text-[#0B1F33]">{result.referenceId}</span>
        </p>
        <button
          type="button"
          onClick={() => {
            setResult(null);
            setFormData({
              name: '',
              company: '',
              email: '',
              phone: '',
              country: 'India',
              message: ''
            });
          }}
          className="mt-6 px-4 py-2 text-xs font-semibold text-[#0B1F33] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#0B1F33]">Send Us an Industrial Enquiry</h3>
        <p className="mt-1 text-xs text-[#667085]">
          Direct message to our technical consulting and distribution office in Ahmedabad.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
            Your Name <span className="text-[#F28C28]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rajesh Patel"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border rounded-md text-[#17212B] focus:bg-white focus:outline-none transition-colors ${
              errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#0B1F33]'
            }`}
          />
          {errors.name && <p className="mt-1 text-[11px] text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
            Company Name <span className="text-[#F28C28]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Company or Factory Name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border rounded-md text-[#17212B] focus:bg-white focus:outline-none transition-colors ${
              errors.company ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#0B1F33]'
            }`}
          />
          {errors.company && <p className="mt-1 text-[11px] text-red-600">{errors.company}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
              Email Address <span className="text-[#F28C28]">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border rounded-md text-[#17212B] focus:bg-white focus:outline-none transition-colors ${
                errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#0B1F33]'
              }`}
            />
            {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
              Phone Number <span className="text-[#F28C28]">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+91 91043 83713"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border rounded-md text-[#17212B] focus:bg-white focus:outline-none transition-colors ${
                errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#0B1F33]'
              }`}
            />
            {errors.phone && <p className="mt-1 text-[11px] text-red-600">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
            Country / Region <span className="text-[#F28C28]">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-md text-[#17212B] focus:bg-white focus:border-[#0B1F33] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
            Message / Requirements <span className="text-[#F28C28]">*</span>
          </label>
          <textarea
            required
            rows={4}
            placeholder="Tell us what filtration, gasket, or compressor components you need..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border rounded-md text-[#17212B] focus:bg-white focus:outline-none transition-colors ${
              errors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#0B1F33]'
            }`}
          />
          {errors.message && <p className="mt-1 text-[11px] text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#0B1F33] rounded-md hover:bg-[#123B5D] transition-all disabled:opacity-70 focus:outline-none whitespace-nowrap"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Enquiry...</span>
            </>
          ) : (
            <>
              <span>Send Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
