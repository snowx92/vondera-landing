'use client';

import { useEffect, useState, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Package, Smartphone, BookOpen, Terminal as TerminalIcon, Zap, Shield, Globe, Copy, Check, ExternalLink, ArrowRight, ChevronRight, Play } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

type TabType = 'curl' | 'javascript' | 'flutter';

export default function DevelopersPage() {
  const locale = useLocale();
  const t = useTranslations('developers');
  const isRTL = locale === 'ar';
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('curl');
  const [activeEndpoint, setActiveEndpoint] = useState('products');

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

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      id: 'products',
      name: 'Get Products',
      method: 'GET',
      endpoint: '/products',
      description: 'Retrieve a paginated list of products',
      curl: `curl --location 'https://us-central1-brands-61c3d.cloudfunctions.net/app-api/api/public/products?pageNo=1&limit=10' \\
--header 'x-api-key: YOUR_API_KEY' \\
--header 'userid: USER_ID'`,
      javascript: `import { ApiClient } from "vondera-sdk";

const client = new ApiClient({
  apiKey: process.env.VONDERA_API_KEY
});

// Get products with pagination
const response = await client.products.list({
  pageNo: 1,
  limit: 10
});

console.log(response.data);`,
      flutter: `// Get all products with pagination
final products = await vondera.products.getProducts(
  page: 1,
  limit: 20,
);

print('Total products: \${products.items.length}');
print('Current page: \${products.currentPage}');`,
      response: `{
  "status": 200,
  "message": "Products fetched successfully",
  "data": {
    "items": [
      {
        "id": "prod_123",
        "name": "Product Name",
        "price": 299.99,
        "description": "Product description...",
        "image": "https://example.com/image.jpg"
      }
    ],
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50
  }
}`
    },
    {
      id: 'product-detail',
      name: 'Get Product by ID',
      method: 'GET',
      endpoint: '/products/:id',
      description: 'Get detailed information about a specific product',
      curl: `curl --location 'https://us-central1-brands-61c3d.cloudfunctions.net/app-api/api/public/products/PRODUCT_ID' \\
--header 'x-api-key: YOUR_API_KEY'`,
      javascript: `// Get a specific product by ID
const product = await client.products.getById("product-id");

console.log(product.data);`,
      flutter: `// Get a specific product
final product = await vondera.products.getProduct('product-id');

print('Product: \${product.name}');
print('Price: \${product.price}');`,
      response: `{
  "status": 200,
  "message": "Success",
  "data": {
    "id": "prod_123",
    "name": "Premium T-Shirt",
    "price": 299.99,
    "description": "High quality cotton t-shirt",
    "images": ["https://example.com/img1.jpg"],
    "stock": 50,
    "category": "Clothing"
  }
}`
    },
    {
      id: 'cart-add',
      name: 'Add to Cart',
      method: 'POST',
      endpoint: '/cart',
      description: 'Add an item to the shopping cart',
      curl: `curl --location 'https://us-central1-brands-61c3d.cloudfunctions.net/app-api/api/public/cart' \\
--header 'x-api-key: YOUR_API_KEY' \\
--header 'userid: USER_ID' \\
--header 'Content-Type: application/json' \\
--data '{
  "productId": "prod_123",
  "quantity": 2,
  "variantId": "var_456"
}'`,
      javascript: `// Add item to cart
await client.cart.add({
  productId: "prod_123",
  quantity: 2,
  variantId: "var_456" // Optional
});`,
      flutter: `// Add item to cart
await vondera.cart.addToCart(
  productId: 'product-id',
  quantity: 2,
  variantId: 'variant-id', // Optional
  options: {'Color': 'Red'}, // Optional
);`,
      response: `{
  "status": 200,
  "message": "Item added to cart successfully",
  "data": {
    "cartId": "cart_789",
    "totalItems": 3
  }
}`
    },
    {
      id: 'orders-create',
      name: 'Create Order',
      method: 'POST',
      endpoint: '/orders',
      description: 'Create a new order from cart items',
      curl: `curl --location 'https://us-central1-brands-61c3d.cloudfunctions.net/app-api/api/public/orders' \\
--header 'x-api-key: YOUR_API_KEY' \\
--header 'userid: USER_ID' \\
--header 'Content-Type: application/json' \\
--data '{
  "shippingAddress": "123 Main St, Cairo, Egypt",
  "paymentMethod": "cod"
}'`,
      javascript: `// Create order
const order = await client.orders.create({
  shippingAddress: "123 Main St, Cairo, Egypt",
  paymentMethod: "cod"
});

console.log(order.data);`,
      flutter: `// Create order
final order = await vondera.orders.createOrder(
  shippingAddress: '123 Main St, City, Country',
  billingAddress: '123 Main St, City, Country',
  paymentMethod: 'credit_card',
);

print('Order ID: \${order.id}');`,
      response: `{
  "status": 200,
  "message": "Order created successfully",
  "data": {
    "orderId": "order_abc123",
    "total": 599.99,
    "status": "pending",
    "trackingUrl": "https://track.vondera.app/order_abc123"
  }
}`
    },
    {
      id: 'auth-login',
      name: 'Customer Login',
      method: 'POST',
      endpoint: '/auth/login',
      description: 'Authenticate a customer',
      curl: `curl --location 'https://us-central1-brands-61c3d.cloudfunctions.net/app-api/api/public/auth/login' \\
--header 'x-api-key: YOUR_API_KEY' \\
--header 'Content-Type: application/json' \\
--data '{
  "email": "customer@example.com",
  "password": "password123"
}'`,
      javascript: `// Customer login
const response = await client.auth.login({
  email: "customer@example.com",
  password: "password123"
});

const token = response.data.token;
const customerId = response.data.customerId;`,
      flutter: `// Customer login
final response = await vondera.customers.login(
  email: 'user@example.com',
  password: 'password123',
);

print('Token: \${response.token}');
print('Customer ID: \${response.customerId}');`,
      response: `{
  "status": 200,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "customerId": "cust_xyz789",
    "email": "customer@example.com",
    "name": "John Doe"
  }
}`
    },
    {
      id: 'wishlist',
      name: 'Get Wishlist',
      method: 'GET',
      endpoint: '/wishlist',
      description: 'Retrieve customer wishlist',
      curl: `curl --location 'https://us-central1-brands-61c3d.cloudfunctions.net/app-api/api/public/wishlist?page=1&limit=10' \\
--header 'x-api-key: YOUR_API_KEY' \\
--header 'userid: USER_ID'`,
      javascript: `// Get wishlist
const wishlist = await client.wishlist.get({
  page: 1,
  limit: 10
});

console.log(wishlist.data.items);`,
      flutter: `// Get wishlist
final wishlist = await vondera.customers.getWishlist(
  page: 1,
  limit: 10,
);

print('Wishlist items: \${wishlist.items.length}');`,
      response: `{
  "status": 200,
  "message": "Wishlist fetched successfully",
  "data": {
    "items": [
      {
        "productId": "prod_123",
        "name": "Product Name",
        "price": 299.99
      }
    ],
    "totalItems": 5
  }
}`
    }
  ];

  const features = [
    {
      icon: Zap,
      title: t('features.fast.title') || 'Fast & Lightweight',
      description: t('features.fast.description') || 'Optimized SDKs with minimal footprint'
    },
    {
      icon: Shield,
      title: t('features.typeSafe.title') || 'Type-Safe',
      description: t('features.typeSafe.description') || 'Full TypeScript & Dart type definitions'
    },
    {
      icon: Globe,
      title: t('features.crossPlatform.title') || 'Cross-Platform',
      description: t('features.crossPlatform.description') || 'Web, mobile, and server support'
    },
    {
      icon: BookOpen,
      title: t('features.documented.title') || 'Well Documented',
      description: t('features.documented.description') || 'Extensive docs with examples'
    }
  ];

  const currentEndpoint = endpoints.find(e => e.id === activeEndpoint) || endpoints[0];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 overflow-hidden">
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
            opacity: videoError ? 0 : 0.15,
            transition: 'opacity 0.3s'
          }}
          onError={() => setVideoError(true)}
        >
          <source src="/video.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto px-4"
          >
            <Badge className="mb-6 bg-primary-600 text-white border-none backdrop-blur-sm inline-flex items-center px-6 py-3 text-base shadow-2xl">
              <Code className="w-5 h-5 mr-2" />
              {t('hero.badge') || 'API Documentation'}
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              {t('hero.title') || 'Build with Vondera'}
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-10 drop-shadow-lg">
              {t('hero.subtitle') || 'Powerful REST APIs and SDKs for seamless e-commerce integration'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#quick-start" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  {t('hero.getStarted') || 'Get Started'}
                </button>
              </a>
              <a href="https://api.vondera.app" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  {t('hero.apiReference') || 'API Reference'}
                </button>
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {t('quickStart.title') || 'Quick Start'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('quickStart.subtitle') || 'Get up and running in minutes'}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t('quickStart.step1.title') || 'Get API Key'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t('quickStart.step1.description') || 'Create an account and get your API key from the dashboard'}
                </p>
                <a href="https://dashboard.vondera.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  {t('quickStart.step1.action') || 'Go to Dashboard'}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t('quickStart.step2.title') || 'Install SDK'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t('quickStart.step2.description') || 'Choose your platform and install the SDK'}
                </p>
                <div className="space-y-2">
                  <code className="block bg-purple-900 text-purple-50 px-3 py-2 rounded text-sm">
                    npm i vondera-sdk
                  </code>
                  <code className="block bg-purple-900 text-purple-50 px-3 py-2 rounded text-sm">
                    flutter pub add vondera_sdk
                  </code>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200"
              >
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t('quickStart.step3.title') || 'Start Building'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t('quickStart.step3.description') || 'Make your first API call and start building'}
                </p>
                <a href="#api-explorer" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">
                  {t('quickStart.step3.action') || 'Try API Explorer'}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* API Explorer - Postman Style */}
      <section id="api-explorer" className="py-16 sm:py-20 bg-gray-50">
        <Container>
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                <TerminalIcon className="w-4 h-4 mr-2" />
                {t('apiExplorer.badge') || 'API Explorer'}
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {t('apiExplorer.title') || 'Try Our APIs'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('apiExplorer.subtitle') || 'Interactive examples with real code'}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-6">
              {/* Endpoints Sidebar */}
              <div className="lg:col-span-4">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 lg:sticky lg:top-24">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 px-2">
                    {t('apiExplorer.endpoints') || 'Endpoints'}
                  </h3>
                  <div className="space-y-1">
                    {endpoints.map((endpoint) => (
                      <button
                        key={endpoint.id}
                        onClick={() => setActiveEndpoint(endpoint.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                          activeEndpoint === endpoint.id
                            ? 'bg-primary-600 text-white shadow-lg'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm">{endpoint.name}</span>
                          <Badge className={`text-xs ${
                            endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                            endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {endpoint.method}
                          </Badge>
                        </div>
                        <code className={`text-xs ${
                          activeEndpoint === endpoint.id ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {endpoint.endpoint}
                        </code>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Code Examples */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  {/* Endpoint Header */}
                  <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
                        {currentEndpoint.method}
                      </Badge>
                      <code className="text-lg font-mono">{currentEndpoint.endpoint}</code>
                    </div>
                    <p className="text-white/90">{currentEndpoint.description}</p>
                  </div>

                  {/* Language Tabs */}
                  <div className="border-b border-gray-200 bg-gray-50 px-6">
                    <div className="flex space-x-1">
                      <button
                        onClick={() => setActiveTab('curl')}
                        className={`px-6 py-3 font-semibold transition-all ${
                          activeTab === 'curl'
                            ? 'bg-white text-primary-600 border-b-2 border-primary-600'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        cURL
                      </button>
                      <button
                        onClick={() => setActiveTab('javascript')}
                        className={`px-6 py-3 font-semibold transition-all ${
                          activeTab === 'javascript'
                            ? 'bg-white text-primary-600 border-b-2 border-primary-600'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        JavaScript
                      </button>
                      <button
                        onClick={() => setActiveTab('flutter')}
                        className={`px-6 py-3 font-semibold transition-all ${
                          activeTab === 'flutter'
                            ? 'bg-white text-primary-600 border-b-2 border-primary-600'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Flutter
                      </button>
                    </div>
                  </div>

                  {/* Code Block */}
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard(currentEndpoint[activeTab], `${activeEndpoint}-${activeTab}`)}
                      className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      {copiedCode === `${activeEndpoint}-${activeTab}` ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-300" />
                      )}
                    </button>
                    <pre className="p-6 bg-gray-900 overflow-x-auto max-h-96">
                      <code className="text-sm text-gray-100 whitespace-pre">
                        {currentEndpoint[activeTab]}
                      </code>
                    </pre>
                  </div>

                  {/* Response */}
                  <div className="border-t border-gray-200">
                    <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {t('apiExplorer.response') || 'Response'} (200 OK)
                      </h4>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => copyToClipboard(currentEndpoint.response, `${activeEndpoint}-response`)}
                        className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        {copiedCode === `${activeEndpoint}-response` ? (
                          <Check className="w-5 h-5 text-green-400" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-300" />
                        )}
                      </button>
                      <pre className="p-6 bg-gray-900 overflow-x-auto max-h-64">
                        <code className="text-sm text-green-400 whitespace-pre">
                          {currentEndpoint.response}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SDK Packages */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {t('sdks.title') || 'Official SDKs'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('sdks.subtitle') || 'Choose your platform and start building'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* JavaScript SDK */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200 shadow-xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="bg-yellow-600 text-white border-none">
                    NPM
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Vondera SDK
                </h3>
                <p className="text-gray-700 mb-6">
                  {t('sdks.javascript.description') || 'Lightweight TypeScript SDK for Node.js and browsers'}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Full TypeScript support</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Works in Node.js & browsers</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Promise-based async API</span>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-4 mb-6">
                  <code className="text-green-400 text-sm">npm install vondera-sdk</code>
                </div>

                <a href="https://www.npmjs.com/package/vondera-sdk" target="_blank" rel="noopener noreferrer">
                  <button className="w-full px-6 py-3 bg-yellow-600 text-white rounded-xl font-bold hover:bg-yellow-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    {t('sdks.viewOnNpm') || 'View on NPM'}
                  </button>
                </a>
              </motion.div>

              {/* Flutter SDK */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 shadow-xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="bg-blue-600 text-white border-none">
                    pub.dev
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Vondera SDK
                </h3>
                <p className="text-gray-700 mb-6">
                  {t('sdks.flutter.description') || 'Type-safe Flutter package for iOS and Android'}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Complete API coverage</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Null-safety support</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Built-in API logging</span>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-4 mb-6">
                  <code className="text-green-400 text-sm">flutter pub add vondera_sdk</code>
                </div>

                <a href="https://pub.dev/packages/vondera_sdk" target="_blank" rel="noopener noreferrer">
                  <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    {t('sdks.viewOnPubDev') || 'View on pub.dev'}
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('cta.title') || 'Ready to Start Building?'}
            </h2>
            <p className="text-xl text-white/90 mb-10">
              {t('cta.subtitle') || 'Join thousands of developers building with Vondera'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://dashboard.vondera.app" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto px-10 py-5 bg-white text-primary-600 rounded-xl font-bold hover:shadow-2xl transition-all text-lg inline-flex items-center justify-center gap-2">
                  <ArrowRight className="w-6 h-6" />
                  {t('cta.getStarted') || 'Get Started Free'}
                </button>
              </a>
              <a href="https://api.vondera.app" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all text-lg inline-flex items-center justify-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  {t('cta.viewDocs') || 'View Full Documentation'}
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
