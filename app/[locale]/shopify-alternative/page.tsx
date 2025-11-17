'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, X, DollarSign, Globe, Headphones, Zap, Award, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function ShopifyAlternativePage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const comparisonData = [
    {
      feature: locale === 'ar' ? 'السعر الشهري' : 'Monthly Price',
      vondera: locale === 'ar' ? '300 جنيه مصري' : '300 EGP (~$10)',
      shopify: locale === 'ar' ? '1,200 جنيه مصري' : '1,200 EGP ($39)',
      winner: 'vondera',
    },
    {
      feature: locale === 'ar' ? 'دعم اللغة العربية' : 'Arabic Language Support',
      vondera: locale === 'ar' ? 'كامل مع RTL' : 'Full with RTL',
      shopify: locale === 'ar' ? 'محدود' : 'Limited',
      winner: 'vondera',
    },
    {
      feature: locale === 'ar' ? 'طرق الدفع المحلية' : 'Local Payment Methods',
      vondera: locale === 'ar' ? 'فودافون، أورنج، InstaPay، COD' : 'Vodafone, Orange, InstaPay, COD',
      shopify: locale === 'ar' ? 'محدودة' : 'Limited',
      winner: 'vondera',
    },
    {
      feature: locale === 'ar' ? 'شركات الشحن المصرية' : 'Egyptian Shipping',
      vondera: locale === 'ar' ? 'Bosta, MylerZ, Aramex مدمجة' : 'Bosta, MylerZ, Aramex integrated',
      shopify: locale === 'ar' ? 'يتطلب تكامل يدوي' : 'Manual integration required',
      winner: 'vondera',
    },
    {
      feature: locale === 'ar' ? 'الدعم الفني' : 'Customer Support',
      vondera: locale === 'ar' ? '24/7 بالعربية' : '24/7 in Arabic',
      shopify: locale === 'ar' ? 'إنجليزي فقط' : 'English only',
      winner: 'vondera',
    },
    {
      feature: locale === 'ar' ? 'وقت التشغيل' : 'Uptime',
      vondera: '99.9%',
      shopify: '99.9%',
      winner: 'tie',
    },
    {
      feature: locale === 'ar' ? 'سوق المسوقين (VMedia)' : 'Media Buyer Marketplace',
      vondera: locale === 'ar' ? '500+ مسوق محترف' : '500+ professional buyers',
      shopify: locale === 'ar' ? 'غير متوفر' : 'Not available',
      winner: 'vondera',
    },
    {
      feature: locale === 'ar' ? 'تطبيقات الموبايل' : 'Mobile Apps',
      vondera: locale === 'ar' ? 'iOS + Android مجاناً' : 'iOS + Android free',
      shopify: locale === 'ar' ? 'مدفوع إضافي' : 'Additional cost',
      winner: 'vondera',
    },
    {
      feature: locale === 'ar' ? 'رسوم المعاملات' : 'Transaction Fees',
      vondera: locale === 'ar' ? 'بدون رسوم إضافية' : 'No additional fees',
      shopify: locale === 'ar' ? '2% على المدفوعات' : '2% on payments',
      winner: 'vondera',
    },
    {
      feature: locale === 'ar' ? 'القوالب المجانية' : 'Free Themes',
      vondera: locale === 'ar' ? '20 قالب احترافي' : '20 professional themes',
      shopify: locale === 'ar' ? '10 قوالب محدودة' : '10 limited themes',
      winner: 'vondera',
    },
  ];

  const advantages = [
    {
      icon: DollarSign,
      title: locale === 'ar' ? 'وفر 70% من تكاليفك' : 'Save 70% on Costs',
      description:
        locale === 'ar'
          ? 'نفس المميزات بسعر أقل. لا رسوم خفية، لا عمولات إضافية على المبيعات'
          : 'Same features at lower price. No hidden fees, no additional sales commission',
    },
    {
      icon: Globe,
      title: locale === 'ar' ? 'مصممة للسوق العربي' : 'Built for Arabic Market',
      description:
        locale === 'ar'
          ? 'دعم كامل للغة العربية، RTL، وطرق الدفع والشحن المحلية'
          : 'Full Arabic support, RTL, and local payment/shipping methods',
    },
    {
      icon: Headphones,
      title: locale === 'ar' ? 'دعم فني بالعربية' : 'Arabic Customer Support',
      description:
        locale === 'ar'
          ? 'فريق دعم يتحدث العربية متاح 24/7 عبر الهاتف والواتساب'
          : 'Arabic-speaking support team available 24/7 via phone and WhatsApp',
    },
    {
      icon: Zap,
      title: locale === 'ar' ? 'سهولة الاستخدام' : 'Ease of Use',
      description:
        locale === 'ar'
          ? 'واجهة بسيطة مصممة للتجار العرب بدون تعقيدات'
          : 'Simple interface designed for Arabic merchants without complications',
    },
    {
      icon: Award,
      title: locale === 'ar' ? 'سوق VMedia الحصري' : 'Exclusive VMedia Marketplace',
      description:
        locale === 'ar'
          ? 'تواصل مع 500+ مشتري إعلانات محترف لتنمية مبيعاتك'
          : 'Connect with 500+ professional media buyers to grow your sales',
    },
    {
      icon: Users,
      title: locale === 'ar' ? 'مجتمع من التجار' : 'Merchant Community',
      description:
        locale === 'ar'
          ? '5,000+ تاجر ناجح يشاركون خبراتهم ونصائحهم'
          : '5,000+ successful merchants sharing their experiences and tips',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 md:py-32">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                {locale === 'ar' ? '🇪🇬 البديل العربي الأفضل' : '🇪🇬 The Better Arabic Alternative'}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {locale === 'ar' ? (
                  <>
                    البديل <span className="text-secondary-400">العربي المثالي</span> لشوبيفاي
                  </>
                ) : (
                  <>
                    The Perfect <span className="text-secondary-400">Arabic Alternative</span> to Shopify
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                {locale === 'ar'
                  ? 'نفس المميزات بسعر 70% أقل، مع دعم كامل للغة العربية وطرق الدفع المحلية'
                  : 'Same features at 70% lower price, with full Arabic support and local payment methods'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${locale}`}
                  className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  {locale === 'ar' ? 'ابدأ تجربة مجانية' : 'Start Free Trial'}
                </Link>
                <Link
                  href={`/${locale}/pricing`}
                  className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  {locale === 'ar' ? 'قارن الأسعار' : 'Compare Pricing'}
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Comparison Table */}
        <section className="py-20 md:py-32 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {locale === 'ar' ? 'مقارنة شاملة: فونديرا vs شوبيفاي' : 'Complete Comparison: Vondera vs Shopify'}
              </h2>
              <p className="text-xl text-gray-600">
                {locale === 'ar' ? 'شاهد الفرق بنفسك' : 'See the difference yourself'}
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 px-6 text-right font-bold text-gray-900">
                      {locale === 'ar' ? 'الميزة' : 'Feature'}
                    </th>
                    <th className="py-4 px-6 text-center font-bold text-primary-600 bg-primary-50">
                      {locale === 'ar' ? 'فونديرا' : 'Vondera'}
                    </th>
                    <th className="py-4 px-6 text-center font-bold text-gray-600">Shopify</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                      <td className="py-4 px-6 text-center bg-primary-50/50">
                        <div className="flex items-center justify-center gap-2">
                          {row.winner === 'vondera' && <Check className="w-5 h-5 text-green-600" />}
                          <span className={row.winner === 'vondera' ? 'font-semibold text-primary-600' : ''}>
                            {row.vondera}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.winner === 'vondera' && <X className="w-5 h-5 text-red-400" />}
                          <span className={row.winner === 'vondera' ? 'text-gray-500' : ''}>{row.shopify}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-6 py-4">
                <Award className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-green-900">
                  {locale === 'ar' ? 'فونديرا تتفوق في 9 من 10 مميزات!' : 'Vondera wins in 9 out of 10 features!'}
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose Vondera */}
        <section className="py-20 md:py-32 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {locale === 'ar' ? 'لماذا يختار التجار فونديرا؟' : 'Why Merchants Choose Vondera?'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
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
                {locale === 'ar' ? 'جرب فونديرا مجاناً لمدة 14 يوم' : 'Try Vondera Free for 14 Days'}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {locale === 'ar'
                  ? 'لا حاجة لبطاقة ائتمان. ابدأ الآن واكتشف لماذا يختار آلاف التجار فونديرا'
                  : 'No credit card required. Start now and discover why thousands of merchants choose Vondera'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${locale}`}
                  className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  {locale === 'ar' ? 'ابدأ تجربتك المجانية' : 'Start Your Free Trial'}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  {locale === 'ar' ? 'تحدث مع خبير' : 'Talk to an Expert'}
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
