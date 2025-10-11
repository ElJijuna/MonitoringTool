import { create } from 'zustand';
import type { GitHubRepository } from '../github/domain/repository';

type ApplicationState = {
  application?: GitHubRepository;
  setApplication: (app: GitHubRepository) => void;
  clear: () => void;
};

export const useApplication = create<ApplicationState>((set) => ({
  application: undefined,
  setApplication: (application) => set({ application }),
  clear: () => set({ application: undefined }),
}));
