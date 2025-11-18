import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LegalContent from '@/components/legal/LegalContent';
import PricingSection from '@/components/sections/PricingSection';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Vondera',
  description: 'Terms and conditions for using Vondera e-commerce platform',
};

export default async function TermsPage() {
  const t = await getTranslations('termsPage');
  
  const sections = [
    {
      title: t('sections.acceptance.title'),
      content: t('sections.acceptance.content'),
    },
    {
      title: t('sections.services.title'),
      content: t('sections.services.content'),
    },
    {
      title: t('sections.account.title'),
      content: t('sections.account.content'),
    },
    {
      title: t('sections.payments.title'),
      content: t('sections.payments.content'),
    },
    {
      title: t('sections.termination.title'),
      content: t('sections.termination.content'),
    },
    {
      title: t('sections.liability.title'),
      content: t('sections.liability.content'),
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
        
        {/* Subscription Plans Details */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Subscription Plans Details
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that best fits your business needs
              </p>
            </div>
            <PricingSection />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
