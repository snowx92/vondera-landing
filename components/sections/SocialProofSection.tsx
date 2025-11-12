'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { AvatarCircles } from '@/components/ui/avatar-circles';
import { useEffect, useState } from 'react';
import { getReviews } from '@/lib/apis/reviews';
import { Review } from '@/lib/apis/types';

export default function SocialProofSection() {
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

  // Fallback testimonials in case API fails
  const fallbackTestimonials = [
    {
      id: '1',
      name: 'Ahmed Hassan',
      storeName: 'Fashion Store',
      storeWebsite: '',
      logo: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      review: 'Vondera transformed my business! I went from 50 orders per day to over 300. The VMedia marketplace connected me with incredible media buyers.',
      featured: true,
    },
    {
      id: '2',
      name: 'Sara Mohamed',
      storeName: 'Beauty Products',
      storeWebsite: '',
      logo: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      review: 'Just hit $100K in monthly revenue using Vondera! The analytics and automation tools are game-changers. Best decision ever!',
      featured: true,
    },
  ];

  const displayReviews = reviews.length > 0 ? reviews : fallbackTestimonials;

  const avatarUrls = displayReviews.slice(0, 8).map(r => ({
    imageUrl: r.logo || 'https://i.pravatar.cc/150',
    profileUrl: r.storeWebsite || '#',
  }));

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-violet-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Loved by Thousands
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                of Merchants
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See what merchants are saying about their experience with Vondera
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
              <p className="mt-4 text-gray-600">Loading reviews...</p>
            </div>
          ) : (
            <div className="overflow-hidden">
              {/* First Row - Scroll Left */}
              <motion.div
                className="flex gap-6 mb-6"
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
                    className="min-w-[400px] bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <Quote className="w-8 h-8 text-violet-200 mb-2" />
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{testimonial.review}</p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-violet-200"
                        style={{ backgroundImage: `url(${testimonial.logo || 'https://i.pravatar.cc/150'})` }}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          {testimonial.featured && (
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{testimonial.storeName}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Second Row - Scroll Right */}
              <motion.div
                className="flex gap-6"
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
                    className="min-w-[400px] bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <Quote className="w-8 h-8 text-violet-200 mb-2" />
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{testimonial.review}</p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-violet-200"
                        style={{ backgroundImage: `url(${testimonial.logo || 'https://i.pravatar.cc/150'})` }}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          {testimonial.featured && (
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{testimonial.storeName}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-violet-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-violet-50 to-transparent pointer-events-none" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Join 10,000+ satisfied merchants growing their business with Vondera
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Start Your Free Trial
          </motion.button>
          <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial</p>
        </motion.div>
      </Container>
    </section>
  );
}
