'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
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
  const locale = useLocale();
  const t = useTranslations('nav');
  const isRTL = locale === 'ar';

  const isSolidVariant = variant === 'solid';

  const products = [
    {
      name: 'VPay',
      description: 'Integrated payment gateway for seamless transactions',
      href: `/${locale}#vpay`,
    },
    {
      name: 'VDomain',
      description: 'Custom domain management for your store',
      href: `/${locale}#vdomain`,
    },
    {
      name: 'VFunnels',
      description: 'Create high-converting sales funnels',
      href: `/${locale}#vfunnels`,
    },
    {
      name: 'VMedia',
      description: 'Connect with top media buyers for your campaigns',
      href: `/${locale}/vmedia`,
    },
    {
      name: 'VCommunity',
      description: 'Connect with merchants and grow together',
      href: `/${locale}#vcommunity`,
    },
    {
      name: 'VSupply',
      description: 'Supply chain management (Coming Soon)',
      href: '#',
      comingSoon: true,
    },
    {
      name: 'VShip',
      description: 'Shipping & logistics integration (Coming Soon)',
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
              Why Vondera
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
              >
                Solution
                <ChevronDown size={16} className={cn(
                  "transition-transform duration-200",
                  isSolutionOpen && "rotate-180"
                )} />
              </button>

              {/* Dropdown Menu - Full Width */}
              {isSolutionOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
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
                                  Coming Soon
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
              Media Buyers
            </Link>
            <Link 
              href={`/${locale}#pricing`} 
              className={cn(
                "transition-colors duration-300 hover:text-primary-500",
                shouldBeWhite ? "text-gray-700" : "text-white"
              )}
            >
              Pricing
            </Link>
            <Link 
              href={`/${locale}/about`} 
              className={cn(
                "transition-colors duration-300 hover:text-primary-500",
                shouldBeWhite ? "text-gray-700" : "text-white"
              )}
            >
              About
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
            <Button 
              variant={shouldBeWhite ? "ghost" : "outline"} 
              size="sm"
              className={cn(
                !shouldBeWhite && "text-white border-white hover:bg-white/10"
              )}
            >
              {t('login')}
            </Button>
            <Button variant="primary" size="sm">
              {t('signup')}
            </Button>
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-3">
              <Link
                href={`/${locale}#why-vondera`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Vondera
              </Link>
              
              {/* Solution with Products */}
              <div className="px-4 py-2">
                <div className="font-semibold text-gray-900 mb-3">Solution</div>
                <div className="space-y-2 ml-2">
                  {products.map((product, index) => (
                    <Link
                      key={index}
                      href={product.href}
                      className={cn(
                        "flex items-start gap-3 p-2 rounded-lg transition-colors",
                        product.comingSoon 
                          ? "opacity-60" 
                          : "hover:bg-primary-50"
                      )}
                      onClick={(e) => {
                        if (product.comingSoon) {
                          e.preventDefault();
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">
                          {product.name}
                          {product.comingSoon && (
                            <span className="ml-1 text-xs text-gray-500">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5">
                          {product.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                href={`/${locale}/vmedia`}
                className="px-4 py-2 text-vmedia-600 font-semibold hover:bg-vmedia-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Media Buyers
              </Link>
              <Link
                href={`/${locale}#pricing`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href={`/${locale}/about`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-4 pt-4 border-t border-gray-200 flex flex-col space-y-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center space-x-2 py-2 text-gray-700 hover:text-primary-500"
                >
                  <Globe size={18} />
                  <span>{locale === 'en' ? 'العربية' : 'English'}</span>
                </button>
                <Button variant="ghost" size="sm" className="w-full">
                  {t('login')}
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  {t('signup')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
