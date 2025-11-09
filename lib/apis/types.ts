// Base API Response
export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

// Timestamp interface for Firestore timestamps
export interface FirestoreTimestamp {
  _seconds: number;
  _nanoseconds: number;
}

// Plans
export interface PlanFeatures {
  abandonCarts: boolean;
  mailCampaigns: boolean;
  couriers: boolean;
  customReceipt: boolean;
  freeDomain: boolean;
  accessApi: boolean;
  payments: boolean;
  reviews: boolean;
  customPages: boolean;
  discounts: boolean;
  expanses: boolean;
  globalSite: boolean;
  multiCountry: boolean;
  pixels: boolean;
  siteUsers: boolean;
  funnels: boolean;
  removeBranding: boolean;
  salesChannels: number;
  maxOrders: number;
  members: number;
}

export interface PlanPrices {
  month: number;
  quartar: number;
  year: number;
  half: number;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  featured: boolean;
  actionType: "DOWNGRADE" | "RENEW" | "UPGRADE";
  currency: string;
  prices: PlanPrices;
  features: PlanFeatures;
  level: number;
}

// Partners
export interface Partner {
  id: string;
  name: string;
  url: string;
  image: string;
  createdBy: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

// Reviews
export interface Review {
  id: string;
  name: string;
  storeName: string;
  storeWebsite: string;
  logo: string;
  review: string;
  rating: number;
  featured: boolean;
  createdBy: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

// Banners
export interface Banner {
  id: string;
  title: string;
  link: string;
  image: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

// Blogs
export interface Blog {
  id: string;
  createdBy: string;
  title: string;
  author: string;
  description: string;
  image: string;
  htmlContent: string;
  tags: string[];
  category: string;
  status: "published" | "draft" | "archived";
  publishAt: string;
  featured: boolean;
  allowComments: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface BlogsResponse {
  items: Blog[];
  pageItems: number;
  totalItems: number;
  isLastPage: boolean;
  nextPageNumber: number;
  currentPage: number;
  totalPages: number;
  docsReaded: number;
}

// Jobs
export interface Job {
  id: string;
  name: string;
  url: string;
  image: string;
  createdBy: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface JobDetails {
  id: string;
  createdBy: string;
  title: string;
  department: string;
  salaryRange: string;
  location: string;
  isRemote: boolean;
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship";
  status: "opened" | "closed" | "filled";
  experienceLevel: "Entry" | "Mid" | "Senior" | "Lead";
  description: string;
  requirements: string;
  benefits: string;
  deadline: string;
  urgent: boolean;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

// Contact
export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Job Application
export interface JobApplicationRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  resume: string; // base64 encoded PDF
  coverLetter: string;
}
