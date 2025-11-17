import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vdomain.meta' });
  const baseUrl = 'https://vondera.app';

  return {
    title: t('title'),
    description: t('description'),
    keywords:
      locale === 'ar'
        ? 'VDomain, دومين مخصص, نطاق خاص, custom domain, ربط الدومين'
        : 'VDomain, custom domain, domain management, connect domain, professional domain',

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/vdomain`,
      languages: {
        'ar-EG': `${baseUrl}/ar/vdomain`,
        'en-US': `${baseUrl}/en/vdomain`,
      },
    },

    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/vdomain`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-vdomain.jpg`,
          width: 1200,
          height: 630,
          alt: 'VDomain Custom Domain Management',
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/og-vdomain.jpg`],
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

export default async function VDomainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vdomain.meta' });

  // Generate Product Schema for VDomain
  const productSchema = generateProductSchema(
    'VDomain',
    t('description'),
    locale,
    {
      ratingValue: '4.6',
      ratingCount: '1200',
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
      name: 'VDomain',
      url: `https://vondera.app/${locale}/vdomain`,
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
