import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vcommunity.meta' });
  const baseUrl = 'https://vondera.app';

  return {
    title: t('title'),
    description: t('description'),
    keywords:
      locale === 'ar'
        ? 'VCommunity, مجتمع التجار, منتدى التجارة الإلكترونية, شبكة التجار, مجتمع فونديرا'
        : 'VCommunity, merchant community, e-commerce forum, merchant network, Vondera community',

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/vcommunity`,
      languages: {
        'ar-EG': `${baseUrl}/ar/vcommunity`,
        'en-US': `${baseUrl}/en/vcommunity`,
      },
    },

    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/vcommunity`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-vcommunity.jpg`,
          width: 1200,
          height: 630,
          alt: 'VCommunity Merchant Network',
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/og-vcommunity.jpg`],
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

export default async function VCommunityLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vcommunity.meta' });

  // Generate Product Schema for VCommunity
  const productSchema = generateProductSchema(
    'VCommunity',
    t('description'),
    locale,
    {
      ratingValue: '4.7',
      ratingCount: '5000',
      bestRating: '5',
    }
  );

  // Generate Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: locale === 'ar' ? 'الرئيسية' : 'Home',
      url: `https://vondera.app/${locale}`,
    },
    {
      name: 'VCommunity',
      url: `https://vondera.app/${locale}/vcommunity`,
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
