import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vfunnel.meta' });
  const baseUrl = 'https://vondera.app';

  return {
    title: t('title'),
    description: t('description'),
    keywords:
      locale === 'ar'
        ? 'VFunnel, قمع مبيعات, صفحات هبوط, landing pages, مسار تحويل, صفحات بيع'
        : 'VFunnel, sales funnel, landing pages, conversion funnel, sales pages, funnel builder',

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/vfunnel`,
      languages: {
        'ar-EG': `${baseUrl}/ar/vfunnel`,
        'en-US': `${baseUrl}/en/vfunnel`,
      },
    },

    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/vfunnel`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-vfunnel.jpg`,
          width: 1200,
          height: 630,
          alt: 'VFunnel Sales Funnel Builder',
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/og-vfunnel.jpg`],
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

export default async function VFunnelLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vfunnel.meta' });

  // Generate Product Schema for VFunnel
  const productSchema = generateProductSchema(
    'VFunnel',
    t('description'),
    locale,
    {
      ratingValue: '4.8',
      ratingCount: '1800',
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
      name: 'VFunnel',
      url: `https://vondera.app/${locale}/vfunnel`,
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
