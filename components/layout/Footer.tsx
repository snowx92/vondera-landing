import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const isRTL = locale === 'ar';

  const productLinks = [
    { name: 'Vondera', href: `/${locale}` },
    { name: 'VMedia', href: `/${locale}/vmedia` },
    { name: 'VPay', href: `/${locale}#vpay` },
    { name: 'VFunnel', href: `/${locale}#vfunnel` },
    { name: 'VInbox', href: `/${locale}#vinbox` },
    { name: 'VCommunity', href: `/${locale}#vcommunity` },
  ];

  const companyLinks = [
    { name: 'About Us', href: `/${locale}/about` },
    { name: 'Careers', href: `/${locale}/careers` },
    { name: 'Partners', href: `/${locale}/partners` },
    { name: 'Contact', href: `/${locale}/contact` },
  ];

  const resourceLinks = [
    { name: 'Blog', href: `/${locale}/blog` },
    { name: 'Tutorials', href: `/${locale}/tutorials` },
    { name: 'Developers', href: `/${locale}/developers` },
    { name: 'Mobile Apps', href: `/${locale}/apps` },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800" dir={isRTL ? 'rtl' : 'ltr'}>
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-2xl font-bold text-white">Vondera</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">{t('tagline')}</p>

              {/* Newsletter */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">{t('newsletter.title')}</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder={t('newsletter.placeholder')}
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <Button variant="primary" size="sm">
                    {t('newsletter.button')}
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('products')}</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('company')}</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('resources')}</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">{t('copyright')}</div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>{t('address')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href={`mailto:${t('email')}`} className="hover:text-primary-400">
                  {t('email')}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href={`tel:${t('phone')}`} className="hover:text-primary-400">
                  {t('phone')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
