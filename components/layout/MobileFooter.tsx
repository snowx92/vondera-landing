'use client';

import { useLocale } from 'next-intl';
import StaggeredMenu from '@/components/ui/StaggeredMenu';

export default function MobileFooter() {
  const locale = useLocale();

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: `/${locale}` },
    { label: 'Why Vondera', ariaLabel: 'Learn why choose Vondera', link: `/${locale}#why-vondera` },
    { label: 'Products', ariaLabel: 'View our products', link: `/${locale}#products` },
    { label: 'VPay', ariaLabel: 'Payment solutions', link: `/${locale}/vpay` },
    { label: 'VMedia', ariaLabel: 'Media buyers marketplace', link: `/${locale}/vmedia` },
    { label: 'VInbox', ariaLabel: 'Unified inbox', link: `/${locale}/vinbox` },
    { label: 'VFunnel', ariaLabel: 'Sales funnels', link: `/${locale}/vfunnel` },
    { label: 'VCommunity', ariaLabel: 'Merchant community', link: `/${locale}/vcommunity` },
    { label: 'Pricing', ariaLabel: 'View pricing plans', link: `/${locale}#pricing` },
    { label: 'About', ariaLabel: 'Learn about us', link: `/${locale}/about` },
    { label: 'Blog', ariaLabel: 'Read our blog', link: `/${locale}/blog` },
    { label: 'Contact', ariaLabel: 'Get in touch', link: `/${locale}/contact` },
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/vondera/' },
    { label: 'Facebook', link: 'https://www.facebook.com/vondera.eg' },
    { label: 'Instagram', link: 'https://www.instagram.com/vondera.eg/' },
    { label: 'TikTok', link: 'https://www.tiktok.com/@vondera.eg' },
    { label: 'Telegram', link: 'https://t.me/Vonderaa' },
    { label: 'WhatsApp', link: 'https://wa.me/201070068383' },
  ];

  return (
    <div className="lg:hidden">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#000"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#764ba2', '#667eea', '#5227FF']}
        logoUrl="/logo.webp"
        accentColor="#8b5cf6"
        isFixed={true}
        onMenuOpen={() => {
          if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
          }
        }}
        onMenuClose={() => {
          if (typeof document !== 'undefined') {
            document.body.style.overflow = '';
          }
        }}
      />
    </div>
  );
}

