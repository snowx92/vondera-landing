/**
 * Structured Data (Schema.org JSON-LD) utilities for SEO
 * These schemas help search engines understand and display our content better
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface AggregateRating {
  ratingValue: string;
  ratingCount: string;
  bestRating?: string;
}

export interface Offer {
  price: string;
  priceCurrency: string;
  priceValidUntil?: string;
  availability?: string;
}

/**
 * Generate Organization Schema for homepage
 */
export function generateOrganizationSchema(locale: string) {
  const baseUrl = 'https://vondera.app';

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${baseUrl}/${locale}#organization`,
    name: 'Vondera',
    alternateName: locale === 'ar' ? 'فونديرا' : 'Vondera',
    url: `${baseUrl}/${locale}`,
    logo: `${baseUrl}/logo.png`,
    description:
      locale === 'ar'
        ? 'منصة التجارة الإلكترونية الشاملة للشرق الأوسط وشمال أفريقيا - البديل العربي لشوبيفاي'
        : 'The comprehensive e-commerce platform for the Middle East and North Africa - The Arabic alternative to Shopify',

    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',

    offers: {
      '@type': 'Offer',
      price: '300',
      priceCurrency: 'EGP',
      priceValidUntil: '2025-12-31',
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '10000',
      bestRating: '5',
    },

    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressLocality: 'Cairo',
      addressRegion: 'Cairo Governorate',
    },

    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Arabic', 'English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },

    sameAs: [
      'https://facebook.com/vonderaapp',
      'https://twitter.com/vonderaapp',
      'https://instagram.com/vonderaapp',
      'https://linkedin.com/company/vondera',
    ],

    potentialAction: {
      '@type': 'UseAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/${locale}`,
        actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
      },
    },
  };
}

/**
 * Generate FAQ Schema for FAQ sections
 */
export function generateFAQSchema(faqs: FAQItem[], locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `https://vondera.app/${locale}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Product Schema for sub-products (VPay, VFunnel, etc.)
 */
export function generateProductSchema(
  name: string,
  description: string,
  locale: string,
  rating?: AggregateRating,
  offer?: Offer
) {
  const baseUrl = 'https://vondera.app';

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: 'Vondera',
    },
    url: `${baseUrl}/${locale}`,
  };

  if (offer) {
    schema.offers = {
      '@type': 'Offer',
      availability: offer.availability || 'https://schema.org/InStock',
      price: offer.price,
      priceCurrency: offer.priceCurrency,
      ...(offer.priceValidUntil && { priceValidUntil: offer.priceValidUntil }),
    };
  }

  if (rating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating.ratingValue,
      reviewCount: rating.ratingCount,
      bestRating: rating.bestRating || '5',
    };
  }

  return schema;
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Article Schema for blog posts
 */
export function generateArticleSchema(
  headline: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified: string,
  authorName: string,
  locale: string,
  url: string,
  keywords?: string
) {
  const baseUrl = 'https://vondera.app';

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vondera',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en-US',
    ...(keywords && { keywords }),
  };
}

/**
 * Generate Local Business Schema for location pages
 */
export function generateLocalBusinessSchema(
  locale: string,
  countryCode: string,
  countryName: string,
  city: string,
  latitude?: string,
  longitude?: string
) {
  const baseUrl = 'https://vondera.app';

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Vondera',
    '@id': `${baseUrl}/${locale}#localbusiness`,
    url: `${baseUrl}/${locale}`,
    logo: `${baseUrl}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: countryCode,
      addressLocality: city,
    },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '300 EGP - 1000 EGP',
    areaServed: {
      '@type': 'Country',
      name: countryName,
    },
  };

  if (latitude && longitude) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    };
  }

  return schema;
}

/**
 * Generate WebSite Schema with SearchAction
 */
export function generateWebSiteSchema(locale: string) {
  const baseUrl = 'https://vondera.app';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/${locale}#website`,
    url: `${baseUrl}/${locale}`,
    name: 'Vondera',
    description:
      locale === 'ar'
        ? 'منصة التجارة الإلكترونية الشاملة للشرق الأوسط'
        : 'Complete E-commerce Platform for the Middle East',
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/${locale}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Utility to prepare JSON-LD data for rendering
 * Use this to combine multiple schemas into a single array
 */
export function prepareStructuredData(data: object | object[]): object[] {
  return Array.isArray(data) ? data : [data];
}
