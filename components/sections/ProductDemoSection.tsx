'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Package, BarChart3, Users, MessageSquare, Zap, CheckCircle2, Clock, TrendingUp } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';
import BlurText from '@/components/BlurText';
import { AnimatedList } from '@/components/ui/animated-list';

// Order notification data
const orderNotifications = [
  { id: 1, customer: 'Ahmed Hassan', amount: '245 EGP', product: 'Nike Air Max', time: 'Just now' },
  { id: 2, customer: 'Sara Mohammed', amount: '189 EGP', product: 'Wireless Headphones', time: '2 min ago' },
  { id: 3, customer: 'Khaled Ali', amount: '567 EGP', product: 'Smart Watch Pro', time: '5 min ago' },
  { id: 4, customer: 'Layla Ibrahim', amount: '320 EGP', product: 'Designer Handbag', time: '8 min ago' },
  { id: 5, customer: 'Omar Youssef', amount: '445 EGP', product: 'Gaming Mouse', time: '12 min ago' },
  { id: 6, customer: 'Fatima Abdullah', amount: '890 EGP', product: 'Premium Perfume', time: '15 min ago' },
];

export default function ProductDemoSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      icon: ShoppingCart,
      title: 'Orders',
      description: 'Complete order management system',
      subtitle: 'Process, track, and fulfill orders effortlessly',
      features: [
        { text: 'Real-time order tracking', icon: Clock },
        { text: 'Bulk order processing', icon: CheckCircle2 },
        { text: 'Automated fulfillment', icon: Zap },
        { text: 'Custom statuses & workflows', icon: TrendingUp }
      ],
      color: 'from-violet-500 to-purple-600',
      demoGif: '/demo/orders.gif' // Add your GIF here
    
    },
    {
      id: 1,
      icon: Package,
      title: 'Inventory',
      description: 'Smart stock management',
      subtitle: 'Never run out of stock again',
      features: [
        { text: 'Multi-warehouse support', icon: Package },
        { text: 'Low stock alerts', icon: Clock },
        { text: 'Batch tracking', icon: CheckCircle2 },
        { text: 'Auto-reordering', icon: Zap }
      ],
      color: 'from-blue-500 to-cyan-600'
    
    },
    {
      id: 2,
      icon: BarChart3,
      title: 'Analytics',
      description: 'AI-powered insights',
      subtitle: 'Make data-driven decisions',
      features: [
        { text: 'Sales forecasting', icon: TrendingUp },
        { text: 'Customer behavior', icon: Users },
        { text: 'Revenue reports', icon: BarChart3 },
        { text: 'Custom dashboards', icon: CheckCircle2 }
      ],
      color: 'from-green-500 to-emerald-600'
    
    },
    {
      id: 3,
      icon: Users,
      title: 'Customers',
      description: 'Build relationships',
      subtitle: 'Turn customers into loyal fans',
      features: [
        { text: 'Customer profiles', icon: Users },
        { text: 'Smart segmentation', icon: TrendingUp },
        { text: 'Loyalty programs', icon: CheckCircle2 },
        { text: 'Email campaigns', icon: MessageSquare }
      ],
      color: 'from-pink-500 to-rose-600'
    
    },
    {
      id: 4,
      icon: MessageSquare,
      title: 'Chat',
      description: 'Instant support',
      subtitle: 'Engage customers in real-time',
      features: [
        { text: 'Live chat widget', icon: MessageSquare },
        { text: 'AI chatbots', icon: Zap },
        { text: 'Team inbox', icon: Users },
        { text: 'Chat analytics', icon: BarChart3 }
      ],
      color: 'from-orange-500 to-amber-600'
    
    },
    {
      id: 5,
      icon: Zap,
      title: 'Marketing',
      description: 'Grow your business',
      subtitle: 'Automate your marketing campaigns',
      features: [
        { text: 'Email automation', icon: MessageSquare },
        { text: 'SMS campaigns', icon: Zap },
        { text: 'Social media tools', icon: TrendingUp },
        { text: 'Discount codes', icon: CheckCircle2 }
      ],
      color: 'from-indigo-500 to-purple-600'
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need,
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                All in One Platform
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our powerful features designed to streamline your e-commerce operations
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon size={20} />
                <span>{tab.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left - Centered Text */}
              <div className="flex items-center justify-center">
                <div className="text-center max-w-lg space-y-4">
                  <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${tabs[activeTab].color} items-center justify-center mb-4 shadow-lg`}>
                    {(() => {
                      const Icon = tabs[activeTab].icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <BlurText text={tabs[activeTab].title} className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" delay={100} />
                  <BlurText text={tabs[activeTab].description} className="text-xl text-gray-600 mb-2" delay={150} />
                  <BlurText text={tabs[activeTab].subtitle} className="text-base text-gray-500" delay={200} />
                </div>
              </div>

              {/* Right - Demo Preview */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Main Demo Card */}
                <div className="relative rounded-2xl shadow-2xl bg-white border border-gray-200">
                  {/* Browser Chrome */}
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"></div>
                    </div>
                    <div className="flex-1 mx-4 bg-white rounded-lg px-4 py-1.5 text-sm text-gray-500 flex items-center shadow-inner">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="truncate">app.vondera.com/{tabs[activeTab].title.toLowerCase()}</span>
                    </div>
                  </div>

                  {/* Demo Content */}
                  {activeTab === 0 && tabs[activeTab].demoGif ? (
                    <div className="relative bg-gray-50">
                      <Image
                        src={tabs[activeTab].demoGif}
                        alt={`${tabs[activeTab].title} Demo`}
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        priority
                      />
                      {/* Overlay badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-xs font-semibold text-gray-700">Live Demo</span>
                        </div>
                      </div>

                      {/* Animated Order Notifications - Left Side */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-80 max-h-[500px] overflow-hidden mt-12">
                        <AnimatedList delay={2000}>
                          {orderNotifications.map((order) => (
                            <div
                              key={order.id}
                              className="bg-white rounded-xl shadow-2xl p-4 border border-gray-200 w-full"
                            >
                              <div className="flex items-center gap-3">
                                {/* Vondera Logo */}
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-md p-1">
                                  <Image 
                                    src="/logo.webp" 
                                    alt="Vondera" 
                                    width={48} 
                                    height={48}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between gap-2 mb-1">
                                    <p className="font-semibold text-gray-900 text-sm truncate">
                                      {order.customer}
                                    </p>
                                    <span className="text-xs text-gray-500 whitespace-nowrap">{order.time}</span>
                                  </div>
                                  <p className="text-xs text-gray-600 truncate mb-1">{order.product}</p>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-violet-600">{order.amount}</span>
                                    <div className="flex items-center gap-1">
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                      <span className="text-xs text-green-600 font-medium">New Order</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </AnimatedList>
                      </div>
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-br ${tabs[activeTab].color} p-12 h-[400px] md:h-[500px] flex items-center justify-center relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                          backgroundSize: '32px 32px'
                        }}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center text-white relative z-10">
                        {(() => {
                          const Icon = tabs[activeTab].icon;
                          return <Icon size={80} className="mx-auto mb-6 opacity-80 drop-shadow-lg" />;
                        })()}
                        <div className="text-3xl font-bold mb-3 drop-shadow-md">{tabs[activeTab].title} Dashboard</div>
                        <div className="text-base opacity-90 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                          Interactive demo coming soon
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
