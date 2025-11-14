import { Metadata } from 'next';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LegalContent from '@/components/legal/LegalContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - Vondera',
  description: 'Privacy policy and data protection information for Vondera users',
};

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Description of Service',
      content: `This website operates an online service engaged in Human Hair business operations. The Terms of Use Agreement set forth the legally binding terms for your use of the Website. By using the Website in any manner, including but not limited to visiting or browsing the Website, you agree to be bound by this Agreement all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.`,
    },
    {
      title: '2. General Information',
      content: `When you register with us and/or place an order, you will be asked to provide certain information, such as your name, email address, and contact details. You agree that any information you provide will always be accurate, correct, and up to date.`,
    },
    {
      title: '3. Usage Information',
      content: `We collect information on how you use our services, such as the types of content you view or engage with, the features you use, the actions you take, and the time, frequency, and duration of your activities.`,
    },
    {
      title: '4. Device Information',
      content: `We collect information from and about the devices you use to access our services, including hardware and software information such as IP address, device ID and type, device-specific settings and characteristics, app crashes, browser type.`,
    },
    {
      title: '5. How We Use Your Information',
      content: `We use the information we collect to provide, personalize, and improve our products and services. This includes using the information to customize the ads and content you see, and provide recommendations.`,
    },
    {
      title: '6. Providing Services',
      content: `We use your information to fulfill requests for products, services, support, or information, and to process transactions. We may use your information to contact you about your account, security updates, product information, and other service-related issues.`,
    },
    {
      title: '7. Personalization',
      content: `We use your information to personalize your experience, including displaying content or features that might be more relevant or interesting to you.`,
    },
    {
      title: '8. Communication',
      content: `We may use your information to communicate with you, such as responding to your comments, questions, and requests. We may also send you technical notices, security alerts, support and administrative messages.`,
    },
    {
      title: '9. Legal Compliance',
      content: `We may use your information as we believe necessary or appropriate to comply with applicable laws, lawful requests and legal processes, such as to respond to subpoenas or requests from government authorities.`,
    },
    {
      title: '10. Data Security',
      content: `We implement appropriate technical and organizational measures to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.`,
    },
    {
      title: '11. Terms & Conditions',
      content: `By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.`,
    },
    {
      title: 'Contact Us',
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don't hesitate to reach out to us.

info@vondera.app`,
    },
  ];

  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main className="min-h-screen">
        <LegalContent
          title="Privacy Policy"
          lastUpdated="July 3, 2022"
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}
