'use client';

import { useLocale, useTranslations } from 'next-intl';
import StaggeredMenu from '@/components/ui/StaggeredMenu';

export default function MobileFooter() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const menuItems = [
    { label: t('home'), ariaLabel: 'Go to home page', link: `/${locale}` },
    { label: tNav('whyVondera'), ariaLabel: 'Learn why choose Vondera', link: `/${locale}#why-vondera` },
    { label: t('products'), ariaLabel: 'View our products', link: `/${locale}#products` },
    { label: t('vpay'), ariaLabel: 'Payment solutions', link: `/${locale}/vpay` },
    { label: t('vmedia'), ariaLabel: 'Media buyers marketplace', link: `/${locale}/vmedia` },
    { label: t('vinbox'), ariaLabel: 'Unified inbox', link: `/${locale}/vinbox` },
    { label: t('vfunnel'), ariaLabel: 'Sales funnels', link: `/${locale}/vfunnel` },
    { label: t('vcommunity'), ariaLabel: 'Merchant community', link: `/${locale}/vcommunity` },
    { label: t('plans'), ariaLabel: 'View pricing plans', link: `/${locale}#pricing` },
    { label: t('aboutUs'), ariaLabel: 'Learn about us', link: `/${locale}/about` },
    { label: t('blogs'), ariaLabel: 'Read our blog', link: `/${locale}/blog` },
    { label: t('contact'), ariaLabel: 'Get in touch', link: `/${locale}/contact` },
  ];

  const socialItems = [
    { label: t('linkedin'), link: 'https://www.linkedin.com/company/vondera/' },
    { label: t('facebook'), link: 'https://www.facebook.com/vondera.eg' },
    { label: t('instagram'), link: 'https://www.instagram.com/vondera.eg/' },
    { label: t('tiktok'), link: 'https://www.tiktok.com/@vondera.eg' },
    { label: t('telegram'), link: 'https://t.me/Vonderaa' },
    { label: t('whatsapp'), link: 'https://wa.me/201070068383' },
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

