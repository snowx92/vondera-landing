'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t('form.success'));
  };

  const contactInfo = [
    { icon: Mail, label: t('info.email'), value: 'Info@vondera.app', href: 'mailto:Info@vondera.app' },
    { icon: Phone, label: t('info.phone'), value: '+20 10 70068383', href: 'tel:+201070068383' },
    { icon: MapPin, label: t('info.address'), value: 'Dokki, Giza, Egypt', href: null },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('title')}</h1>
                <p className="text-xl text-gray-600">
                  {t('subtitle')}
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {contactInfo.map((info, index) => (
                  <Card key={index} hover={true}>
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <info.icon size={28} className="text-primary-600" />
                      </div>
                      <div className="text-sm text-gray-600 mb-1">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-lg font-semibold text-gray-900 hover:text-primary-600">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold text-gray-900">{info.value}</div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.name')} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder={t('form.name')}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.email')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder={t('form.email')}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.subject')} *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder={t('form.subject')}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.message')} *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder={t('form.message')}
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                      <Send size={20} className="mr-2" />
                      {t('form.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
