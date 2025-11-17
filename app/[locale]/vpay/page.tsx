'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CreditCard, Shield, Zap, TrendingUp, ArrowRight, RefreshCw, BarChart3, Wallet, Smartphone, Building2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

export default function VPayPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const paymentMethods = {
    cards: [
      { name: 'VISA', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg' },
      { name: 'Mastercard', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
      { name: 'AMEX', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg' }
    ],
    wallets: [
      { name: 'Vodafone Cash', logo: '/payment method/vodafone-cash.png' },
      { name: 'Orange Money', logo: '/payment method/orange.png' },
      { name: 'InstaPay', logo: '/payment method/instapay.png' },
      { name: 'WE Pay', logo: '/payment method/we.png' }
    ],
    payouts: [
      { name: 'InstaPay', logo: '/payment method/instapay.png', desc: 'Instant bank transfers' },
      { name: 'Vodafone Cash', logo: '/payment method/vodafone-cash.png', desc: 'Mobile wallet payouts' },
      { name: 'Orange Money', logo: '/payment method/orange.png', desc: 'Quick mobile payments' },
      { name: 'WE Pay', logo: '/payment method/we.png', desc: 'Secure digital wallet' }
    ]
  };

  const features = [
    {
      icon: CreditCard,
      title: 'Multiple Payment Methods',
      description: 'Accept payments via credit cards, debit cards, digital wallets, and more.',
    },
    {
      icon: Zap,
      title: 'Instant Settlement',
      description: 'Get your money faster with our instant settlement options.',
    },
    {
      icon: Shield,
      title: 'Fraud Protection',
      description: 'Advanced security features to protect you and your customers.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track your payment performance with detailed analytics.',
    },
    {
      icon: RefreshCw,
      title: 'Easy Refunds',
      description: 'Manage refunds and chargebacks with ease.',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'Increase your conversion rates with optimized checkout flows.',
    },
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-primary-50 via-purple-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center relative z-10 px-4">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="mb-4 sm:mb-6 bg-primary-100 text-primary-700 border-primary-200 text-sm sm:text-base">
                  <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Payment Gateway
                </Badge>
              </motion.div>
            
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block text-gray-900 mb-1 sm:mb-2">Accept Payments</span>
                <span className="block text-primary-600">The Easy Way</span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Enable your customers to pay with credit cards, debit cards, and digital wallets. 
                All in one seamless checkout experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
              >
                <a href="https://dashboard.vondera.app/dashboard" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </a>
                <a href="#features" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl transition-all border-2 border-gray-200 hover:border-primary-300 text-sm sm:text-base">
                    Learn More
                  </button>
                </a>
              </motion.div>

              {/* Payment Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Instant setup</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Secure payments</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">24/7 support</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Modern Payment Interface */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mt-8 lg:mt-0"
            >
              {/* Main Payment Card */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 border border-gray-200">
                {/* Header */}
                <div className="flex items-center justify-between mb-5 sm:mb-6 md:mb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Checkout</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Secure payment</p>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span className="text-xs sm:text-sm font-medium text-green-600">Verified</span>
                  </div>
                </div>

                {/* Payment Amount */}
                <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6">
                  <div className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Total Amount</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">2,499 EGP</div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2.5 sm:gap-3 md:gap-4 p-3 sm:p-3.5 md:p-4 bg-primary-50 border-2 border-primary-500 rounded-lg sm:rounded-xl cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Credit Card</div>
                      <div className="text-xs sm:text-sm text-gray-500">Visa, Mastercard, Amex</div>
                    </div>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2.5 sm:gap-3 md:gap-4 p-3 sm:p-3.5 md:p-4 bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl cursor-pointer hover:border-gray-300 transition-colors"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Mobile Wallet</div>
                      <div className="text-xs sm:text-sm text-gray-500">Vodafone, InstaPay</div>
                    </div>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-300 rounded-full flex-shrink-0"></div>
                  </motion.div>
                </div>

                {/* Pay Button */}
                <button className="w-full py-3 sm:py-3.5 md:py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg sm:rounded-xl transition-all shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Pay Securely
                </button>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6 text-[10px] sm:text-xs text-gray-500">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>256-bit SSL encryption</span>
                </div>
              </div>

              {/* Floating Payment Method Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl border border-gray-200"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" width={32} height={20} className="object-contain sm:w-10 sm:h-6" />
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={32} height={20} className="object-contain sm:w-10 sm:h-6" />
                  <Image src="/payment method/vodafone-cash.png" alt="Vodafone" width={32} height={20} className="object-contain sm:w-10 sm:h-6" />
                  <Image src="/payment method/instapay.png" alt="InstaPay" width={32} height={20} className="object-contain sm:w-10 sm:h-6" />
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-200/50 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-200/50 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Payment Options Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Payment Options
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways for your customers to pay
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Credit & Debit Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Credit & Debit Cards</h3>
                  <p className="text-sm text-gray-600">Secure card payments</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 justify-center pt-4">
                {paymentMethods.cards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white p-3 rounded-lg shadow-md w-20 h-14 flex items-center justify-center"
                  >
                    <Image 
                      src={card.logo} 
                      alt={card.name} 
                      width={60} 
                      height={40}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Digital Wallets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Digital Wallets</h3>
                  <p className="text-sm text-gray-600">Mobile wallet payments</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 pt-4">
                {paymentMethods.wallets.map((wallet, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-3 rounded-lg shadow-md h-14 flex items-center justify-center"
                  >
                    <Image 
                      src={wallet.logo} 
                      alt={wallet.name} 
                      width={80} 
                      height={40}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Get Your Payouts Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Your Payouts
            </h2>
            <p className="text-xl text-gray-600">
              Fast and flexible payout options
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {paymentMethods.payouts.map((payout, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-4 mb-4 h-24 flex items-center justify-center">
                  <Image 
                    src={payout.logo} 
                    alt={payout.name} 
                    width={100} 
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{payout.name}</h3>
                <p className="text-gray-600 text-sm">{payout.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage payments efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-primary-500 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to transform your payment experience?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of businesses using VPay for their payment needs
            </p>
            <a href="https://dashboard.vondera.app/dashboard" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white text-primary-600 rounded-lg font-semibold text-base sm:text-lg hover:shadow-2xl transition-all">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </a>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
