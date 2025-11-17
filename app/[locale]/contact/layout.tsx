import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://vondera.app';

  const title =
    locale === 'ar'
      ? 'تواصل معنا | فونديرا - دعم 24/7 لعملائنا'
      : 'Contact Us | Vondera - 24/7 Support for Our Customers';

  const description =
    locale === 'ar'
      ? 'تواصل مع فريق فونديرا. نحن هنا لمساعدتك! دعم فني متاح 24/7 عبر الهاتف والبريد الإلكتروني والواتساب. اتصل بنا: +20 10 70068383 | Info@vondera.app'
      : 'Contact Vondera team. We are here to help! Technical support available 24/7 via phone, email, and WhatsApp. Call us: +20 10 70068383 | Info@vondera.app';

  const keywords =
    locale === 'ar'
      ? 'تواصل مع فونديرا, دعم فونديرا, خدمة العملاء, دعم فني, رقم فونديرا, بريد فونديرا'
      : 'contact Vondera, Vondera support, customer service, technical support, Vondera phone number, Vondera email';

  return {
    title,
    description,
    keywords,

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: {
        'ar-EG': `${baseUrl}/ar/contact`,
        'en-US': `${baseUrl}/en/contact`,
      },
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/contact`,
      siteName: 'Vondera',
      images: [
        {
          url: `${baseUrl}/og-contact.jpg`,
          width: 1200,
          height: 630,
          alt: locale === 'ar' ? 'تواصل مع فونديرا' : 'Contact Vondera',
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-contact.jpg`],
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

export default async function ContactLayout({
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
      name: locale === 'ar' ? 'اتصل بنا' : 'Contact',
      url: `https://vondera.app/${locale}/contact`,
    },
  ]);

  // Contact page schema
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: locale === 'ar' ? 'تواصل معنا - فونديرا' : 'Contact Us - Vondera',
    description:
      locale === 'ar'
        ? 'تواصل مع فريق دعم فونديرا. نحن هنا لمساعدتك على مدار 24/7'
        : 'Contact Vondera support team. We are here to help you 24/7',
    url: `https://vondera.app/${locale}/contact`,
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en-US',
    mainEntity: {
      '@type': 'Organization',
      name: 'Vondera',
      url: 'https://vondera.app',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+20-10-70068383',
          contactType: 'Customer Service',
          email: 'Info@vondera.app',
          areaServed: ['EG', 'SA', 'AE', 'KW', 'JO', 'LB'],
          availableLanguage: ['Arabic', 'English'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dokki',
        addressLocality: 'Giza',
        addressCountry: 'EG',
      },
    },
  };

  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, contactPageSchema]),
        }}
      />
      {children}
    </>
  );
}
