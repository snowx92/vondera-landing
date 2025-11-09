import { apiRequest } from "./config";
import { ApiResponse, Banner } from "./types";

/**
 * Fetches banners with pagination
 * @param pageNo - Page number (default: 1)
 * @param limit - Number of items per page (default: 10)
 * @returns Promise with array of Banner objects
 */
export async function getBanners(
  pageNo: number = 1,
  limit: number = 10
): Promise<Banner[]> {
  const response = await apiRequest<ApiResponse<Banner[]>>(
    `/banners?pageNo=${pageNo}&limit=${limit}`
  );
  return response.data;
}
