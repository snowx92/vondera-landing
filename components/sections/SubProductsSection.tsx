'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { TrendingUp, CreditCard, Zap, Inbox, Users2, Phone, Mail, ShoppingCart, Wallet } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';
import { useRef, forwardRef } from 'react';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from '@radix-ui/react-icons';

// Circle component for animated beam
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white p-2 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

// Social Media Icons with real colors
const SocialIcons = {
  whatsapp: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#25D366"/>
      <path d="M35.9 12.1C33.3 9.5 29.9 8 26.3 8 19.3 8 13.6 13.7 13.6 20.7c0 2.1.5 4.1 1.6 5.9L13 35l8.6-2.3c1.7.9 3.7 1.4 5.7 1.4 7 0 12.7-5.7 12.7-12.7 0-3.4-1.3-6.6-3.7-9zm-9.6 19.6c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.9 1 1-3.7-.3-.4c-1-1.6-1.5-3.4-1.5-5.3 0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9s2.9 4.4 2.9 7.1c0 5.5-4.5 10-10 10zm5.5-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2-.3.3-.6.1c-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.2-.7c.2-.2.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" fill="white"/>
    </svg>
  ),
  messenger: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#0084FF"/>
      <path d="M24 8c-8.8 0-16 6.8-16 15.2 0 4.8 2.4 9.1 6.2 11.9V40l4.8-2.6c1.3.4 2.6.6 4 .6 8.8 0 16-6.8 16-15.2S32.8 8 24 8zm1.6 20.5l-4.1-4.4-8 4.4 8.8-9.4 4.2 4.4 7.9-4.4-8.8 9.4z" fill="white"/>
    </svg>
  ),
  instagram: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-grad-sub" cx="30%" cy="107%">
          <stop offset="0%" stopColor="#FDF497"/>
          <stop offset="5%" stopColor="#FDF497"/>
          <stop offset="45%" stopColor="#FD5949"/>
          <stop offset="60%" stopColor="#D6249F"/>
          <stop offset="90%" stopColor="#285AEB"/>
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="24" fill="url(#ig-grad-sub)"/>
      <path d="M24 14c-3.3 0-3.7 0-5 .1-1.3.1-2.2.3-3 .6-.8.3-1.5.7-2.2 1.4s-1.1 1.4-1.4 2.2c-.3.8-.5 1.7-.6 3-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.3.3 2.2.6 3 .3.8.7 1.5 1.4 2.2s1.4 1.1 2.2 1.4c.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6.8-.3 1.5-.7 2.2-1.4s1.1-1.4 1.4-2.2c.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.4-2.2s-1.4-1.1-2.2-1.4c-.8-.3-1.7-.5-3-.6-1.3-.1-1.7-.1-5-.1zm0 1.8c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9s.7.9.9 1.4c.2.4.4 1.1.4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4s-.9.7-1.4.9c-.4.2-1.1.4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9s-.7-.9-.9-1.4c-.2-.4-.4-1.1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4s.9-.7 1.4-.9c.4-.2 1.1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1z" fill="white"/>
      <path d="M24 18.3c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7-2.6-5.7-5.7-5.7zm0 9.4c-2 0-3.7-1.6-3.7-3.7s1.6-3.7 3.7-3.7 3.7 1.6 3.7 3.7-1.7 3.7-3.7 3.7z" fill="white"/>
      <circle cx="30" cy="18" r="1.3" fill="white"/>
    </svg>
  ),
  facebook: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#1877F2"/>
      <path d="M26.5 38V26h4l.6-4.7h-4.6v-3c0-1.4.4-2.3 2.4-2.3h2.5V11.4c-.4-.1-1.9-.2-3.6-.2-3.6 0-6 2.2-6 6.2v3.5h-4V26h4v12h4.7z" fill="white"/>
    </svg>
  ),
  twitter: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#000000"/>
      <path d="M36.6 15.8c-.9.4-1.9.7-2.9.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.1-.2-7.7-2.2-10.1-5.2-.4.7-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z" fill="white"/>
    </svg>
  ),
  tiktok: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#000000"/>
      <path d="M31.5 13.5c-.6 0-1.1.1-1.6.3-.1-1.4-.7-2.7-1.6-3.6-.9-.9-2.2-1.4-3.5-1.4v2.8c.8 0 1.6.3 2.1.9.6.6.9 1.3.9 2.1h2.8c0 2.3 1.9 4.2 4.2 4.2v2.8c-2.5 0-4.8-1.4-5.9-3.5v7.8c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.7 2.9-6.8 6.6-7v2.9c-2.1.2-3.8 1.9-3.8 4.1 0 2.3 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2V8.8h2.8c0 .2 0 .4.1.6.3 1.9 1.6 3.6 3.4 4.3-.1-.1-.1-.2-.1-.2z" fill="#EE1D52"/>
      <path d="M21.9 23.8c-2.1.2-3.8 1.9-3.8 4.1 0 2.3 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2V8.8h2.8c0 .2 0 .4.1.6-1.8-.8-3.1-2.4-3.4-4.3 0-.2-.1-.4-.1-.6h-2.8v19.1c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2c0-2.2 1.7-3.9 3.8-4.1v-2.9c-3.7.2-6.6 3.3-6.6 7 0 3.9 3.1 7 7 7s7-3.1 7-7v-7.8c1.1 2.1 3.4 3.5 5.9 3.5v-2.8c-2.3 0-4.2-1.9-4.2-4.2h-2.8c0-.8-.3-1.5-.9-2.1-.6-.6-1.3-.9-2.1-.9v-2.8c1.3 0 2.6.5 3.5 1.4.9.9 1.5 2.2 1.6 3.6.5-.2 1-.3 1.6-.3v7.8z" fill="#69C9D0"/>
    </svg>
  ),
};

export default function SubProductsSection() {
  const locale = useLocale();
  const t = useTranslations('subProducts');
  const isRTL = locale === 'ar';

  // Refs for animated beams in VInbox
  const containerRef = useRef<HTMLDivElement>(null);
  const vonderaRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const messengerRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const facebookRef = useRef<HTMLDivElement>(null);
  const twitterRef = useRef<HTMLDivElement>(null);
  const tiktokRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      Icon: TrendingUp,
      name: t('vmedia.title'),
      description: t('vmedia.description'),
      href: `/${locale}/vmedia`,
      cta: t('vmedia.subtitle'),
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 flex items-center justify-center p-8 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
          {/* Media Buyer Card */}
          <div className="bg-white rounded-2xl p-5 shadow-lg w-full max-w-md border border-gray-950/[.1] dark:border-gray-50/[.1] transform-gpu transition-all duration-300 ease-out group-hover:scale-105">
            <div className="flex items-start gap-4 mb-4">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                MH
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Mohamed Hosny</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                    Top Media Buyer
                  </span>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3">
                <div className="text-xs text-purple-600 mb-1">{locale === 'ar' ? 'الطلبات' : 'Orders'}</div>
                <div className="text-xl font-bold text-purple-900">17.8k</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3">
                <div className="text-xs text-green-600 mb-1">{locale === 'ar' ? 'المبيعات' : 'Sales'}</div>
                <div className="text-xl font-bold text-green-900">9.7M {locale === 'ar' ? 'ج.م' : 'EGP'}</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-primary-600" />
                <span>+20 *****</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-primary-600" />
                <span className="truncate">**********@vondera-mediabuyer.app</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      Icon: Inbox,
      name: t('vinbox.title'),
      description: t('vinbox.description'),
      href: '#vinbox',
      cta: t('vinbox.subtitle'),
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105 w-full overflow-visible" ref={containerRef}>
          <div className="flex size-full max-h-[350px] max-w-lg flex-col items-stretch justify-between gap-8 mx-auto">
            <div className="flex flex-row items-center justify-between">
              <Circle ref={whatsappRef}>
                <SocialIcons.whatsapp />
              </Circle>
              <Circle ref={messengerRef}>
                <SocialIcons.messenger />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={instagramRef}>
                <SocialIcons.instagram />
              </Circle>
              <Circle ref={vonderaRef} className="size-20 border-4 border-violet-200 shadow-xl">
                <Image 
                  src="/logo.webp" 
                  alt="Vondera" 
                  width={64} 
                  height={64}
                  className="w-full h-full object-contain"
                />
              </Circle>
              <Circle ref={facebookRef}>
                <SocialIcons.facebook />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={twitterRef}>
                <SocialIcons.twitter />
              </Circle>
              <Circle ref={tiktokRef}>
                <SocialIcons.tiktok />
              </Circle>
            </div>
          </div>

          {/* Animated Beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={whatsappRef}
            toRef={vonderaRef}
            curvature={-75}
            endYOffset={-10}
            pathColor="#1f2937"
            gradientStartColor="#1f2937"
            gradientStopColor="#4b5563"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={instagramRef}
            toRef={vonderaRef}
            pathColor="#1f2937"
            gradientStartColor="#1f2937"
            gradientStopColor="#4b5563"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={twitterRef}
            toRef={vonderaRef}
            curvature={75}
            endYOffset={10}
            pathColor="#1f2937"
            gradientStartColor="#1f2937"
            gradientStopColor="#4b5563"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={messengerRef}
            toRef={vonderaRef}
            curvature={-75}
            endYOffset={-10}
            reverse
            pathColor="#1f2937"
            gradientStartColor="#1f2937"
            gradientStopColor="#4b5563"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={facebookRef}
            toRef={vonderaRef}
            reverse
            pathColor="#1f2937"
            gradientStartColor="#1f2937"
            gradientStopColor="#4b5563"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={tiktokRef}
            toRef={vonderaRef}
            curvature={75}
            endYOffset={10}
            reverse
            pathColor="#1f2937"
            gradientStartColor="#1f2937"
            gradientStopColor="#4b5563"
          />
        </div>
      ),
    },
    {
      Icon: CreditCard,
      name: t('vpay.title'),
      description: t('vpay.description'),
      href: '#vpay',
      cta: t('vpay.subtitle'),
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 flex items-center justify-center p-6 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
          {/* VPay Image */}
          <Image 
            src="/vpay.png" 
            alt="VPay" 
            width={300} 
            height={300}
            className="object-contain transform-gpu transition-all duration-300 ease-out group-hover:scale-105"
          />
        </div>
      ),
    },
    {
      Icon: Zap,
      name: t('vfunnel.title'),
      description: t('vfunnel.description'),
      href: '#vfunnel',
      cta: t('vfunnel.subtitle'),
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 flex items-center justify-center p-6 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
          {/* Website Builder Preview Card */}
          <div className="bg-white rounded-2xl p-4 w-full max-w-sm shadow-lg border border-gray-950/[.1] dark:border-gray-50/[.1] transform-gpu transition-all duration-300 ease-out group-hover:scale-105">
            {/* Browser Header */}
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 bg-gray-100 rounded-md px-3 py-1">
                <span className="text-xs text-gray-500">yourstore.vondera.app</span>
              </div>
            </div>

            {/* Website Preview */}
            <div className="space-y-3">
              {/* Hero Section */}
              <div className="h-24 bg-gradient-to-r from-primary-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-3 bg-primary-600 rounded mx-auto mb-2"></div>
                  <div className="w-24 h-2 bg-primary-400 rounded mx-auto"></div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 bg-gray-100 rounded-lg"></div>
                <div className="h-16 bg-gray-100 rounded-lg"></div>
              </div>

              {/* CTA Button */}
              <div className="h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      Icon: Users2,
      name: t('vcommunity.title'),
      description: t('vcommunity.description'),
      href: '#vcommunity',
      cta: t('vcommunity.subtitle'),
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 flex items-center justify-center p-6 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
          {/* Tweet-style Card */}
          <div className="bg-white rounded-2xl p-4 w-full max-w-sm shadow-lg border border-gray-950/[.1] dark:border-gray-50/[.1] transform-gpu transition-all duration-300 ease-out group-hover:scale-105">
            <div className="flex gap-3 mb-3">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                AH
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-900 text-sm">Ahmed Hassan</h4>
                  <span className="text-gray-500 text-sm">@ahmed_shop</span>
                </div>
                <p className="text-gray-700 text-sm mb-3" dir="rtl">
                  حد يعرف مصنع هوديز كويس ؟
                </p>
                <div className="flex items-center gap-6 text-gray-500 text-xs">
                  <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>12</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>5</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>28</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h2>
          </motion.div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300",
                idx === 1 && "md:col-span-2 lg:col-span-2" // VInbox takes 2 columns
              )}
            >
              {/* Background */}
              <div className="relative h-64 overflow-hidden">
                {feature.background}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg">
                    <feature.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                    {feature.name}
                  </h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <a 
                  href={feature.href}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-all group/link hover:gap-3"
                >
                  <span>{feature.cta}</span>
                  <ArrowRightIcon className="w-5 h-5 rtl:rotate-180" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
