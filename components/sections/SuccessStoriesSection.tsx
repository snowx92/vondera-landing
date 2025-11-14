'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Clock, Users, Quote } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

export default function SuccessStoriesSection() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      name: 'Ahmed Hassan',
      business: 'FashionHub Store',
      industry: 'Fashion & Apparel',
      image: '/images/merchant-1.jpg',
      challenge: 'Struggling with high platform costs and limited Arabic support on international platforms',
      results: {
        revenue: '+300%',
        time: '-20 hrs/week',
        orders: '+450%',
      },
      quote: "Switching to Vondera was the best decision for my business. The VMedia marketplace connected me with amazing media buyers who doubled my sales in just 3 months!",
      metrics: ['Increased monthly revenue from $5K to $15K', 'Reduced operational time by 20 hours per week', 'Grew customer base by 250%'],
    },
    {
      name: 'Sara Mohamed',
      business: 'BeautyBox Egypt',
      industry: 'Beauty & Cosmetics',
      image: '/images/merchant-2.jpg',
      challenge: 'Difficulty managing inventory across multiple sales channels',
      results: {
        revenue: '+180%',
        time: '-15 hrs/week',
        orders: '+220%',
      },
      quote: "The multi-channel integration and real-time inventory sync have been game-changers. I can now sell on Instagram, Facebook, and my website without any headaches!",
      metrics: ['Automated inventory across 4 sales channels', 'Cut fulfillment time by 60%', 'Scaled from 50 to 150 daily orders'],
    },
    {
      name: 'Omar Ali',
      business: 'TechGear Store',
      industry: 'Electronics',
      image: '/images/merchant-3.jpg',
      challenge: 'Needed better analytics to understand customer behavior',
      results: {
        revenue: '+250%',
        time: '-12 hrs/week',
        orders: '+320%',
      },
      quote: "Vondera's AI-powered analytics helped me understand my customers better. I optimized my product mix and marketing, resulting in massive growth!",
      metrics: ['Identified top 20% products driving 80% revenue', 'Improved conversion rate by 145%', 'Reduced cart abandonment by 40%'],
    },
  ];

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-violet-50 via-purple-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Real Stories,
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how merchants are transforming their businesses with Vondera
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="grid lg:grid-cols-5">
                {/* Left - Merchant Info */}
                <div className="lg:col-span-2 bg-gradient-to-br from-violet-600 to-purple-600 p-8 md:p-12 text-white flex flex-col justify-between">
                  <div>
                    <Badge variant="default" className="bg-white/20 text-white border-white/30 mb-6">
                      {stories[activeStory].industry}
                    </Badge>

                    {/* Merchant Photo Placeholder */}
                    <div className="w-24 h-24 bg-white/20 rounded-2xl mb-6 flex items-center justify-center">
                      <Users size={48} className="text-white/60" />
                    </div>

                    <h3 className="text-3xl font-bold mb-2">{stories[activeStory].name}</h3>
                    <p className="text-xl mb-4 text-white/80">{stories[activeStory].business}</p>

                    {/* Results */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <TrendingUp size={20} />
                        <div>
                          <div className="text-2xl font-bold">{stories[activeStory].results.revenue}</div>
                          <div className="text-sm text-white/80">Revenue Growth</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={20} />
                        <div>
                          <div className="text-2xl font-bold">{stories[activeStory].results.time}</div>
                          <div className="text-sm text-white/80">Time Saved</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex gap-2 mt-8">
                    {stories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStory(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeStory ? 'w-8 bg-white' : 'w-2 bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right - Story Content */}
                <div className="lg:col-span-3 p-8 md:p-12">
                  <Quote className="w-12 h-12 text-violet-200 mb-6" />

                  {/* Challenge */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-violet-600 uppercase tracking-wide mb-2">
                      The Challenge
                    </h4>
                    <p className="text-gray-700 text-lg">{stories[activeStory].challenge}</p>
                  </div>

                  {/* Quote */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-violet-600 uppercase tracking-wide mb-2">
                      Testimonial
                    </h4>
                    <p className="text-2xl font-medium text-gray-900 leading-relaxed italic">
                      "{stories[activeStory].quote}"
                    </p>
                  </div>

                  {/* Key Results */}
                  <div>
                    <h4 className="text-sm font-semibold text-violet-600 uppercase tracking-wide mb-4">
                      Key Results
                    </h4>
                    <div className="space-y-3">
                      {stories[activeStory].metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{metric}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
                  >
                    Read Full Story
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevStory}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-10"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={nextStory}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-10"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg mb-6">
            Join thousands of successful merchants growing with Vondera
          </p>
          <a href="https://dashboard.vondera.app/dashboard" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
              Start Your Success Story
            </button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
