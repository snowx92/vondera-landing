'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag, ArrowRight, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { getBlogs } from '@/lib/apis/blogs';
import { Blog } from '@/lib/apis/types';

export default function BlogPage() {
  const t = useTranslations('blogPage');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const fetchBlogs = async (page: number) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getBlogs(page, 9);
      setBlogs(response.items);
      setTotalPages(response.totalPages);
      setLoading(false);
    } catch (err) {
      setError(t('loading'));
      setLoading(false);
      console.error('Error fetching blogs:', err);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const getReadingTime = (htmlContent: string) => {
    const text = htmlContent.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-purple-50/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto relative z-10 px-4"
          >
            <Badge className="mb-4 sm:mb-6 bg-primary-600 text-white border-none inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base shadow-lg">
              <Tag className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              {t('title')}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              {t('title')}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Blog Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-2xl h-48 sm:h-56 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12 px-4">
              <p className="text-red-600 text-lg mb-4">{error}</p>
              <button
                onClick={() => fetchBlogs(currentPage)}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12 px-4">
              <p className="text-gray-600 text-lg">No blog posts available yet.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
                {blogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/${locale}/blog/${blog.id}`}>
                      <article className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100">
                        {/* Image */}
                        <div className="relative h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                          {blog.image ? (
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-purple-100">
                              <Tag className="w-16 h-16 text-primary-300" />
                            </div>
                          )}
                          {blog.featured && (
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-none shadow-lg font-bold">
                                ⭐ {t('featured')}
                              </Badge>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-7 flex-1 flex flex-col">
                          {/* Category */}
                          {blog.category && (
                            <Badge className="mb-4 w-fit bg-primary-600 text-white border-none text-xs font-semibold px-3 py-1 shadow-sm">
                              {blog.category}
                            </Badge>
                          )}

                          {/* Title */}
                          <h3 
                            dir="auto"
                            className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors leading-tight"
                          >
                            {blog.title}
                          </h3>

                          {/* Description */}
                          <p 
                            dir="auto"
                            className="text-base text-gray-600 mb-5 line-clamp-3 flex-1 leading-relaxed"
                          >
                            {blog.description}
                          </p>

                          {/* Meta & Author */}
                          <div className="space-y-3 pt-5 border-t border-gray-100">
                            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span className="font-medium text-gray-700">{blog.author}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                <span>{getReadingTime(blog.htmlContent)}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{formatDate(blog.publishAt)}</span>
                              </div>
                              <div className="flex items-center gap-2 text-primary-600 text-sm font-bold group-hover:gap-3 transition-all">
                                {t('readMore')}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-16 px-4"
                >
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-5 py-2.5 rounded-xl bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:border-primary-600 hover:bg-primary-50 hover:text-primary-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md"
                  >
                    {t('previous')}
                  </button>
                  
                  <div className="flex gap-2">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-11 h-11 rounded-xl font-bold transition-all shadow-sm hover:shadow-md ${
                            currentPage === pageNum
                              ? 'bg-primary-600 text-white scale-110'
                              : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary-600 hover:bg-primary-50 hover:text-primary-600'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-5 py-2.5 rounded-xl bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:border-primary-600 hover:bg-primary-50 hover:text-primary-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md"
                  >
                    {t('next')}
                  </button>
                </motion.div>
              )}
            </>
          )}
        </Container>
      </section>

      <Footer />
    </div>
  );
}
