import { apiRequest } from "./config";
import { ApiResponse, Job, JobDetails, JobApplicationRequest } from "./types";

/**
 * Fetches all available job positions
 * @returns Promise with array of Job objects
 */
export async function getJobs(): Promise<Job[]> {
  const response = await apiRequest<ApiResponse<Job[]>>("/jobs");
  return response.data;
}

/**
 * Fetches detailed information about a specific job
 * @param jobId - The ID of the job to fetch
 * @returns Promise with JobDetails object
 */
export async function getJobById(jobId: string): Promise<JobDetails> {
  const response = await apiRequest<ApiResponse<JobDetails>>(`/jobs/${jobId}`);
  return response.data;
}

/**
 * Submits a job application
 * @param jobId - The ID of the job to apply for
 * @param application - Application data including resume and cover letter
 * @returns Promise with API response
 */
export async function applyToJob(
  jobId: string,
  application: JobApplicationRequest
): Promise<ApiResponse<any>> {
  return await apiRequest<ApiResponse<any>>(`/jobs/${jobId}/request`, {
    method: "POST",
    body: JSON.stringify(application),
  });
}
