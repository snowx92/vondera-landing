'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Store, TrendingUp, Users, MapPin, Zap, Shield, DollarSign, Headphones } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function EgyptPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const stats = [
    { value: '5,000+', label: locale === 'ar' ? 'متجر في مصر' : 'Stores in Egypt' },
    { value: '99.9%', label: locale === 'ar' ? 'وقت تشغيل' : 'Uptime' },
    { value: '300', label: locale === 'ar' ? 'جنيه/شهر' : 'EGP/month' },
    { value: '24/7', label: locale === 'ar' ? 'دعم فني' : 'Support' },
  ];

  const features = [
    {
      icon: Store,
      title: locale === 'ar' ? 'مصممة للسوق المصري' : 'Built for Egyptian Market',
      description:
        locale === 'ar'
          ? 'منصة مصممة خصيصاً لتلبية احتياجات التجار المصريين مع دعم كامل لطرق الدفع والشحن المحلية'
          : 'Platform specifically designed to meet Egyptian merchants needs with full support for local payment and shipping methods',
    },
    {
      icon: DollarSign,
      title: locale === 'ar' ? 'طرق دفع محلية' : 'Local Payment Methods',
      description:
        locale === 'ar'
          ? 'فودافون كاش، أورنج موني، WE Pay، InstaPay، والدفع عند الاستلام'
          : 'Vodafone Cash, Orange Money, WE Pay, InstaPay, and Cash on Delivery',
    },
    {
      icon: TrendingUp,
      title: locale === 'ar' ? 'أسعار تنافسية' : 'Competitive Pricing',
      description:
        locale === 'ar'
          ? 'ابتداءً من 300 جنيه مصري فقط شهرياً - أقل من منافسينا بنسبة 70%'
          : 'Starting from only 300 EGP per month - 70% less than competitors',
    },
    {
      icon: Users,
      title: locale === 'ar' ? 'شركاء شحن مصريين' : 'Egyptian Shipping Partners',
      description:
        locale === 'ar'
          ? 'تكامل مباشر مع Bosta و MylerZ و Aramex Egypt وجميع شركات الشحن المحلية'
          : 'Direct integration with Bosta, MylerZ, Aramex Egypt and all local shipping companies',
    },
    {
      icon: Headphones,
      title: locale === 'ar' ? 'دعم باللغة العربية' : 'Arabic Language Support',
      description:
        locale === 'ar'
          ? 'فريق دعم فني يتحدث العربية متاح 24/7 عبر الهاتف والواتساب والبريد'
          : 'Arabic-speaking support team available 24/7 via phone, WhatsApp, and email',
    },
    {
      icon: Shield,
      title: locale === 'ar' ? 'أمان وموثوقية' : 'Security & Reliability',
      description:
        locale === 'ar'
          ? 'مستضاف في مصر مع 99.9% وقت تشغيل وحماية كاملة للبيانات'
          : 'Hosted in Egypt with 99.9% uptime and full data protection',
    },
    {
      icon: MapPin,
      title: locale === 'ar' ? 'تغطية كل المحافظات' : 'Nationwide Coverage',
      description:
        locale === 'ar'
          ? 'خدمة شحن لجميع محافظات مصر من القاهرة للإسكندرية والصعيد'
          : 'Shipping service to all Egyptian governorates from Cairo to Alexandria and Upper Egypt',
    },
    {
      icon: Zap,
      title: locale === 'ar' ? 'بدء سريع' : 'Quick Start',
      description:
        locale === 'ar'
          ? 'أنشئ متجرك وابدأ البيع في أقل من 10 دقائق بدون خبرة تقنية'
          : 'Create your store and start selling in less than 10 minutes without technical experience',
    },
  ];

  const egyptianCities = [
    locale === 'ar' ? 'القاهرة' : 'Cairo',
    locale === 'ar' ? 'الإسكندرية' : 'Alexandria',
    locale === 'ar' ? 'الجيزة' : 'Giza',
    locale === 'ar' ? 'الشرقية' : 'Sharqia',
    locale === 'ar' ? 'الدقهلية' : 'Dakahlia',
    locale === 'ar' ? 'البحيرة' : 'Beheira',
    locale === 'ar' ? 'المنوفية' : 'Monufia',
    locale === 'ar' ? 'الغربية' : 'Gharbia',
    locale === 'ar' ? 'الإسماعيلية' : 'Ismailia',
    locale === 'ar' ? 'السويس' : 'Suez',
    locale === 'ar' ? 'بورسعيد' : 'Port Said',
    locale === 'ar' ? 'دمياط' : 'Damietta',
    locale === 'ar' ? 'أسيوط' : 'Asyut',
    locale === 'ar' ? 'المنيا' : 'Minya',
    locale === 'ar' ? 'سوهاج' : 'Sohag',
    locale === 'ar' ? 'قنا' : 'Qena',
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto relative z-10"
            >
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                {locale === 'ar' ? '🇪🇬 مصمم خصيصاً للسوق المصري' : '🇪🇬 Built for the Egyptian Market'}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {locale === 'ar' ? (
                  <>
                    منصة التجارة الإلكترونية <span className="text-secondary-400">#1</span> في مصر
                  </>
                ) : (
                  <>
                    Egypt's <span className="text-secondary-400">#1</span> E-commerce Platform
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                {locale === 'ar'
                  ? 'أنشئ وأدر متجرك الإلكتروني بأدوات مصممة خصيصاً للتجار المصريين. ابتداءً من 300 جنيه فقط شهرياً'
                  : 'Build and manage your online store with tools designed specifically for Egyptian merchants. Starting from only 300 EGP per month'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${locale}`}
                  className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  {locale === 'ar' ? 'ابدأ تجربة مجانية' : 'Start Free Trial'}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  {locale === 'ar' ? 'تحدث مع مستشار' : 'Talk to Consultant'}
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Why Choose Vondera for Egypt */}
        <section className="py-20 md:py-32 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {locale === 'ar' ? 'لماذا فونديرا للسوق المصري؟' : 'Why Vondera for the Egyptian Market?'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {locale === 'ar'
                  ? 'نحن نفهم تحديات التجارة الإلكترونية في مصر ونقدم حلولاً مصممة خصيصاً لك'
                  : "We understand Egypt's e-commerce challenges and provide solutions designed specifically for you"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Egyptian Cities Coverage */}
        <section className="py-20 md:py-32 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {locale === 'ar' ? 'نغطي كل محافظات مصر' : 'We Cover All Egyptian Governorates'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {locale === 'ar'
                  ? 'خدمة شحن وتوصيل سريعة لجميع المحافظات مع أفضل شركات الشحن المحلية'
                  : 'Fast shipping and delivery to all governorates with the best local shipping companies'}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {egyptianCities.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <MapPin className="w-5 h-5 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">{city}</div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {locale === 'ar' ? 'ابدأ متجرك الإلكتروني في مصر اليوم' : 'Start Your Online Store in Egypt Today'}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {locale === 'ar'
                  ? 'انضم لأكثر من 5,000 تاجر مصري يثقون بفونديرا لإدارة تجارتهم الإلكترونية'
                  : 'Join 5,000+ Egyptian merchants who trust Vondera to manage their e-commerce business'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${locale}`}
                  className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  {locale === 'ar' ? 'ابدأ تجربة مجانية 14 يوم' : 'Start 14-Day Free Trial'}
                </Link>
                <Link
                  href={`/${locale}/pricing`}
                  className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  {locale === 'ar' ? 'شاهد الأسعار' : 'View Pricing'}
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
