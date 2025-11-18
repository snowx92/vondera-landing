import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LegalContent from '@/components/legal/LegalContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - Vondera',
  description: 'Privacy policy and data protection information for Vondera users',
};

export default async function PrivacyPage() {
  const t = await getTranslations('privacyPage');
  
  const sections = [
    {
      title: t('sections.collection.title'),
      content: t('sections.collection.content'),
    },
    {
      title: t('sections.usage.title'),
      content: t('sections.usage.content'),
    },
    {
      title: t('sections.sharing.title'),
      content: t('sections.sharing.content'),
    },
    {
      title: t('sections.security.title'),
      content: t('sections.security.content'),
    },
    {
      title: t('sections.rights.title'),
      content: t('sections.rights.content'),
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
