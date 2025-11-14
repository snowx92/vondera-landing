'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Inbox, MessageSquare, Users, Zap, Tag, Clock, ArrowRight, CheckCircle2, Timer, Bot } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AnimatedList } from '@/components/ui/animated-list';

interface InboxMessage {
  customer: string;
  platform: string;
  message: string;
  time: string;
  status: 'new' | 'replied' | 'order';
}

const MessageItem = ({ customer, platform, message, time, status }: InboxMessage) => {
  const statusConfig = {
    new: { icon: MessageSquare, color: 'bg-blue-100 text-blue-600', label: 'New' },
    replied: { icon: CheckCircle2, color: 'bg-green-100 text-green-600', label: 'Replied' },
    order: { icon: CheckCircle2, color: 'bg-purple-100 text-purple-600', label: 'Order Created' },
  };
  
  const config = statusConfig[status];
  const Icon = config.icon;
  
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all">
      <div className={`w-10 h-10 rounded-full ${config.color} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-sm font-semibold text-gray-900">{customer}</p>
          <Badge className="text-xs bg-gray-100 text-gray-600 border-none">{platform}</Badge>
        </div>
        <p className="text-sm text-gray-600 truncate">{message}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
      <Badge className={`${config.color} border-none text-xs`}>
        {config.label}
      </Badge>
    </div>
  );
};

export default function VInboxPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const liveMessages: InboxMessage[] = [
    { customer: 'Fatma A.', platform: 'WhatsApp', message: 'مرحبا، عايزة اعرف المقاسات المتاحة؟', time: '1 min ago', status: 'new' },
    { customer: 'Ahmed K.', platform: 'Facebook', message: 'هل التوصيل متاح للقاهرة؟', time: '3 min ago', status: 'replied' },
    { customer: 'Nour M.', platform: 'Instagram', message: 'عايز اطلب 3 قطع، في خصم؟', time: '5 min ago', status: 'order' },
    { customer: 'Hassan S.', platform: 'WhatsApp', message: 'كام سعر الشحن لحد الاسكندرية؟', time: '7 min ago', status: 'replied' },
  ];

  const features = [
    {
      icon: MessageSquare,
      title: 'All Your Messages, One Place',
      description: 'WhatsApp, Facebook, Instagram, Messenger—everything in one inbox. Stop jumping between apps like a maniac.',
      highlight: '6 Platforms Connected',
    },
    {
      icon: Zap,
      title: 'Auto-Reply to Common Questions',
      description: 'Set up smart responses for "كام السعر؟" or "الشحن بكام؟" and watch your team stop answering the same thing 100 times a day.',
      highlight: 'Save 3+ hours daily',
    },
    {
      icon: Tag,
      title: 'Tag Customers Like a Pro',
      description: 'Mark VIP customers, potential buyers, or time-wasters. Know who deserves your attention and who doesn\'t.',
      highlight: 'Unlimited Tags',
    },
    {
      icon: Users,
      title: 'Your Team, Perfectly Synced',
      description: 'Assign conversations. See who\'s talking to who. No more "did you reply to Ahmed?" confusion.',
      highlight: 'Team Collaboration',
    },
    {
      icon: MessageSquare,
      title: 'Templates For Everything',
      description: 'Save your best responses. One click to send shipping info, payment details, or product specs. Fast replies = more sales.',
      highlight: '50+ Ready Templates',
    },
    {
      icon: Clock,
      title: 'Create Orders From Chat',
      description: 'Customer says "عايز اطلب"? Create their order right there in the chat. No copying, no switching tabs, no BS.',
      highlight: '1-Click Orders',
    },
  ];

  const platforms = [
    { name: 'WhatsApp', icon: '/social/whatsapp.png', users: '85%' },
    { name: 'Facebook', icon: '/social/facebook.png', users: '67%' },
    { name: 'Instagram', icon: '/social/instagram.png', users: '73%' },
    { name: 'Messenger', icon: '/social/facebook.png', users: '54%' },
    { name: 'Telegram', icon: '/social/telegram.png', users: '12%' },
    { name: 'TikTok', icon: '/social/tiktok.png', users: '28%' },
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
              <span className="text-gray-900">Stop Losing Sales </span>
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                While Switching Apps
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-800 mb-12 font-medium max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              All customer messages in one inbox
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {['/social/whatsapp.png', '/social/facebook.png', '/social/instagram.png', '/social/telegram.png', '/social/tiktok.png'].map((icon, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (idx * 0.1), duration: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Image src={icon} alt="Social" width={40} height={40} className="object-contain" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Live Messages Feed */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                See all your messages in real-time
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                No more checking WhatsApp, then Facebook, then Instagram. Everything flows into one clean inbox.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Timer className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Reply 3x Faster</h3>
                    <p className="text-gray-600">Average response time drops from 45 minutes to 12 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Smart Auto-Replies</h3>
                    <p className="text-gray-600">Handle 60% of questions automatically while you sleep</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-gray-900">Live Messages</span>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-none">
                    4 New
                  </Badge>
                </div>
                <AnimatedList>
                  {liveMessages.map((message, idx) => (
                    <MessageItem key={idx} {...message} />
                  ))}
                </AnimatedList>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for Egyptian e-commerce
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Features that actually matter when you're doing COD and dealing with Egyptian customers.
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
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary-500 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <Badge className="bg-primary-100 text-primary-700 border-none">
                      {feature.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Platform Stats */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Where your customers actually message you
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data from 1,500+ Egyptian e-commerce stores
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image src={platform.icon} alt={platform.name} width={40} height={40} className="object-contain" />
                        </div>
                        <h3 className="font-bold text-gray-900">{platform.name}</h3>
                      </div>
                      <Badge className="bg-primary-100 text-primary-700 border-none font-bold">
                        {platform.users}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">of stores receive messages here</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white relative z-10 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to stop missing messages?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Try VInbox free for 14 days. Connect all your platforms in 2 minutes.
            </p>
            <a href="https://dashboard.vondera.app/dashboard" target="_blank" rel="noopener noreferrer">
              <button className="px-12 py-5 bg-white text-primary-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </a>
            <p className="text-sm mt-4 opacity-75">Free forever for up to 100 conversations/month</p>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
