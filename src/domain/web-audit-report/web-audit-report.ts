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

interface VulnerabilityVia {
  source: string | number;
  name?: string;
  dependency?: string;
  title?: string;
  url?: string;
  severity?: 'info' | 'low' | 'moderate' | 'high' | 'critical';
  range?: string;
  cwe?: string[];
  cvss?: {
    score: number;
    vectorString: string;
  };
  effects?: string[];
  fixed_in?: string[];
  references?: string[];
}

export interface Vulnerabilities {
  name: string;
  severity: 'info' | 'low' | 'moderate' | 'high' | 'critical';
  via: VulnerabilityVia[];
  effects: string[];
  range: string;
  nodes: string[];
  fix_available: boolean | 'maybe';
}

export interface WebAuditReportResponse {
  auditReportVersion: number;
  vulnerabilities: Record<string, Vulnerabilities>;
  metadata: WebAuditReportMetadata;
}

export class WebAuditReport {
  readonly version: number;
  readonly vulnerabilities = [];
  readonly metadata: WebAuditReportMetadata;

  constructor(application: WebAuditReportResponse) {
    this.version = application.auditReportVersion;
    this.vulnerabilities = application.vulnerabilities;
    this.metadata = application.metadata;
  }
}
