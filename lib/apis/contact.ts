import { apiRequest } from "./config";
import { ApiResponse, ContactRequest } from "./types";

/**
 * Submits a contact form request
 * @param contactData - Contact form data
 * @returns Promise with API response
 */
export async function submitContact(
  contactData: ContactRequest
): Promise<ApiResponse<any>> {
  return await apiRequest<ApiResponse<any>>("/contact", {
    method: "POST",
    body: JSON.stringify(contactData),
  });
}
