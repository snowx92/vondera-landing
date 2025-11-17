'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X, ChevronDown, Globe, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

interface HeaderProps {
  variant?: 'transparent' | 'solid';
}

export default function Header({ variant = 'transparent' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isProductsExpanded, setIsProductsExpanded] = useState(false);
  const locale = useLocale();
  const t = useTranslations('nav');
  const isRTL = locale === 'ar';

  const isSolidVariant = variant === 'solid';

  const products = [
    {
      name: t('vpay'),
      description: locale === 'ar' ? 'بوابة دفع متكاملة للمعاملات السلسة' : 'Integrated payment gateway for seamless transactions',
      href: `/${locale}/vpay`,
    },
    {
      name: t('vdomain'),
      description: locale === 'ar' ? 'إدارة النطاقات المخصصة لمتجرك' : 'Custom domain management for your store',
      href: `/${locale}/vdomain`,
    },
    {
      name: t('vinbox'),
      description: locale === 'ar' ? 'صندوق وارد موحد لجميع رسائل العملاء' : 'Unified inbox for all your customer messages',
      href: `/${locale}/vinbox`,
    },
    {
      name: t('vfunnel'),
      description: locale === 'ar' ? 'أنشئ مسارات مبيعات عالية التحويل' : 'Create high-converting sales funnels',
      href: `/${locale}/vfunnel`,
    },
    {
      name: t('vmedia'),
      description: locale === 'ar' ? 'تواصل مع أفضل  ميديا باير لحملاتك' : 'Connect with top media buyers for your campaigns',
      href: `/${locale}/vmedia`,
    },
    {
      name: t('vcommunity'),
      description: locale === 'ar' ? 'تواصل مع التجار وانمُ معاً' : 'Connect with merchants and grow together',
      href: `/${locale}/vcommunity`,
    },
    {
      name: t('vsupply'),
      description: locale === 'ar' ? 'إدارة سلسلة التوريد (قريباً)' : 'Supply chain management (Coming Soon)',
      href: '#',
      comingSoon: true,
    },
    {
      name: t('vship'),
      description: locale === 'ar' ? 'تكامل الشحن واللوجستيات (قريباً)' : 'Shipping & logistics integration (Coming Soon)',
      href: '#',
      comingSoon: true,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Get current scroll position
      const scrollY = window.scrollY;
      // Prevent body scroll and maintain scroll position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    window.location.href = `/${newLocale}`;
  };

  // Determine if we should show solid background
  const shouldBeWhite = isSolidVariant || isScrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        shouldBeWhite
          ? 'bg-white/95 backdrop-blur-lg shadow-md' 
          : 'bg-transparent before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/20 before:to-transparent before:pointer-events-none'
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20 relative z-10">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-1 rtl:gap-1">
            <Image 
              src="/logo.webp" 
              alt="Vondera Logo" 
              width={120} 
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
            <span className={cn(
              "text-xl md:text-2xl font-bold font-outfit transition-colors duration-300",
              shouldBeWhite ? "gradient-text" : "text-white"
            )}>Vondera</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-outfit" dir="ltr">
            <Link 
              href={`/${locale}#why-vondera`} 
              className={cn(
                "transition-colors duration-300 hover:text-primary-500",
                shouldBeWhite ? "text-gray-700" : "text-white"
              )}
            >
              {t('whyVondera')}
            </Link>
            {/* Solution Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsSolutionOpen(true)}
              onMouseLeave={() => setIsSolutionOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 transition-colors duration-300 hover:text-primary-500",
                  shouldBeWhite ? "text-gray-700" : "text-white"
                )}
                onMouseEnter={() => setIsSolutionOpen(true)}
                onMouseLeave={() => setIsSolutionOpen(false)}
              >
                {t('solution')}
                <ChevronDown size={16} className={cn(
                  "transition-transform duration-200",
                  isSolutionOpen && "rotate-180"
                )} />
              </button>
              {/* Dropdown Menu - Full Width */}
              {isSolutionOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                  onMouseEnter={() => setIsSolutionOpen(true)}
                  onMouseLeave={() => setIsSolutionOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {products.map((product, index) => (
                        <Link
                          key={index}
                          href={product.href}
                          className={cn(
                            "flex items-start gap-3 p-4 rounded-xl transition-colors",
                            product.comingSoon 
                              ? "opacity-60 cursor-not-allowed" 
                              : "hover:bg-primary-50 group/item"
                          )}
                          onClick={(e) => product.comingSoon && e.preventDefault()}
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 mb-1 group-hover/item:text-primary-600 transition-colors">
                              {product.name}
                              {product.comingSoon && (
                                <span className="ml-2 text-xs font-normal text-gray-500">
                                  {locale === 'ar' ? 'قريباً' : 'Coming Soon'}
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">
                              {product.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link 
              href={`/${locale}/vmedia`} 
              className={cn(
                "font-semibold transition-colors duration-300",
                shouldBeWhite ? "text-vmedia-600 hover:text-vmedia-700" : "text-white hover:text-vmedia-400"
              )}
            >
              {t('mediaBuyers')}
            </Link>
            <Link 
              href={`/${locale}#pricing`} 
              className={cn(
                "transition-colors duration-300 hover:text-primary-500",
                shouldBeWhite ? "text-gray-700" : "text-white"
              )}
            >
              {t('pricing')}
            </Link>
            <Link 
              href={`/${locale}/developers`} 
              className={cn(
                "transition-colors duration-300 hover:text-primary-500",
                shouldBeWhite ? "text-gray-700" : "text-white"
              )}
            >
              {t('developers')}
            </Link>
            <Link 
              href={`/${locale}/about`} 
              className={cn(
                "transition-colors duration-300 hover:text-primary-500",
                shouldBeWhite ? "text-gray-700" : "text-white"
              )}
            >
              {t('about')}
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={cn(
                "flex items-center space-x-1 transition-colors duration-300 hover:text-primary-500",
                shouldBeWhite ? "text-gray-700" : "text-white"
              )}
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{locale === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <a 
              href="https://dashboard.vondera.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant={shouldBeWhite ? "ghost" : "outline"} 
                size="sm"
                className={cn(
                  !shouldBeWhite && "text-white border-white hover:bg-white/10"
                )}
              >
                {t('login')}
              </Button>
            </a>
            <a 
              href="https://dashboard.vondera.app/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="sm">
                {t('signup')}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors duration-300 hover:text-primary-500",
              shouldBeWhite ? "text-gray-700" : "text-white"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Sidebar */}
        <div
          className={cn(
            "lg:hidden fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-black/95 backdrop-blur-xl z-50 transform transition-transform duration-500 ease-out shadow-2xl overflow-hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.98) 0%, rgba(20,20,20,0.95) 100%)',
          }}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.webp" 
                alt="Vondera" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">Vondera</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Menu Content */}
          <nav className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
            <div className="flex-1 p-6 space-y-2">
              {/* Home */}
              <Link
                href={`/${locale}`}
                className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Home</span>
                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </Link>

              {/* Why Vondera */}
              <Link
                href={`/${locale}#why-vondera`}
                className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Why Vondera</span>
                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </Link>
              
              {/* Products - Collapsible */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsProductsExpanded(!isProductsExpanded)}
                  className="w-full flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all group"
                >
                  <span className="font-medium">Products</span>
                  <ChevronDown 
                    size={18} 
                    className={cn(
                      "transform transition-transform duration-300",
                      isProductsExpanded && "rotate-180"
                    )} 
                  />
                </button>
                
                {/* Products Submenu */}
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    isProductsExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="ml-4 pl-4 border-l-2 border-white/10 space-y-1 py-2">
                    {products.map((product, index) => (
                      <Link
                        key={index}
                        href={product.href}
                        className={cn(
                          "flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all group",
                          product.comingSoon 
                            ? "opacity-50 cursor-not-allowed" 
                            : "hover:bg-white/5 text-white/80 hover:text-white"
                        )}
                        onClick={(e) => {
                          if (product.comingSoon) {
                            e.preventDefault();
                          } else {
                            setIsMobileMenuOpen(false);
                            setIsProductsExpanded(false);
                          }
                        }}
                      >
                        <div className="flex-1">
                          <div className="font-medium text-sm flex items-center gap-2">
                            {product.name}
                            {product.comingSoon && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/60">
                                Soon
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-white/50 mt-0.5">
                            {product.description}
                          </div>
                        </div>
                        {!product.comingSoon && (
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 text-white/60 mt-1 transition-opacity" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Media Buyers */}
              <Link
                href={`/${locale}/vmedia`}
                className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white hover:from-green-500/30 hover:to-emerald-500/30 rounded-xl transition-all group border border-green-500/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-semibold">Media Buyers</span>
                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </Link>

              {/* Pricing */}
              <Link
                href={`/${locale}#pricing`}
                className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Pricing</span>
                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </Link>

              {/* Developers */}
              <Link
                href={`/${locale}/developers`}
                className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Developers</span>
                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </Link>

              {/* About */}
              <Link
                href={`/${locale}/about`}
                className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">About</span>
                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 border-t border-white/10 space-y-3 bg-black/50">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                <Globe size={18} />
                <span className="font-medium">{locale === 'en' ? 'العربية' : 'English'}</span>
              </button>

              {/* Auth Buttons */}
              <a 
                href="https://dashboard.vondera.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full px-4 py-3 text-white font-medium bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/20">
                  {t('login')}
                </button>
              </a>
              <a 
                href="https://dashboard.vondera.app/auth/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full px-4 py-3 text-white font-bold bg-primary-600 hover:bg-primary-700 rounded-xl transition-all shadow-lg shadow-primary-500/30">
                  {t('signup')}
                </button>
              </a>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
