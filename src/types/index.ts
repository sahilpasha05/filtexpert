export interface SpecificationItem {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'Filters' | 'Compressor Components' | 'Gaskets' | 'Valves' | 'Air Treatment' | 'Industrial Components';
  shortDescription: string;
  description: string;
  image: string;
  isFeatured?: boolean;
  applications: string[];
  industries: string[];
  features: string[];
  specifications: SpecificationItem[];
  faqs: FAQItem[];
  relatedProductSlugs?: string[];
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  iconName: string;
  heroImage?: string;
  commonRequirements: string[];
  solutions: string[];
  relevantProductSlugs: string[];
  applications: string[];
  faqs: FAQItem[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Air Compressor' | 'Maintenance' | 'Compressor Components' | 'Filtration' | 'Air Treatment' | 'Technical Guides';
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  image: string;
  tableOfContents?: { title: string; id: string }[];
  contentSections: {
    id?: string;
    heading?: string;
    paragraphs: string[];
    listItems?: string[];
  }[];
  relatedProductSlugs: string[];
  relatedArticleSlugs: string[];
  faqs?: FAQItem[];
}

export interface LocationData {
  slug: string;
  name: string;
  regionType: 'City Hub' | 'State / Regional' | 'National Distribution';
  headline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  serviceRadius: string;
  highlights: string[];
  popularProducts: string[];
}

export interface CompanyInfo {
  name: string;
  legalDisplayName: string;
  city: string;
  state: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  businessHours: string;
  positioning: string;
  tagline: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  partNumber?: string;
  quantity: string;
  application: string;
  message: string;
  attachmentName?: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}
