import { useMemo } from "react";
import { useWebAuditReport } from "../../../proxy-queries/useWebAuditReport";
import type { Vulnerabilities } from "../../../domain/web-audit-report/web-audit-report";

export const useWebAuditCWE = () => {
  const { data: report } = useWebAuditReport({ application: 'react-base-app' });
  const data = useMemo(() => Object.entries(
    Object.groupBy((Object.values(report?.vulnerabilities ?? {}) as Vulnerabilities[])
      .flatMap((vulnerability) => vulnerability?.via.flatMap((via) => via.cwe)).filter(Boolean), (value: string) => value),
  ).map(([code, items]) => ({ code, total: (items as string[]).length })), [report]);

  return [data] as const
}
