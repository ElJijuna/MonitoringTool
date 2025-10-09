import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getPathCommits } from '../proxy/commits/path-commits';
import type { GitHubCommit } from '../domain/commit';

export interface UsePathCommits {
  user: string;
  repository: string;
  path: string;
}

export const usePathCommits = ({ user, repository, path }: UsePathCommits): UseQueryResult<GitHubCommit[]> => {
  return useQuery({
    enabled: !!user && !!repository && !!path,
    queryKey: ['gh', user, repository, path],
    queryFn: async ({ signal }) => await getPathCommits({ signal, user, repository, path }),
  });
}
