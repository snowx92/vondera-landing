'use client';

import { motion } from 'framer-motion';
import { Heart, Coffee, Zap, Users } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function TeamCulture() {
  const values = [
    {
      icon: Heart,
      title: 'Customer Obsessed',
      description: 'We put merchants first in everything we do',
    },
    {
      icon: Zap,
      title: 'Move Fast',
      description: 'We ship quickly and iterate based on feedback',
    },
    {
      icon: Users,
      title: 'Collaborate',
      description: 'We win together as one team',
    },
    {
      icon: Coffee,
      title: 'Stay Humble',
      description: "We're always learning and improving",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Culture & Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're building a diverse, inclusive team that loves what they do
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
