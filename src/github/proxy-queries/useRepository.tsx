import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getRepository } from '../proxy/repository/repository';
import type { GitHubRepository } from '../domain/repository';

export interface UseBranches {
  user: string;
  repository: string;
}

export const useRepository = ({ user, repository }: UseBranches): UseQueryResult<GitHubRepository> => {
  return useQuery({
    enabled: !!user && !!repository,
    queryKey: ['gh', user, repository],
    queryFn: async ({ signal }) => await getRepository({ signal, user, repository }),
  });
}
