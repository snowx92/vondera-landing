import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://vondera.app';

  const title =
    locale === 'ar'
      ? 'مدونة فونديرا | نصائح ومقالات التجارة الإلكترونية'
      : 'Vondera Blog | E-commerce Tips & Articles';

  const description =
    locale === 'ar'
      ? 'اقرأ أحدث المقالات والنصائح حول التجارة الإلكترونية في الشرق الأوسط. دلائل شاملة، استراتيجيات التسويق، نصائح الشحن، وأكثر من فريق فونديرا.'
      : 'Read the latest articles and tips about e-commerce in the Middle East. Comprehensive guides, marketing strategies, shipping tips, and more from Vondera team.';

  const keywords =
    locale === 'ar'
      ? 'مدونة التجارة الإلكترونية, نصائح التجارة الإلكترونية, مدونة فونديرا, دليل التجارة الإلكترونية, تسويق إلكتروني, شحن المنتجات'
      : 'e-commerce blog, e-commerce tips, Vondera blog, e-commerce guide, digital marketing, product shipping';

  return {
    title,
    description,
    keywords,

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
      languages: {
        'ar-EG': `${baseUrl}/ar/blog`,
        'en-US': `${baseUrl}/en/blog`,
      },
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/blog`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-blog.jpg`,
          width: 1200,
          height: 630,
          alt: locale === 'ar' ? 'مدونة فونديرا' : 'Vondera Blog',
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-blog.jpg`],
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

export default async function BlogLayout({
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
      name: locale === 'ar' ? 'المدونة' : 'Blog',
      url: `https://vondera.app/${locale}/blog`,
    },
  ]);

  // Blog collection page schema
  const blogPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: locale === 'ar' ? 'مدونة فونديرا' : 'Vondera Blog',
    description:
      locale === 'ar'
        ? 'مدونة فونديرا - مقالات ونصائح حول التجارة الإلكترونية في الشرق الأوسط'
        : 'Vondera Blog - Articles and tips about e-commerce in the Middle East',
    url: `https://vondera.app/${locale}/blog`,
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'Vondera',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vondera.app/logo.png',
      },
    },
  };

  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, blogPageSchema]),
        }}
      />
      {children}
    </>
  );
}
