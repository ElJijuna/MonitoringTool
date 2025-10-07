import { useMemo } from "react";
import { useWebAuditReport } from "../../../proxy-queries/useWebAuditReport";
import type { VulnerabilityVia } from "../../../domain/web-audit-report/web-audit-report";

export interface UseWebAuditCWEProps {
  application: string;
}

export const useWebAuditCWE = ({ application }: UseWebAuditCWEProps) => {
  const { data: report } = useWebAuditReport({ application });
  const data = useMemo(() => Object.entries(
    Object.groupBy((Object.values(report?.vulnerabilities ?? {}) as any[])
      .flatMap((vulnerability) => vulnerability?.via.flatMap((via: VulnerabilityVia) => via.cwe)).filter(Boolean), (value: string) => value),
  ).map(([code, items]) => ({ code, total: (items as string[]).length })), [report]);

  return [data] as const
}
