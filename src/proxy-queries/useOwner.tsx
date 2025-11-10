import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { Owner } from '../domain/owner/owner';
import { getOwner } from '../proxy/owner/owner';

export interface UseOwnerProps {
    username: string;
}

export const useOwner = ({ username }: UseOwnerProps): UseQueryResult<Owner> => {
    return useQuery({
        queryKey: ['owner', username],
        enabled: !!username,
        staleTime: 1000 * 60 * 5,
        refetchInterval: 1000 * 60 * 5,
        queryFn: async ({ signal }) => await getOwner({ signal, username }),
    });
}
