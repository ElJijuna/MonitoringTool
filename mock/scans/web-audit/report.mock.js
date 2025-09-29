import { defineMock } from 'vite-plugin-mock-dev-server';
import webAuditReport from './data/report';

export default defineMock({
  url: '/api/scans/web-audit',
  validator: (req) => {
    if (!req.query.application) {
      return false;
    }

    return true;
  },
  method: 'GET',
  body: {
    status: 'success',
    data: webAuditReport.value,
  },
});
