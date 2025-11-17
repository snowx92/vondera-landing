'use client';

import { useEffect, useState, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Handshake, Users, TrendingUp, Shield, Mail, Phone, MapPin, CheckCircle, ArrowRight, Building2, Target, Zap } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import TrustedBySection from '@/components/sections/TrustedBySection';
import { submitContact } from '@/lib/apis/contact';

export default function PartnersPage() {
  const locale = useLocale();
  const t = useTranslations('partners');
  const isRTL = locale === 'ar';
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Video playback logic
  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = true;
          videoRef.current.playsInline = true;
          videoRef.current.setAttribute('playsinline', '');
          videoRef.current.setAttribute('webkit-playsinline', '');
          
          await videoRef.current.load();
          const playPromise = videoRef.current.play();
          
          if (playPromise !== undefined) {
            await playPromise;
          }
        } catch (error) {
          console.error('Error playing video:', error);
          setVideoError(true);
        }
      }
    };

    playVideo();

    const handleInteraction = () => {
      playVideo();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `Partnership Inquiry - ${formData.company}`,
        message: formData.message,
      });

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error: any) {
      setSubmitError(error?.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: t('benefits.growth.title') || 'Accelerated Growth',
      description: t('benefits.growth.description') || 'Tap into our network of 10,000+ active merchants and scale your business'
    },
    {
      icon: Users,
      title: t('benefits.network.title') || 'Strategic Network',
      description: t('benefits.network.description') || 'Connect with industry leaders and expand your business opportunities'
    },
    {
      icon: Shield,
      title: t('benefits.support.title') || 'Dedicated Support',
      description: t('benefits.support.description') || 'Get priority access to our team and exclusive partnership resources'
    },
    {
      icon: Zap,
      title: t('benefits.innovation.title') || 'Innovation Access',
      description: t('benefits.innovation.description') || 'Early access to new features and co-development opportunities'
    }
  ];

  const partnershipTypes = [
    {
      icon: Building2,
      title: t('types.technology.title') || 'Technology Partners',
      description: t('types.technology.description') || 'Integrate your solutions with our platform',
      features: [
        'API & SDK access',
        'Co-marketing opportunities',
        'Joint case studies',
        'Technical support'
      ]
    },
    {
      icon: Target,
      title: t('types.solution.title') || 'Solution Partners',
      description: t('types.solution.description') || 'Deliver Vondera-powered solutions to clients',
      features: [
        'White-label options',
        'Revenue sharing',
        'Partner portal access',
        'Training & certification'
      ]
    },
    {
      icon: Handshake,
      title: t('types.strategic.title') || 'Strategic Alliances',
      description: t('types.strategic.description') || 'Long-term collaborations for mutual growth',
      features: [
        'Custom agreements',
        'Joint ventures',
        'Exclusive territories',
        'Executive sponsorship'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-primary-900 via-purple-900 to-primary-900 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            opacity: videoError ? 0 : 0.2,
            transition: 'opacity 0.3s'
          }}
          onError={() => setVideoError(true)}
        >
          <source src="/video.webm" type="video/webm" />
          <source src="https://cdn.coverr.co/videos/coverr-typing-on-laptop-5049/1080p.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto px-4"
          >
            <Badge className="mb-6 sm:mb-8 bg-primary-600 text-white border-none backdrop-blur-sm inline-flex items-center px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base shadow-2xl">
              <Handshake className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t('hero.badge') || 'Partner Program'}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-white drop-shadow-2xl">
              {t('hero.title') || 'Grow Together with Vondera'}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed max-w-4xl mx-auto mb-10 sm:mb-12 drop-shadow-lg font-light">
              {t('hero.subtitle') || 'Join our partnership program and unlock new opportunities in the MENA e-commerce ecosystem'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                  {t('hero.cta') || 'Become a Partner'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
              <a href="mailto:info@vondera.app" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  {t('hero.contact') || 'Contact Us'}
                </button>
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <Badge className="mb-4 bg-primary-100 text-primary-700 border-primary-200">
                {t('benefits.badge') || 'Why Partner with Us'}
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('benefits.title') || 'Partnership Benefits'}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('benefits.subtitle') || 'Unlock exclusive advantages when you partner with Vondera'}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership Types */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                {t('types.badge') || 'Partnership Models'}
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('types.title') || 'Choose Your Partnership Type'}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('types.subtitle') || 'We offer flexible partnership models to match your business goals'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-primary-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-primary-100 text-primary-700 border-primary-200">
                {t('contact.badge') || 'Get in Touch'}
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('contact.title') || 'Start Your Partnership Journey'}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('contact.subtitle') || 'Fill out the form below and our partnership team will get back to you within 24 hours'}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t('contact.info.title') || 'Contact Information'}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {t('contact.info.email') || 'Email'}
                        </h4>
                        <a href="mailto:info@vondera.app" className="text-primary-600 hover:text-primary-700 hover:underline">
                          info@vondera.app
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {t('contact.info.company') || 'Company'}
                        </h4>
                        <p className="text-gray-600">
                          Vondera Technologies
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {t('contact.info.region') || 'Region'}
                        </h4>
                        <p className="text-gray-600">
                          MENA Region
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-6 border border-primary-100">
                  <p className="text-sm text-gray-700">
                    <strong className="text-primary-700">{t('contact.info.note') || 'Note:'}</strong> {t('contact.info.noteText') || 'Partnership inquiries are typically reviewed within 1-2 business days. For urgent matters, please email us directly.'}
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">
                          {t('contact.form.successTitle') || 'Thank you for your interest!'}
                        </h4>
                        <p className="text-sm text-green-700">
                          {t('contact.form.successMessage') || 'We\'ve received your partnership inquiry and will get back to you soon.'}
                        </p>
                      </div>
                    </div>
                  )}

                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-sm text-red-700">{submitError}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.name') || 'Full Name'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder={t('contact.form.namePlaceholder') || 'John Doe'}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.email') || 'Email Address'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.phone') || 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+20 123 456 7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.company') || 'Company Name'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder={t('contact.form.companyPlaceholder') || 'Your Company'}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.message') || 'Tell us about your partnership interest'} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder={t('contact.form.messagePlaceholder') || 'Describe your business, partnership goals, and how you\'d like to collaborate with Vondera...'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 w-full px-8 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t('contact.form.sending') || 'Sending...'}
                      </>
                    ) : (
                      <>
                        {t('contact.form.submit') || 'Submit Partnership Inquiry'}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t('cta.title') || 'Ready to Partner with Us?'}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10">
              {t('cta.subtitle') || 'Join the leading e-commerce platform in MENA and grow your business with Vondera'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <button className="w-full sm:w-auto px-10 py-5 bg-white text-primary-600 rounded-xl font-bold hover:shadow-2xl transition-all text-lg inline-flex items-center justify-center gap-2">
                  <ArrowRight className="w-6 h-6" />
                  {t('cta.apply') || 'Apply Now'}
                </button>
              </a>
              <a href="mailto:info@vondera.app">
                <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all text-lg inline-flex items-center justify-center gap-2">
                  <Mail className="w-6 h-6" />
                  {t('cta.email') || 'Email Us'}
                </button>
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

