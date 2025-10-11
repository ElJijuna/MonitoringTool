import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getPathCommits } from '../proxy/commits/path-commits';
import type { GitHubCommits } from '../domain/commit';

export interface UsePathCommits {
  user: string;
  repository: string;
  path: string;
}

export const usePathCommits = ({ user, repository, path }: UsePathCommits): UseQueryResult<GitHubCommits> => {
  return useQuery({
    enabled: !!user && !!repository && !!path,
    queryKey: ['gh', 'commits', user, repository, path],
    queryFn: async ({ signal }) => await getPathCommits({ signal, user, repository, path }),
  });
}
