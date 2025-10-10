import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getBranches } from '../proxy/branch/branches';
import type { GitHubBranches } from '../domain/branch';

export interface UseBranches {
  user: string;
  repository: string;
}

export const useBranches = ({ user, repository }: UseBranches): UseQueryResult<GitHubBranches> => {
  return useQuery({
    enabled: !!user && !!repository,
    queryKey: ['gh', 'branches', user, repository],
    queryFn: async ({ signal }) => await getBranches({ signal, user, repository }),
  });
}
