import { Metadata } from 'next';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LegalContent from '@/components/legal/LegalContent';
import PricingSection from '@/components/sections/PricingSection';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Vondera',
  description: 'Terms and conditions for using Vondera e-commerce platform',
};

export default function TermsPage() {
  const sections = [
    {
      title: '1. Subscription Plans',
      content: `Our service offers multiple subscription tiers to meet different business needs. Please see our pricing section below for detailed information about features, pricing, and billing cycles. By subscribing to any plan, you agree to pay the applicable fees and charges.`,
    },
    {
      title: '2. User Content',
      content: `a) Your Responsibility:
You are solely responsible for any content you upload, share, or submit using our App and Website. You must ensure that your content complies with all applicable laws and regulations.

b) Use of User Content:
By using our App and Website, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, reproduce, and distribute your user-generated content for the purpose of providing and promoting our services.`,
    },
    {
      title: '3. Intellectual Property',
      content: `a) Ownership:
The App, Website, and all associated content, including but not limited to text, graphics, logos, and images, are owned by us and protected by intellectual property laws.

b) Restricted Use:
You may not reproduce, modify, distribute, or create derivative works based on our content without our explicit written consent.`,
    },
    {
      title: '4. Limitation of Liability',
      content: `a) No Guarantees:
While we strive to provide a seamless experience, we do not guarantee the accuracy, completeness, or reliability of our services. You acknowledge that your use of the App and Website is at your own risk.

b) Indirect Damages:
We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the App or Website, including but not limited to lost profits or data.`,
    },
    {
      title: '5. Modifications to Terms',
      content: `We reserve the right to modify or update these Terms & Conditions at any time. Changes will be effective upon posting to the Website. Continued use of the App and Website after changes have been made constitutes your acceptance of the updated terms.`,
    },
  ];

  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main className="min-h-screen">
        <LegalContent
          title="Terms & Conditions"
          lastUpdated="July 3, 2022"
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
