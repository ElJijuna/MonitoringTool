import type { SeverityTypes } from './severity-types';

export const severityColor: Record<SeverityTypes, string> = {
  critical: 'darkred',
  high: 'red',
  medium: 'orange',
  moderate: 'orange',
  low: 'blue',
  info: 'green',
};
