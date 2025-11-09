import { create } from 'zustand';
import { severityText } from '../utils/severity/severity-text';
import type { SeverityTypes } from '../utils/severity/severity-types';

interface WebAuditState {
  severity: SeverityTypes;
  isDev: boolean;
  branch: string;
  commit: string;
}

interface WebAuditActions {
  setSeverity: (severity: SeverityTypes) => void;
  setIsDev: (isDev: boolean) => void;
  setBranch: (branch: string) => void;
  setCommit: (commit: string) => void;
}


export const useWebAuditStore = create<WebAuditState & WebAuditActions>((set) => ({
  severity: severityText.critical as SeverityTypes,
  isDev: false,
  branch: 'main',
  commit: '',
  setSeverity: (severity) => set({ severity }),
  setIsDev: (isDev) => set({ isDev }),
  setBranch: (branch) => set({ branch }),
  setCommit: (commit) => set({ commit }),
}));
