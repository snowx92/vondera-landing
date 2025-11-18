"use client";

import BlurText from "@/components/BlurText";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { AnimatedList } from "@/components/ui/animated-list";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  Clock,
  CreditCard,
  GitBranch,
  Globe,
  Layout,
  MessageSquare,
  Package,
  ShoppingCart,
  Target,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { forwardRef, useRef, useState } from "react";
import { useTranslations } from "next-intl";

// Circle component for animated beam
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white p-2 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

// Social Media Icons with real colors
const SocialIcons = {
  whatsapp: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path
        d="M35.9 12.1C33.3 9.5 29.9 8 26.3 8 19.3 8 13.6 13.7 13.6 20.7c0 2.1.5 4.1 1.6 5.9L13 35l8.6-2.3c1.7.9 3.7 1.4 5.7 1.4 7 0 12.7-5.7 12.7-12.7 0-3.4-1.3-6.6-3.7-9zm-9.6 19.6c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.9 1 1-3.7-.3-.4c-1-1.6-1.5-3.4-1.5-5.3 0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9s2.9 4.4 2.9 7.1c0 5.5-4.5 10-10 10zm5.5-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2-.3.3-.6.1c-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.2-.7c.2-.2.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"
        fill="white"
      />
    </svg>
  ),
  messenger: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#0084FF" />
      <path
        d="M24 8c-8.8 0-16 6.8-16 15.2 0 4.8 2.4 9.1 6.2 11.9V40l4.8-2.6c1.3.4 2.6.6 4 .6 8.8 0 16-6.8 16-15.2S32.8 8 24 8zm1.6 20.5l-4.1-4.4-8 4.4 8.8-9.4 4.2 4.4 7.9-4.4-8.8 9.4z"
        fill="white"
      />
    </svg>
  ),
  instagram: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%">
          <stop offset="0%" stopColor="#FDF497" />
          <stop offset="5%" stopColor="#FDF497" />
          <stop offset="45%" stopColor="#FD5949" />
          <stop offset="60%" stopColor="#D6249F" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="24" fill="url(#ig-grad)" />
      <path
        d="M24 14c-3.3 0-3.7 0-5 .1-1.3.1-2.2.3-3 .6-.8.3-1.5.7-2.2 1.4s-1.1 1.4-1.4 2.2c-.3.8-.5 1.7-.6 3-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.3.3 2.2.6 3 .3.8.7 1.5 1.4 2.2s1.4 1.1 2.2 1.4c.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6.8-.3 1.5-.7 2.2-1.4s1.1-1.4 1.4-2.2c.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.4-2.2s-1.4-1.1-2.2-1.4c-.8-.3-1.7-.5-3-.6-1.3-.1-1.7-.1-5-.1zm0 1.8c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9s.7.9.9 1.4c.2.4.4 1.1.4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4s-.9.7-1.4.9c-.4.2-1.1.4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9s-.7-.9-.9-1.4c-.2-.4-.4-1.1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4s.9-.7 1.4-.9c.4-.2 1.1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1z"
        fill="white"
      />
      <path
        d="M24 18.3c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7-2.6-5.7-5.7-5.7zm0 9.4c-2 0-3.7-1.6-3.7-3.7s1.6-3.7 3.7-3.7 3.7 1.6 3.7 3.7-1.7 3.7-3.7 3.7z"
        fill="white"
      />
      <circle cx="30" cy="18" r="1.3" fill="white" />
    </svg>
  ),
  facebook: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#1877F2" />
      <path
        d="M26.5 38V26h4l.6-4.7h-4.6v-3c0-1.4.4-2.3 2.4-2.3h2.5V11.4c-.4-.1-1.9-.2-3.6-.2-3.6 0-6 2.2-6 6.2v3.5h-4V26h4v12h4.7z"
        fill="white"
      />
    </svg>
  ),
  twitter: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#000000" />
      <path
        d="M36.6 15.8c-.9.4-1.9.7-2.9.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.1-.2-7.7-2.2-10.1-5.2-.4.7-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z"
        fill="white"
      />
    </svg>
  ),
  tiktok: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#000000" />
      <path
        d="M31.5 13.5c-.6 0-1.1.1-1.6.3-.1-1.4-.7-2.7-1.6-3.6-.9-.9-2.2-1.4-3.5-1.4v2.8c.8 0 1.6.3 2.1.9.6.6.9 1.3.9 2.1h2.8c0 2.3 1.9 4.2 4.2 4.2v2.8c-2.5 0-4.8-1.4-5.9-3.5v7.8c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.7 2.9-6.8 6.6-7v2.9c-2.1.2-3.8 1.9-3.8 4.1 0 2.3 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2V8.8h2.8c0 .2 0 .4.1.6.3 1.9 1.6 3.6 3.4 4.3-.1-.1-.1-.2-.1-.2z"
        fill="#EE1D52"
      />
      <path
        d="M21.9 23.8c-2.1.2-3.8 1.9-3.8 4.1 0 2.3 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2V8.8h2.8c0 .2 0 .4.1.6-1.8-.8-3.1-2.4-3.4-4.3 0-.2-.1-.4-.1-.6h-2.8v19.1c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2c0-2.2 1.7-3.9 3.8-4.1v-2.9c-3.7.2-6.6 3.3-6.6 7 0 3.9 3.1 7 7 7s7-3.1 7-7v-7.8c1.1 2.1 3.4 3.5 5.9 3.5v-2.8c-2.3 0-4.2-1.9-4.2-4.2h-2.8c0-.8-.3-1.5-.9-2.1-.6-.6-1.3-.9-2.1-.9v-2.8c1.3 0 2.6.5 3.5 1.4.9.9 1.5 2.2 1.6 3.6.5-.2 1-.3 1.6-.3v7.8z"
        fill="#69C9D0"
      />
    </svg>
  ),
};

export default function ProductDemoSection() {
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations('productDemo');

  // Refs for animated beams in Social Inbox
  const containerRef = useRef<HTMLDivElement>(null);
  const vonderaRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const messengerRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const facebookRef = useRef<HTMLDivElement>(null);
  const twitterRef = useRef<HTMLDivElement>(null);
  const tiktokRef = useRef<HTMLDivElement>(null);

  // Order notification data using translations
  const orderNotifications = [
    {
      id: 1,
      customer: t('orderNotifications.order1.customer'),
      amount: t('orderNotifications.order1.amount'),
      product: t('orderNotifications.order1.product'),
      time: t('orderNotifications.order1.time'),
    },
    {
      id: 2,
      customer: t('orderNotifications.order2.customer'),
      amount: t('orderNotifications.order2.amount'),
      product: t('orderNotifications.order2.product'),
      time: t('orderNotifications.order2.time'),
    },
    {
      id: 3,
      customer: t('orderNotifications.order3.customer'),
      amount: t('orderNotifications.order3.amount'),
      product: t('orderNotifications.order3.product'),
      time: t('orderNotifications.order3.time'),
    },
    {
      id: 4,
      customer: t('orderNotifications.order4.customer'),
      amount: t('orderNotifications.order4.amount'),
      product: t('orderNotifications.order4.product'),
      time: t('orderNotifications.order4.time'),
    },
    {
      id: 5,
      customer: t('orderNotifications.order5.customer'),
      amount: t('orderNotifications.order5.amount'),
      product: t('orderNotifications.order5.product'),
      time: t('orderNotifications.order5.time'),
    },
    {
      id: 6,
      customer: t('orderNotifications.order6.customer'),
      amount: t('orderNotifications.order6.amount'),
      product: t('orderNotifications.order6.product'),
      time: t('orderNotifications.order6.time'),
    },
  ];

  const tabs = [
    {
      id: 0,
      icon: Layout,
      title: t('tabs.websiteBuilder.title'),
      description: t('tabs.websiteBuilder.description'),
      subtitle: t('tabs.websiteBuilder.subtitle'),
      features: [
        { text: t('tabs.websiteBuilder.features.dragDrop'), icon: Zap },
        { text: t('tabs.websiteBuilder.features.mobileResponsive'), icon: CheckCircle2 },
        { text: t('tabs.websiteBuilder.features.seoOptimized'), icon: TrendingUp },
        { text: t('tabs.websiteBuilder.features.customTemplates'), icon: Layout },
      ],
      color: "from-violet-500 to-purple-600",
      demoGif: "/demo/themebuilder.gif",
    },
    {
      id: 1,
      icon: GitBranch,
      title: t('tabs.funnelBuilder.title'),
      description: t('tabs.funnelBuilder.description'),
      subtitle: t('tabs.funnelBuilder.subtitle'),
      features: [
        { text: t('tabs.funnelBuilder.features.preBuilt'), icon: Layout },
        { text: t('tabs.funnelBuilder.features.abTesting'), icon: BarChart3 },
        { text: t('tabs.funnelBuilder.features.analytics'), icon: TrendingUp },
        { text: t('tabs.funnelBuilder.features.upsell'), icon: Zap },
      ],
      color: "from-blue-500 to-cyan-600",
      demoGif: "/demo/funnelbuilder.gif",
    },
    {
      id: 2,
      icon: MessageSquare,
      title: t('tabs.socialInbox.title'),
      description: t('tabs.socialInbox.description'),
      subtitle: t('tabs.socialInbox.subtitle'),
      features: [
        { text: t('tabs.socialInbox.features.multiPlatform'), icon: MessageSquare },
        { text: t('tabs.socialInbox.features.aiPowered'), icon: Zap },
        { text: t('tabs.socialInbox.features.teamCollaboration'), icon: Users },
        { text: t('tabs.socialInbox.features.autoResponses'), icon: CheckCircle2 },
      ],
      color: "from-orange-500 to-amber-600",
      demoGif: "/demo/vinbox.gif",
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: t('tabs.orders.title'),
      description: t('tabs.orders.description'),
      subtitle: t('tabs.orders.subtitle'),
      features: [
        { text: t('tabs.orders.features.realTimeTracking'), icon: Clock },
        { text: t('tabs.orders.features.bulkProcessing'), icon: CheckCircle2 },
        { text: t('tabs.orders.features.automatedFulfillment'), icon: Zap },
        { text: t('tabs.orders.features.customStatuses'), icon: TrendingUp },
      ],
      color: "from-green-500 to-emerald-600",
      demoGif: "/demo/orders.gif",
    },
    {
      id: 4,
      icon: Users,
      title: t('tabs.teamManagement.title'),
      description: t('tabs.teamManagement.description'),
      subtitle: t('tabs.teamManagement.subtitle'),
      features: [
        { text: t('tabs.teamManagement.features.roleBasedAccess'), icon: Users },
        { text: t('tabs.teamManagement.features.activityTracking'), icon: BarChart3 },
        { text: t('tabs.teamManagement.features.performanceMetrics'), icon: TrendingUp },
        { text: t('tabs.teamManagement.features.teamChat'), icon: MessageSquare },
      ],
      color: "from-pink-500 to-rose-600",
      demoGif: "/demo/team.gif",
    },
    {
      id: 5,
      icon: Package,
      title: t('tabs.inventory.title'),
      description: t('tabs.inventory.description'),
      subtitle: t('tabs.inventory.subtitle'),
      features: [
        { text: t('tabs.inventory.features.multiWarehouse'), icon: Package },
        { text: t('tabs.inventory.features.lowStockAlerts'), icon: Clock },
        { text: t('tabs.inventory.features.batchTracking'), icon: CheckCircle2 },
        { text: t('tabs.inventory.features.autoReordering'), icon: Zap },
      ],
      color: "from-indigo-500 to-purple-600",
      demoGif: "/demo/inventory.gif",
    },
    {
      id: 6,
      icon: Users,
      title: t('tabs.community.title'),
      description: t('tabs.community.description'),
      subtitle: t('tabs.community.subtitle'),
      features: [
        { text: t('tabs.community.features.memberForums'), icon: MessageSquare },
        { text: t('tabs.community.features.exclusiveContent'), icon: Zap },
        { text: t('tabs.community.features.badgesRewards'), icon: CheckCircle2 },
        { text: t('tabs.community.features.eventsWebinars'), icon: TrendingUp },
      ],
      color: "from-teal-500 to-cyan-600",
      demoGif: "/demo/commuinty.gif",
    },
    {
      id: 7,
      icon: Globe,
      title: t('tabs.domains.title'),
      description: t('tabs.domains.description'),
      subtitle: t('tabs.domains.subtitle'),
      features: [
        { text: t('tabs.domains.features.customDomain'), icon: Globe },
        { text: t('tabs.domains.features.sslCertificates'), icon: CheckCircle2 },
        { text: t('tabs.domains.features.dnsManagement'), icon: Zap },
        { text: t('tabs.domains.features.subdomainSupport'), icon: TrendingUp },
      ],
      color: "from-cyan-500 to-blue-600",
      demoGif: "/demo/domain.gif",
    },
    {
      id: 8,
      icon: Truck,
      title: t('tabs.shipping.title'),
      description: t('tabs.shipping.description'),
      subtitle: t('tabs.shipping.subtitle'),
      features: [
        { text: t('tabs.shipping.features.multiCarrier'), icon: Truck },
        { text: t('tabs.shipping.features.realTimeTracking'), icon: Clock },
        { text: t('tabs.shipping.features.automatedLabels'), icon: Zap },
        { text: t('tabs.shipping.features.rateComparison'), icon: TrendingUp },
      ],
      color: "from-amber-500 to-orange-600",
      demoGif: "/demo/shipping.gif",
    },
    {
      id: 9,
      icon: CreditCard,
      title: t('tabs.payments.title'),
      description: t('tabs.payments.description'),
      subtitle: t('tabs.payments.subtitle'),
      features: [
        { text: t('tabs.payments.features.multiplePaymentMethods'), icon: CreditCard },
        { text: t('tabs.payments.features.secureTransactions'), icon: CheckCircle2 },
        { text: t('tabs.payments.features.instantPayouts'), icon: Zap },
        { text: t('tabs.payments.features.fraudProtection'), icon: TrendingUp },
      ],
      color: "from-emerald-500 to-green-600",
      demoGif: "/demo/payments.gif",
    },
    {
      id: 10,
      icon: Target,
      title: t('tabs.mediaBuyers.title'),
      description: t('tabs.mediaBuyers.description'),
      subtitle: t('tabs.mediaBuyers.subtitle'),
      features: [
        { text: t('tabs.mediaBuyers.features.campaignTracking'), icon: BarChart3 },
        { text: t('tabs.mediaBuyers.features.roiAnalytics'), icon: TrendingUp },
        { text: t('tabs.mediaBuyers.features.multiPixelSupport'), icon: Target },
        { text: t('tabs.mediaBuyers.features.abTesting'), icon: Zap },
      ],
      color: "from-purple-500 to-pink-600",
      demoGif: "/demo/mediabuyers.gif",
    },
  ];

  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden py-12 sm:py-16 md:py-20">
      <Container className="w-full">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t('title')}
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm">{tab.title}</span>
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
              className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center"
            >
              {/* Left - Centered Text */}
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="text-center max-w-lg space-y-2 sm:space-y-3">
                  <div
                    className={`inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${tabs[activeTab].color} items-center justify-center mb-2 sm:mb-3 shadow-lg`}
                  >
                    {(() => {
                      const Icon = tabs[activeTab].icon;
                      return (
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      );
                    })()}
                  </div>
                  <BlurText
                    text={tabs[activeTab].title}
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2"
                    delay={100}
                  />
                  <BlurText
                    text={tabs[activeTab].description}
                    className="text-base sm:text-lg text-gray-600 mb-1 sm:mb-1.5"
                    delay={150}
                  />
                  <BlurText
                    text={tabs[activeTab].subtitle}
                    className="text-sm text-gray-500"
                    delay={200}
                  />
                </div>
              </div>

              {/* Right - Demo Preview */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative order-1 lg:order-2"
              >
                {/* Main Demo Card */}
                <div className="relative rounded-xl sm:rounded-2xl shadow-2xl bg-white border border-gray-200">
                  {/* Browser Chrome */}
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 sm:gap-3 border-b border-gray-200">
                    <div className="flex gap-1 sm:gap-1.5 md:gap-2">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"></div>
                    </div>
                    <div className="hidden sm:flex flex-1 mx-2 md:mx-4 bg-white rounded-md md:rounded-lg px-2 md:px-4 py-1 md:py-1.5 text-xs sm:text-sm text-gray-500 items-center shadow-inner">
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-gray-400 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span className="truncate">
                        app.vondera.com/{tabs[activeTab].title.toLowerCase()}
                      </span>
                    </div>
                  </div>

                  {/* Demo Content */}
                  {tabs[activeTab].demoGif ? (
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
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm rounded-md sm:rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 shadow-lg border border-gray-200">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-[10px] sm:text-xs font-semibold text-gray-700">
                            {t('liveDemo')}
                          </span>
                        </div>
                      </div>

                      {/* Animated Order Notifications - Only for Orders tab */}
                      {activeTab === 3 && (
                        <>
                          {/* Desktop version - side positioned */}
                          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-80 max-h-[500px] overflow-hidden mt-12">
                            <AnimatedList delay={2000}>
                              {orderNotifications.map((order) => (
                                <div
                                  key={order.id}
                                  className="bg-white rounded-lg md:rounded-xl shadow-2xl p-3 md:p-4 border border-gray-200 w-full"
                                >
                                  <div className="flex items-center gap-2 md:gap-3">
                                    {/* Vondera Logo */}
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-md md:rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-md p-1">
                                      <Image
                                        src="/logo.webp"
                                        alt="Vondera"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between gap-1 md:gap-2 mb-0.5 md:mb-1">
                                        <p className="font-semibold text-gray-900 text-xs md:text-sm truncate">
                                          {order.customer}
                                        </p>
                                        <span className="text-[10px] md:text-xs text-gray-500 whitespace-nowrap">
                                          {order.time}
                                        </span>
                                      </div>
                                      <p className="text-[10px] md:text-xs text-gray-600 truncate mb-0.5 md:mb-1">
                                        {order.product}
                                      </p>
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs md:text-sm font-bold text-violet-600">
                                          {order.amount}
                                        </span>
                                        <div className="flex items-center gap-0.5 md:gap-1">
                                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500"></div>
                                          <span className="text-[10px] md:text-xs text-green-600 font-medium">
                                            {t('newOrder')}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </AnimatedList>
                          </div>

                          {/* Mobile version - below demo */}
                          <div className="lg:hidden mt-6">
                            <div className="max-w-sm mx-auto">
                              <AnimatedList delay={2000}>
                                {orderNotifications.slice(0, 3).map((order) => (
                                  <div
                                    key={order.id}
                                    className="bg-white rounded-lg shadow-xl p-3 border border-gray-200 w-full mb-3"
                                  >
                                    <div className="flex items-center gap-2">
                                      {/* Vondera Logo */}
                                      <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center flex-shrink-0 shadow-md p-1">
                                        <Image
                                          src="/logo.webp"
                                          alt="Vondera"
                                          width={48}
                                          height={48}
                                          className="w-full h-full object-contain"
                                        />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-1 mb-0.5">
                                          <p className="font-semibold text-gray-900 text-xs truncate">
                                            {order.customer}
                                          </p>
                                          <span className="text-[10px] text-gray-500 whitespace-nowrap">
                                            {order.time}
                                          </span>
                                        </div>
                                        <p className="text-[10px] text-gray-600 truncate mb-0.5">
                                          {order.product}
                                        </p>
                                        <div className="flex items-center justify-between">
                                          <span className="text-xs font-bold text-violet-600">
                                            {order.amount}
                                          </span>
                                          <div className="flex items-center gap-0.5">
                                            <div className="w-1 h-1 rounded-full bg-green-500"></div>
                                            <span className="text-[10px] text-green-600 font-medium">
                                              {t('newOrder')}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </AnimatedList>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Animated Beam for Social Inbox - Only for Social Inbox tab */}
                      {activeTab === 2 && (
                        <>
                          {/* Desktop version - side positioned */}
                          <div
                            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-80 max-h-[400px] overflow-visible"
                            ref={containerRef}
                          >
                            <div className="flex size-full max-h-[350px] max-w-lg flex-col items-stretch justify-between gap-6 md:gap-8">
                              <div className="flex flex-row items-center justify-between">
                                <Circle
                                  ref={whatsappRef}
                                  className="size-12 md:size-14"
                                >
                                  <SocialIcons.whatsapp />
                                </Circle>
                                <Circle
                                  ref={messengerRef}
                                  className="size-12 md:size-14"
                                >
                                  <SocialIcons.messenger />
                                </Circle>
                              </div>
                              <div className="flex flex-row items-center justify-between">
                                <Circle
                                  ref={instagramRef}
                                  className="size-12 md:size-14"
                                >
                                  <SocialIcons.instagram />
                                </Circle>
                                <Circle
                                  ref={vonderaRef}
                                  className="size-16 md:size-20 border-3 md:border-4 border-violet-200 shadow-xl"
                                >
                                  <Image
                                    src="/logo.webp"
                                    alt="Vondera"
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-contain"
                                  />
                                </Circle>
                                <Circle
                                  ref={facebookRef}
                                  className="size-12 md:size-14"
                                >
                                  <SocialIcons.facebook />
                                </Circle>
                              </div>
                              <div className="flex flex-row items-center justify-between">
                                <Circle
                                  ref={twitterRef}
                                  className="size-12 md:size-14"
                                >
                                  <SocialIcons.twitter />
                                </Circle>
                                <Circle
                                  ref={tiktokRef}
                                  className="size-12 md:size-14"
                                >
                                  <SocialIcons.tiktok />
                                </Circle>
                              </div>
                            </div>

                            {/* Animated Beams with dark colors */}
                            <AnimatedBeam
                              containerRef={containerRef}
                              fromRef={whatsappRef}
                              toRef={vonderaRef}
                              curvature={-75}
                              endYOffset={-10}
                              pathColor="#1f2937"
                              gradientStartColor="#1f2937"
                              gradientStopColor="#4b5563"
                            />
                            <AnimatedBeam
                              containerRef={containerRef}
                              fromRef={instagramRef}
                              toRef={vonderaRef}
                              pathColor="#1f2937"
                              gradientStartColor="#1f2937"
                              gradientStopColor="#4b5563"
                            />
                            <AnimatedBeam
                              containerRef={containerRef}
                              fromRef={twitterRef}
                              toRef={vonderaRef}
                              curvature={75}
                              endYOffset={10}
                              pathColor="#1f2937"
                              gradientStartColor="#1f2937"
                              gradientStopColor="#4b5563"
                            />
                            <AnimatedBeam
                              containerRef={containerRef}
                              fromRef={messengerRef}
                              toRef={vonderaRef}
                              curvature={-75}
                              endYOffset={-10}
                              reverse
                              pathColor="#1f2937"
                              gradientStartColor="#1f2937"
                              gradientStopColor="#4b5563"
                            />
                            <AnimatedBeam
                              containerRef={containerRef}
                              fromRef={facebookRef}
                              toRef={vonderaRef}
                              reverse
                              pathColor="#1f2937"
                              gradientStartColor="#1f2937"
                              gradientStopColor="#4b5563"
                            />
                            <AnimatedBeam
                              containerRef={containerRef}
                              fromRef={tiktokRef}
                              toRef={vonderaRef}
                              curvature={75}
                              endYOffset={10}
                              reverse
                              pathColor="#1f2937"
                              gradientStartColor="#1f2937"
                              gradientStopColor="#4b5563"
                            />
                          </div>

                          {/* Mobile version - below demo */}
                          <div className="lg:hidden mt-6">
                            <div className="max-w-sm mx-auto">
                              <div className="flex flex-col items-center gap-4">
                                {/* Social Icons Grid */}
                                <div className="grid grid-cols-3 gap-4 items-center justify-items-center w-full">
                                  <div className="size-12 rounded-full border-2 border-gray-200 bg-white p-2 shadow-lg flex items-center justify-center">
                                    <SocialIcons.whatsapp />
                                  </div>
                                  <div className="size-12 rounded-full border-2 border-gray-200 bg-white p-2 shadow-lg flex items-center justify-center">
                                    <SocialIcons.messenger />
                                  </div>
                                  <div className="size-12 rounded-full border-2 border-gray-200 bg-white p-2 shadow-lg flex items-center justify-center">
                                    <SocialIcons.instagram />
                                  </div>
                                </div>

                                {/* Vondera Logo - Center */}
                                <div className="size-20 rounded-full border-4 border-violet-200 bg-white p-3 shadow-xl flex items-center justify-center">
                                  <Image
                                    src="/logo.webp"
                                    alt="Vondera"
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-contain"
                                  />
                                </div>

                                {/* Bottom Row */}
                                <div className="grid grid-cols-3 gap-4 items-center justify-items-center w-full">
                                  <div className="size-12 rounded-full border-2 border-gray-200 bg-white p-2 shadow-lg flex items-center justify-center">
                                    <SocialIcons.facebook />
                                  </div>
                                  <div className="size-12 rounded-full border-2 border-gray-200 bg-white p-2 shadow-lg flex items-center justify-center">
                                    <SocialIcons.twitter />
                                  </div>
                                  <div className="size-12 rounded-full border-2 border-gray-200 bg-white p-2 shadow-lg flex items-center justify-center">
                                    <SocialIcons.tiktok />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div
                      className={`bg-gradient-to-br ${tabs[activeTab].color} p-4 sm:p-6 md:p-8 h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center relative overflow-hidden`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: "32px 32px",
                          }}
                        ></div>
                      </div>

                      {/* Content */}
                      <div className="text-center text-white relative z-10">
                        {(() => {
                          const Icon = tabs[activeTab].icon;
                          return (
                            <Icon
                              size={40}
                              className="sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] mx-auto mb-3 sm:mb-4 opacity-80 drop-shadow-lg"
                            />
                          );
                        })()}
                        <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 drop-shadow-md">
                          {tabs[activeTab].title} {t('dashboard')}
                        </div>
                        <div className="text-xs sm:text-sm md:text-base opacity-90 bg-white/10 backdrop-blur-sm rounded-md sm:rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 inline-block">
                          {t('comingSoon')}
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
