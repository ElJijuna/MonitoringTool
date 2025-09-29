import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { WebAuditReport } from "../domain/web-audit-report/web-audit-report";
import { getWebAuditReport } from "../proxy/web-audit/web-audit-report";

export interface UseWebAuditReportProps {
  application: string;
}

export const useWebAuditReport = ({ application }: UseWebAuditReportProps): UseQueryResult<WebAuditReport> => {
  return useQuery({
    queryKey: ['web-audit-report', application],
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    queryFn: async ({ signal }) => await getWebAuditReport({ application, signal }),
  });
}
