import { create } from 'zustand';
import type { Owner } from './owner';

interface OwnerStore {
  owner: Owner | undefined;
  setOwner: (owner: Owner) => void;
  clear: () => void;
}

export const useOwner = create<OwnerStore>((set) => ({
  owner: {
    username: import.meta.env.VITE_APP_DEFAULT_OWNER ?? 'ElJijuna',
    repositories: {
      monitoringTool: 'MonitoringTool',
      database: 'MonitoringTool-DB'
    }
  },
  setOwner: (owner: Owner) => set({ owner }),
  clear: () => set({ owner: undefined })
}));
