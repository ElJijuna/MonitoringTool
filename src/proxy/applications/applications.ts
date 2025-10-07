import { Application, type AplicationResponse } from '../../domain/application/application';

export interface GetApplicationsProps {
  signal: AbortSignal;
}

export const getApplications = async ({ signal }: GetApplicationsProps): Promise<Application[]> => {
  try {
    const query = new URLSearchParams();
    const response = await fetch(`${import.meta.env.VITE_APP_APPLICATIONS_API_URL}?${query}`, { signal });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();

    return data.map((application: AplicationResponse) => new Application(application));
  } catch (error) {
    console.error('Error fetching web audit report:', error);
    throw error;
  }
}
