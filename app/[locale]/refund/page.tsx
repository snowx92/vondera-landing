import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LegalContent from '@/components/legal/LegalContent';

export const metadata: Metadata = {
  title: 'Refund Policy - Vondera',
  description: 'Refund policy and terms for Vondera services',
};

export default async function RefundPage() {
  const t = await getTranslations('refundPage');
  
  const sections = [
    {
      title: t('sections.eligibility.title'),
      content: t('sections.eligibility.content'),
    },
    {
      title: t('sections.process.title'),
      content: t('sections.process.content'),
    },
    {
      title: t('sections.exceptions.title'),
      content: t('sections.exceptions.content'),
    },
    {
      title: t('sections.contact.title'),
      content: t('sections.contact.content'),
    },
  ];

  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main className="min-h-screen">
        <LegalContent
          title={t('title')}
          lastUpdated={t('lastUpdated')}
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}
