import { parseUrl } from '../../../utils/parse-url';
import type { GitHubCommits } from '../../domain/commit';

export interface GetPathCommitsProps {
  signal: AbortSignal;
  user: string;
  repository: string;
  path: string;
}

export const getPathCommits = async ({ signal, user, repository, path }: GetPathCommitsProps): Promise<GitHubCommits> => {
  try {
    const query = new URLSearchParams({
      path
    });
    const response = await fetch(`${parseUrl(import.meta.env.VITE_APP_APPLICATION_SCANS_WEB_AUDIT_COMMITS_API_URL, { user, repository })}?${query}`, { signal });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
  
    return data;
  } catch (error) {
    console.error('Error fetching commits:', error);
    throw error;
  }
}
