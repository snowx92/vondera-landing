'use client';

import { useEffect, useState, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, Users, ArrowRight, Building2, Calendar, Filter } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { getJobs } from '@/lib/apis/jobs';
import { Job } from '@/lib/apis/types';

export default function CareersPage() {
  const t = useTranslations('careersPage');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

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

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getJobs();
      setJobs(data);
      setLoading(false);
    } catch (err) {
      setError(t('error'));
      setLoading(false);
      console.error('Error fetching jobs:', err);
    }
  };

  const departments = ['all', ...Array.from(new Set(jobs.map(job => job.name)))];
  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.name === selectedDepartment);

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-black overflow-hidden min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center">
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
            opacity: videoError ? 0 : 0.4,
            transition: 'opacity 0.3s',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
          onError={() => setVideoError(true)}
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(err => console.error('Play failed:', err));
            }
          }}
        >
          <source src="/video.webm" type="video/webm" />
          <source src="https://cdn.coverr.co/videos/coverr-typing-on-laptop-5049/1080p.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto px-4"
          >
            <Badge className="mb-6 sm:mb-8 bg-primary-600 text-white border-none backdrop-blur-sm inline-flex items-center px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base shadow-2xl">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t('title')}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-white drop-shadow-2xl">
              {t('title')}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed max-w-4xl mx-auto drop-shadow-lg font-light">
              {t('subtitle')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Jobs Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          {/* Department Filter */}
          {departments.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 px-4"
            >
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">{t('filterBy')}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-5 py-2.5 rounded-xl font-semibold transition-all shadow-sm ${
                      selectedDepartment === dept
                        ? 'bg-primary-600 text-white shadow-md scale-105'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary-500 hover:text-primary-600'
                    }`}
                  >
                    {dept === 'all' ? t('allPositions') : dept}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {loading ? (
            <div className="grid gap-6 px-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse bg-gray-100 rounded-2xl h-48"></div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12 px-4">
              <p className="text-red-600 text-lg mb-4">{error}</p>
              <button
                onClick={fetchJobs}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                {t('tryAgain')}
              </button>
            </div>
          ) : filteredJobs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 px-4"
            >
              <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('noJobsTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('noJobsText')}
              </p>
              <p className="text-sm text-gray-500">
                {t('sendResume')} <a href="mailto:careers@vondera.app" className="text-primary-600 font-semibold hover:underline">careers@vondera.app</a>
              </p>
            </motion.div>
          ) : (
            <div className="grid gap-6 px-4">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/${locale}/careers/${job.id}`}>
                    <article className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-500 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        {/* Left Content */}
                        <div className="flex-1">
                          {/* Job Title */}
                          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                            {job.name}
                          </h2>

                          {/* Job Meta */}
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4" />
                              <span>{job.url || 'Vondera'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>Remote / Cairo</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>Full-time</span>
                            </div>
                          </div>

                          {/* Job Image/Logo */}
                          {job.image && (
                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 mb-4">
                              <img 
                                src={job.image} 
                                alt={job.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>

                        {/* Right Content - CTA */}
                        <div className="flex flex-col items-start lg:items-end gap-4">
                          <Badge className="bg-primary-100 text-primary-700 border-primary-200 font-semibold">
                            {t('nowHiring')}
                          </Badge>
                          
                          <button className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all group-hover:gap-3 group-hover:shadow-lg">
                            {t('viewDetails')}
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>Posted recently</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          <span>Multiple openings</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a href="mailto:careers@vondera.app" target="_blank" rel="noopener noreferrer">
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 hover:shadow-2xl transition-all inline-flex items-center gap-2">
                Send Your Resume
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
