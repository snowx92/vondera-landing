'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, BarChart3, Palette, TestTube2, MousePointerClick, Layers, ArrowRight, TrendingUp, Target, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AnimatedList } from '@/components/ui/animated-list';

interface ConversionUpdate {
  store: string;
  improvement: string;
  metric: string;
  icon: 'trending' | 'target' | 'sparkles';
}

const ConversionItem = ({ store, improvement, metric, icon }: ConversionUpdate) => {
  const icons = {
    trending: TrendingUp,
    target: Target,
    sparkles: Sparkles,
  };
  
  const Icon = icons[icon];
  
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all">
      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-green-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-900">{store}</p>
        <p className="text-xs text-gray-600">{metric}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-green-600">{improvement}</p>
      </div>
    </div>
  );
};

export default function VFunnelPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const liveConversions: ConversionUpdate[] = [
    { store: 'Luxe Watches', improvement: '+47%', metric: 'Conversion rate increased', icon: 'trending' },
    { store: 'FitGear Egypt', improvement: '+12K EGP', metric: 'Average order value up', icon: 'sparkles' },
    { store: 'Glow Beauty', improvement: '34%', metric: 'Abandoned carts recovered', icon: 'target' },
    { store: 'Tech Hub', improvement: '+89%', metric: 'Upsell revenue boost', icon: 'trending' },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Build Funnels in Minutes, Not Days',
      description: 'Drag, drop, done. No coding. No designers. No headaches. Just you and a funnel that converts.',
      highlight: 'Launch in <15 min',
    },
    {
      icon: Palette,
      title: 'Templates That Actually Convert',
      description: 'Forget generic templates. These are battle-tested funnels from Egyptian stores making 6-figures monthly.',
      highlight: '50+ Proven Designs',
    },
    {
      icon: TestTube2,
      title: 'A/B Test Like the Big Brands',
      description: 'Test headlines, images, prices—everything. Let data tell you what works instead of guessing.',
      highlight: 'Built-in Split Testing',
    },
    {
      icon: Layers,
      title: 'One-Click Upsells & Downsells',
      description: 'Customer just bought? Offer them more. They declined? Offer something cheaper. It\'s pure profit.',
      highlight: '+40% AOV on average',
    },
    {
      icon: BarChart3,
      title: 'Know Exactly What\'s Working',
      description: 'See where people drop off. Which products sell best. What time converts most. All in real-time.',
      highlight: 'Live Analytics',
    },
    {
      icon: MousePointerClick,
      title: 'Mobile-First (Because Duh)',
      description: '90% of Egyptian traffic is mobile. Your funnels will look perfect on every screen, every time.',
      highlight: 'Auto-optimized',
    },
  ];

  const templates = [
    {
      name: 'COD Beast',
      description: 'Single product funnel optimized for cash-on-delivery. Used by stores doing 1000+ orders/month.',
      category: 'COD Stores',
      badge: 'Most Popular',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Upsell Monster',
      description: 'Multi-step funnel with smart upsells. Increases AOV by 35-50% automatically.',
      category: 'High AOV',
      badge: 'High Converting',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Lead Magnet Pro',
      description: 'Perfect for collecting emails before the hard sell. Works great for high-ticket items.',
      category: 'Lead Gen',
      badge: 'New',
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Flash Sale Crusher',
      description: 'Countdown timer + scarcity + urgency = Sales. Great for limited offers.',
      category: 'Promotions',
      badge: 'Trending',
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Quiz Funnel',
      description: 'Engage customers with a quick quiz, then recommend products. 2x better than standard funnels.',
      category: 'Engagement',
      badge: 'Interactive',
      color: 'from-pink-500 to-pink-600',
    },
    {
      name: 'Bundle Builder',
      description: 'Let customers build their own bundle. Higher perceived value = higher conversions.',
      category: 'Bundles',
      badge: 'Premium',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header variant="solid" />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
        
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Badge className="mb-6 bg-white text-purple-600 border border-purple-200 shadow-md inline-flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Build Converting Funnels Fast
              </Badge>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Build Funnels That{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Actually Convert
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Stop losing sales with boring product pages. Create high-converting funnels in minutes—no designer, no developer, just results.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <motion.button 
                className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <p className="text-sm text-gray-500 mt-4">
                Join 2,500+ stores • No credit card needed
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid md:grid-cols-3 gap-6 mt-16"
            >
              {[
                { icon: TrendingUp, label: 'Conversion Boost', value: '+38%', color: 'from-green-500 to-emerald-600' },
                { icon: Sparkles, label: 'Higher AOV', value: '+42%', color: 'from-purple-500 to-pink-600' },
                { icon: Target, label: 'Active Stores', value: '2.5K+', color: 'from-blue-500 to-cyan-600' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (idx * 0.1) }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Live Conversions Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-16 bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <span className="text-lg font-semibold text-gray-900">Live from Egyptian Stores</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {liveConversions.slice(0, 3).map((conversion, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + (idx * 0.15) }}
                    className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100"
                  >
                    <p className="text-sm font-semibold text-gray-900 mb-1">{conversion.store}</p>
                    <p className="text-2xl font-bold text-purple-600 mb-1">{conversion.improvement}</p>
                    <p className="text-xs text-gray-600">{conversion.metric}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Live Conversions */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <Badge className="mb-6 bg-green-100 text-green-700 border-green-200">
                Real Results
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                See real results from real stores
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                These aren't fake screenshots. These are actual stores in Egypt crushing it with VFunnels right now.
              </p>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">38% average conversion boost</p>
                    <p className="text-sm text-gray-600">Compared to regular product pages</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">42% higher average order value</p>
                    <p className="text-sm text-gray-600">Thanks to one-click upsells</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-lg font-bold text-gray-900">Live Conversion Updates</span>
                </div>
                <AnimatedList delay={1500}>
                  {liveConversions.map((conversion, idx) => (
                    <ConversionItem key={idx} {...conversion} />
                  ))}
                </AnimatedList>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Everything you need to sell more
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for Egyptian e-commerce. No fluff, just features that make you money.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-purple-300 group bg-gradient-to-br from-white to-purple-50/30">
                  <CardContent className="p-6 md:p-8">
                    <motion.div 
                      className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                      {feature.description}
                    </p>
                    <Badge className="bg-purple-100 text-purple-700 border border-purple-200 font-semibold">
                      ✨ {feature.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Templates */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              Ready-Made Templates
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Start with a proven template
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't start from scratch. Use templates that are already making millions for other stores.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all group cursor-pointer bg-white border-2 border-transparent hover:border-purple-300 overflow-hidden">
                  <motion.div 
                    className={`h-3 bg-gradient-to-r ${template.color}`}
                    whileHover={{ height: 6 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{template.name}</h3>
                      <Badge className={`bg-gradient-to-r ${template.color} text-white border-none text-xs px-3 py-1 shadow-lg`}>
                        {template.badge}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{template.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-gray-100 text-gray-700 border border-gray-200">
                        {template.category}
                      </Badge>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-purple-600 font-semibold text-sm flex items-center gap-1"
                      >
                        Preview <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">Can't find the perfect template?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Build Custom Funnel
            </motion.button>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
        {/* Animated background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }}
        />
        
        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white relative z-10 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Stop losing customers at checkout
              </h2>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Build your first high-converting funnel in the next <span className="font-bold text-yellow-300">15 minutes</span>. Free.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a href="https://dashboard.vondera.app/dashboard" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  className="px-12 py-5 bg-white text-purple-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all inline-flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Building Now
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </a>
              <p className="text-sm mt-6 opacity-80">No credit card. No commitment. Just results.</p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
