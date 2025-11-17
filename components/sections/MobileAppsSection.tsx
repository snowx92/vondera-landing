'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Package, MessageSquare, BarChart3, Users } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { AppStoreButton, GooglePlayButton } from '@/components/app-store-buttons';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function MobileAppsSection() {
  const locale = useLocale();
  const t = useTranslations('mobileApps');
  const tCommon = useTranslations('common');
  const isRTL = locale === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [1, 2, 3, 4, 5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const features = [
    { icon: Bell, text: t('features.notifications') },
    { icon: Package, text: t('features.inventory') },
    { icon: MessageSquare, text: t('features.chat') },
    { icon: BarChart3, text: t('features.analytics') },
    { icon: Users, text: t('features.collaboration') },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <Container>
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              {t('title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-primary-600 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Download Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Card>
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">⭐ 4.5</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t('rating')}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">50K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t('downloads')}</div>
                </CardContent>
              </Card>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex flex-row gap-3 w-auto">
                  <AppStoreButton 
                    size="lg"
                    href="https://apps.apple.com/eg/app/vondera/id6459148256"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  />
                  <GooglePlayButton 
                    size="lg"
                    href="https://play.google.com/store/apps/details?id=com.vee.vcommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  />
                </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">{t('platforms')}</p>
          </motion.div>

          {/* Mobile Mockup Images - Sliding Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto aspect-[9/16] rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={`/${images[currentIndex]}.png`}
                    alt={`Vondera Mobile App Screenshot ${images[currentIndex]}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dots Indicator */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-primary-600 w-4 sm:w-6' 
                        : 'bg-gray-400'
                    }`}
                    aria-label={`Go to screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
