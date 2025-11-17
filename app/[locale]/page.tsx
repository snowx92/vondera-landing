import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSectionModern from '@/components/sections/HeroSectionModern';
import TrustedBySection from '@/components/sections/TrustedBySection';
import ProductDemoSection from '@/components/sections/ProductDemoSection';
import SubProductsSection from '@/components/sections/SubProductsSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import MediaBuyerSpotlight from '@/components/sections/MediaBuyerSpotlight';
import SocialProofSection from '@/components/sections/SocialProofSection';
import MobileAppsSection from '@/components/sections/MobileAppsSection';
import PricingSection from '@/components/sections/PricingSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import FAQSection from '@/components/sections/FAQSection';
import MapSection from '@/components/sections/MapSection';
import {
  generateOrganizationSchema,
  generateFAQSchema,
  generateWebSiteSchema,
} from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.home' });
  const baseUrl = 'https://vondera.app';

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'ar-EG': `${baseUrl}/ar`,
        'en-US': `${baseUrl}/en`,
        'x-default': `${baseUrl}/ar`,
      },
    },

    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
      url: `${baseUrl}/${locale}`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: t('og.imageAlt'),
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: [`${baseUrl}/og-image.jpg`],
      creator: '@VonderaApp',
      site: '@VonderaApp',
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    verification: {
      google: 'your-google-verification-code',
    },

    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.faqs' });

  // Prepare FAQ data for schema
  const faqs = [
    { question: t('question1.q'), answer: t('question1.a') },
    { question: t('question2.q'), answer: t('question2.a') },
    { question: t('question3.q'), answer: t('question3.a') },
    { question: t('question4.q'), answer: t('question4.a') },
    { question: t('question5.q'), answer: t('question5.a') },
    { question: t('question6.q'), answer: t('question6.a') },
  ];

  // Generate structured data
  const organizationSchema = generateOrganizationSchema(locale);
  const faqSchema = generateFAQSchema(faqs, locale);
  const websiteSchema = generateWebSiteSchema(locale);

  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, faqSchema, websiteSchema]),
        }}
      />

      <Header />
      <main className="min-h-screen">
        <HeroSectionModern />
        <TrustedBySection />
        <ProductDemoSection />
        <SubProductsSection />
        <ComparisonSection />
        <MediaBuyerSpotlight />

        <SocialProofSection />

        <MobileAppsSection />
        <PricingSection />
        <FinalCTASection />
        <FAQSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
