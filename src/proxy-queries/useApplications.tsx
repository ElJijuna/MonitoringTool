import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { Application } from '../domain/application/application';
import { getApplications } from '../proxy/applications/applications';

export interface UseApplicationsProps {
  application?: string;
  user: string;
}

export const useApplications = ({ application, user }: UseApplicationsProps): UseQueryResult<Application[]> => {
  return useQuery({
    queryKey: ['applications', application],
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    queryFn: async ({ signal }) => await getApplications({ signal, user }),
  });
}
