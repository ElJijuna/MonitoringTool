import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OwnersStore {
  owners: string[];
  selectedOwner?: string;
  setOwners: (owners: string[]) => void;
  setSelectedOwner: (owner: string) => void;
  clear: () => void;
}

const defaultOwner = typeof import.meta?.env?.VITE_APP_DEFAULT_OWNER === 'string'
  ? import.meta.env.VITE_APP_DEFAULT_OWNER
  : 'ElJijuna';

export const useOwnersStore = create<OwnersStore>()(
  persist(
    (set) => ({
      owners: [
        'ElJijuna',
        'ismae147',
        'hashtagthis',
        'renatomendozac'
      ],
      selectedOwner: defaultOwner,
      setOwners: (owners: string[]) => set({ owners }),
      setSelectedOwner: (owner: string) => set({ selectedOwner: owner }),
      clear: () => set({ owners: [], selectedOwner: undefined })
    }),
    {
      name: 'owners-storage'
    }
  )
);
