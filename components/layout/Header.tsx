'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('nav');
  const isRTL = locale === 'ar';

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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
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
              isScrolled ? "gradient-text" : "text-white"
            )}>Vondera</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-outfit" dir="ltr">
            <Link 
              href={`/${locale}#features`} 
              className={cn(
                "transition-colors duration-300 hover:text-primary-500",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {t('features')}
            </Link>
            <Link 
              href={`/${locale}#pricing`} 
              className={cn(
                "transition-colors duration-300 hover:text-primary-500",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {t('pricing')}
            </Link>
            <Link 
              href={`/${locale}/vmedia`} 
              className={cn(
                "font-semibold transition-colors duration-300",
                isScrolled ? "text-vmedia-600 hover:text-vmedia-700" : "text-white hover:text-vmedia-400"
              )}
            >
              {t('vmedia')}
            </Link>
            <Link 
              href={`/${locale}/blog`} 
              className={cn(
                "transition-colors duration-300 hover:text-primary-500",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {t('blog')}
            </Link>
            <Link 
              href={`/${locale}/about`} 
              className={cn(
                "transition-colors duration-300 hover:text-primary-500",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {t('about')}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className={cn(
                "transition-colors duration-300 hover:text-primary-500",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {t('contact')}
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={cn(
                "flex items-center space-x-1 transition-colors duration-300 hover:text-primary-500",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{locale === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <Button 
              variant={isScrolled ? "ghost" : "outline"} 
              size="sm"
              className={cn(
                !isScrolled && "text-white border-white hover:bg-white/10"
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
              isScrolled ? "text-gray-700" : "text-white"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-3">
              <Link
                href={`/${locale}#features`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('features')}
              </Link>
              <Link
                href={`/${locale}#pricing`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('pricing')}
              </Link>
              <Link
                href={`/${locale}/vmedia`}
                className="px-4 py-2 text-vmedia-600 font-semibold hover:bg-vmedia-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('vmedia')}
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('blog')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('contact')}
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
