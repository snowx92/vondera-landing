'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Globe, Search, Lock, Zap, CreditCard, MapPin, Check, ArrowRight, Shield, TrendingUp, RefreshCw, DollarSign } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

export default function VDomainPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const popularExtensions = [
    { ext: '.com', price: '299', currency: 'EGP', popular: true },
    { ext: '.net', price: '349', currency: 'EGP' },
    { ext: '.shop', price: '99', currency: 'EGP', sale: true },
    { ext: '.store', price: '149', currency: 'EGP' },
    { ext: '.online', price: '89', currency: 'EGP', sale: true },
    { ext: '.site', price: '79', currency: 'EGP', sale: true },
  ];

  const features = [
    {
      icon: Search,
      title: 'Domain Search',
      description: 'Find the perfect domain name for your business with our smart search tool.',
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Your domain is ready to use immediately after purchase. No waiting time.',
    },
    {
      icon: Lock,
      title: 'Free SSL Certificate',
      description: 'Secure your website with a free SSL certificate included with every domain.',
    },
    {
      icon: Shield,
      title: 'Domain Privacy',
      description: 'Protect your personal information with free WHOIS privacy protection.',
    },
    {
      icon: RefreshCw,
      title: 'Easy Management',
      description: 'Manage DNS records, subdomains, and settings from one simple dashboard.',
    },
    {
      icon: TrendingUp,
      title: 'SEO Ready',
      description: 'Optimized for search engines to help your business get discovered online.',
    },
  ];

  const paymentBenefits = [
    'Pay in Egyptian Pounds (EGP)',
    'No credit card required',
    'Accept local bank transfers',
    'Mobile wallet payments (Vodafone Cash, InstaPay)',
    'Transparent pricing with no hidden fees',
    'Secure payment processing',
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-primary-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        
        <Container>
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-6 bg-primary-100 text-primary-700 border-primary-200">
                <Globe className="w-4 h-4 mr-2" />
                Domain Registration
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-gray-900">Your Domain,</span>
                <span className="block text-primary-600">
                  Your Business Identity
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Register your custom domain and build your online presence. 
                <span className="font-semibold text-gray-900"> Pay in Egyptian Pounds, no credit card needed.</span>
              </p>

              {/* Domain Search Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-2xl mx-auto mb-8"
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex items-center gap-3 px-4">
                      <Search className="w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search for your perfect domain..."
                        className="flex-1 py-3 text-lg outline-none"
                      />
                    </div>
                    <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors flex items-center gap-2">
                      Search
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Try: yourstore.com, myshop.shop, business.online
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Instant activation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Free SSL included</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>24/7 support</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Popular Domains Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Domain Extensions
            </h2>
            <p className="text-xl text-gray-600">
              Choose from a variety of domain extensions at great prices
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {popularExtensions.map((domain, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-500 transition-all group"
              >
                {domain.popular && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Popular
                    </span>
                  </div>
                )}
                {domain.sale && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Sale!
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {domain.ext}
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary-600">{domain.price}</span>
                    <span className="text-gray-600 ml-2">{domain.currency}/year</span>
                  </div>
                  <button className="w-full py-3 bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-900 font-semibold rounded-xl transition-colors">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">Need a different extension?</p>
            <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors">
              View All Extensions
            </button>
          </motion.div>
        </Container>
      </section>

      {/* Payment Options Section - Highlight Egyptian Pound */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-green-100 text-green-700 border-green-200">
                <DollarSign className="w-4 h-4 mr-2" />
                Easy Payment
              </Badge>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Pay in Egyptian Pounds
                <br />
                <span className="text-primary-600">No Credit Card Required</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand the challenges of international payments. That's why we made it simple—
                pay for your domain using Egyptian Pounds through local payment methods you already use.
              </p>

              <div className="space-y-4">
                {paymentBenefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Payment Methods Visual */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Accepted Payment Methods
                </h3>
                
                <div className="space-y-4">
                  {/* Egyptian Pound */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                          <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-lg">Egyptian Pound (EGP)</div>
                          <div className="text-sm text-gray-600">Local currency pricing</div>
                        </div>
                      </div>
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                  </div>

                  {/* Bank Transfer */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700 font-medium">Bank Transfer</span>
                    </div>
                  </div>

                  {/* Mobile Wallets */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700 font-medium">Mobile Wallets (Vodafone, InstaPay)</span>
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700 font-medium">Debit Cards (Optional)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-sm text-blue-900 text-center font-medium">
                    💡 No international transaction fees. Pay like you're shopping locally!
                  </p>
                </div>
              </div>
            </motion.div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional domain management tools included with every domain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-primary-500 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              Register your domain in minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Search Your Domain',
                description: 'Enter your desired domain name and find available options instantly.',
                icon: Search,
              },
              {
                step: '2',
                title: 'Choose Payment Method',
                description: 'Select your preferred local payment option—bank transfer or mobile wallet.',
                icon: CreditCard,
              },
              {
                step: '3',
                title: 'Start Building',
                description: 'Your domain is ready! Connect it to your Vondera store and go live.',
                icon: Zap,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 h-full">
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <item.icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Claim Your Domain?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of Egyptian businesses with their own professional domain names
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://dashboard.vondera.app/dashboard" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
                  Get Started Now
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </a>
              <a href="https://dashboard.vondera.app/dashboard" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                  Search Domains
                </button>
              </a>
            </div>
            <p className="text-sm opacity-75 mt-6">
              No credit card required • Pay in EGP • Instant activation
            </p>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

