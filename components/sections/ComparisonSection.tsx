'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function ComparisonSection() {
  const [activeCompetitor, setActiveCompetitor] = useState('shopify');

  const competitors = [
    { id: 'shopify', name: 'Shopify', color: 'green' },
    { id: 'woocommerce', name: 'WooCommerce', color: 'purple' },
  ];

  const features = [
    { name: 'Starting Price', vondera: '300 EGP/mo', shopify: '$29/mo (~1,450 EGP)', woocommerce: 'Free + $50/mo (~2,500 EGP)' },
    { name: 'Arabic Interface', vondera: true, shopify: 'Limited', woocommerce: 'Plugins Required' },
    { name: 'RTL Support', vondera: true, shopify: 'Plugins Required', woocommerce: 'Plugins Required' },
    { name: 'Local Payment Gateways', vondera: true, shopify: 'Limited', woocommerce: 'Plugins Required' },
    { name: 'Media Buyer Marketplace', vondera: true, shopify: false, woocommerce: false },
    { name: 'Free Themes', vondera: '20+', shopify: '8', woocommerce: '10+' },
    { name: 'Mobile Apps', vondera: true, shopify: true, woocommerce: false },
    { name: 'Transaction Fees', vondera: '0%', shopify: '2%', woocommerce: '0%' },
    { name: '24/7 Support', vondera: true, shopify: 'Paid Plans', woocommerce: 'Community' },
    { name: 'Multi-Channel Selling', vondera: true, shopify: true, woocommerce: 'Plugins Required' },
    { name: 'Social Media Integration', vondera: true, shopify: 'Limited', woocommerce: 'Plugins Required' },
    { name: 'Built for MENA', vondera: true, shopify: false, woocommerce: false },
  ];

  const getCompetitorValue = (feature: typeof features[0]) => {
    switch (activeCompetitor) {
      case 'shopify':
        return feature.shopify;
      case 'woocommerce':
        return feature.woocommerce;
      default:
        return feature.shopify;
    }
  };

  const renderValue = (value: any) => {
    if (value === true) {
      return <Check className="w-6 h-6 text-green-500 mx-auto" />;
    }
    if (value === false) {
      return <X className="w-6 h-6 text-red-500 mx-auto" />;
    }
    return <span className="text-sm text-gray-700">{value}</span>;
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-violet-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Merchants Choose
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Vondera Over Others
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Compare Vondera with leading e-commerce platforms and see why we're the best choice for MENA
            </p>

            {/* Competitor Selector */}
            <div className="flex justify-center gap-4 flex-wrap">
              {competitors.map((competitor) => (
                <motion.button
                  key={competitor.id}
                  onClick={() => setActiveCompetitor(competitor.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCompetitor === competitor.id
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  vs {competitor.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-6">
              <div className="font-semibold text-lg">Feature</div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-lg">Vondera</span>
                </div>
                <span className="text-xs opacity-80">Recommended</span>
              </div>
              <div className="text-center font-semibold text-lg">
                {competitors.find((c) => c.id === activeCompetitor)?.name}
              </div>
            </div>

            {/* Rows */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`grid grid-cols-3 p-6 items-center ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-violet-50 transition-colors`}
              >
                <div className="font-medium text-gray-900">{feature.name}</div>
                <div className="text-center">{renderValue(feature.vondera)}</div>
                <div className="text-center">{renderValue(getCompetitorValue(feature))}</div>
              </motion.div>
            ))}

            {/* Footer CTA */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-8 text-center">
              <p className="text-white text-lg mb-4 font-medium">
                Join 10,000+ merchants who switched to Vondera
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Free Trial
              </motion.button>
              <p className="text-white text-sm mt-4 opacity-80">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Merchants Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Merchants Switch to Vondera</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Save 60%', description: 'Lower costs without compromising on features' },
              { title: 'MENA-First', description: 'Built specifically for Arabic-speaking merchants' },
              { title: 'VMedia Access', description: 'Exclusive marketplace for media buyers' },
            ].map((reason, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-violet-600 mb-2">{reason.title}</div>
                <div className="text-gray-600">{reason.description}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
