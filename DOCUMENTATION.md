# Vondera Landing Page - Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Components Reference](#components-reference)
5. [Pages & Routing](#pages--routing)
6. [Assets & Images](#assets--images)
7. [Styling & Theming](#styling--theming)
8. [API Integration](#api-integration)
9. [Internationalization](#internationalization)
10. [Configuration Files](#configuration-files)
11. [Development Guide](#development-guide)

---

## Project Overview

Vondera Landing Page is a modern, enterprise-grade e-commerce SaaS landing page built for the MENA (Middle East & North Africa) market. It showcases Vondera's comprehensive e-commerce platform with features including order management, inventory tracking, payment processing, shipping integration, and media buyer marketplace.

### Key Features
- ✅ Fully bilingual (English/Arabic with RTL support)
- ✅ Advanced animations and effects
- ✅ Interactive product showcase with 11+ demos
- ✅ Mobile app promotion (iOS/Android)
- ✅ SEO optimized with structured data
- ✅ Type-safe with full TypeScript coverage
- ✅ Responsive mobile-first design
- ✅ Career portal with job listings
- ✅ Media buyer marketplace (VMedia)
- ✅ Custom cursor and visual effects
- ✅ PWA ready

---

## Technology Stack

### Core Framework
- **Next.js** `16.0.1` - React framework with App Router
- **React** `19.2.0` - UI library
- **TypeScript** `5.9.3` - Type safety
- **Node.js** - Runtime environment

### Styling
- **Tailwind CSS** `3.4.18` - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

### Animation Libraries
- **Framer Motion** `12.23.24` - Advanced animations
- **GSAP** `3.13.0` - Timeline animations
- **Lottie React** `2.4.1` - JSON animations

### UI Components
- **Radix UI** - Headless UI primitives
- **Lucide React** `0.552.0` - Icon library
- **Tabler Icons** `3.35.0` - Additional icons
- **Embla Carousel** `8.6.0` - Carousel/slider

### Forms & Validation
- **React Hook Form** `7.66.0` - Form management
- **Zod** `4.1.12` - Schema validation

### Utilities
- **next-intl** `4.4.0` - Internationalization
- **clsx** `2.1.1` - Conditional classes
- **Tailwind Merge** `3.3.1` - Class merging
- **Class Variance Authority** `0.7.1` - Component variants
- **React Intersection Observer** `10.0.0` - Scroll triggers
- **React CountUp** `6.5.3` - Animated counters
- **React Tweet** `3.2.2` - Embedded tweets

---

## Project Structure

```
vondera-landing/
│
├── app/                              # Next.js App Router
│   ├── [locale]/                     # Internationalized routes
│   │   ├── about/                    # About page
│   │   │   └── page.tsx
│   │   ├── blog/                     # Blog section
│   │   │   ├── [id]/                 # Individual blog post
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx              # Blog listing
│   │   ├── careers/                  # Career opportunities
│   │   │   └── page.tsx
│   │   ├── contact/                  # Contact form
│   │   │   └── page.tsx
│   │   ├── privacy/                  # Privacy policy
│   │   │   └── page.tsx
│   │   ├── terms/                    # Terms of service
│   │   │   └── page.tsx
│   │   ├── vmedia/                   # VMedia marketplace
│   │   │   └── page.tsx
│   │   ├── layout.tsx                # Locale-specific layout
│   │   └── page.tsx                  # Homepage
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   ├── not-found.tsx                 # 404 page
│   ├── robots.ts                     # SEO robots configuration
│   └── sitemap.ts                    # SEO sitemap generation
│
├── components/                       # React components
│   ├── careers/                      # Career page components
│   │   ├── Benefits.tsx
│   │   ├── CareersHero.tsx
│   │   ├── OpenPositions.tsx
│   │   ├── TeamCulture.tsx
│   │   └── WhyJoinUs.tsx
│   ├── layout/                       # Layout components
│   │   ├── AnnouncementBanner.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── legal/                        # Legal content
│   │   └── LegalContent.tsx
│   ├── sections/                     # Landing page sections
│   │   ├── ComparisonSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HeroSectionModern.tsx
│   │   ├── HeroSectionNew.tsx
│   │   ├── MapSection.tsx
│   │   ├── MediaBuyerSpotlight.tsx
│   │   ├── MobileAppsSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ProductDemoSection.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── SubProductsSection.tsx
│   │   ├── SuccessStoriesSection.tsx
│   │   └── TrustedBySection.tsx
│   ├── ui/                           # Reusable UI components
│   │   ├── animated-beam.tsx
│   │   ├── animated-list.tsx
│   │   ├── app-store-buttons.tsx
│   │   ├── app-store-buttons-outline.tsx
│   │   ├── avatar-circles.tsx
│   │   ├── Badge.tsx
│   │   ├── bento-grid.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── DotPattern.tsx
│   │   ├── MetallicLogo.tsx
│   │   ├── MetallicPaint.tsx
│   │   ├── RetroGrid.tsx
│   │   ├── smooth-cursor.tsx
│   │   └── tweet-card.tsx
│   ├── BlurText.tsx                  # Animated blur text reveal
│   ├── ChromaGrid.tsx                # 3D grid with chromatic effects
│   ├── FuzzyText.tsx                 # Fuzzy text animation
│   └── LightRays.tsx                 # Dynamic light ray effects
│
├── lib/                              # Library utilities
│   ├── apis/                         # API integration layer
│   │   ├── banners.ts
│   │   ├── blogs.ts
│   │   ├── config.ts
│   │   ├── contact.ts
│   │   ├── jobs.ts
│   │   ├── partners.ts
│   │   ├── plans.ts
│   │   ├── reviews.ts
│   │   └── types.ts
│   └── utils.ts                      # Utility functions
│
├── utils/                            # Additional utilities
│   └── cx.ts                         # Tailwind merge utilities
│
├── i18n/                             # Internationalization
│   └── request.ts                    # i18n configuration
│
├── messages/                         # Translation files
│   ├── ar.json                       # Arabic translations
│   └── en.json                       # English translations
│
├── public/                           # Static assets
│   ├── demo/                         # Product demo GIFs
│   │   ├── commuinty.gif
│   │   ├── domain.gif
│   │   ├── funnelbuilder.gif
│   │   ├── inventory.gif
│   │   ├── mediabuyers.gif
│   │   ├── orders.gif
│   │   ├── payments.gif
│   │   ├── shipping.gif
│   │   ├── team.gif
│   │   ├── themebuilder.gif
│   │   └── vinbox.gif
│   ├── logo.webp                     # Main logo
│   ├── Map.png                       # MENA region map
│   ├── video.webm                    # Hero background video
│   ├── [team photos].webp            # Team member photos
│   └── [various].png                 # Other assets
│
├── middleware.ts                     # Next.js middleware
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.mjs                # PostCSS configuration
├── components.json                   # shadcn/ui configuration
├── package.json                      # Dependencies
└── .eslintrc.json                    # ESLint configuration
```

---

## Components Reference

### Section Components (`components/sections/`)

#### 1. HeroSectionModern.tsx
**Purpose:** Full-screen video hero with animated rotating phrases

**Features:**
- Auto-playing WebM background video with fallback
- Animated rotating text showing product features
- CTA buttons (Start Free Trial, Watch Demo)
- Responsive design with mobile optimization
- Scroll indicator

**Images Used:**
- `public/video.webm` - Background video

**Key Props:** None (uses translations from `hero` namespace)

---

#### 2. TrustedBySection.tsx
**Purpose:** Display partner/customer logos for social proof

**Features:**
- Horizontal scrolling logo carousel
- Fetches partner logos from API
- Responsive grid layout
- Grayscale logos with hover effects

**Images Used:** Fetched from API (Partner logos)

**API:** `lib/apis/partners.ts` - `getPartners()`

---

#### 3. ProductDemoSection.tsx
**Purpose:** Interactive 11-tab product showcase with animated demos

**Features:**
- Tab navigation for different product features
- Animated GIF demos for each feature
- Responsive layout (grid on desktop, accordion on mobile)
- Feature descriptions and icons

**Images Used:**
- `public/demo/orders.gif` - Order management demo
- `public/demo/inventory.gif` - Inventory tracking demo
- `public/demo/shipping.gif` - Shipping integration demo
- `public/demo/payments.gif` - Payment processing demo
- `public/demo/funnelbuilder.gif` - Funnel builder demo
- `public/demo/themebuilder.gif` - Theme builder demo
- `public/demo/domain.gif` - Domain management demo
- `public/demo/team.gif` - Team collaboration demo
- `public/demo/vinbox.gif` - VInbox (customer inbox) demo
- `public/demo/mediabuyers.gif` - Media buyer tools demo
- `public/demo/commuinty.gif` - Community features demo

**Tabs:**
1. Orders Management
2. Inventory Tracking
3. Shipping Integration
4. Payment Processing
5. Funnel Builder
6. Theme Builder
7. Domain Management
8. Team Collaboration
9. VInbox
10. Media Buyers
11. Community

---

#### 4. SubProductsSection.tsx
**Purpose:** Showcase sub-products (VPay, VDomain, VFunnels, etc.)

**Features:**
- Grid of product cards
- Each card has icon, title, description, CTA
- Responsive 2-3 column layout
- Hover effects

**Sub-Products:**
- **VPay** - Payment gateway integration
- **VDomain** - Custom domain management
- **VFunnels** - Sales funnel builder
- **VInbox** - Customer communication inbox
- **VTheme** - Store theme customization
- **VMedia** - Media buyer marketplace

**Images Used:** Icons only (Lucide icons)

---

#### 5. ComparisonSection.tsx
**Purpose:** Feature comparison table (Vondera vs Competitors)

**Features:**
- Comparison table with checkmarks/X marks
- Responsive design
- Feature categories
- Highlight Vondera advantages

**Images Used:** None (checkmark/X icons)

---

#### 6. MediaBuyerSpotlight.tsx
**Purpose:** Dedicated section highlighting VMedia marketplace for media buyers

**Features:**
- Benefits for media buyers
- Statistics/metrics display
- CTA to VMedia platform
- Custom green branding (vmedia color)

**Images Used:** None (icons only)

---

#### 7. SuccessStoriesSection.tsx
**Purpose:** Customer testimonials and success stories

**Features:**
- Testimonial cards with customer info
- Star ratings
- Carousel/grid layout
- Before/after metrics

**Images Used:** Customer avatars (if available from API)

**API:** `lib/apis/reviews.ts` - `getReviews()`

---

#### 8. SocialProofSection.tsx
**Purpose:** Display reviews, ratings, and social proof

**Features:**
- Average rating display
- Review count
- Customer testimonials
- Trust badges

**API:** `lib/apis/reviews.ts` - `getReviews()`

---

#### 9. MobileAppsSection.tsx
**Purpose:** Promote iOS and Android mobile applications

**Features:**
- App store buttons (iOS/Android)
- App screenshots/mockups
- Feature highlights
- Download statistics

**Images Used:**
- App store badge graphics (from component)
- Phone mockup images (if any)

**Components Used:**
- `app-store-buttons.tsx` - Download buttons

---

#### 10. PricingSection.tsx
**Purpose:** Display pricing plans and features

**Features:**
- Pricing cards for different tiers
- Feature comparison
- Popular plan highlight
- Monthly/annual toggle (if applicable)
- CTA buttons

**API:** `lib/apis/plans.ts` - `getPlans()`

**Plan Types:**
- Basic/Starter
- Professional
- Enterprise

---

#### 11. FinalCTASection.tsx
**Purpose:** Final call-to-action before footer

**Features:**
- Strong CTA message
- Action buttons
- Value proposition reminder
- Gradient background

**Images Used:** None (background patterns)

---

#### 12. FAQSection.tsx
**Purpose:** Frequently asked questions

**Features:**
- Accordion-style Q&A
- Searchable (if implemented)
- Categories (if applicable)
- Expandable answers

**Images Used:** None

---

#### 13. MapSection.tsx
**Purpose:** Geographic reach visualization showing MENA coverage

**Features:**
- Map of MENA region
- Country highlights
- Coverage statistics
- Responsive image

**Images Used:**
- `public/Map.png` - MENA region map

---

#### 14. HeroSection.tsx
**Purpose:** Alternative hero section (not currently in use)

**Status:** Legacy component

---

#### 15. HeroSectionNew.tsx
**Purpose:** Another hero section variant

**Status:** Alternative implementation

---

### Layout Components (`components/layout/`)

#### Header.tsx
**Purpose:** Main navigation header

**Features:**
- Multi-level dropdown menu
- Language toggle (EN/AR)
- Responsive mobile menu
- Scroll-based transparent/solid background
- Product showcase dropdown
- Login/Signup buttons

**Sections:**
- Products dropdown
- Platform features
- Solutions
- Resources
- Pricing
- VMedia link

**Behavior:**
- Transparent on scroll top
- Solid white background on scroll
- Mobile hamburger menu
- RTL support for Arabic

---

#### Footer.tsx
**Purpose:** Comprehensive footer

**Features:**
- Multi-column link structure
- Social media icons (6 platforms)
- Contact information
- Newsletter signup area
- Dark background
- Logo and tagline

**Columns:**
1. Products (VPay, VDomain, VFunnels, VInbox, VTheme, VMedia)
2. Company (About, Careers, Blog, Contact)
3. Legal (Privacy Policy, Terms of Service)
4. Resources (Help Center, API Docs, Community)

**Social Media Links:**
- Facebook
- Twitter
- Instagram
- LinkedIn
- YouTube
- TikTok

**Images Used:**
- `public/logo.webp` - Footer logo

---

#### AnnouncementBanner.tsx
**Purpose:** Top announcement bar

**Features:**
- Dismissible banner
- Custom message
- Link to announcement page
- Background color customization

**API:** `lib/apis/banners.ts` - `getBanners()`

---

### UI Components (`components/ui/`)

#### Button.tsx
**Purpose:** Reusable button component with variants

**Variants:**
- `primary` - Purple gradient button (default)
- `vmedia` - Green button for VMedia branding
- `ghost` - Transparent with hover effect
- `outline` - Border only
- `secondary` - Subtle background

**Sizes:**
- `sm` - Small
- `md` - Medium (default)
- `lg` - Large

**Props:**
- `variant` - Button style variant
- `size` - Button size
- `isLoading` - Show loading spinner
- `disabled` - Disabled state
- `children` - Button content

---

#### Card.tsx
**Purpose:** Flexible card container component

**Sub-components:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

**Usage Example:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer here</CardFooter>
</Card>
```

---

#### Container.tsx
**Purpose:** Responsive container wrapper

**Sizes:**
- `sm` - Max width 640px
- `md` - Max width 768px
- `lg` - Max width 1024px
- `xl` - Max width 1280px
- `2xl` - Max width 1536px
- `full` - Full width

**Props:**
- `size` - Container size
- `className` - Additional classes
- `children` - Content

---

#### Badge.tsx
**Purpose:** Label/badge component

**Variants:**
- `default` - Primary color
- `secondary` - Subtle color
- `outline` - Border only
- `success` - Green
- `warning` - Yellow
- `error` - Red

---

#### DotPattern.tsx
**Purpose:** Decorative dot background pattern

**Usage:** Background decoration for sections

---

#### RetroGrid.tsx
**Purpose:** Retro-style grid background

**Usage:** Background decoration with 80s aesthetic

---

#### animated-beam.tsx
**Purpose:** Animated connection lines between elements

**Usage:** Visual connections in diagrams

---

#### animated-list.tsx
**Purpose:** Animated notification/activity list

**Features:**
- Smooth entry/exit animations
- Real-time updates simulation
- Customizable items

---

#### avatar-circles.tsx
**Purpose:** Circular avatar display (overlapping circles)

**Usage:** Show team members or user group

---

#### bento-grid.tsx
**Purpose:** Grid layout component (Bento box style)

**Features:**
- Flexible grid system
- Varied cell sizes
- Responsive layout

---

#### tweet-card.tsx
**Purpose:** Twitter/social card display

**Features:**
- Embedded tweet styling
- Profile info
- Engagement metrics

---

#### smooth-cursor.tsx
**Purpose:** Custom animated cursor

**Features:**
- Smooth following animation
- Hover state changes
- Disabled on mobile

---

#### MetallicLogo.tsx
**Purpose:** 3D metallic logo effect

**Features:**
- Shader-based rendering
- Reflective surface
- Animated lighting

---

#### MetallicPaint.tsx
**Purpose:** Metallic paint shader effect

**Usage:** Background or overlay effect

---

#### app-store-buttons.tsx
**Purpose:** iOS/Android download buttons (filled style)

**Features:**
- Apple App Store button
- Google Play Store button
- Proper branding
- Click tracking

---

#### app-store-buttons-outline.tsx
**Purpose:** iOS/Android download buttons (outlined style)

**Features:** Same as above but outlined variant

---

### Special Effect Components

#### BlurText.tsx
**Purpose:** Animated blur text reveal effect

**Usage:**
```tsx
<BlurText text="Your text here" delay={0.2} />
```

---

#### FuzzyText.tsx
**Purpose:** Fuzzy/glitch text animation

**Usage:**
```tsx
<FuzzyText text="Glitch text" />
```

---

#### ChromaGrid.tsx
**Purpose:** 3D grid with chromatic aberration effects

**Features:**
- WebGL rendering
- Chromatic color separation
- 3D perspective
- Animated movement

---

#### LightRays.tsx
**Purpose:** Dynamic light ray effects

**Features:**
- Animated light beams
- Customizable color
- Performance optimized

---

### Career Components (`components/careers/`)

#### CareersHero.tsx
**Purpose:** Career page hero section

**Features:**
- Job opportunities headline
- Company culture message
- Open positions count
- CTA to view jobs

---

#### Benefits.tsx
**Purpose:** Display employee benefits

**Features:**
- Benefit cards grid
- Icons and descriptions
- Comprehensive perks list

**Benefits Listed:**
- Health insurance
- Remote work
- Professional development
- Competitive salary
- Work-life balance
- Team events

---

#### OpenPositions.tsx
**Purpose:** Job listings display

**Features:**
- Job cards with details
- Filter by department
- Apply button
- Job details modal

**API:** `lib/apis/jobs.ts` - `getJobs()`

---

#### TeamCulture.tsx
**Purpose:** Showcase company culture

**Features:**
- Team photos
- Culture values
- Employee testimonials

**Images Used:**
- Team member photos from `public/`

---

#### WhyJoinUs.tsx
**Purpose:** Reasons to join Vondera

**Features:**
- Value propositions
- Company mission
- Growth opportunities

---

## Pages & Routing

### Routing Structure
Pattern: `/[locale]/[page]`

Supported locales: `en` (English), `ar` (Arabic)

---

### Homepage (`app/[locale]/page.tsx`)

**Route:** `/` or `/{locale}`

**Sections (in order):**
1. HeroSectionModern
2. TrustedBySection
3. ProductDemoSection
4. SubProductsSection
5. ComparisonSection
6. MediaBuyerSpotlight
7. SuccessStoriesSection
8. SocialProofSection
9. MobileAppsSection
10. PricingSection
11. FAQSection
12. MapSection
13. FinalCTASection

**Metadata:**
- Title: Dynamic based on locale
- Description: SEO-optimized
- OpenGraph tags
- Twitter cards

---

### About Page (`app/[locale]/about/page.tsx`)

**Route:** `/{locale}/about`

**Content:**
- Company story
- Mission and vision
- Team member bios with photos
- Company values

**Images Used:**
- `public/ceo.webp` - CEO photo
- `public/cto.webp` - CTO photo
- `public/coo.webp` - COO photo
- `public/front.webp` - Frontend lead
- `public/eyad.webp` - Developer
- `public/yousef.webp` - Developer
- `public/sales.jpg` - Sales team
- `public/sales2.jpg` - Sales team

---

### Blog (`app/[locale]/blog/page.tsx`)

**Route:** `/{locale}/blog`

**Features:**
- Blog post listing
- Featured posts
- Category filter
- Search functionality
- Pagination

**API:** `lib/apis/blogs.ts` - `getBlogs()`

---

### Blog Post (`app/[locale]/blog/[id]/page.tsx`)

**Route:** `/{locale}/blog/{id}`

**Features:**
- Full blog post content
- Author info
- Published date
- Related posts
- Share buttons

**API:** `lib/apis/blogs.ts` - `getBlogById()`

---

### Careers (`app/[locale]/careers/page.tsx`)

**Route:** `/{locale}/careers`

**Components:**
1. CareersHero
2. WhyJoinUs
3. Benefits
4. TeamCulture
5. OpenPositions

**API:** `lib/apis/jobs.ts` - `getJobs()`

---

### Contact (`app/[locale]/contact/page.tsx`)

**Route:** `/{locale}/contact`

**Features:**
- Contact form (name, email, message)
- Form validation with Zod
- Success/error messages
- Contact information display

**API:** `lib/apis/contact.ts` - `submitContact()`

**Form Fields:**
- Name (required)
- Email (required, validated)
- Phone (optional)
- Message (required)

---

### Privacy Policy (`app/[locale]/privacy/page.tsx`)

**Route:** `/{locale}/privacy`

**Component:** `LegalContent` with privacy content

**Sections:**
- Data collection
- Data usage
- Data sharing
- User rights
- Cookies
- Updates to policy

---

### Terms of Service (`app/[locale]/terms/page.tsx`)

**Route:** `/{locale}/terms`

**Component:** `LegalContent` with terms content

**Sections:**
- Service terms
- User obligations
- Payment terms
- Refund policy
- Limitation of liability
- Governing law

---

### VMedia (`app/[locale]/vmedia/page.tsx`)

**Route:** `/{locale}/vmedia`

**Purpose:** Dedicated page for media buyers marketplace

**Features:**
- VMedia platform overview
- Benefits for media buyers
- How it works
- Success metrics
- CTA to join VMedia

**Branding:** Uses green color scheme (`vmedia` color)

---

### 404 Page (`app/not-found.tsx`)

**Route:** Any non-existent route

**Features:**
- Custom 404 message
- Search functionality
- Links to popular pages
- Back to home button

---

## Assets & Images

### Complete Image Reference

#### Brand Assets
| File | Path | Usage | Dimensions | Format |
|------|------|-------|------------|--------|
| Logo | `public/logo.webp` | Header, Footer, Brand display | - | WebP |

---

#### Hero Section
| File | Path | Usage | Dimensions | Format |
|------|------|-------|------------|--------|
| Hero Video | `public/video.webm` | Background video | - | WebM |

---

#### Product Demos
| File | Path | Usage | Feature Shown | Format |
|------|------|-------|---------------|--------|
| Orders Demo | `public/demo/orders.gif` | ProductDemoSection Tab 1 | Order management interface | GIF |
| Inventory Demo | `public/demo/inventory.gif` | ProductDemoSection Tab 2 | Inventory tracking | GIF |
| Shipping Demo | `public/demo/shipping.gif` | ProductDemoSection Tab 3 | Shipping integration | GIF |
| Payments Demo | `public/demo/payments.gif` | ProductDemoSection Tab 4 | Payment processing | GIF |
| Funnel Builder Demo | `public/demo/funnelbuilder.gif` | ProductDemoSection Tab 5 | Sales funnel builder | GIF |
| Theme Builder Demo | `public/demo/themebuilder.gif` | ProductDemoSection Tab 6 | Store theme customization | GIF |
| Domain Demo | `public/demo/domain.gif` | ProductDemoSection Tab 7 | Domain management | GIF |
| Team Demo | `public/demo/team.gif` | ProductDemoSection Tab 8 | Team collaboration | GIF |
| VInbox Demo | `public/demo/vinbox.gif` | ProductDemoSection Tab 9 | Customer inbox | GIF |
| Media Buyers Demo | `public/demo/mediabuyers.gif` | ProductDemoSection Tab 10 | Media buyer tools | GIF |
| Community Demo | `public/demo/commuinty.gif` | ProductDemoSection Tab 11 | Community features | GIF |

---

#### Geographic
| File | Path | Usage | Region | Format |
|------|------|-------|--------|--------|
| MENA Map | `public/Map.png` | MapSection | Middle East & North Africa | PNG |

---

#### Team Photos
| File | Path | Usage | Person/Role | Format |
|------|------|-------|-------------|--------|
| CEO Photo | `public/ceo.webp` | About page | CEO | WebP |
| CTO Photo | `public/cto.webp` | About page | CTO | WebP |
| COO Photo | `public/coo.webp` | About page | COO | WebP |
| Frontend Lead | `public/front.webp` | About page | Frontend Developer | WebP |
| Developer 1 | `public/eyad.webp` | About page | Developer (Eyad) | WebP |
| Developer 2 | `public/yousef.webp` | About page | Developer (Yousef) | WebP |
| Sales Team 1 | `public/sales.jpg` | About page | Sales Team | JPEG |
| Sales Team 2 | `public/sales2.jpg` | About page | Sales Team | JPEG |

---

#### Sub-Products
| File | Path | Usage | Product | Format |
|------|------|-------|---------|--------|
| VPay Image | `public/vpay.png` | SubProductsSection | VPay payment gateway | PNG |

---

#### Numbered Assets
| File | Path | Usage | Purpose | Format |
|------|------|-------|---------|--------|
| Asset 1 | `public/1.png` | Various | - | PNG |
| Asset 2 | `public/2.png` | Various | - | PNG |
| Asset 3 | `public/3.png` | Various | - | PNG |
| Asset 4 | `public/4.png` | Various | - | PNG |
| Asset 5 | `public/5.png` | Various | - | PNG |

---

#### Favicons & PWA
| File | Path | Usage | Dimensions | Format |
|------|------|-------|------------|--------|
| Favicon | `public/favicon.ico` | Browser tab icon | 16x16, 32x32 | ICO |
| Favicon 16 | `public/favicon-16x16.png` | Browser tab | 16x16 | PNG |
| Favicon 32 | `public/favicon-32x32.png` | Browser tab | 32x32 | PNG |
| Apple Touch Icon | `public/apple-touch-icon.png` | iOS home screen | 180x180 | PNG |
| Android Chrome 192 | `public/android-chrome-192x192.png` | Android home screen | 192x192 | PNG |
| Android Chrome 512 | `public/android-chrome-512x512.png` | Android splash | 512x512 | PNG |

---

#### PWA Manifest
| File | Path | Purpose | Format |
|------|------|---------|--------|
| Manifest | `public/site.webmanifest` | Progressive Web App configuration | JSON |

---

### Image Optimization Guidelines

1. **Format Selection:**
   - WebP for photos and screenshots (better compression)
   - PNG for logos and graphics with transparency
   - GIF for animated demos
   - ICO for favicons

2. **Next.js Image Component:**
   - All images use `<Image>` from `next/image` for automatic optimization
   - Lazy loading enabled by default
   - Responsive srcsets generated automatically

3. **Remote Images:**
   - Configured in `next.config.ts` to allow HTTPS images
   - Partner logos fetched from API
   - Optimized on-demand

4. **Performance:**
   - WebP provides 25-35% smaller file sizes vs PNG/JPEG
   - GIF demos are optimized for web delivery
   - Videos use WebM format for modern browsers

---

## Styling & Theming

### Tailwind CSS Configuration

#### Custom Colors

**Primary (Purple):**
```js
primary: {
  DEFAULT: '#693bbb',
  50: '#f5f3ff',
  100: '#ede9fe',
  200: '#ddd6fe',
  300: '#c4b5fd',
  400: '#a78bfa',
  500: '#8b5cf6',
  600: '#693bbb',
  700: '#6d28d9',
  800: '#5b21b6',
  900: '#4c1d95',
  950: '#2e1065'
}
```

**Secondary (Pink/Magenta):**
```js
secondary: {
  DEFAULT: '#ec4899',
  50: '#fdf2f8',
  100: '#fce7f3',
  200: '#fbcfe8',
  300: '#f9a8d4',
  400: '#f472b6',
  500: '#ec4899',
  600: '#db2777',
  700: '#be185d',
  800: '#9f1239',
  900: '#831843'
}
```

**VMedia (Green - for Media Buyers):**
```js
vmedia: {
  DEFAULT: '#10b981',
  50: '#ecfdf5',
  100: '#d1fae5',
  200: '#a7f3d0',
  300: '#6ee7b7',
  400: '#34d399',
  500: '#10b981',
  600: '#059669',
  700: '#047857',
  800: '#065f46',
  900: '#064e3b'
}
```

---

#### Custom Fonts

**Sans Serif (Latin):**
```js
fontFamily: {
  sans: ['Inter', 'sans-serif'],
}
```

**Arabic Fonts:**
```js
fontFamily: {
  arabic: ['Tajawal', 'Cairo', 'sans-serif'],
}
```

---

#### Custom Animations

**Defined Animations:**
1. `fade-in` - Opacity fade in
2. `fade-out` - Opacity fade out
3. `slide-up` - Slide from bottom
4. `slide-down` - Slide from top
5. `slide-left` - Slide from right
6. `slide-right` - Slide from left
7. `scale-in` - Scale from 0 to 1
8. `scale-out` - Scale from 1 to 0
9. `gradient` - Gradient animation
10. `float` - Floating animation
11. `shimmer` - Shimmer effect
12. `marquee` - Infinite scroll
13. `pulse-slow` - Slow pulse
14. `spin-slow` - Slow rotation
15. `bounce-slow` - Slow bounce

**Usage Example:**
```tsx
<div className="animate-fade-in">Content</div>
<div className="animate-float">Floating element</div>
```

---

#### Keyframes

All animations have corresponding keyframe definitions in `tailwind.config.ts`.

---

### Global Styles (`app/globals.css`)

#### Custom Utility Classes

**Gradient Text:**
```css
.gradient-text {
  background: linear-gradient(to right, #693bbb, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Glass Effect:**
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

**Scroll Animations:**
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

---

#### Custom Scrollbar

```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #693bbb;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #5b21b6;
}
```

---

#### RTL Support

```css
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] .flip-rtl {
  transform: scaleX(-1);
}
```

---

### Responsive Breakpoints

Tailwind default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Usage:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid */}
</div>
```

---

## API Integration

### Base Configuration (`lib/apis/config.ts`)

```typescript
export const API_BASE_URL = 'https://us-central1-vondera-1-8fbff.cloudfunctions.net'

export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }

  return response.json()
}
```

---

### API Modules

#### 1. Plans API (`lib/apis/plans.ts`)

**Endpoint:** `/getPlans`

**Function:** `getPlans()`

**Returns:** `Plan[]`

**Type:**
```typescript
interface Plan {
  id: string
  name: string
  price: PlanPrices
  features: PlanFeatures
  popular?: boolean
  description: string
}

interface PlanPrices {
  monthly: number
  annually: number
}

interface PlanFeatures {
  orders: string
  products: string
  users: string
  storage: string
  support: string
  // ... more features
}
```

**Usage:**
```typescript
import { getPlans } from '@/lib/apis/plans'

const plans = await getPlans()
```

---

#### 2. Partners API (`lib/apis/partners.ts`)

**Endpoint:** `/getPartners`

**Function:** `getPartners()`

**Returns:** `Partner[]`

**Type:**
```typescript
interface Partner {
  id: string
  name: string
  logo: string // URL
  website?: string
}
```

**Usage:**
```typescript
import { getPartners } from '@/lib/apis/partners'

const partners = await getPartners()
```

---

#### 3. Reviews API (`lib/apis/reviews.ts`)

**Endpoint:** `/getReviews`

**Function:** `getReviews()`

**Returns:** `Review[]`

**Type:**
```typescript
interface Review {
  id: string
  customerName: string
  customerAvatar?: string
  rating: number // 1-5
  comment: string
  date: FirestoreTimestamp
  verified?: boolean
}
```

---

#### 4. Banners API (`lib/apis/banners.ts`)

**Endpoint:** `/getBanners`

**Function:** `getBanners()`

**Returns:** `Banner[]`

**Type:**
```typescript
interface Banner {
  id: string
  message: string
  link?: string
  backgroundColor?: string
  textColor?: string
  active: boolean
}
```

---

#### 5. Blogs API (`lib/apis/blogs.ts`)

**Endpoints:**
- `/getBlogs` - Get all blogs
- `/getBlog/{id}` - Get single blog

**Functions:**
- `getBlogs()` - Returns `Blog[]`
- `getBlogById(id: string)` - Returns `Blog`

**Type:**
```typescript
interface Blog {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedDate: FirestoreTimestamp
  tags: string[]
  featuredImage?: string
}
```

---

#### 6. Jobs API (`lib/apis/jobs.ts`)

**Endpoints:**
- `/getJobs` - Get all job listings
- `/applyJob` - Submit job application

**Functions:**
- `getJobs()` - Returns `Job[]`
- `applyForJob(application: JobApplicationRequest)` - Submit application

**Types:**
```typescript
interface Job {
  id: string
  title: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract'
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  postedDate: FirestoreTimestamp
}

interface JobApplicationRequest {
  jobId: string
  fullName: string
  email: string
  phone: string
  resume: File | string // URL or file
  coverLetter?: string
}
```

---

#### 7. Contact API (`lib/apis/contact.ts`)

**Endpoint:** `/submitContact`

**Function:** `submitContact(data: ContactRequest)`

**Type:**
```typescript
interface ContactRequest {
  name: string
  email: string
  phone?: string
  message: string
}
```

**Usage:**
```typescript
import { submitContact } from '@/lib/apis/contact'

await submitContact({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!'
})
```

---

### Error Handling

All API functions throw errors that should be caught:

```typescript
try {
  const plans = await getPlans()
} catch (error) {
  console.error('Failed to fetch plans:', error)
  // Handle error (show toast, fallback UI, etc.)
}
```

---

## Internationalization

### Configuration

**Supported Locales:** `en`, `ar`

**Default Locale:** `en`

**Configuration File:** `i18n/request.ts`

```typescript
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default
}))
```

---

### Middleware (`middleware.ts`)

```typescript
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en'
})

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
}
```

---

### Translation Files

#### Structure (`messages/en.json` and `messages/ar.json`)

```json
{
  "common": {
    "startFreeTrial": "Start Free Trial",
    "learnMore": "Learn More",
    "getStarted": "Get Started"
  },
  "nav": {
    "products": "Products",
    "platform": "Platform",
    "solutions": "Solutions",
    "resources": "Resources",
    "pricing": "Pricing"
  },
  "hero": {
    "title": "All-in-One E-Commerce Platform",
    "subtitle": "Manage your online store with ease",
    "features": [
      "Order Management",
      "Inventory Tracking",
      "Payment Processing"
    ]
  },
  "subProducts": {
    "vpay": {
      "title": "VPay",
      "description": "Integrated payment gateway"
    },
    "vdomain": {
      "title": "VDomain",
      "description": "Custom domain management"
    }
  },
  "pricing": {
    "title": "Simple, Transparent Pricing",
    "monthly": "Monthly",
    "annually": "Annually"
  },
  "faq": {
    "title": "Frequently Asked Questions"
  },
  "footer": {
    "products": "Products",
    "company": "Company",
    "legal": "Legal",
    "followUs": "Follow Us"
  }
}
```

---

### Usage in Components

```typescript
import { useTranslations } from 'next-intl'

export default function Component() {
  const t = useTranslations('hero')

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  )
}
```

---

### Server Components

```typescript
import { getTranslations } from 'next-intl/server'

export default async function Page() {
  const t = await getTranslations('hero')

  return <h1>{t('title')}</h1>
}
```

---

### Metadata Localization

```typescript
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}
```

---

### RTL Support

**Automatic Detection:**
```typescript
// In layout.tsx
const isRTL = locale === 'ar'

return (
  <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
    {/* ... */}
  </html>
)
```

**RTL-Specific Styling:**
```tsx
<div className="mr-4 rtl:ml-4 rtl:mr-0">
  {/* Auto-adjusts margin for RTL */}
</div>
```

---

### Language Switcher

Located in Header component:

```typescript
<Link href={pathname} locale="en">English</Link>
<Link href={pathname} locale="ar">العربية</Link>
```

---

## Configuration Files

### package.json

```json
{
  "name": "vondera-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^16.0.1",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwindcss": "^3.4.18",
    "framer-motion": "^12.23.24",
    "next-intl": "^4.4.0"
  },
  "devDependencies": {
    "typescript": "^5.9.3",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "^16.0.1"
  }
}
```

---

### next.config.ts

```typescript
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
```

---

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

### tailwind.config.ts

See [Styling & Theming](#styling--theming) section for full configuration.

---

### postcss.config.mjs

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

### .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}
```

---

### components.json (shadcn/ui)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "radix"
}
```

---

## Development Guide

### Getting Started

1. **Install Dependencies:**
```bash
npm install
```

2. **Run Development Server:**
```bash
npm run dev
```

3. **Open Browser:**
Navigate to `http://localhost:3000`

---

### Building for Production

```bash
npm run build
npm start
```

---

### Linting

```bash
npm run lint
```

---

### Project Conventions

#### File Naming
- Components: PascalCase (`HeroSection.tsx`)
- Utilities: camelCase (`utils.ts`)
- Pages: lowercase (`page.tsx`)

#### Component Structure
```tsx
'use client' // If client component

import { useTranslations } from 'next-intl'
import { ComponentProps } from '@/types'

export default function ComponentName({ prop1, prop2 }: ComponentProps) {
  const t = useTranslations('namespace')

  return (
    <div className="container">
      {/* Component content */}
    </div>
  )
}
```

---

### Adding New Components

1. Create component file in appropriate directory
2. Add translations to `messages/en.json` and `messages/ar.json`
3. Import and use in page
4. Test in both languages
5. Verify responsive design

---

### Adding New Pages

1. Create folder in `app/[locale]/`
2. Add `page.tsx` file
3. Add metadata export
4. Add translations
5. Update sitemap if needed
6. Test routing

---

### Adding New API Endpoints

1. Create new file in `lib/apis/`
2. Define TypeScript interface in `lib/apis/types.ts`
3. Implement fetch function using `apiRequest`
4. Export function
5. Use in components with error handling

---

### Performance Optimization

1. **Images:**
   - Use Next.js `<Image>` component
   - Provide width/height
   - Use WebP format
   - Enable lazy loading

2. **Code Splitting:**
   - Use dynamic imports for heavy components
   - Implement suspense boundaries

3. **Caching:**
   - API responses cached when appropriate
   - Static pages pre-rendered

---

### Accessibility Checklist

- ✅ Semantic HTML
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Alt text on images
- ✅ Sufficient color contrast
- ✅ Screen reader compatibility

---

### SEO Best Practices

1. **Metadata:**
   - Unique title/description per page
   - OpenGraph tags
   - Twitter cards
   - Canonical URLs

2. **Structured Data:**
   - Organization schema
   - Product schema (if applicable)
   - Breadcrumb schema

3. **Performance:**
   - Fast page load times
   - Mobile-friendly
   - HTTPS enabled

4. **Content:**
   - Descriptive headings (H1, H2, H3)
   - Internal linking
   - XML sitemap
   - robots.txt

---

### Testing Guidelines

1. **Browser Testing:**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)

2. **Device Testing:**
   - Desktop (1920x1080, 1366x768)
   - Tablet (768x1024)
   - Mobile (375x667, 414x896)

3. **Language Testing:**
   - Test all pages in English
   - Test all pages in Arabic (verify RTL)
   - Check translations accuracy

4. **Functionality Testing:**
   - Navigation works
   - Forms submit correctly
   - Links go to correct pages
   - Animations perform smoothly

---

### Deployment

**Recommended Platform:** Vercel (optimized for Next.js)

**Environment Variables:**
```
NEXT_PUBLIC_API_URL=https://us-central1-vondera-1-8fbff.cloudfunctions.net
```

**Build Command:**
```bash
npm run build
```

**Deploy:**
```bash
vercel deploy
```

---

### Troubleshooting

#### Common Issues

1. **Build Errors:**
   - Check TypeScript errors: `npm run lint`
   - Verify all imports are correct
   - Ensure all dependencies are installed

2. **Translation Missing:**
   - Check `messages/en.json` and `messages/ar.json`
   - Verify namespace is correct
   - Restart dev server

3. **Images Not Loading:**
   - Check file path is correct
   - Verify file exists in `public/`
   - Check `next.config.ts` for remote patterns

4. **Styling Issues:**
   - Clear Tailwind cache: `rm -rf .next`
   - Rebuild: `npm run build`
   - Check class names are correct

---

### Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Framer Motion Docs:** https://www.framer.com/motion/
- **next-intl Docs:** https://next-intl-docs.vercel.app/

---

## Conclusion

This documentation covers the complete Vondera landing page codebase, including:

- ✅ 15+ section components
- ✅ 40+ UI components
- ✅ 8 pages with routing
- ✅ Complete asset reference
- ✅ API integration layer
- ✅ Bilingual support (EN/AR)
- ✅ Styling and theming
- ✅ Configuration files
- ✅ Development guidelines

For questions or updates, refer to this documentation and the inline code comments.

**Last Updated:** 2025-11-14
**Version:** 1.0.0
**Maintained By:** Vondera Development Team
