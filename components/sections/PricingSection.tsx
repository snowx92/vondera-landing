'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useState, useEffect } from 'react';

interface Plan {
  name: string;
  prices: {
    monthly: number;
    '3months': number;
    '6months': number;
    yearly: number;
  };
  popular: boolean;
}

interface PricingCardProps {
  plan: Plan;
  billingPeriod: 'monthly' | '3months' | '6months' | 'yearly';
  getSavings: (period: 'monthly' | '3months' | '6months' | 'yearly', monthlyPrice: number, discountedPrice: number) => string | null;
}

function PricingCard({ plan, billingPeriod, getSavings }: PricingCardProps) {
  return (
    <div className={`relative h-full bg-white rounded-2xl shadow-lg p-6 md:p-8 ${
      plan.popular ? 'border-2 border-primary-500 shadow-xl' : 'border border-gray-200'
    }`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="success" className="px-4 py-1 text-sm">
            Most Popular
          </Badge>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
        <div className="mb-6">
          {billingPeriod === 'monthly' ? (
            <>
              <div className="text-4xl md:text-5xl font-bold text-gray-900">
                {plan.prices[billingPeriod]}
                <span className="text-base md:text-lg text-gray-500 font-normal"> EGP</span>
              </div>
              <div className="text-sm text-gray-500 mt-2">per month</div>
            </>
          ) : (
            <>
              {/* Monthly Equivalent as Main Price */}
              <div className="text-4xl md:text-5xl font-bold text-gray-900">
                {(() => {
                  const months = billingPeriod === '3months' ? 3 : billingPeriod === '6months' ? 6 : 12;
                  const monthlyEquivalent = Math.round(plan.prices[billingPeriod] / months);
                  return monthlyEquivalent;
                })()}
                <span className="text-base md:text-lg text-gray-500 font-normal"> EGP</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">per month</div>

              {/* Package Price & Savings */}
              <div className="mt-3 space-y-1.5">
                <div className="text-base text-gray-600">
                  {plan.prices[billingPeriod]} EGP {
                    billingPeriod === '3months' ? 'every 3 months' :
                    billingPeriod === '6months' ? 'every 6 months' : 'per year'
                  }
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-400 line-through">
                    {(() => {
                      const months = billingPeriod === '3months' ? 3 : billingPeriod === '6months' ? 6 : 12;
                      return `${plan.prices.monthly * months} EGP`;
                    })()}
                  </span>
                  <Badge variant="success" className="text-xs px-2 py-0.5">
                    {getSavings(billingPeriod, plan.prices.monthly, plan.prices[billingPeriod])}
                  </Badge>
                </div>
              </div>
            </>
          )}
        </div>

        <a href="https://dashboard.vondera.app/dashboard" target="_blank" rel="noopener noreferrer" className="w-full">
          <Button
            variant={plan.popular ? 'primary' : 'outline'}
            size="lg"
            className="w-full"
          >
            Get Started
          </Button>
        </a>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const locale = useLocale();
  const t = useTranslations('pricing');
  const isRTL = locale === 'ar';
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | '3months' | '6months' | 'yearly'>('yearly');
  const [currentSlide, setCurrentSlide] = useState(1); // Start with the popular plan (Plus)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const plans = [
    {
      name: 'Starter',
      prices: {
        monthly: 400,
        '3months': 1080,
        '6months': 1920,
        yearly: 3360,
      },
      popular: false,
    },
    {
      name: 'Plus',
      prices: {
        monthly: 700,
        '3months': 1890,
        '6months': 3360,
        yearly: 5580,
      },
      popular: true,
    },
    {
      name: 'Pro',
      prices: {
        monthly: 1000,
        '3months': 2700,
        '6months': 4800,
        yearly: 8400,
      },
      popular: false,
    },
  ];

  const features = [
    { name: 'Hosting & SSL', starter: true, plus: true, pro: true },
    { name: 'Products Count', starter: 'Unlimited', plus: 'Unlimited', pro: 'Unlimited' },
    { name: 'Orders Count', starter: 'Unlimited', plus: 'Unlimited', pro: 'Unlimited' },
    { name: 'Domain Management', starter: 'Only Purchase via Vondera', plus: '+ Custom Domain', pro: '+ Custom Domain' },
    { name: 'Website Builder', starter: 'Basic Themes', plus: 'Premium Themes', pro: 'All Themes + Full Customization' },
    { name: 'Payment Gateways', starter: 'VPay', plus: '+ Custom Gateways', pro: '+ Custom Gateways' },
    { name: 'Shipping Partners', starter: 'Turbo', plus: '+ Custom Couriers', pro: '+ Custom Couriers' },
    { name: 'Product Reviews', starter: true, plus: true, pro: true },
    { name: 'Import Products (Shopify/WooCommerce)', starter: true, plus: true, pro: true },
    { name: 'Analytics & Reports', starter: 'Basic (Overview)', plus: '+ Advanced Reports', pro: '+ Export' },
    { name: 'Customer Management Tools', starter: 'Basic', plus: '+ Ban', pro: '+ Export' },
    { name: 'Access Vondera Media Buyers', starter: true, plus: true, pro: true },
    { name: 'Community Access', starter: true, plus: true, pro: true },
    { name: 'Expense & Profit Tracking', starter: true, plus: true, pro: true },
    { name: 'Product Offers', starter: false, plus: true, pro: true },
    { name: 'Funnels Builder', starter: false, plus: true, pro: true },
    { name: 'Popup Builder', starter: false, plus: true, pro: true },
    { name: 'Custom HTML Pages', starter: false, plus: true, pro: true },
    { name: 'Catalog Sync with Meta', starter: false, plus: true, pro: true },
    { name: 'Pixel & Conversion Tracking', starter: false, plus: true, pro: 'Meta Partner Auto' },
    { name: 'Multi-language & Currency', starter: false, plus: '+ Multi Language', pro: '+ Multi-country Support' },
    { name: 'Order Risk System', starter: false, plus: false, pro: true },
    { name: 'Vinbox (Unified Inbox)', starter: false, plus: false, pro: true },
    { name: 'Abandoned Cart Recovery', starter: false, plus: false, pro: true },
    { name: 'Email Campaigns', starter: false, plus: false, pro: 'Custom' },
    { name: 'API Access', starter: false, plus: false, pro: true },
    { name: 'Live View (Visitors in Real Time)', starter: false, plus: false, pro: true },
    { name: "Remove 'Powered by Vondera' Branding", starter: false, plus: false, pro: true },
    { name: 'Team Access', starter: '3 Staff', plus: '5 Staff', pro: '15 Staff' },
    { name: 'Customer Support', starter: 'Email & Chat (Business Hours)', plus: '24/7 Chat & WhatsApp', pro: 'Dedicated Account Manager' },
  ];

  const billingOptions = ['monthly', '3months', '6months', 'yearly'] as const;

  const getBillingLabel = (period: typeof billingPeriod) => {
    switch (period) {
      case 'monthly': return 'Monthly';
      case '3months': return '3 Months';
      case '6months': return '6 Months';
      case 'yearly': return '12 Months';
    }
  };

  const getSavings = (period: typeof billingPeriod, monthlyPrice: number, discountedPrice: number) => {
    const months = period === '3months' ? 3 : period === '6months' ? 6 : period === 'yearly' ? 12 : 1;
    if (months === 1) return null;
    const normalTotal = monthlyPrice * months;
    const savings = normalTotal - discountedPrice;
    const percentage = Math.round((savings / normalTotal) * 100);
    return `Save ${percentage}%`;
  };

  const handleSliderChange = (value: number) => {
    setBillingPeriod(billingOptions[value]);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Container>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {t('subtitle')}
            </p>

            {/* Billing Period Slider */}
            <div className="max-w-md mx-auto mb-8 px-4">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {getBillingLabel(billingPeriod)}
                </div>
                {billingPeriod !== 'monthly' && (
                  <div className="text-sm text-green-600 font-semibold">
                    {getSavings(billingPeriod, 700, plans[1].prices[billingPeriod])}
                  </div>
                )}
              </div>

              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="3"
                  value={billingOptions.indexOf(billingPeriod)}
                  onChange={(e) => handleSliderChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary-600 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-md [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-lg [&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-lg"
                  style={{
                    background: `linear-gradient(to right, rgb(99 102 241) 0%, rgb(99 102 241) ${(billingOptions.indexOf(billingPeriod) / 3) * 100}%, rgb(229 231 235) ${(billingOptions.indexOf(billingPeriod) / 3) * 100}%, rgb(229 231 235) 100%)`
                  }}
                />
                <div className="flex justify-between mt-3 text-xs text-gray-500 font-medium">
                  <span>Monthly</span>
                  <span>3M</span>
                  <span>6M</span>
                  <span>12M</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards - Desktop Grid & Mobile Carousel */}
        <div className="max-w-6xl mx-auto mb-16 px-4">
          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={plan.popular ? 'md:-mt-4' : ''}
              >
                <PricingCard plan={plan} billingPeriod={billingPeriod} getSavings={getSavings} />
              </motion.div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <PricingCard plan={plans[currentSlide]} billingPeriod={billingPeriod} getSavings={getSavings} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50 transition-colors"
              aria-label="Previous plan"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50 transition-colors"
              aria-label="Next plan"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-primary-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to plan ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto px-4 sm:px-0"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-50 to-violet-50 border-b-2 border-primary-200">
                    <th className="py-3 sm:py-5 px-3 sm:px-6 text-left text-sm sm:text-base font-bold text-gray-900 sticky left-0 bg-gradient-to-r from-primary-50 to-violet-50 z-10 min-w-[200px] sm:min-w-0">
                      Features Comparison
                    </th>
                    {plans.map((plan, idx) => (
                      <th key={plan.name} className={`py-3 sm:py-5 px-2 sm:px-6 text-center min-w-[80px] sm:min-w-[120px] ${
                        plan.popular ? 'bg-primary-100/50' : ''
                      }`}>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-sm sm:text-base font-bold text-gray-900">{plan.name}</span>
                          {plan.popular && (
                            <Badge variant="success" className="text-xs px-2">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {features.map((feature, index) => (
                    <tr key={index} className={`transition-all duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    } hover:bg-primary-50/30 hover:shadow-sm`}>
                      <td className={`py-2 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm font-medium text-gray-800 sticky left-0 z-10 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      } hover:bg-primary-50/30`}>
                        <div className="flex items-center gap-2">
                          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-primary-400"></div>
                          <span className="line-clamp-2">{feature.name}</span>
                        </div>
                      </td>
                      <td className={`py-2 sm:py-4 px-2 sm:px-6 text-center text-xs sm:text-sm ${
                        plans[0].popular ? 'bg-primary-50/20' : ''
                      }`}>
                        {typeof feature.starter === 'boolean' ? (
                          feature.starter ? (
                            <div className="flex justify-center">
                              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                                <X className="w-4 h-4 text-gray-400" />
                              </div>
                            </div>
                          )
                        ) : (
                          <span className="font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-xs inline-block">
                            {feature.starter}
                          </span>
                        )}
                      </td>
                      <td className={`py-4 px-6 text-center text-sm ${
                        plans[1].popular ? 'bg-primary-50/20' : ''
                      }`}>
                        {typeof feature.plus === 'boolean' ? (
                          feature.plus ? (
                            <div className="flex justify-center">
                              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                                <X className="w-4 h-4 text-gray-400" />
                              </div>
                            </div>
                          )
                        ) : (
                          <span className="font-medium text-gray-700 bg-primary-100 px-3 py-1 rounded-full text-xs inline-block">
                            {feature.plus}
                          </span>
                        )}
                      </td>
                      <td className={`py-4 px-6 text-center text-sm ${
                        plans[2].popular ? 'bg-primary-50/20' : ''
                      }`}>
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? (
                            <div className="flex justify-center">
                              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                                <X className="w-4 h-4 text-gray-400" />
                              </div>
                            </div>
                          )
                        ) : (
                          <span className="font-medium text-gray-700 bg-violet-100 px-3 py-1 rounded-full text-xs inline-block">
                            {feature.pro}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-sm text-gray-500 mt-8">{t('guarantee')}</p>
      </Container>
    </section>
  );
}
