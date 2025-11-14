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
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image 
            src="/Gradient-Background.png" 
            alt="Background" 
            fill 
            className="object-cover"
            priority
          />
          {/* Dark overlay for better white text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-purple-900/50 to-blue-900/60"></div>
        </div>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Badge className="mb-6 bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg inline-flex items-center">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Payment Solutions
                </Badge>
              </motion.div>
            
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.span 
                  className="block text-white drop-shadow-lg"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(255,255,255,0.3)",
                      "0 0 40px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Accept All
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Payment Methods
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                VPay allows your customers to pay easily using <span className="text-yellow-300 font-semibold">debit cards</span>, <span className="text-yellow-300 font-semibold">credit cards</span>, or even <span className="text-yellow-300 font-semibold">digital wallets</span>.
              </motion.p>

              <motion.p
                className="text-lg text-white/80 mb-8 drop-shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Provide the best payment experience for your business.
              </motion.p>
            </motion.div>

            {/* Right Content - Credit Card Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="relative"
            >
              {/* Credit Card Design */}
              <motion.div
                className="relative w-full max-w-md mx-auto"
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 2, 0, -2, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ perspective: 1000, transformStyle: "preserve-3d" }}
              >
                {/* Card Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-yellow-400 rounded-3xl blur-3xl opacity-40"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                
                {/* Card - Purple Gradient like image */}
                <div className="relative aspect-[1.586/1] bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden">
                  
                  {/* Decorative circles/pattern */}
                  <div className="absolute -right-8 -top-8 w-40 h-40 bg-yellow-400 rounded-full opacity-30 blur-2xl"></div>
                  <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-orange-400 rounded-full opacity-20 blur-2xl"></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Top Section - VPay Logo */}
                    <div className="flex justify-between items-start">
                      <div>
                        <motion.div 
                          className="text-white font-bold text-2xl md:text-3xl mb-1"
                          animate={{ opacity: [1, 0.8, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          VPay
                        </motion.div>
                        <div className="text-white/80 text-xs md:text-sm">by Vondera</div>
                      </div>
                      {/* Chip Design */}
                      <motion.div 
                        className="w-12 h-9 md:w-14 md:h-11 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 rounded-lg relative overflow-hidden shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-1.5">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-yellow-600/40 rounded-sm"></div>
                          ))}
                        </div>
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                      </motion.div>
                    </div>

                    {/* Middle Section - Card Number */}
                    <div>
                      <motion.div 
                        className="text-white font-mono text-xl md:text-2xl lg:text-3xl tracking-widest drop-shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        •••• •••• •••• 1234
                      </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-white/70 text-xs mb-1 uppercase tracking-wide">Merchant</div>
                        <motion.div 
                          className="text-white font-bold text-sm md:text-base uppercase tracking-wide"
                          animate={{ opacity: [0.9, 1, 0.9] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          YOUR BUSINESS
                        </motion.div>
                      </div>
                      {/* Card logos (VISA, MC) */}
                      <div className="flex gap-2">
                        <div className="bg-white rounded px-2 py-1">
                          <span className="text-blue-600 font-bold text-xs">VISA</span>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded px-2 py-1">
                          <span className="text-white font-bold text-xs">MC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Payment Icons with white bg */}
                <motion.div
                  className="absolute -right-4 top-1/4 bg-white p-4 rounded-2xl shadow-2xl border-2 border-purple-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <CreditCard className="w-7 h-7 text-purple-600" />
                </motion.div>
                
                <motion.div
                  className="absolute -left-4 top-1/2 bg-white p-4 rounded-2xl shadow-2xl border-2 border-blue-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  <Wallet className="w-7 h-7 text-blue-600" />
                </motion.div>
                
                <motion.div
                  className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-2xl border-2 border-green-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Shield className="w-7 h-7 text-green-600" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Payment Options Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your payment experience?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of businesses using VPay for their payment needs
            </p>
            <a href="https://dashboard.vondera.app/dashboard" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </a>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
