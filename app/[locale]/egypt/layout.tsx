import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://vondera.app';

  const title =
    locale === 'ar'
      ? 'منصة التجارة الإلكترونية #1 في مصر | فونديرا - ابدأ متجرك اليوم'
      : 'Egypt\'s #1 E-commerce Platform | Vondera - Start Your Store Today';

  const description =
    locale === 'ar'
      ? 'أفضل منصة تجارة إلكترونية في مصر. دعم كامل لفودافون كاش، أورنج موني، InstaPay، والدفع عند الاستلام. شحن لجميع المحافظات. 5,000+ تاجر يثقون بنا. ابتداءً من 300 جنيه شهرياً.'
      : "Egypt's best e-commerce platform. Full support for Vodafone Cash, Orange Money, InstaPay, and COD. Shipping to all governorates. 5,000+ merchants trust us. Starting from 300 EGP/month.";

  const keywords =
    locale === 'ar'
      ? 'منصة تجارة إلكترونية مصر, متجر إلكتروني مصر, فونديرا مصر, شوبيفاي مصر, تجارة إلكترونية القاهرة, متجر أونلاين مصر, فودافون كاش, أورنج موني, InstaPay, شحن مصر, بوستا, MylerZ'
      : 'e-commerce platform Egypt, online store Egypt, Vondera Egypt, Shopify Egypt, e-commerce Cairo, online shop Egypt, Vodafone Cash, Orange Money, InstaPay, shipping Egypt, Bosta, MylerZ';

  return {
    title,
    description,
    keywords,

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/egypt`,
      languages: {
        'ar-EG': `${baseUrl}/ar/egypt`,
        'en-US': `${baseUrl}/en/egypt`,
      },
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/egypt`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-egypt.jpg`,
          width: 1200,
          height: 630,
          alt: locale === 'ar' ? 'منصة فونديرا للتجارة الإلكترونية في مصر' : "Vondera E-commerce Platform in Egypt",
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-egypt.jpg`],
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

export default async function EgyptLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Generate Local Business Schema for Egypt
  const localBusinessSchema = generateLocalBusinessSchema(
    locale,
    'EG',
    locale === 'ar' ? 'مصر' : 'Egypt',
    locale === 'ar' ? 'القاهرة' : 'Cairo',
    '30.0444',
    '31.2357'
  );

  // Generate Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: locale === 'ar' ? 'الرئيسية' : 'Home',
      url: `https://vondera.app/${locale}`,
    },
    {
      name: locale === 'ar' ? 'مصر' : 'Egypt',
      url: `https://vondera.app/${locale}/egypt`,
    },
  ]);

  // Additional structured data for Egypt page
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: locale === 'ar' ? 'منصة التجارة الإلكترونية في مصر' : 'E-commerce Platform in Egypt',
    description:
      locale === 'ar'
        ? 'منصة فونديرا للتجارة الإلكترونية مصممة خصيصاً للسوق المصري مع دعم كامل لطرق الدفع والشحن المحلية'
        : 'Vondera e-commerce platform designed specifically for the Egyptian market with full support for local payment and shipping methods',
    url: `https://vondera.app/${locale}/egypt`,
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en-US',
    about: {
      '@type': 'Service',
      serviceType: locale === 'ar' ? 'منصة التجارة الإلكترونية' : 'E-commerce Platform',
      provider: {
        '@type': 'Organization',
        name: 'Vondera',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Egypt',
      },
    },
  };

  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, breadcrumbSchema, webPageSchema]),
        }}
      />
      {children}
    </>
  );
}
