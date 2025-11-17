import { Metadata } from 'next';
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://vondera.app';

  const title =
    locale === 'ar'
      ? 'البديل العربي الأفضل لشوبيفاي | فونديرا - وفر 70% من التكاليف'
      : 'Best Arabic Alternative to Shopify | Vondera - Save 70% on Costs';

  const description =
    locale === 'ar'
      ? 'البديل العربي المثالي لشوبيفاي. نفس المميزات بسعر 70% أقل. دعم كامل للعربية، فودافون كاش، أورنج موني، شحن محلي. 5,000+ تاجر تحولوا من شوبيفاي لفونديرا. ابدأ تجربة مجانية!'
      : 'Perfect Arabic alternative to Shopify. Same features at 70% lower price. Full Arabic support, Vodafone Cash, Orange Money, local shipping. 5,000+ merchants switched from Shopify to Vondera. Start free trial!';

  const keywords =
    locale === 'ar'
      ? 'بديل شوبيفاي عربي, شوبيفاي مصر, شوبيفاي بالعربي, بديل شوبيفاي مصر, منصة أرخص من شوبيفاي, فونديرا vs شوبيفاي, بديل محلي لشوبيفاي, منصة تجارة إلكترونية عربية'
      : 'Shopify alternative Arabic, Shopify Egypt, Arabic Shopify, cheaper than Shopify, Vondera vs Shopify, local Shopify alternative, Arabic e-commerce platform, Shopify competitor';

  return {
    title,
    description,
    keywords,

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/shopify-alternative`,
      languages: {
        'ar-EG': `${baseUrl}/ar/shopify-alternative`,
        'en-US': `${baseUrl}/en/shopify-alternative`,
      },
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/shopify-alternative`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-shopify-alternative.jpg`,
          width: 1200,
          height: 630,
          alt:
            locale === 'ar' ? 'فونديرا - البديل العربي الأفضل لشوبيفاي' : 'Vondera - Best Arabic Alternative to Shopify',
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-shopify-alternative.jpg`],
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

export default async function ShopifyAlternativeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Generate Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: locale === 'ar' ? 'الرئيسية' : 'Home',
      url: `https://vondera.app/${locale}`,
    },
    {
      name: locale === 'ar' ? 'بديل شوبيفاي' : 'Shopify Alternative',
      url: `https://vondera.app/${locale}/shopify-alternative`,
    },
  ]);

  // Comparison page schema
  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: locale === 'ar' ? 'مقارنة فونديرا و شوبيفاي' : 'Vondera vs Shopify Comparison',
    description:
      locale === 'ar'
        ? 'مقارنة شاملة بين فونديرا وشوبيفاي من حيث السعر والمميزات والدعم الفني'
        : 'Comprehensive comparison between Vondera and Shopify in terms of price, features, and support',
    url: `https://vondera.app/${locale}/shopify-alternative`,
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en-US',
    about: [
      {
        '@type': 'Product',
        name: 'Vondera',
        brand: 'Vondera',
      },
      {
        '@type': 'Product',
        name: 'Shopify',
        brand: 'Shopify',
      },
    ],
  };

  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, comparisonSchema]),
        }}
      />
      {children}
    </>
  );
}
