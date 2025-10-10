import { parseUrl } from '../../../utils/parse-url';
import type { GitHubRepository } from '../../domain/repository';

export interface GetRepositoryrops {
  signal: AbortSignal;
  user: string;
  repository: string;
}

export const getRepository = async ({ signal, user, repository }: GetRepositoryrops): Promise<GitHubRepository> => {
  try {
    const query = new URLSearchParams();
    const response = await fetch(`${parseUrl(import.meta.env.VITE_APP_REPOSITORY_API_URL, { user, repository })}?${query}`, { signal });

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
