import { WebAuditReport } from '../../domain/web-audit-report/web-audit-report';

export interface GetWebAuditReportProps {
  application: string;
  signal: AbortSignal;
}

export const getWebAuditReport = async ({ application, signal }: GetWebAuditReportProps): Promise<WebAuditReport> => {
  try {
    const response = await fetch(`http://localhost:3000/api/applications/${application}/scans/web-audit?`, { signal });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();

    return new WebAuditReport(data);
  } catch (error) {
    console.error('Error fetching web audit report:', error);
    throw error;  
  }
}
