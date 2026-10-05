import React, { useState } from 'react';
import { CheckCircle2, Upload, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { QuoteFormData } from '../types';
import { submitQuote, SubmissionResponse } from '../services/productService';
import { products } from '../data/products';

interface QuoteFormProps {
  defaultProduct?: string;
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ defaultProduct = '', onSuccess }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'India',
    product: defaultProduct || (products[0]?.name ?? 'Air Compressor Filters'),
    partNumber: '',
    quantity: '1',
    application: '',
    message: '',
    attachmentName: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResponse | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof QuoteFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid business email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 6) {
      errs.phone = 'Please enter a valid contact number';
    }
    if (!formData.country.trim()) errs.country = 'Country is required';
    if (!formData.quantity.trim()) errs.quantity = 'Estimated quantity is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await submitQuote(formData);
      setResult(res);
      if (onSuccess) onSuccess();
    } catch {
      setErrors({ fullName: 'A transient submission error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        attachmentName: e.target.files![0].name
      }));
    }
  };

  if (result?.success) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-white p-8 sm:p-10 shadow-sm text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700">
          Enquiry Registered
        </span>
        <h3 className="mt-1 text-2xl font-extrabold text-[#0B1F33]">
          Thank you. Your quotation request has been received.
        </h3>
        <p className="mt-3 text-sm text-[#17212B]/80 max-w-lg mx-auto leading-relaxed">
          {result.message}
        </p>

        <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200/80 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono">
          <div className="flex justify-between">
            <span className="text-slate-500">Reference:</span>
            <span className="font-bold text-[#0B1F33]">{result.referenceId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Requested Product:</span>
            <span className="text-slate-900 font-medium truncate max-w-[200px]">{formData.product}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Quantity:</span>
            <span className="text-slate-900">{formData.quantity} units</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Timestamp:</span>
            <span className="text-slate-900">{new Date(result.submittedAt).toLocaleTimeString()}</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setResult(null);
              setFormData({
                fullName: '',
                companyName: '',
                email: '',
                phone: '',
                country: 'India',
                product: products[0]?.name ?? 'Air Compressor Filters',
                partNumber: '',
                quantity: '1',
                application: '',
                message: '',
                attachmentName: ''
              });
            }}
            className="px-5 py-2.5 text-xs font-semibold text-[#0B1F33] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="mb-6 border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-[#0B1F33]">Request a Technical & Commercial Quote</h3>
        <p className="mt-1 text-xs sm:text-sm text-[#667085]">
          Fill in your requirements below. Our industrial sales engineers respond within 24 business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1.5">
            Full Name <span className="text-[#F28C28]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. John Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border rounded-md text-[#17212B] focus:bg-white focus:outline-none transition-colors ${
              errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#0B1F33]'
            }`}
          />
          {errors.fullName && <p className="mt-1 text-[11px] text-red-600">{errors.fullName}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1.5">
            Company Name <span className="text-[#F28C28]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Precision Engineering Ltd"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border rounded-md text-[#17212B] focus:bg-white focus:outline-none transition-colors ${
              errors.companyName ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#0B1F33]'
            }`}
          />
          {errors.companyName && <p className="mt-1 text-[11px] text-red-600">{errors.companyName}</p>}
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1.5">
            Work Email <span className="text-[#F28C28]">*</span>
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

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1.5">
            Phone / WhatsApp <span className="text-[#F28C28]">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border rounded-md text-[#17212B] focus:bg-white focus:outline-none transition-colors ${
              errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#0B1F33]'
            }`}
          />
          {errors.phone && <p className="mt-1 text-[11px] text-red-600">{errors.phone}</p>}
        </div>

        {/* Country */}
        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1.5">
            Country / Region <span className="text-[#F28C28]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. India, UAE, Germany"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-md text-[#17212B] focus:bg-white focus:border-[#0B1F33] focus:outline-none transition-colors"
          />
        </div>

        {/* Product Selection */}
        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1.5">
            Product Category <span className="text-[#F28C28]">*</span>
          </label>
          <select
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-md text-[#17212B] focus:bg-white focus:border-[#0B1F33] focus:outline-none transition-colors"
          >
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Custom Component / Other">Custom Component / Other</option>
          </select>
        </div>

        {/* Part Number (Optional) */}
        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1.5">
            Part Number / OEM Reference (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. FX-99201 or OEM brand code"
            value={formData.partNumber}
            onChange={(e) => setFormData({ ...formData, partNumber: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-md text-[#17212B] focus:bg-white focus:border-[#0B1F33] focus:outline-none transition-colors"
          />
        </div>

        {/* Estimated Quantity */}
        <div>
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1.5">
            Estimated Quantity <span className="text-[#F28C28]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. 5 units, 50 pcs / batch"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border rounded-md text-[#17212B] focus:bg-white focus:outline-none transition-colors ${
              errors.quantity ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#0B1F33]'
            }`}
          />
          {errors.quantity && <p className="mt-1 text-[11px] text-red-600">{errors.quantity}</p>}
        </div>

        {/* Application details */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1.5">
            Equipment Model / Industrial Application
          </label>
          <input
            type="text"
            placeholder="e.g. 75kW Rotary Screw Compressor, Atlas Copco / Ingersoll Rand / Kaeser type"
            value={formData.application}
            onChange={(e) => setFormData({ ...formData, application: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-md text-[#17212B] focus:bg-white focus:border-[#0B1F33] focus:outline-none transition-colors"
          />
        </div>

        {/* Message / Specifications */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1.5">
            Technical Details / Custom Requirement Notes
          </label>
          <textarea
            rows={3}
            placeholder="Include any known dimensions, operating temperature, media requirements, or delivery schedule preferences..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-md text-[#17212B] focus:bg-white focus:border-[#0B1F33] focus:outline-none transition-colors"
          />
        </div>

        {/* Frontend File Upload Mock */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-[#0B1F33] mb-1.5">
            Upload Requirement / Drawing / Specification Sheet (Optional)
          </label>
          <div className="relative border border-dashed border-slate-300 rounded-md p-4 text-center hover:border-slate-400 transition-colors bg-slate-50/50">
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept=".pdf,.png,.jpg,.jpeg,.dwg,.step,.xlsx"
            />
            <div className="flex flex-col items-center pointer-events-none">
              <Upload className="w-5 h-5 text-slate-400 mb-1" />
              <span className="text-xs font-medium text-[#0B1F33]">
                {formData.attachmentName ? (
                  <span className="text-emerald-700 font-semibold">{formData.attachmentName}</span>
                ) : (
                  'Click or drag PDF, CAD drawing, image or spec sheet'
                )}
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                PDF, PNG, JPG, DWG up to 25MB (Frontend mock processing)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>B2B Commercial Policy: Strict privacy and non-disclosure guaranteed.</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-bold text-white bg-[#F28C28] rounded-md hover:bg-[#E07D1C] transition-all disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#F28C28] whitespace-nowrap"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting RFQ...</span>
            </>
          ) : (
            <>
              <span>Submit Request for Quote</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
