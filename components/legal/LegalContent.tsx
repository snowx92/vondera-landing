'use client';

import { motion } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface LegalSection {
  title: string;
  content: string;
}

interface LegalContentProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalContent({ title, lastUpdated, sections }: LegalContentProps) {
  return (
    <section className="pt-32 pb-20 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-violet-100 px-4 py-2 rounded-full mb-6">
              <FileText className="w-5 h-5 text-violet-600" />
              <span className="text-violet-600 font-semibold">Legal</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {title}
            </h1>

            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Calendar size={18} />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`${index !== sections.length - 1 ? 'mb-8 pb-8 border-b border-gray-200' : ''}`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-violet-50 rounded-2xl p-6 border border-violet-100">
              <p className="text-gray-600">
                Have questions about our {title.toLowerCase()}?{' '}
                <a
                  href="mailto:legal@vondera.app"
                  className="text-violet-600 font-semibold hover:underline"
                >
                  Contact our legal team
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
