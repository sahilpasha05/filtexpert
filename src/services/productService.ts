import { products } from '../data/products';
import { industries } from '../data/industries';
import { articles } from '../data/articles';
import { locations } from '../data/locations';
import { generalFAQs } from '../data/faqs';
import { Product, Industry, Article, LocationData, FAQItem, QuoteFormData, ContactFormData } from '../types';

/**
 * Product & Content Service Layer
 * Abstracted API layer that currently resolves mock data with simulated asynchronous delays.
 * This structure enables clean replacement with real REST/GraphQL API clients in future iterations.
 */

// Simulated network latency helper
const simulateDelay = <T>(data: T, ms = 50): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
};

export const getProducts = async (): Promise<Product[]> => {
  return simulateDelay([...products]);
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const featured = products.filter((p) => p.isFeatured);
  return simulateDelay(featured);
};

export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
  const product = products.find((p) => p.slug === slug);
  return simulateDelay(product);
};

export const getRelatedProducts = async (slugs?: string[]): Promise<Product[]> => {
  if (!slugs || slugs.length === 0) return [];
  const related = products.filter((p) => slugs.includes(p.slug));
  return simulateDelay(related);
};

export const getIndustries = async (): Promise<Industry[]> => {
  return simulateDelay([...industries]);
};

export const getIndustryBySlug = async (slug: string): Promise<Industry | undefined> => {
  const industry = industries.find((ind) => ind.slug === slug);
  return simulateDelay(industry);
};

export const getArticles = async (): Promise<Article[]> => {
  return simulateDelay([...articles]);
};

export const getArticleBySlug = async (slug: string): Promise<Article | undefined> => {
  const article = articles.find((a) => a.slug === slug);
  return simulateDelay(article);
};

export const getLocations = async (): Promise<LocationData[]> => {
  return simulateDelay([...locations]);
};

export const getLocationBySlug = async (slug: string): Promise<LocationData | undefined> => {
  const loc = locations.find((l) => l.slug === slug);
  return simulateDelay(loc);
};

export const getFAQs = async (): Promise<FAQItem[]> => {
  return simulateDelay([...generalFAQs]);
};

export interface SubmissionResponse {
  success: boolean;
  referenceId: string;
  message: string;
  submittedAt: string;
}

export const submitQuote = async (data: QuoteFormData): Promise<SubmissionResponse> => {
  // Simulate 600ms backend processing
  await new Promise((resolve) => setTimeout(resolve, 600));
  
  // Return structured response
  const ref = `RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
  return {
    success: true,
    referenceId: ref,
    message: `Thank you, ${data.fullName}. Your quotation request for "${data.product}" has been registered. Reference: ${ref}. Our technical engineering team will review your specifications and contact you shortly.`,
    submittedAt: new Date().toISOString()
  };
};

export const submitContact = async (data: ContactFormData): Promise<SubmissionResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 600));
  
  const ref = `ENQ-${Math.floor(100000 + Math.random() * 900000)}`;
  return {
    success: true,
    referenceId: ref,
    message: `Thank you, ${data.name}. Your enquiry has been received. Reference: ${ref}. Our B2B support desk will get back to you within 24 business hours.`,
    submittedAt: new Date().toISOString()
  };
};
