'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { useEffect, useState } from 'react';
import { getPartners } from '@/lib/apis/partners';
import { Partner } from '@/lib/apis/types';
import Image from 'next/image';

export default function TrustedBySection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data = await getPartners();
        setPartners(data);
      } catch (error) {
        console.error('Error fetching partners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  // Fallback merchants if API fails or is loading
  const fallbackMerchants = [
    'FashionHub', 'TechStore', 'BeautyBox', 'GadgetWorld', 'StyleMart',
    'EliteShop', 'MegaStore', 'TrendyGoods', 'PrimeDeals', 'UrbanStyle',
    'ModernLiving', 'SmartBuy', 'LuxuryLife', 'QuickShop', 'BestChoice',
  ];

  return (
    <section className="relative py-16 bg-white border-y border-gray-100">
      <Container>
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-violet-600 uppercase tracking-wide mb-2"
          >
            Trusted by Industry Leaders
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-gray-900"
          >
            Join 10,000+ Successful Merchants
          </motion.h2>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-violet-600 border-r-transparent"></div>
          </div>
        ) : (
          <>
            {/* Marquee Container */}
            <div className="relative overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

              {partners.length > 0 ? (
                <>
                  {/* First Row - Left to Right */}
                  <div className="flex mb-8">
                    <motion.div
                      className="flex gap-12 pr-12"
                      animate={{
                        x: ['0%', '-100%'],
                      }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      {[...partners, ...partners].map((partner, index) => (
                        <div
                          key={`${partner.id}-${index}`}
                          className="flex-shrink-0 group"
                        >
                          <div className="w-40 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 flex items-center justify-center px-6 group-hover:border-violet-300 group-hover:shadow-lg transition-all duration-300">
                            {partner.image ? (
                              <Image
                                src={partner.image}
                                alt={partner.name}
                                width={120}
                                height={60}
                                className="object-contain max-w-full max-h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                              />
                            ) : (
                              <span className="text-lg font-bold text-gray-400 group-hover:text-violet-600 transition-colors">
                                {partner.name}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Second Row - Right to Left */}
                  <div className="flex">
                    <motion.div
                      className="flex gap-12 pr-12"
                      animate={{
                        x: ['-100%', '0%'],
                      }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      {[...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, index) => (
                        <div
                          key={`${partner.id}-reverse-${index}`}
                          className="flex-shrink-0 group"
                        >
                          <div className="w-40 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 flex items-center justify-center px-6 group-hover:border-violet-300 group-hover:shadow-lg transition-all duration-300">
                            {partner.image ? (
                              <Image
                                src={partner.image}
                                alt={partner.name}
                                width={120}
                                height={60}
                                className="object-contain max-w-full max-h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                              />
                            ) : (
                              <span className="text-lg font-bold text-gray-400 group-hover:text-violet-600 transition-colors">
                                {partner.name}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </>
              ) : (
                <>
                  {/* Fallback with sample merchants */}
                  <div className="flex mb-8">
                    <motion.div
                      className="flex gap-12 pr-12"
                      animate={{
                        x: ['0%', '-100%'],
                      }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      {[...fallbackMerchants, ...fallbackMerchants].map((merchant, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 group"
                        >
                          <div className="w-40 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 flex items-center justify-center px-6 group-hover:border-violet-300 group-hover:shadow-lg transition-all duration-300">
                            <span className="text-xl font-bold text-gray-400 group-hover:text-violet-600 transition-colors">
                              {merchant}
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  <div className="flex">
                    <motion.div
                      className="flex gap-12 pr-12"
                      animate={{
                        x: ['-100%', '0%'],
                      }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      {[...fallbackMerchants.reverse(), ...fallbackMerchants.reverse()].map((merchant, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 group"
                        >
                          <div className="w-40 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 flex items-center justify-center px-6 group-hover:border-violet-300 group-hover:shadow-lg transition-all duration-300">
                            <span className="text-xl font-bold text-gray-400 group-hover:text-violet-600 transition-colors">
                              {merchant}
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </>
              )}
            </div>
          </>
        )}

      </Container>
    </section>
  );
}
