import { apiRequest } from "./config";
import { ApiResponse, BlogsResponse, Blog } from "./types";

/**
 * Fetches blog posts with pagination
 * @param pageNo - Page number (default: 1)
 * @param limit - Number of items per page (default: 10)
 * @returns Promise with BlogsResponse object containing pagination info
 */
export async function getBlogs(
  pageNo: number = 1,
  limit: number = 10
): Promise<BlogsResponse> {
  const response = await apiRequest<ApiResponse<BlogsResponse>>(
    `/blogs?pageNo=${pageNo}&limit=${limit}`
  );
  return response.data;
}

/**
 * Fetches all blogs and finds one by ID
 * Since there's no single blog endpoint, we fetch with a large limit
 * @param id - Blog post ID
 * @returns Promise with Blog object or null
 */
export async function getBlogById(id: string): Promise<Blog | null> {
  try {
    // Fetch a large number of blogs to find the one we need
    const response = await getBlogs(1, 100);
    const blog = response.items.find(item => item.id === id);
    
    if (!blog) {
      console.warn(`Blog with ID ${id} not found in the list of blogs`);
      return null;
    }
    
    return blog;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw new Error('Failed to fetch blog. Please try again later.');
  }
}
