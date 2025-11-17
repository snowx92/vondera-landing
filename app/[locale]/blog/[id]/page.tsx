'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { getBlogById } from '@/lib/apis/blogs';
import { Blog } from '@/lib/apis/types';

export default function BlogPostPage() {
  const params = useParams();
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const blogId = params.id as string;
  
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  // Add global styles for blog content direction (client-side only)
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .blog-content * {
        unicode-bidi: plaintext;
      }
      .blog-content p,
      .blog-content h1,
      .blog-content h2,
      .blog-content h3,
      .blog-content h4,
      .blog-content h5,
      .blog-content h6,
      .blog-content li {
        text-align: start;
      }
    `;
    if (!document.getElementById('blog-rtl-styles')) {
      style.id = 'blog-rtl-styles';
      document.head.appendChild(style);
    }
    
    return () => {
      const existingStyle = document.getElementById('blog-rtl-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBlogById(blogId);
      
      if (data) {
        setBlog(data);
      } else {
        setError('Blog post not found. It may have been removed or the link is incorrect.');
      }
    } catch (err: any) {
      console.error('Error fetching blog:', err);
      setError(err?.message || 'Failed to load blog post. Please try again later.');
    } finally {
      setLoading(false);
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

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = blog?.title || '';

  const shareOnSocial = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />
        <Container>
          <div className="py-24 sm:py-32 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
                <div className="h-96 bg-gray-200 rounded-2xl mb-8"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />
        <Container>
          <div className="py-24 sm:py-32 px-4 text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 rounded-2xl p-8 mb-8"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {loading ? 'Loading...' : 'Blog Post Not Found'}
              </h1>
              <p className="text-gray-600 mb-6">
                {error || 'The blog post you\'re looking for doesn\'t exist or may have been removed.'}
              </p>
            </motion.div>
            <Link href={`/${locale}/blog`}>
              <button className="px-8 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                <ArrowLeft className="w-5 h-5" />
                Back to Blog
              </button>
            </Link>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Article Header */}
      <article className="py-24 sm:py-32">
        <Container>
          <div className="max-w-4xl mx-auto px-4">
            {/* Back Button */}
            <Link href={`/${locale}/blog`}>
              <motion.button
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-8 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Blog</span>
              </motion.button>
            </Link>

            {/* Category & Featured Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              {blog.category && (
                <Badge className="bg-primary-100 text-primary-700 border-primary-200">
                  {blog.category}
                </Badge>
              )}
              {blog.featured && (
                <Badge className="bg-yellow-400 text-gray-900 border-none">
                  Featured
                </Badge>
              )}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              dir="auto"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {blog.title}
            </motion.h1>

            {/* Description */}
            {blog.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                dir="auto"
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              >
                {blog.description}
              </motion.p>
            )}

            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pb-8 mb-8 border-b border-gray-200"
            >
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700 font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">{formatDate(blog.publishAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">{getReadingTime(blog.htmlContent)}</span>
              </div>
            </motion.div>

            {/* Featured Image */}
            {blog.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            )}

            {/* Social Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 mb-12 p-4 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <Share2 className="w-5 h-5" />
                <span>Share:</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => shareOnSocial('facebook')}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1877F2] text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => shareOnSocial('twitter')}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1DA1F2] text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => shareOnSocial('linkedin')}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0A66C2] text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Blog Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              dir="auto"
              className={`blog-content prose prose-lg lg:prose-xl max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:scroll-mt-20
                prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
                prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-12 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200
                prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-em:text-gray-700 prose-em:italic
                ${isRTL ? 'prose-ul:pr-6 prose-ol:pr-6' : 'prose-ul:pl-6 prose-ol:pl-6'}
                prose-ul:list-disc prose-ul:space-y-2 prose-ul:my-6
                prose-ol:list-decimal prose-ol:space-y-2 prose-ol:my-6
                prose-li:text-gray-700 prose-li:leading-relaxed
                ${isRTL ? 'prose-blockquote:border-r-4 prose-blockquote:border-l-0 prose-blockquote:pr-6 prose-blockquote:pl-0 prose-blockquote:rounded-l-lg prose-blockquote:rounded-r-none' : 'prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:rounded-r-lg'}
                prose-blockquote:border-primary-500 prose-blockquote:bg-primary-50/50 prose-blockquote:py-4 prose-blockquote:italic prose-blockquote:my-8
                prose-code:text-primary-600 prose-code:bg-primary-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:my-8 prose-pre:p-6
                prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-8
                prose-hr:border-gray-200 prose-hr:my-12
                prose-table:border-collapse prose-table:my-8 prose-table:shadow-lg prose-table:rounded-lg prose-table:overflow-hidden
                prose-thead:bg-primary-600 prose-thead:text-white
                ${isRTL ? 'prose-th:text-right' : 'prose-th:text-left'}
                prose-th:p-4 prose-th:font-bold
                prose-td:p-4 prose-td:border-t prose-td:border-gray-200
                prose-tr:transition-colors hover:prose-tr:bg-gray-50
              `}
              dangerouslySetInnerHTML={{ __html: blog.htmlContent }}
            />

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-gray-200"
              >
                <Tag className="w-5 h-5 text-gray-400" />
                {blog.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </Badge>
                ))}
              </motion.div>
            )}

            {/* Back to Blog CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-12 text-center"
            >
              <Link href={`/${locale}/blog`}>
                <button className="px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 hover:shadow-xl transition-all inline-flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  Read More Articles
                </button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </article>

      <Footer />
    </div>
  );
}

