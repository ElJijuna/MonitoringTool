import { useOwnersStore } from '../stores/owners.store';
import { useOwner } from '../proxy-queries/useOwner';
import type { Owner } from '../domain/owner/owner';

export const useSelectedOwner = (): { owner?: Owner, isLoading: boolean } => {
  const { selectedOwner } = useOwnersStore();
  const { data: owner, isLoading } = useOwner({ username: selectedOwner ?? '' });

  return { owner, isLoading };
}
