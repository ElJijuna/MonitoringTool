import { parseUrl } from '../../../utils/parse-url';
import type { GitHubRepositories } from '../../domain/repository';

export interface GetRepositoriesrops {
  signal: AbortSignal;
  user: string;
}

export const getRepositories = async ({ signal, user, }: GetRepositoriesrops): Promise<GitHubRepositories> => {
  try {
    const query = new URLSearchParams();
    const response = await fetch(`${parseUrl(import.meta.env.VITE_APP_REPOSITORIES_API_URL, { user })}?${query}`, { signal });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
  
    return data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
}
