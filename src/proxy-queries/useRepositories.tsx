import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { GitHubRepositories } from '../github/domain/repository';
import { getRepositories } from '../github/proxy/repository/repositories';

export interface UseRepositoriesProps {
  user: string;
}

export const useRepositories = ({ user }: UseRepositoriesProps): UseQueryResult<GitHubRepositories> => {
  return useQuery({
    queryKey: ['gh', 'repos', user],
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    queryFn: async ({ signal }) => await getRepositories({ signal, user }),
  });
}
