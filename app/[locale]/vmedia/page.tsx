'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, TrendingUp, DollarSign, Star, Shield, Target, ArrowRight, Phone, Mail } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { AnimatedList } from '@/components/ui/animated-list';

export default function VMediaPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const features = [
    {
      icon: Users,
      title: 'Connect with Merchants',
      description: 'Access thousands of e-commerce businesses looking for media buyers.',
    },
    {
      icon: DollarSign,
      title: 'Set Your Rates',
      description: 'You control your pricing and work on your own terms.',
    },
    {
      icon: TrendingUp,
      title: 'Track Performance',
      description: 'Monitor your campaigns and earnings in real-time.',
    },
    {
      icon: Star,
      title: 'Build Reputation',
      description: 'Get reviews and build your profile to attract more clients.',
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Get paid securely and on time for your services.',
    },
    {
      icon: Target,
      title: 'Campaign Management',
      description: 'Manage all your campaigns from one central dashboard.',
    },
  ];

  const topMediaBuyers = [
    {
      id: 1,
      name: 'Mohamed Hosny',
      phone: '+20 ****** 345',
      email: '******@vmedia.app',
      revenueType: 'Sales %',
      revenueValue: '15%',
      platforms: ['meta', 'instagram', 'tiktok'],
      orderScore: 9.8,
      totalOrders: '12.5K',
      earnings: '850K'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      phone: '+20 ****** 892',
      email: '******@vmedia.app',
      revenueType: 'Ad Spent',
      revenueValue: '8%',
      platforms: ['meta', 'instagram'],
      orderScore: 9.6,
      totalOrders: '10.2K',
      earnings: '720K'
    },
    {
      id: 3,
      name: 'Sara Ali',
      phone: '+20 ****** 567',
      email: '******@vmedia.app',
      revenueType: 'Fixed Salary',
      revenueValue: '5K/mo',
      platforms: ['meta', 'tiktok'],
      orderScore: 9.4,
      totalOrders: '8.7K',
      earnings: '580K'
    },
    {
      id: 4,
      name: 'Khaled Ibrahim',
      phone: '+20 ****** 234',
      email: '******@vmedia.app',
      revenueType: 'Sales %',
      revenueValue: '12%',
      platforms: ['instagram', 'tiktok'],
      orderScore: 9.3,
      totalOrders: '7.9K',
      earnings: '465K'
    },
    {
      id: 5,
      name: 'Fatima Youssef',
      phone: '+20 ****** 789',
      email: '******@vmedia.app',
      revenueType: 'Ad Spent',
      revenueValue: '10%',
      platforms: ['meta', 'instagram', 'tiktok'],
      orderScore: 9.1,
      totalOrders: '6.5K',
      earnings: '390K'
    }
  ];

  const getPlatformIcon = (platform: string) => {
    const icons = {
      meta: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0866FF">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      instagram: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FD5949"/>
              <stop offset="50%" stopColor="#D6249F"/>
              <stop offset="100%" stopColor="#285AEB"/>
            </linearGradient>
          </defs>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      tiktok: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    };
    return icons[platform as keyof typeof icons];
  };

  const getRevenueColor = (type: string) => {
    const colors = {
      'Sales %': 'bg-green-100 text-green-700',
      'Ad Spent': 'bg-blue-100 text-blue-700',
      'Fixed Salary': 'bg-purple-100 text-purple-700'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

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
        </div>
        
        <Container>
          <motion.div 
            className="max-w-5xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-gray-900">Find Top </span>
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Media Buyers
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-800 mb-12 font-medium max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Scale your e-commerce with proven experts
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {[
                { icon: Users, label: '5K+ Buyers', delay: 0 },
                { icon: TrendingUp, label: '3x ROAS', delay: 0.1 },
                { icon: Star, label: '4.8 Rating', delay: 0.2 }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + item.delay, duration: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                    <item.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Leaderboard Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-vmedia-50 via-white to-primary-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="vmedia" className="mb-4">
              Top Performers
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Top Media Buyers This Month
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Leading experts scaling Egyptian e-commerce
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
            {/* Leaderboard with AnimatedList */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 h-[600px] flex flex-col">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-1.5">
                  🏆 Top Media Buyers
                </h3>
                <div className="flex-1 overflow-hidden">
                  <AnimatedList delay={1000}>
                    {topMediaBuyers.slice(0, 5).reverse().map((buyer, index) => {
                      const actualIndex = 4 - index; // Reverse the index for correct ranking
                      return (
                        <div key={buyer.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors w-full">
                          <div className="flex-shrink-0 relative">
                            {/* Profile Image */}
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 relative">
                              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                                <span className="text-white text-sm font-bold">
                                  {buyer.name.charAt(0)}
                                </span>
                              </div>
                            </div>
                            {/* Rank Badge */}
                            <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white
                              ${actualIndex === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 
                                actualIndex === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                                actualIndex === 2 ? 'bg-gradient-to-r from-amber-600 to-orange-700' :
                                'bg-gradient-to-r from-purple-500 to-indigo-600'}`}>
                              {actualIndex < 3 ? (actualIndex === 0 ? '🥇' : actualIndex === 1 ? '🥈' : '🥉') : actualIndex + 1}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {buyer.name}
                                </p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <div className="flex items-center gap-1 text-xs text-gray-400">
                                    <Phone className="w-3 h-3" />
                                    <span className="blur-sm">{buyer.phone}</span>
                                  </div>
                                  <span className="text-gray-300">•</span>
                                  <div className="flex items-center gap-1 text-xs text-gray-400">
                                    <Mail className="w-3 h-3" />
                                    <span className="blur-sm">{buyer.email}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <p className="text-xs text-gray-500">
                                    {buyer.totalOrders} orders • {buyer.earnings} EGP
                                  </p>
                                </div>
                                {/* Revenue Type Badge */}
                                <div className="flex items-center gap-2 mt-1.5">
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getRevenueColor(buyer.revenueType)}`}>
                                    {buyer.revenueType}: {buyer.revenueValue}
                                  </span>
                                  {/* Social Platform Icons */}
                                  <div className="flex gap-1">
                                    {buyer.platforms.map((platform) => (
                                      <div key={platform} className="w-4 h-4 flex items-center justify-center">
                                        {getPlatformIcon(platform)}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1 ml-2">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span className="text-xs font-medium text-gray-700">
                                  {buyer.orderScore}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </AnimatedList>
                </div>
              </div>
            </motion.div>

            {/* Animated Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl p-8 border border-primary-100">
                <div className="aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden relative">
                  {/* Animated Dashboard Preview */}
                  <div className="absolute inset-0 flex flex-col p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold text-gray-900">Campaign Dashboard</h3>
                      <motion.div
                        className="w-3 h-3 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { label: 'Impressions', value: '2.4M', color: 'bg-blue-50' },
                        { label: 'Clicks', value: '180K', color: 'bg-green-50' },
                        { label: 'Orders', value: '12.5K', color: 'bg-purple-50' },
                        { label: 'Revenue', value: '4.2M', color: 'bg-pink-50' }
                      ].map((stat, idx) => (
                        <motion.div
                          key={idx}
                          className={`p-4 rounded-xl ${stat.color}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + (idx * 0.1) }}
                        >
                          <p className="text-xs text-gray-600 uppercase mb-1">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-4">
                      {[
                        { label: 'Facebook', progress: 85, color: 'bg-blue-500' },
                        { label: 'Instagram', progress: 72, color: 'bg-pink-500' },
                        { label: 'TikTok', progress: 68, color: 'bg-gray-800' }
                      ].map((channel, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-700 font-medium">{channel.label}</span>
                            <span className="text-gray-900 font-bold">{channel.progress}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full ${channel.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${channel.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.8 + (idx * 0.2) }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 mt-6">
                  Real-time performance tracking for every campaign
                </p>
              </div>
            </motion.div>
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
              Why Choose VMedia?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The leading marketplace for media buying services
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
              Ready to scale your media buying business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join VMedia today and connect with top merchants
            </p>
            <a href="https://mediabuyers.vondera.app/" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all">
                Get Started Free
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
