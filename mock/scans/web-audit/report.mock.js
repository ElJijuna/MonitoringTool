import { defineMock } from 'vite-plugin-mock-dev-server';
import monitoringReport from './data/monitoring-tool';
import reactBaseAppReport from './data/react-base-app';

export default defineMock({
  url: '/api/applications/:application/scans/web-audit',
  method: 'GET',
  body({ params: { application = '' } }) {
    if (application === 'monitoring-tool') {
      const webAuditReport = monitoringReport;
      return ({
        status: 'success',
        data: webAuditReport.value,
      });
    } else if (application === 'react-base-app') {
      const webAuditReport = reactBaseAppReport;
      return ({
        status: 'success',
        data: webAuditReport.value,
      });
    } else {
      return ({
        status: 'error',
        message: 'Application not found',
      });
    }
  },
});
