'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

export default function FinalCTASection() {
  const t = useTranslations('finalCTA');
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

      <Container>
        <div className="relative z-10">
          {/* Main Content */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t('title')}
              </h2>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {t('subtitle')}
              </p>
            </motion.div>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left - Contact Form */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {t('form.title')}
                  </h3>
                  <p className="text-gray-600 mb-8">
                    {t('form.subtitle')}
                  </p>

                  <form className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.name')}
                      </label>
                      <input
                        type="text"
                        placeholder={t('form.namePlaceholder')}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.email')}
                      </label>
                      <input
                        type="email"
                        placeholder={t('form.emailPlaceholder')}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        placeholder={t('form.phonePlaceholder')}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.message')}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={t('form.messagePlaceholder')}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      {t('form.submit')}
                      <Send size={20} />
                    </motion.button>
                  </form>
                </div>

                {/* Right - Contact Info & Map */}
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">
                      {t('contactInfo.title')}
                    </h4>

                    <div className="space-y-5">
                      <motion.a
                        href="mailto:info@vondera.app"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Mail size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500 mb-1">{t('contactInfo.email')}</div>
                          <div className="text-gray-900 font-semibold group-hover:text-violet-600 transition-colors">
                            info@vondera.app
                          </div>
                        </div>
                      </motion.a>

                      <motion.a
                        href="tel:+201070068383"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Phone size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500 mb-1">{t('contactInfo.phone')}</div>
                          <div className="text-gray-900 font-semibold group-hover:text-violet-600 transition-colors">
                            +20 10 70068383
                          </div>
                        </div>
                      </motion.a>

                      <motion.a
                        href="https://www.google.com/maps?ll=30.028018,31.201973&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=18276881079965047230"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <MapPin size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500 mb-1">{t('contactInfo.address')}</div>
                          <div className="text-gray-900 font-semibold group-hover:text-violet-600 transition-colors">
                            {t('contactInfo.addressValue')}
                          </div>
                        </div>
                      </motion.a>
                    </div>
                  </div>

                  {/* Map Preview */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-8"
                  >
                    <a
                      href="https://www.google.com/maps?ll=30.028018,31.201973&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=18276881079965047230"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                    >
                      <div className="relative h-48 bg-gray-200">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.8!2d31.201973!3d30.028018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd7a7e3e7e7e7e7e!2sCreativa%20Innovation%20Hub!5e0!3m2!1sen!2seg!4v1234567890"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
