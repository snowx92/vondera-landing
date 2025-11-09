import { apiRequest } from "./config";
import { ApiResponse, Review } from "./types";

/**
 * Fetches all customer reviews
 * @returns Promise with array of Review objects
 */
export async function getReviews(): Promise<Review[]> {
  const response = await apiRequest<ApiResponse<Review[]>>("/reviews");
  return response.data;
}
