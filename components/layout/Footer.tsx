import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const isRTL = locale === 'ar';

  const sections = [
    { name: 'Process', href: `/${locale}#process` },
    { name: 'Services', href: `/${locale}#services` },
    { name: 'Benefits', href: `/${locale}#benefits` },
    { name: 'Plans', href: `/${locale}#pricing` },
    { name: 'Contact', href: `/${locale}/contact` },
  ];

  const pages = [
    { name: 'Home', href: `/${locale}` },
    { name: 'About Us', href: `/${locale}/about` },
    { name: 'Blogs', href: `/${locale}/blog` },
    { name: 'Tutorials', href: `/${locale}/tutorials` },
    { name: 'Careers', href: `/${locale}/careers` },
    { name: 'Developers', href: `/${locale}/developers` },
    { name: 'Partners', href: `/${locale}/partners` },
  ];

  const products = [
    { name: 'VPay', href: `/${locale}#vpay` },
    { name: 'VDomain', href: `/${locale}#vdomain` },
    { name: 'VFunnels', href: `/${locale}#vfunnels` },
    { name: 'VCommunity', href: `/${locale}#vcommunity` },
    { name: 'VSupply', href: '#', comingSoon: true },
    { name: 'VShip', href: '#', comingSoon: true },
    { name: 'VStore', href: '#', comingSoon: true },
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/vondera/',
      icon: Linkedin,
    },
    { 
      name: 'Facebook',
      href: 'https://www.facebook.com/vondera.eg',
      icon: Facebook,
    },
    { 
      name: 'Instagram',
      href: 'https://www.instagram.com/vondera.eg/',
      icon: Instagram,
    },
    { 
      name: 'TikTok',
      href: 'https://www.tiktok.com/@vondera.eg',
      svg: '<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>',
    },
    { 
      name: 'Telegram',
      href: 'https://t.me/Vonderaa',
      svg: '<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>',
    },
    { 
      name: 'WhatsApp',
      href: 'https://wa.me/201070068383',
      comingSoon: false,
      svg: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-gray-300 border-t border-gray-800/50" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5 pointer-events-none" />
      
      <Container>
        {/* Main Footer Content */}
        <div className="relative py-16 md:py-20">
          {/* Top Section - Logo & Description */}
          <div className="mb-12 pb-12 border-b border-gray-800/50">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                    <span className="text-white font-bold text-2xl">V</span>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Vondera</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  The all-in-one e-commerce platform empowering businesses to grow, scale, and succeed in the digital marketplace.
                </p>
              </div>
              
              {/* Social Links - Top Right */}
              <div>
                <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    social.comingSoon ? (
                      <button
                        key={social.name}
                        disabled
                        className="w-11 h-11 bg-gray-800/50 rounded-xl flex items-center justify-center opacity-40 cursor-not-allowed border border-gray-700/50"
                        aria-label={`${social.name} (Coming Soon)`}
                      >
                        {social.svg && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <g dangerouslySetInnerHTML={{ __html: social.svg }} />
                          </svg>
                        )}
                      </button>
                    ) : (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="group w-11 h-11 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 border border-gray-700/50 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20 hover:scale-110"
                      >
                        {social.icon ? (
                          <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                        ) : social.svg ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                            <g dangerouslySetInnerHTML={{ __html: social.svg }} />
                          </svg>
                        ) : null}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Sections */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-lg relative inline-block">
                Sections
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 -mb-2"></span>
              </h4>
              <ul className="space-y-3.5">
                {sections.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="group inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-primary-400 transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-lg relative inline-block">
                Pages
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 -mb-2"></span>
              </h4>
              <ul className="space-y-3.5">
                {pages.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="group inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-primary-400 transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-lg relative inline-block">
                Product
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 -mb-2"></span>
              </h4>
              <ul className="space-y-3.5">
                {products.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="group inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-primary-400 transition-colors"></span>
                      <span>
                        {link.name}
                        {link.comingSoon && (
                          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gray-800/80 text-gray-500 border border-gray-700/50">Soon</span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-lg relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 -mb-2"></span>
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@vondera.app"
                    className="group flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    <div className="w-9 h-9 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-primary-500/10 border border-gray-700/50 group-hover:border-primary-500/30 transition-all flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <span className="leading-9 text-sm">info@vondera.app</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+201070068383"
                    className="group flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    <div className="w-9 h-9 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-primary-500/10 border border-gray-700/50 group-hover:border-primary-500/30 transition-all flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <span className="leading-9 text-sm">+20 10 70068383</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps?ll=30.028018,31.201973&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=18276881079965047230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    <div className="w-9 h-9 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-primary-500/10 border border-gray-700/50 group-hover:border-primary-500/30 transition-all flex-shrink-0">
                      <MapPin size={16} />
                    </div>
                    <span className="leading-relaxed text-sm">b5105 - Creativa Innovation Hub - Giza</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-gray-800/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>© {new Date().getFullYear()} Vondera. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
