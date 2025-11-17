import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const isRTL = locale === 'ar';

  const sections = [
    { name: t('process'), href: `/${locale}#process` },
    { name: t('services'), href: `/${locale}#services` },
    { name: t('benefits'), href: `/${locale}#benefits` },
    { name: t('plans'), href: `/${locale}#pricing` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const pages = [
    { name: t('home'), href: `/${locale}` },
    { name: t('aboutUs'), href: `/${locale}/about` },
    { name: t('blogs'), href: `/${locale}/blog` },
    { name: t('tutorials'), href: `/${locale}/tutorials` },
    { name: t('careers'), href: `/${locale}/careers` },
    { name: t('developers'), href: `/${locale}/developers` },
    { name: t('partners'), href: `/${locale}/partners` },
    { name: t('investment'), href: `/${locale}/investment` },
  ];

  const products = [
    { name: t('vpay'), href: `/${locale}/vpay` },
    { name: t('vdomain'), href: `/${locale}/vdomain` },
    { name: t('vmedia'), href: `/${locale}/vmedia` },
    { name: t('vinbox'), href: `/${locale}/vinbox` },
    { name: t('vfunnel'), href: `/${locale}/vfunnel` },
    { name: t('vcommunity'), href: `/${locale}/vcommunity` },
    { name: t('vsupply'), href: '#', comingSoon: true },
    { name: t('vship'), href: '#', comingSoon: true },
    { name: t('vstore'), href: '#', comingSoon: true },
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
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <Container>
        {/* Main Footer Content */}
        <div className="relative py-16 md:py-20">
          {/* Top Section - Logo & Description */}
          <div className="mb-16 pb-12 border-b border-gray-800/50">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="max-w-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Image 
                        src="/logo.webp" 
                        alt="Vondera Logo" 
                        width={56} 
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">Vondera</span>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  The all-in-one e-commerce platform empowering Egyptian businesses to grow, scale, and succeed in the digital marketplace.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Trusted by 10,000+ merchants</span>
                </div>
              </div>
              
              {/* Social Links - Top Right */}
              <div className="lg:text-right">
                <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2 lg:justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                  Connect With Us
                </h4>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {socialLinks.map((social) => (
                    social.comingSoon ? (
                      <div
                        key={social.name}
                        className="relative group"
                      >
                        <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center opacity-40 cursor-not-allowed border border-gray-700/50">
                          {social.svg && (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <g dangerouslySetInnerHTML={{ __html: social.svg }} />
                            </svg>
                          )}
                        </div>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Coming Soon
                        </span>
                      </div>
                    ) : (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                        <div className="relative w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gray-700/80 transition-all border border-gray-700/50 group-hover:border-purple-500/50 transform group-hover:scale-110 group-hover:-translate-y-1">
                          {social.icon ? (
                            <social.icon size={20} className="transition-transform" />
                          ) : social.svg ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transition-transform">
                              <g dangerouslySetInnerHTML={{ __html: social.svg }} />
                            </svg>
                          ) : null}
                        </div>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {social.name}
                        </span>
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Sections */}
            <div>
              <h4 className="text-white font-bold mb-6 text-base flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                Sections
              </h4>
              <ul className="space-y-3">
                {sections.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h4 className="text-white font-bold mb-6 text-base flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                Pages
              </h4>
              <ul className="space-y-3">
                {pages.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold mb-6 text-base flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                Products
              </h4>
              <ul className="space-y-3">
                {products.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                        {link.comingSoon && (
                          <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
                            Soon
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-span-2">
              <h4 className="text-white font-bold mb-6 text-base flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@vondera.app"
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-pink-500/20 border border-gray-700/50 group-hover:border-purple-500/50 transition-all flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Email</div>
                      <span className="text-sm font-medium">info@vondera.app</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+201070068383"
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-pink-500/20 border border-gray-700/50 group-hover:border-purple-500/50 transition-all flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Phone</div>
                      <span className="text-sm font-medium">+20 10 70068383</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps?ll=30.028018,31.201973&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=18276881079965047230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-pink-500/20 border border-gray-700/50 group-hover:border-purple-500/50 transition-all flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Address</div>
                      <span className="text-sm font-medium leading-relaxed">b5105 - Creativa Innovation Hub<br />Giza, Egypt</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-gray-800/50 py-6">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-500">
              <span>© {new Date().getFullYear()} Vondera.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Empowering e-commerce</span>
            </div>
            
            <div className="flex items-center gap-6">
              <Link 
                href={`/${locale}/privacy`} 
                className="text-gray-400 hover:text-purple-400 transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                href={`/${locale}/terms`} 
                className="text-gray-400 hover:text-purple-400 transition-colors relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
