import type { GitHubBranches } from '../../domain/branch';

export interface GetBranchesProps {
  signal: AbortSignal;
  user: string;
  repository: string;
}

export const getBranches = async ({ signal, user, repository }: GetBranchesProps): Promise<GitHubBranches> => {
  try {
    const query = new URLSearchParams({});
    const response = await fetch(`${import.meta.env.VITE_APP_GITHUB_API_URL}/repos/${user}/${repository}/branches?${query}`, { signal });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
  
    return data;
  } catch (error) {
    console.error('Error fetching branches:', error);
    throw error;
  }
}
