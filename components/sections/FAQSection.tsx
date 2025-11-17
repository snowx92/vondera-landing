'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const locale = useLocale();
  const t = useTranslations('faq');
  const tFaqs = useTranslations('seo.faqs');
  const isRTL = locale === 'ar';

  // Build FAQs array from translations
  const faqs = [
    { key: 'question1', question: tFaqs('question1.q'), answer: tFaqs('question1.a') },
    { key: 'question2', question: tFaqs('question2.q'), answer: tFaqs('question2.a') },
    { key: 'question3', question: tFaqs('question3.q'), answer: tFaqs('question3.a') },
    { key: 'question4', question: tFaqs('question4.q'), answer: tFaqs('question4.a') },
    { key: 'question5', question: tFaqs('question5.q'), answer: tFaqs('question5.a') },
    { key: 'question6', question: tFaqs('question6.q'), answer: tFaqs('question6.a') },
  ];

  return (
    <section className="py-20 md:py-32 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Container size="md">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-primary-300 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {tFaqs(`${faq.key}.q`)}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {tFaqs(`${faq.key}.a`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
