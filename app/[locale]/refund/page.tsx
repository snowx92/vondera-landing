import { Metadata } from 'next';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LegalContent from '@/components/legal/LegalContent';

export const metadata: Metadata = {
  title: 'Refund Policy - Vondera',
  description: 'Refund policy and terms for Vondera services',
};

export default function RefundPage() {
  const sections = [
    {
      title: '1. Policy Overview',
      content: `At Vondera, we are committed to providing high-quality e-commerce services. We understand that sometimes our services may not meet your expectations, and we want to ensure you have a clear understanding of our refund policy. This policy applies to all services purchased through our platform.`,
    },
    {
      title: '2. Refund Eligibility',
      content: `To be eligible for a refund, you must meet the following criteria: You must request the refund within 3 days of your initial purchase, you must not have used our services extensively, and the request must be made through our official support channels. Refunds are only available for service dissatisfaction, not for change of mind after extensive use.`,
    },
    {
      title: '3. 3-Day Refund Window',
      content: `We offer a 3-day refund window from the date of your initial purchase. This means you have exactly 72 hours from the moment you complete your purchase to request a refund if you are not satisfied with our services. After this period, refunds will not be processed under any circumstances.`,
    },
    {
      title: '4. Refund Process',
      content: `To request a refund, please contact our support team at info@vondera.app within the 3-day window. Include your order number, reason for the refund request, and any relevant details. Our team will review your request and respond within 24-48 hours. If approved, refunds will be processed to your original payment method within 5-10 business days.`,
    },
    {
      title: '5. Non-Refundable Items',
      content: `The following are not eligible for refunds: Services used extensively beyond basic setup, custom development work that has been completed, third-party integrations or add-ons, and any services purchased more than 3 days ago. Additionally, refunds are not available for services that have been successfully delivered and are functioning as described.`,
    },
    {
      title: '6. Contact Information',
      content: `For all refund-related inquiries, please contact our dedicated support team. You can reach us via email at info@vondera.app. Please include your order details and a clear explanation of your concerns. Our team is committed to responding to all refund requests within 24-48 hours during business days.`,
    },
    {
      title: '7. Additional Terms',
      content: `This refund policy is part of our overall terms of service. By purchasing our services, you agree to these refund terms. We reserve the right to modify this policy with 30 days notice. Any disputes regarding refunds will be handled through our standard dispute resolution process.`,
    },
    {
      title: '8. Processing Time',
      content: `Once a refund is approved, processing times vary by payment method: Credit/debit card refunds typically take 5-10 business days, bank transfers may take 3-7 business days, and digital wallet refunds are usually processed within 1-3 business days. You will receive confirmation emails at each step of the process.`,
    },
    {
      title: '9. Dispute Resolution',
      content: `If you disagree with a refund decision, you may request a review by our management team. Please provide additional documentation or evidence to support your case. All disputes will be reviewed fairly and objectively. Final decisions are made by our management team and are binding.`,
    },
    {
      title: 'Important Notice',
      content: `Please note that our 3-day refund policy is strictly enforced. We cannot make exceptions to this timeframe, regardless of circumstances. This policy is designed to protect both our customers and our business, ensuring fair treatment for all parties involved.`,
    },
    {
      title: 'Need Help with Refunds?',
      content: `Our support team is here to help you with any questions about our refund policy or to process your refund request. We're committed to providing clear, transparent service and ensuring your satisfaction.

info@vondera.app`,
    },
  ];

  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main className="min-h-screen">
        <LegalContent
          title="Refund Policy"
          lastUpdated="January 2024"
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}
