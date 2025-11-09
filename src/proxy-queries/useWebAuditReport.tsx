import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { WebAuditReport } from "../domain/web-audit-report/web-audit-report";
import { getWebAuditReport } from "../proxy/web-audit/web-audit-report";

export interface UseWebAuditReportProps {
  user: string;
  repository: string;
  application: string;
  commit: string;
}

export const useWebAuditReport = ({ user, repository, commit, application }: Partial<UseWebAuditReportProps>): UseQueryResult<WebAuditReport> => {
  return useQuery({
    enabled: !!user && !!repository && !!commit && !!application,
    queryKey: ['web-audit-report', user, repository, commit, application],
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    queryFn: async ({ signal }) => await getWebAuditReport({ user, repository, commit, application, signal }),
  });
}
