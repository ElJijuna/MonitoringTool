import type { GitHubCommit } from '../../domain/commit';

export interface GetPathCommitsProps {
  signal: AbortSignal;
  user: string;
  repository: string;
  path: string;
}

export const getPathCommits = async ({ signal, user, repository, path }: GetPathCommitsProps): Promise<GitHubCommit[]> => {
  try {
    const query = new URLSearchParams({
      path
    });
    const response = await fetch(`${import.meta.env.VITE_APP_GITHUB_API_URL}/repos/${user}/${repository}/commits?${query}`, { signal });

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
