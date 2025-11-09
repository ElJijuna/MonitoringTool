import type { Owner } from '../../domain/owner/owner';

export interface GetOwnerProps {
  signal: AbortSignal;
  username: string;
}

export const getOwner = async ({ signal, username }: GetOwnerProps): Promise<Owner> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_APP_GITHUB_API_URL}/users/${username}`, { signal });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      ...data,
      repositories: {
        monitoringTool: 'MonitoringTool',
        database: 'MonitoringTool-DB'
      }
    };
  } catch (error) {
    console.error('Error fetching owner:', error);
    throw error;
  }
}
