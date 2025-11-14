'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users2, MessageCircle, Lightbulb, Award, TrendingUp, BookOpen, ArrowRight, Heart, Share2, MessageSquare, ThumbsUp, Eye, Clock, TrendingUpIcon, Sparkles, CheckCircle2, Star } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AnimatedList } from '@/components/ui/animated-list';

interface CommunityPost {
  id: number;
  author: {
    name: string;
    avatar: string;
    badge?: string;
    role?: string;
  };
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  stats: {
    likes: number;
    comments: number;
    views: number;
  };
  time: string;
  trending?: boolean;
  solved?: boolean;
}

interface CommunityActivity {
  name: string;
  action: string;
  topic: string;
  time: string;
  icon: 'message' | 'share' | 'heart';
}

const CommunityActivityItem = ({ name, action, topic, time, icon }: CommunityActivity) => {
  const icons = {
    message: MessageCircle,
    share: Share2,
    heart: Heart,
  };
  
  const Icon = icons[icon];
  
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 transition-colors">
      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary-600" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900">
          <span className="font-semibold">{name}</span> {action}
        </p>
        <p className="text-sm text-primary-600 font-medium truncate">{topic}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
};

export default function VCommunityPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const communityPosts: CommunityPost[] = [
    {
      id: 1,
      author: {
        name: 'Ahmed Hassan',
        avatar: 'AH',
        badge: 'Top Contributor',
        role: 'COD Expert'
      },
      title: 'How I Scaled from 10 to 250 Orders/Day in 3 Months',
      excerpt: 'I\'ll share my exact strategy for scaling a COD store without burning cash on ads. Key was optimizing my shipping partners and automating customer service with Vondera...',
      category: 'Success Stories',
      tags: ['COD', 'Scaling', 'Case Study'],
      stats: {
        likes: 847,
        comments: 124,
        views: 5200
      },
      time: '2 hours ago',
      trending: true,
      solved: false
    },
    {
      id: 2,
      author: {
        name: 'Sara Mohamed',
        avatar: 'SM',
        role: 'Fashion Store Owner'
      },
      title: 'Best Shipping Companies in Cairo? Need Honest Reviews',
      excerpt: 'I\'m launching my fashion store next week and need to choose between Aramex, Bosta, and MylerZ. Who has the best COD confirmation rates and customer service? Real experiences only please...',
      category: 'Shipping & Logistics',
      tags: ['Shipping', 'Cairo', 'Question'],
      stats: {
        likes: 156,
        comments: 89,
        views: 2100
      },
      time: '4 hours ago',
      trending: false,
      solved: true
    },
    {
      id: 3,
      author: {
        name: 'Khaled Ibrahim',
        avatar: 'KI',
        badge: 'Media Buyer Pro',
        role: 'Performance Marketer'
      },
      title: 'My Facebook Ads Strategy for Budget Under 5K EGP/Day',
      excerpt: 'Stop wasting money on broad audiences. Here\'s the exact targeting, creative format, and bidding strategy I use to get 4-6x ROAS consistently. Tested on 15+ products...',
      category: 'Facebook Ads',
      tags: ['Facebook Ads', 'ROAS', 'Strategy', 'Budget'],
      stats: {
        likes: 623,
        comments: 178,
        views: 4800
      },
      time: '6 hours ago',
      trending: true,
      solved: false
    },
    {
      id: 4,
      author: {
        name: 'Mona Ali',
        avatar: 'MA',
        role: 'Skincare Brand'
      },
      title: 'Found a Reliable Photographer in Cairo - Highly Recommended!',
      excerpt: 'After testing 5 different photographers, finally found one who gets e-commerce. Fast turnaround, white background, lifestyle shots. Fair prices too. DM for contact...',
      category: 'Resources',
      tags: ['Photography', 'Cairo', 'Recommendation'],
      stats: {
        likes: 234,
        comments: 67,
        views: 1500
      },
      time: '8 hours ago',
      trending: false,
      solved: false
    },
    {
      id: 5,
      author: {
        name: 'Omar Youssef',
        avatar: 'OY',
        badge: 'Verified Seller',
        role: 'Electronics Store'
      },
      title: 'Handling Returns & Refunds: My Complete System',
      excerpt: 'Returns were killing my margins until I implemented this system. Now I have 80% fewer returns and happier customers. Here\'s the exact process, templates, and automation...',
      category: 'Customer Service',
      tags: ['Returns', 'Customer Service', 'Automation'],
      stats: {
        likes: 445,
        comments: 92,
        views: 3200
      },
      time: '12 hours ago',
      trending: false,
      solved: false
    },
    {
      id: 6,
      author: {
        name: 'Fatima Khaled',
        avatar: 'FK',
        role: 'New Seller'
      },
      title: 'Just Hit My First 100 Orders! Here\'s What Worked',
      excerpt: 'Launched 6 weeks ago and hit 100 orders yesterday! Want to share what worked (and what didn\'t). Product selection, ad creatives, and the one thing that made the biggest difference...',
      category: 'Success Stories',
      tags: ['Beginner', 'Milestone', 'Tips'],
      stats: {
        likes: 567,
        comments: 145,
        views: 2800
      },
      time: '1 day ago',
      trending: true,
      solved: false
    }
  ];

  const recentActivities: CommunityActivity[] = [
    {
      name: 'Ahmed Hassan',
      action: 'shared a success story in',
      topic: 'Scaling from 10 to 100 orders/day',
      time: '2 minutes ago',
      icon: 'share',
    },
    {
      name: 'Sara Mohamed',
      action: 'asked a question in',
      topic: 'Best shipping companies in Cairo?',
      time: '5 minutes ago',
      icon: 'message',
    },
    {
      name: 'Khaled Ali',
      action: 'loved',
      topic: 'Tips for running Facebook ads on a budget',
      time: '8 minutes ago',
      icon: 'heart',
    },
    {
      name: 'Mona Ibrahim',
      action: 'replied to',
      topic: 'How to handle customer refunds?',
      time: '12 minutes ago',
      icon: 'message',
    },
  ];

  const features = [
    {
      icon: Users2,
      title: 'Connect with 10,000+ Merchants',
      description: 'Join Egypt\'s largest community of online sellers. Network with merchants who understand your challenges.',
      stats: '10K+ Active Members',
    },
    {
      icon: MessageCircle,
      title: 'Real Conversations, Real Solutions',
      description: 'Ask questions and get answers from people who\'ve been there. No corporate BS, just honest merchant-to-merchant advice.',
      stats: '500+ Daily Discussions',
    },
    {
      icon: Lightbulb,
      title: 'Learn from Others\' Mistakes',
      description: 'Why make the same mistakes everyone else did? Learn what works (and what doesn\'t) before you waste time and money.',
      stats: '1,000+ Shared Experiences',
    },
    {
      icon: Award,
      title: 'Find Trusted Partners',
      description: 'Need a reliable photographer? Packaging supplier? Media buyer? Get recommendations from merchants who actually used them.',
      stats: '300+ Verified Providers',
    },
    {
      icon: TrendingUp,
      title: 'See What\'s Working Now',
      description: 'Market changes fast. Stay updated on what products are trending, which ads are converting, and what strategies work today.',
      stats: 'Updated Daily',
    },
    {
      icon: BookOpen,
      title: 'Access Exclusive Resources',
      description: 'Members-only guides, templates, and tools. Everything from COD scripts to Facebook ad creatives that actually work.',
      stats: '100+ Free Resources',
    },
  ];

  const topics = [
    { name: 'Product Sourcing', count: '1,234 discussions', color: 'bg-blue-100 text-blue-700' },
    { name: 'Facebook Ads', count: '2,456 discussions', color: 'bg-purple-100 text-purple-700' },
    { name: 'Shipping & Logistics', count: '890 discussions', color: 'bg-green-100 text-green-700' },
    { name: 'Customer Service', count: '567 discussions', color: 'bg-orange-100 text-orange-700' },
    { name: 'Success Stories', count: '1,123 discussions', color: 'bg-pink-100 text-pink-700' },
    { name: 'COD Tips', count: '678 discussions', color: 'bg-indigo-100 text-indigo-700' },
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header variant="solid" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
        
        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none inline-flex items-center px-6 py-2">
                <Users2 className="w-4 h-4 mr-2" />
                10,000+ Active Merchants
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Stop Googling.</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Ask Real Merchants.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Egypt's largest e-commerce community. Real advice from sellers running real businesses. 
                <span className="font-semibold text-gray-900"> No BS, just results.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
                >
                  Join Free Now
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-bold text-lg hover:border-purple-500 hover:bg-gray-50 transition-all shadow-sm"
                >
                  Browse Discussions
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { label: 'Active Members', value: '10K+', icon: Users2 },
                  { label: 'Daily Posts', value: '500+', icon: MessageSquare },
                  { label: 'Success Stories', value: '1.2K+', icon: TrendingUpIcon },
                  { label: 'Expert Answers', value: '15K+', icon: CheckCircle2 }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg"
                  >
                    <stat.icon className="w-8 h-8 text-purple-600 mb-2 mx-auto" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Trending Posts Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  <Sparkles className="inline-block w-10 h-10 text-orange-500 mr-3" />
                  Trending Discussions
                </h2>
                <p className="text-lg text-gray-600">
                  Real posts from real merchants. Join the conversation.
                </p>
              </div>
              <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2 inline-block" />
                Live Now
              </Badge>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {communityPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-200 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {post.author.avatar}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Author Info */}
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="font-bold text-gray-900">{post.author.name}</span>
                          {post.author.badge && (
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-none text-xs px-2 py-0.5">
                              <Star className="w-3 h-3 mr-1" />
                              {post.author.badge}
                            </Badge>
                          )}
                          {post.author.role && (
                            <span className="text-sm text-gray-500">• {post.author.role}</span>
                          )}
                          <span className="text-sm text-gray-400">• {post.time}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {post.trending && (
                            <TrendingUpIcon className="inline-block w-5 h-5 text-orange-500 mr-2" />
                          )}
                          {post.solved && (
                            <CheckCircle2 className="inline-block w-5 h-5 text-green-500 mr-2" />
                          )}
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>

                        {/* Tags & Category */}
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                          <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                            {post.category}
                          </Badge>
                          {post.tags.map((tag, tagIdx) => (
                            <Badge key={tagIdx} className="bg-white text-gray-600 border border-gray-300">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1.5 hover:text-purple-600 transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span className="font-semibold">{post.stats.likes}</span>
                          </div>
                          <div className="flex items-center gap-1.5 hover:text-purple-600 transition-colors">
                            <MessageSquare className="w-4 h-4" />
                            <span className="font-semibold">{post.stats.comments}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Eye className="w-4 h-4" />
                            <span>{post.stats.views.toLocaleString()} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="https://dashboard.vondera.app/dashboard" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                View All Discussions
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </a>
          </motion.div>
        </Container>
      </section>

      {/* Live Activity Feed */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-200 inline-flex items-center px-4 py-2">
                <MessageCircle className="w-4 h-4 mr-2" />
                Popular Topics
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join conversations that matter
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Real-time discussions happening in the community. Jump in, share your experience, or learn from others.
              </p>
              <div className="flex flex-wrap gap-3">
                {topics.map((topic, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Badge className={`${topic.color} border-none px-4 py-2 cursor-pointer hover:scale-105 transition-transform font-semibold`}>
                      {topic.name}
                      <span className="ml-2 opacity-75 text-xs font-normal">{topic.count}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-900">Live Activity Feed</span>
                  <Badge className="ml-auto bg-green-100 text-green-700 text-xs">
                    {recentActivities.length} new
                  </Badge>
                </div>
                <AnimatedList delay={1000}>
                  {recentActivities.map((activity, idx) => (
                    <CommunityActivityItem key={idx} {...activity} />
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
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none inline-flex items-center px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Join VCommunity
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your unfair advantage in e-commerce
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              It's not just a forum. It's where Egyptian sellers win together.
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
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-500 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <Badge className="bg-purple-100 text-purple-700 border border-purple-200 font-semibold">
                      {feature.stats}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-white/80 backdrop-blur-sm text-purple-700 border-purple-200 inline-flex items-center px-6 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Merchant Success Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What merchants are saying
              </h2>
              <p className="text-lg text-gray-600">
                Real feedback from real sellers who found real value
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  quote: "I was about to waste 50K EGP on the wrong shipping company. Asked in VCommunity and got 15 replies in an hour from people who actually used them. Saved my ass.",
                  author: "Mohamed A.",
                  business: "Fashion Store",
                  metric: "Saved 50K EGP"
                },
                {
                  quote: "Found my media buyer here. He came recommended by 3 other merchants. Already 2x'd my ROAS in 2 weeks. Best decision ever.",
                  author: "Nour K.",
                  business: "Skincare Brand",
                  metric: "2x ROAS"
                },
                {
                  quote: "The COD templates alone are worth joining. But the real value is asking 'stupid questions' and getting honest answers without judgment.",
                  author: "Hassan M.",
                  business: "Electronics Store",
                  metric: "Free Resources"
                },
                {
                  quote: "Launched my store 3 months ago. VCommunity taught me more than any 5K course. And it's completely free. Wild.",
                  author: "Layla S.",
                  business: "Accessories Shop",
                  metric: "Better than courses"
                },
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-300 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                            {testimonial.author[0]}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{testimonial.author}</div>
                            <div className="text-sm text-gray-600">{testimonial.business}</div>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-700 border-green-200 font-semibold">
                          {testimonial.metric}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        {/* Floating shapes */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm"
        />
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white relative z-10 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to stop learning the hard way?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Join 10,000+ Egyptian merchants who are building, learning, and winning together.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-purple-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
            >
              Join VCommunity Free
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </motion.button>
            <p className="text-sm mt-6 opacity-75">No credit card required. Free forever. 100% Egyptian sellers.</p>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>10K+ Members</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>500+ Daily Posts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>100% Free</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
