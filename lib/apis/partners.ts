import { apiRequest } from "./config";
import { ApiResponse, Partner } from "./types";

/**
 * Fetches all partners
 * @returns Promise with array of Partner objects
 */
export async function getPartners(): Promise<Partner[]> {
  const response = await apiRequest<ApiResponse<Partner[]>>("/partners");
  return response.data;
}
