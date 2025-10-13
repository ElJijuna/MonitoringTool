import { useMemo } from 'react';
import { useWebAuditReport } from '../../../proxy-queries/useWebAuditReport';
import type { VulnerabilityVia } from '../../../domain/web-audit-report/web-audit-report';
import type { SeverityTypes } from '../../../utils/severity/severity-types';

export interface UseWebAuditCWEProps {
  user: string;
  repository: string;
  application: string;
  commit: string;
}

export interface UseWebAuditCWE {
  code: string;
  total: number;
  severity: SeverityTypes
}

export const useWebAuditCWE = ({
  user,
  repository,
  application,
  commit,
}: UseWebAuditCWEProps): [UseWebAuditCWE[]] => {
  const { data: report } = useWebAuditReport({
    user,
    repository,
    application,
    commit,
  });

  const data = useMemo(() => {
    const cweEntries: { code: string; severity: SeverityTypes }[] = (
      Object.values(report?.vulnerabilities ?? {}) as any[]
    )
      .flatMap((vulnerability) =>
        vulnerability?.via.flatMap((via: VulnerabilityVia) =>
          (via.cwe ?? []).map((code: string) => ({
            code,
            severity: via.severity,
          }))
        )
      )
      .filter(Boolean);

    const grouped = Object.groupBy(cweEntries, (entry) => entry.code);

    return Object.entries(grouped).map(([code, items = []]) => ({
      code,
      total: items.length,
      severity: items[0].severity,
    }));
  }, [report]);

  return [data] as const;
};
