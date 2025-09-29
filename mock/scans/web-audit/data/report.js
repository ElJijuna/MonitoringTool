import { defineMockData } from 'vite-plugin-mock-dev-server';

export default defineMockData('web-audit-report', {
  auditReportVersion: 2,
  vulnerabilities: {},
  'metadata': {
    'vulnerabilities': {
      'info': 10,
      'low': 0,
      'moderate': 0,
      'high': 3,
      'critical': 1,
      'total': 0
    },
    'dependencies': {
      'prod': 107,
      'dev': 204,
      'optional': 4,
      'peer': 0,
      'peerOptional': 0,
      'total': 313
    }
  }
});
