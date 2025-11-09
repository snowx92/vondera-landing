import { apiRequest } from "./config";
import { ApiResponse, Plan } from "./types";

/**
 * Fetches all available pricing plans
 * @returns Promise with array of Plan objects
 */
export async function getPlans(): Promise<Plan[]> {
  const response = await apiRequest<ApiResponse<Plan[]>>("/plans");
  return response.data;
}
