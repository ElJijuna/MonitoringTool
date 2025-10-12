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

export interface VulnerabilityVia {
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
  fixAvailable: boolean | 'maybe';
  isDirect: boolean;
}

interface WebAuditReportVersions {
  node: string;
  npm: string;
  v8: string;
}

interface WebAuditReportDependencies {
  current: string;
  latest: string;
  wanted: string;
  dev: boolean;
}

export interface WebAuditReportResponse {
  name: string;
  runtime: string;
  commit: string;
  date: string;
  versions: WebAuditReportVersions;
  dependencies: Record<string, WebAuditReportDependencies>;
  report: {
    auditReportVersion: number;
    vulnerabilities: Record<string, Vulnerabilities>;
    metadata: WebAuditReportMetadata;
  }
}

export class WebAuditReport {
  readonly name: string;
  readonly runtime: string;
  readonly date: Date;
  readonly commit: string;
  readonly version: number;
  readonly vulnerabilities: Record<string, Vulnerabilities> = {};
  readonly metadata: WebAuditReportMetadata;
  readonly versions: WebAuditReportVersions;
  readonly dependencies: Record<string, WebAuditReportDependencies>;

  constructor({ report, name, runtime, date, commit, versions, dependencies }: WebAuditReportResponse) {
    this.version = report.auditReportVersion;
    this.vulnerabilities = report.vulnerabilities;
    this.metadata = report.metadata;
    this.name = name;
    this.runtime = runtime;
    this.date = new Date(date);
    this.commit = commit;
    this.versions = versions;
    this.dependencies = dependencies;
  }
}
