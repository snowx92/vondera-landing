import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://vondera.app';

  const title =
    locale === 'ar'
      ? 'من نحن | فونديرا - فريق يبني مستقبل التجارة الإلكترونية في الشرق الأوسط'
      : 'About Us | Vondera - Building the Future of E-commerce in MENA';

  const description =
    locale === 'ar'
      ? 'تعرف على فريق فونديرا. نحن مجموعة من المبتكرين والمطورين الشغوفين بتمكين التجار في الشرق الأوسط. مهمتنا: جعل التجارة الإلكترونية في متناول الجميع. قابل قادتنا ومؤسسينا.'
      : 'Meet the Vondera team. We are innovators and developers passionate about empowering merchants in the Middle East. Our mission: make e-commerce accessible to everyone. Meet our leaders and founders.';

  const keywords =
    locale === 'ar'
      ? 'فريق فونديرا, مؤسسو فونديرا, شركة تجارة إلكترونية مصر, فريق العمل, رؤية الشركة, قصتنا'
      : 'Vondera team, Vondera founders, e-commerce company Egypt, our team, company vision, our story';

  return {
    title,
    description,
    keywords,

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        'ar-EG': `${baseUrl}/ar/about`,
        'en-US': `${baseUrl}/en/about`,
      },
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/about`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-about.jpg`,
          width: 1200,
          height: 630,
          alt: locale === 'ar' ? 'فريق فونديرا' : 'Vondera Team',
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-about.jpg`],
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

export default async function AboutLayout({
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
      name: locale === 'ar' ? 'من نحن' : 'About',
      url: `https://vondera.app/${locale}/about`,
    },
  ]);

  // About page schema
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: locale === 'ar' ? 'من نحن - فونديرا' : 'About - Vondera',
    description:
      locale === 'ar'
        ? 'معلومات عن فريق فونديرا ورؤيتنا لمستقبل التجارة الإلكترونية في الشرق الأوسط'
        : 'Information about Vondera team and our vision for the future of e-commerce in the Middle East',
    url: `https://vondera.app/${locale}/about`,
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en-US',
    mainEntity: {
      '@type': 'Organization',
      name: 'Vondera',
      url: 'https://vondera.app',
      description:
        locale === 'ar'
          ? 'منصة التجارة الإلكترونية الشاملة للشرق الأوسط وشمال أفريقيا'
          : 'All-in-one e-commerce platform for the Middle East and North Africa',
      foundingDate: '2020',
      founders: [
        {
          '@type': 'Person',
          name: 'Mohamed Elshreef',
          jobTitle: 'CEO & Co-Founder',
        },
        {
          '@type': 'Person',
          name: 'Shreif El Sayed',
          jobTitle: 'CTO & Founder',
        },
      ],
    },
  };

  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, aboutPageSchema]),
        }}
      />
      {children}
    </>
  );
}
