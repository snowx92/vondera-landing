import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vpay.meta' });
  const baseUrl = 'https://vondera.app';

  return {
    title: t('title'),
    description: t('description'),
    keywords:
      locale === 'ar'
        ? 'بوابة دفع إلكتروني مصر, VPay, فودافون كاش, أورنج موني, InstaPay, قبول المدفوعات, بوابة دفع آمنة'
        : 'payment gateway Egypt, VPay, Vodafone Cash, Orange Money, InstaPay, accept payments, secure payment gateway',

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/vpay`,
      languages: {
        'ar-EG': `${baseUrl}/ar/vpay`,
        'en-US': `${baseUrl}/en/vpay`,
      },
    },

    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/vpay`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-vpay.jpg`,
          width: 1200,
          height: 630,
          alt: 'VPay Payment Gateway',
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/og-vpay.jpg`],
      creator: '@VonderaApp',
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
  };
}

export default async function VPayLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vpay.meta' });

  // Generate Product Schema for VPay
  const productSchema = generateProductSchema(
    'VPay',
    t('description'),
    locale,
    {
      ratingValue: '4.9',
      ratingCount: '2500',
      bestRating: '5',
    },
    {
      price: '0',
      priceCurrency: 'EGP',
      availability: 'https://schema.org/InStock',
    }
  );

  // Generate Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: locale === 'ar' ? 'الرئيسية' : 'Home',
      url: `https://vondera.app/${locale}`,
    },
    {
      name: 'VPay',
      url: `https://vondera.app/${locale}/vpay`,
    },
  ]);

  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productSchema, breadcrumbSchema]),
        }}
      />
      {children}
    </>
  );
}
