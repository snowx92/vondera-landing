import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSectionModern from '@/components/sections/HeroSectionModern';
import TrustedBySection from '@/components/sections/TrustedBySection';
import ProductDemoSection from '@/components/sections/ProductDemoSection';
import SubProductsSection from '@/components/sections/SubProductsSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import IntegrationSection from '@/components/sections/IntegrationSection';
import MediaBuyerSpotlight from '@/components/sections/MediaBuyerSpotlight';
import SuccessStoriesSection from '@/components/sections/SuccessStoriesSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import ThemesSection from '@/components/sections/ThemesSection';
import MobileAppsSection from '@/components/sections/MobileAppsSection';
import PricingSection from '@/components/sections/PricingSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import FAQSection from '@/components/sections/FAQSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  return {
    title: 'Vondera - We Make E-commerce Much Easier',
    description: t('description'),
    keywords: 'e-commerce, MENA, Shopify alternative, online store, VMedia, media buying, payment gateway, Arabic',
    openGraph: {
      title: 'Vondera - We Make E-commerce Much Easier',
      description: t('description'),
      type: 'website',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSectionModern />
        <TrustedBySection />
        <ProductDemoSection />
        <SubProductsSection />
        <ComparisonSection />
        <IntegrationSection />
        <MediaBuyerSpotlight />
        <SuccessStoriesSection />
        <SocialProofSection />
        <ThemesSection />
        <MobileAppsSection />
        <PricingSection />
        <FinalCTASection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
