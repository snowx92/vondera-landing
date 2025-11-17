import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vmedia.meta' });
  const baseUrl = 'https://vondera.app';

  return {
    title: t('title'),
    description: t('description'),
    keywords:
      locale === 'ar'
        ? 'ميديا باير مصر, VMedia, مشتري إعلانات, سوق المسوقين, حملات إعلانية, تسويق إلكتروني'
        : 'media buyer Egypt, VMedia, advertisers marketplace, media buying, advertising campaigns, digital marketing',

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/vmedia`,
      languages: {
        'ar-EG': `${baseUrl}/ar/vmedia`,
        'en-US': `${baseUrl}/en/vmedia`,
      },
    },

    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/vmedia`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-vmedia.jpg`,
          width: 1200,
          height: 630,
          alt: 'VMedia Marketplace',
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/og-vmedia.jpg`],
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

export default async function VMediaLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vmedia.meta' });

  // Generate Product Schema for VMedia
  const productSchema = generateProductSchema(
    'VMedia',
    t('description'),
    locale,
    {
      ratingValue: '4.8',
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
      name: 'VMedia',
      url: `https://vondera.app/${locale}/vmedia`,
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
