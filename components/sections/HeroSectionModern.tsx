'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function HeroSectionModern() {
  const locale = useLocale();
  const t = useTranslations('heroModern');
  const isRTL = locale === 'ar';

const rotatingPhrases = locale === 'ar'
  ? [
      ['علامة', 'يعشقها', 'الناس'],
      ['متجر', 'الأكثر', 'مبيعًا'],
      ['قصة', 'نجاح', 'تجارية'],
      ['رائد', 'السوق'],
      ['آلة', 'نمو'],
      ['علامة', 'موثوقة'],
      ['متجر', 'عالمي'],
      ['صانع', 'النمو'],
    ]
  : [
      ['brand', 'customers', 'love'],
      ['top', 'selling', 'store'],
      ['ecommerce', 'success', 'story'],
      ['market', 'leader'],
      ['scaling', 'machine'],
      ['trusted', 'brand'],
      ['global', 'storefront'],
      ['growth', 'creator'],
    ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Ensure video plays
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // Force video attributes for mobile compatibility
          videoRef.current.muted = true;
          videoRef.current.playsInline = true;
          videoRef.current.setAttribute('playsinline', 'true');
          videoRef.current.setAttribute('webkit-playsinline', 'true');
          videoRef.current.setAttribute('x5-playsinline', 'true'); // For WeChat browser
          videoRef.current.setAttribute('x5-video-player-type', 'h5'); // For WeChat browser
          videoRef.current.setAttribute('x5-video-player-fullscreen', 'false'); // For WeChat browser

          // Load and play
          await videoRef.current.load();
          const playPromise = videoRef.current.play();

          if (playPromise !== undefined) {
            await playPromise;
            console.log('Video is playing successfully');
          }
        } catch (error) {
          console.error('Error playing video:', error);
          // Don't set error on mobile, just retry silently
          if (window.innerWidth > 768) {
            setVideoError(true);
          }
        }
      }
    };

    // Initial play attempt - delayed for mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const delay = isMobile ? 300 : 0;

    const timeoutId = setTimeout(() => {
      playVideo();
    }, delay);

    // Retry on user interaction (important for iOS)
    const handleInteraction = () => {
      playVideo();
    };

    // Multiple interaction events for better mobile coverage
    const events = ['click', 'touchstart', 'touchend', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true, passive: true });
    });

    // Also try to play on visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden && videoRef.current) {
        playVideo();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);


  return (
    <section
      className="relative w-full overflow-hidden bg-gray-900 h-[85vh] sm:h-[95vh] md:h-[100vh] lg:h-[110vh]"
      style={{
        minHeight: '600px'
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Video - Using multiple sources for better compatibility */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster=""
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: videoError ? 0 : 1,
          transition: 'opacity 0.3s',
          objectFit: 'cover',
          objectPosition: 'center center',
          width: '100%',
          height: '100%'
        }}
        onError={(e) => {
          console.error('Video error:', e);
          // Only show error on desktop
          if (window.innerWidth > 768) {
            setVideoError(true);
          }
        }}
        onCanPlay={() => {
          console.log('Video can play');
          if (videoRef.current) {
            videoRef.current.play().catch(err => {
              console.error('Play failed:', err);
              // Retry on next tick
              setTimeout(() => {
                if (videoRef.current) {
                  videoRef.current.play().catch(() => {});
                }
              }, 100);
            });
          }
        }}
        onLoadedData={() => {
          // Try to play when video data is loaded
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        }}
      >
        {/* Primary source from public directory */}
        <source src="/video.webm" type="video/webm" />
        {/* Fallback sources */}
        <source src="https://cdn.coverr.co/videos/coverr-typing-on-laptop-5049/1080p.mp4" type="video/mp4" />
        <source src="https://cdn.coverr.co/videos/coverr-woman-working-on-laptop-4646/1080p.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Content - Full height container */}
      <div className="relative h-full w-full flex flex-col justify-end px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-24 sm:pb-28 md:pb-32 lg:pb-36 xl:pb-40">
        {/* Main Content - Bottom Left and Right */}
        <div className="w-full">
          {/* Animated Heading */}
          <div className="mb-6 sm:mb-8 md:mb-10">
              {/* Static first line */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-1 sm:mb-2 leading-tight tracking-tight"
              >
                {t('title')}
              </motion.h1>

              {/* Animated rotating text */}
              <div className="relative" style={{ minHeight: '3rem' }}>
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentPhraseIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                    className="absolute top-0 left-0 w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
                  >
                    <span className="flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-4 break-words">
                      {rotatingPhrases[currentPhraseIndex].map((word, index) => (
                        <motion.span
                          key={`${currentPhraseIndex}-${index}`}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.45,
                            delay: index * 0.15,
                            ease: [0.33, 1, 0.68, 1],
                          }}
                          className="inline-block"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </span>
                  </motion.h2>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Row: Subtitle & CTA on left, Link on right */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8 w-full max-w-full">
              {/* Left side: Subtitle and CTA */}
              <div className="flex-1 max-w-full sm:max-w-md">
                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-6 sm:mb-8 leading-relaxed"
                >
                  {t('subtitle')}
                </motion.p>

                {/* Primary CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                >
                  <a 
                    href="https://dashboard.vondera.app/dashboard" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-gray-900 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-colors shadow-xl">
                      {t('cta')}
                    </button>
                  </a>
                </motion.div>
              </div>

              {/* Right side: Why we build Vondera link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="hidden sm:block"
              >
                <Link
                  href="#why-vondera"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors group"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span className="text-base sm:text-lg font-medium">{t('whyVondera')}</span>
                </Link>
              </motion.div>

              {/* Mobile version - below button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="sm:hidden"
              >
                <Link
                  href="#why-vondera"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors underline underline-offset-4"
                >
                  <span className="text-base font-medium">{t('whyVondera')}</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      
      {/* Rounded bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[8vh] sm:h-[9vh] md:h-[10vh] bg-white rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3rem] lg:rounded-t-[4rem] shadow-[0_-8px_48px_0_rgba(0,0,0,0.24),0_-4px_8px_0_rgba(0,0,0,0.16)] z-10" />
    </section>
  );
}
