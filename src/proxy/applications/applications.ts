import { Application, type AplicationResponse } from '../../domain/application/application';

export interface GetApplicationsProps {
  signal: AbortSignal;
}

export const getApplications = async ({ signal }: GetApplicationsProps): Promise<Application[]> => {
  try {
    const response = await fetch(`http://localhost:3000/api/applications?`, { signal });

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
