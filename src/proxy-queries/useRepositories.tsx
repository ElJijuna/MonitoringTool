import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { GitHubRepositories } from '../github/domain/repository';
import { getRepositories } from '../github/proxy/repository/repositories';

export interface UseRepositoriesProps {
  user: string;
  filter?: string;
}

export const useRepositories = ({ user, filter }: UseRepositoriesProps): UseQueryResult<GitHubRepositories> => {
  return useQuery({
    queryKey: ['gh', 'repos', user],
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    queryFn: async ({ signal }) => await getRepositories({ signal, user }),
    select: (data) => {
      if (!filter) {
        return data;
      }

      const normalizedFilter = filter.toLocaleLowerCase('en');

      return data.filter(({ name }) =>
        name.toLocaleLowerCase('en').includes(normalizedFilter)
      );
    }
  });
}
