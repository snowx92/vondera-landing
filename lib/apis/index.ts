// Export all API functions
export { getPlans } from "./plans";
export { getPartners } from "./partners";
export { getReviews } from "./reviews";
export { getBanners } from "./banners";
export { getBlogs } from "./blogs";
export { getJobs, getJobById, applyToJob } from "./jobs";
export { submitContact } from "./contact";

// Export types
export type {
  ApiResponse,
  FirestoreTimestamp,
  Plan,
  PlanFeatures,
  PlanPrices,
  Partner,
  Review,
  Banner,
  Blog,
  BlogsResponse,
  Job,
  JobDetails,
  ContactRequest,
  JobApplicationRequest,
} from "./types";

// Export config
export { API_BASE_URL } from "./config";
