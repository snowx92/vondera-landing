import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vinbox.meta' });
  const baseUrl = 'https://vondera.app';

  return {
    title: t('title'),
    description: t('description'),
    keywords:
      locale === 'ar'
        ? 'VInbox, صندوق الرسائل, إدارة المحادثات, واتساب بيزنس, فيسبوك ماسنجر, انستجرام'
        : 'VInbox, customer inbox, conversation management, WhatsApp Business, Facebook Messenger, Instagram',

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/vinbox`,
      languages: {
        'ar-EG': `${baseUrl}/ar/vinbox`,
        'en-US': `${baseUrl}/en/vinbox`,
      },
    },

    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/vinbox`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-vinbox.jpg`,
          width: 1200,
          height: 630,
          alt: 'VInbox Customer Inbox',
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/og-vinbox.jpg`],
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

export default async function VInboxLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vinbox.meta' });

  // Generate Product Schema for VInbox
  const productSchema = generateProductSchema(
    'VInbox',
    t('description'),
    locale,
    {
      ratingValue: '4.7',
      ratingCount: '3000',
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
      name: 'VInbox',
      url: `https://vondera.app/${locale}/vinbox`,
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
