import { apiRequest } from "./config";
import { ApiResponse, BlogsResponse } from "./types";

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
