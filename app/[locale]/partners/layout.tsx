import { Metadata } from 'next';
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://vondera.app';

  const title =
    locale === 'ar'
      ? 'برنامج الشركاء | فونديرا'
      : 'Partners Program | Vondera';

  const description =
    locale === 'ar'
      ? 'انضم لبرنامج شركاء فونديرا. احصل على عمولات وفوائد حصرية من خلال مساعدة التجار على بدء متاجرهم الإلكترونية.'
      : 'Join Vondera Partners Program. Earn commissions and exclusive benefits by helping merchants start their online stores.';

  return {
    title,
    description,

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/partners`,
      languages: {
        'ar-EG': `${baseUrl}/ar/partners`,
        'en-US': `${baseUrl}/en/partners`,
      },
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/partners`,
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

export default async function PartnersLayout({
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
      name: locale === 'ar' ? 'برنامج الشركاء' : 'Partners',
      url: `https://vondera.app/${locale}/partners`,
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
