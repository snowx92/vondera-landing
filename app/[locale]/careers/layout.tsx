import { Metadata } from 'next';
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://vondera.app';

  const title =
    locale === 'ar'
      ? 'الوظائف | انضم لفريق فونديرا'
      : 'Careers | Join Vondera Team';

  const description =
    locale === 'ar'
      ? 'ابحث عن فرص عمل في فونديرا. انضم إلى فريقنا من المبتكرين والمطورين الذين يبنون مستقبل التجارة الإلكترونية في الشرق الأوسط.'
      : 'Find career opportunities at Vondera. Join our team of innovators and developers building the future of e-commerce in the Middle East.';

  return {
    title,
    description,

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/careers`,
      languages: {
        'ar-EG': `${baseUrl}/ar/careers`,
        'en-US': `${baseUrl}/en/careers`,
      },
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/careers`,
      siteName: 'Vondera',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CareersLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: locale === 'ar' ? 'الرئيسية' : 'Home',
      url: `https://vondera.app/${locale}`,
    },
    {
      name: locale === 'ar' ? 'الوظائف' : 'Careers',
      url: `https://vondera.app/${locale}/careers`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  );
}
