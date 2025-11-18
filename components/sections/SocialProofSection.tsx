'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { AvatarCircles } from '@/components/ui/avatar-circles';
import { useEffect, useState } from 'react';
import { getReviews } from '@/lib/apis/reviews';
import { Review } from '@/lib/apis/types';
import { useTranslations } from 'next-intl';

export default function SocialProofSection() {
  const t = useTranslations('socialProof');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, []);

  // Fallback testimonials in case API fails - using translations
  const fallbackTestimonialsData = t.raw('fallbackTestimonials') as Array<{
    name: string;
    storeName: string;
    review: string;
  }>;
  
  const fallbackTestimonials = fallbackTestimonialsData.map((testimonial, index) => ({
    id: `${index + 1}`,
    name: testimonial.name,
    storeName: testimonial.storeName,
    storeWebsite: '',
    logo: `https://i.pravatar.cc/150?img=${index + 1}`,
    rating: 5,
    review: testimonial.review,
    featured: true,
  }));

  const displayReviews = reviews.length > 0 ? reviews : fallbackTestimonials;

  const avatarUrls = displayReviews.slice(0, 8).map(r => ({
    imageUrl: r.logo || 'https://i.pravatar.cc/150',
    profileUrl: r.storeWebsite || '#',
  }));

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-white to-violet-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      <Container>
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t('title')}
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
              {t('subtitle')}
            </p>
            
            {/* Avatar Circles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <AvatarCircles numPeople={10000} avatarUrls={avatarUrls} />
            </motion.div>
          </motion.div>
        </div>

        {/* Infinite Scrolling Reviews */}
        <div className="relative">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
              <p className="mt-4 text-gray-600">{t('loading')}</p>
            </div>
          ) : (
            <div className="overflow-hidden">
              {/* First Row - Scroll Left */}
              <motion.div
                className="flex gap-4 sm:gap-6 mb-4 sm:mb-6"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[...displayReviews, ...displayReviews, ...displayReviews].map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100"
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="sm:w-[18px] sm:h-[18px] fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-violet-200 mb-2" />
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed line-clamp-3">{testimonial.review}</p>

                    {/* Author */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cover bg-center border-2 border-violet-200 flex-shrink-0"
                        style={{ backgroundImage: `url(${testimonial.logo || 'https://i.pravatar.cc/150'})` }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="font-semibold text-sm sm:text-base text-gray-900 truncate">{testimonial.name}</div>
                          {testimonial.featured && (
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 truncate">{testimonial.storeName}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Second Row - Scroll Right */}
              <motion.div
                className="flex gap-4 sm:gap-6"
                animate={{
                  x: [-1920, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[...displayReviews, ...displayReviews, ...displayReviews].map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}-reverse`}
                    className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100"
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="sm:w-[18px] sm:h-[18px] fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-violet-200 mb-2" />
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed line-clamp-3">{testimonial.review}</p>

                    {/* Author */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cover bg-center border-2 border-violet-200 flex-shrink-0"
                        style={{ backgroundImage: `url(${testimonial.logo || 'https://i.pravatar.cc/150'})` }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="font-semibold text-sm sm:text-base text-gray-900 truncate">{testimonial.name}</div>
                          {testimonial.featured && (
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 truncate">{testimonial.storeName}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-violet-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-violet-50 to-transparent pointer-events-none" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
            {t('ctaText')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            {t('ctaButton')}
          </motion.button>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">{t('ctaDisclaimer')}</p>
        </motion.div>
      </Container>
    </section>
  );
}
