import React, { useEffect } from 'react';
import { IMAGES } from '../assets/images';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = IMAGES.heroCompressor,
  schema
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title.includes('FILTEXPERT') ? title : `${title} | FILTEXPERT`;

    // 2. Helper to set or update meta tag
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // 3. Update canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // 4. Inject JSON-LD Schema
    const existingSchemaScript = document.getElementById('json-ld-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup schema on unmount if needed
      const s = document.getElementById('json-ld-schema');
      if (s) s.remove();
    };
  }, [title, description, canonical, ogType, ogImage, schema]);

  return null;
};
