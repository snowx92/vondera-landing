'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Star, Award, Briefcase, Mail, Phone, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import Image from 'next/image';
import { AnimatedList } from '@/components/ui/animated-list';

export default function MediaBuyerSpotlight() {
  const locale = useLocale();
  const t = useTranslations('mediaBuyerSpotlight');
  const isRTL = locale === 'ar';

  const benefits = [
    { icon: Users, text: t('benefits.access') },
    { icon: TrendingUp, text: t('benefits.compete') },
    { icon: DollarSign, text: t('benefits.rates') },
    { icon: Award, text: t('benefits.earnings') },
    { icon: Star, text: t('benefits.reputation') },
    { icon: Briefcase, text: t('benefits.portfolio') },
  ];

  const topMediaBuyers = [
    {
      id: 1,
      name: 'Mohamed Hosny',
      avatar: '/avatars/avatar1.jpg',
      phone: '+20 ****** 345',
      email: '******@vmedia.app',
      revenueType: 'Sales %',
      revenueValue: '15%',
      platforms: ['meta', 'instagram', 'tiktok'],
      orderScore: 9.8,
      salesScore: 9.5,
      totalOrders: '12.5K',
      earnings: '850K'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      avatar: '/avatars/avatar2.jpg',
      phone: '+20 ****** 892',
      email: '******@vmedia.app',
      revenueType: 'Ad Spent',
      revenueValue: '8%',
      platforms: ['meta', 'instagram'],
      orderScore: 9.6,
      salesScore: 9.4,
      totalOrders: '10.2K',
      earnings: '720K'
    },
    {
      id: 3,
      name: 'Sara Ali',
      avatar: '/avatars/avatar3.jpg',
      phone: '+20 ****** 567',
      email: '******@vmedia.app',
      revenueType: 'Fixed Salary',
      revenueValue: '5K/mo',
      platforms: ['meta', 'tiktok'],
      orderScore: 9.4,
      salesScore: 9.2,
      totalOrders: '8.7K',
      earnings: '580K'
    },
    {
      id: 4,
      name: 'Khaled Ibrahim',
      avatar: '/avatars/avatar4.jpg',
      phone: '+20 ****** 234',
      email: '******@vmedia.app',
      revenueType: 'Sales %',
      revenueValue: '12%',
      platforms: ['instagram', 'tiktok'],
      orderScore: 9.3,
      salesScore: 9.0,
      totalOrders: '7.9K',
      earnings: '465K'
    },
    {
      id: 5,
      name: 'Fatima Youssef',
      avatar: '/avatars/avatar5.jpg',
      phone: '+20 ****** 789',
      email: '******@vmedia.app',
      revenueType: 'Ad Spent',
      revenueValue: '10%',
      platforms: ['meta', 'instagram', 'tiktok'],
      orderScore: 9.1,
      salesScore: 8.9,
      totalOrders: '6.5K',
      earnings: '390K'
    }
  ];

  const getPlatformIcon = (platform: string) => {
    const icons = {
      meta: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0866FF">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      instagram: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FD5949"/>
              <stop offset="50%" stopColor="#D6249F"/>
              <stop offset="100%" stopColor="#285AEB"/>
            </linearGradient>
          </defs>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      tiktok: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    };
    return icons[platform as keyof typeof icons];
  };

  const getRevenueColor = (type: string) => {
    const colors = {
      'Sales %': 'bg-green-100 text-green-700',
      'Ad Spent': 'bg-blue-100 text-blue-700',
      'Fixed Salary': 'bg-purple-100 text-purple-700'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-vmedia-50 via-white to-primary-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="vmedia" className="mb-3 sm:mb-4">
              VMedia Marketplace
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t('title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              {t('subtitle')}
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-vmedia-100 rounded-lg flex items-center justify-center">
                    <benefit.icon size={16} className="text-vmedia-600 sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 flex-1">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            <a href="https://mediabuyers.vondera.app/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                {t('cta')}
                <svg
                  className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </a>
          </motion.div>

          {/* Right Content - Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 lg:mt-0"
          >
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 p-3 sm:p-4 h-[500px] sm:h-[550px] md:h-[600px] flex flex-col">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-1.5">
                🏆 Top Media Buyers
              </h3>
              <div className="flex-1 overflow-hidden">
                <AnimatedList delay={1000}>
                  {topMediaBuyers.slice(0, 5).reverse().map((buyer, index) => {
                    const actualIndex = 4 - index; // Reverse the index for correct ranking
                    return (
                  <div key={buyer.id} className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition-colors w-full">
                    <div className="flex-shrink-0 relative">
                      {/* Profile Image */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-gray-200 relative">
                        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                          <span className="text-white text-xs sm:text-sm font-bold">
                            {buyer.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      {/* Rank Badge */}
                      <div className={`absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold text-white border border-white sm:border-2
                        ${actualIndex === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 
                          actualIndex === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                          actualIndex === 2 ? 'bg-gradient-to-r from-amber-600 to-orange-700' :
                          'bg-gradient-to-r from-purple-500 to-indigo-600'}`}>
                        {actualIndex < 3 ? (actualIndex === 0 ? '🥇' : actualIndex === 1 ? '🥈' : '🥉') : actualIndex + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                            {buyer.name}
                          </p>
                          <div className="flex items-center gap-1 sm:gap-2 mt-0.5">
                            <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-gray-400">
                              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              <span className="blur-sm hidden sm:inline">{buyer.phone}</span>
                            </div>
                            <span className="text-gray-300 hidden sm:inline">•</span>
                            <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-gray-400">
                              <Mail className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              <span className="blur-sm hidden md:inline">{buyer.email}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5 sm:mt-1">
                            <p className="text-[10px] sm:text-xs text-gray-500">
                              {buyer.totalOrders} orders • {buyer.earnings} EGP
                            </p>
                          </div>
                          {/* Revenue Type Badge */}
                          <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-1.5">
                            <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${getRevenueColor(buyer.revenueType)}`}>
                              {buyer.revenueType}: {buyer.revenueValue}
                            </span>
                            {/* Social Platform Icons */}
                            <div className="flex gap-0.5 sm:gap-1">
                              {buyer.platforms.map((platform) => (
                                <div key={platform} className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                                  {getPlatformIcon(platform)}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 sm:gap-1 ml-1 sm:ml-2">
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500 fill-current" />
                          <span className="text-[10px] sm:text-xs font-medium text-gray-700">
                            {buyer.orderScore}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </AnimatedList>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
