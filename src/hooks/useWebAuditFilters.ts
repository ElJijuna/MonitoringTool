import { useQueryStates, parseAsString, parseAsBoolean } from 'nuqs';
import { useWebAuditStore } from '../stores/web-audit.store';
import { useEffect } from 'react';
import type { SeverityTypes } from '../utils/severity/severity-types';

export const useWebAuditFilters = () => {
  const { severity, isDev, setBranch, setCommit, setSeverity, setIsDev } = useWebAuditStore();
  const [urlFilters, setUrlFilters] = useQueryStates({
    branch: parseAsString.withDefault('main'),
    commit: parseAsString.withDefault(''),
    severity: parseAsString.withDefault(severity),
    isDev: parseAsBoolean.withDefault(false),
  }, { history: 'push' });

  // Sync URL with store
  useEffect(() => {
    setBranch(urlFilters.branch);
    setCommit(urlFilters.commit);
    setSeverity(urlFilters.severity as SeverityTypes);
    setIsDev(urlFilters.isDev);
  }, [urlFilters, setBranch, setCommit, setSeverity, setIsDev]);

  const updateFilters = (newFilters: Partial<typeof urlFilters>) => {
    setUrlFilters(newFilters);
  };

  return {
    filters: {
      ...urlFilters,
      severity: urlFilters.severity,
      isDev,
    },
    updateFilters,
  };
};
