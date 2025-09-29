interface WebAuditReportMetadata {
  vulnerabilities: {
    info: number;
    low: number;
    moderate: number;
    high: number;
    critical: number;
    total: number;
  };
  dependencies: {
    prod: number;
    dev: number;
    optional: number;
    peer: number;
    peerOptional: number;
    total: number;
  };
}

export interface WebAuditReportResponse {
  auditReportVersion: number;
  vulnerabilities: unknown;
  metadata: WebAuditReportMetadata;
}

export class WebAuditReport {
  readonly version: number;
  readonly vulnerabilities = [];
  readonly metadata: WebAuditReportMetadata;

  constructor(application: WebAuditReportResponse) {
    this.version = application.auditReportVersion;
    this.vulnerabilities = application.vulnerabilities as never[];
    this.metadata = application.metadata;
  }
}
