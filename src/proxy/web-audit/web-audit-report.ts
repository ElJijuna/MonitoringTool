import { WebAuditReport } from '../../domain/web-audit-report/web-audit-report';
import { parseUrl } from '../../utils/parse-url';

export interface GetWebAuditReportProps {
  user: string;
  repository: string;
  application: string;
  commit: string;
  signal: AbortSignal;
}

export const getWebAuditReport = async ({ user, repository, commit, application, signal }: GetWebAuditReportProps): Promise<WebAuditReport> => {
  try {
    const query = new URLSearchParams();
    const response = await fetch(`${parseUrl(import.meta.env.VITE_APP_APPLICATION_SCANS_WEB_AUDIT_API_URL, { user, repository, commit, appId: application })}?${query}`, { signal });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { report: data } = await response.json();

    return new WebAuditReport(data);
  } catch (error) {
    console.error('Error fetching web audit report:', error);
    throw error;
  }
}
