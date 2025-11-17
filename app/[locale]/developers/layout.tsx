import { Metadata } from 'next';
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://vondera.app';

  const title =
    locale === 'ar'
      ? 'موارد المطورين | فونديرا API'
      : 'Developers | Vondera API';

  const description =
    locale === 'ar'
      ? 'وثائق API فونديرا للمطورين. ادمج متجرك مع منصة فونديرا باستخدام REST API القوية والموثوقة.'
      : 'Vondera API documentation for developers. Integrate your store with Vondera platform using our powerful and reliable REST API.';

  return {
    title,
    description,

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/developers`,
      languages: {
        'ar-EG': `${baseUrl}/ar/developers`,
        'en-US': `${baseUrl}/en/developers`,
      },
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/developers`,
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

export default async function DevelopersLayout({
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
      name: locale === 'ar' ? 'المطورين' : 'Developers',
      url: `https://vondera.app/${locale}/developers`,
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
