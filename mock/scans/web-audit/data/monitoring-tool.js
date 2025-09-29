import { defineMockData } from 'vite-plugin-mock-dev-server';

export default defineMockData('web-audit--monitoring-tool', {
  auditReportVersion: 2,
  vulnerabilities: {},
  'metadata': {
    'vulnerabilities': {
      'info': 0,
      'low': 0,
      'moderate': 0,
      'high': 0,
      'critical': 0,
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
