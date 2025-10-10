import { createFileRoute } from '@tanstack/react-router';
import type { FC, ReactElement } from 'react';
import { WebAudit } from '../../../../../components/WebAudit/WebAudit';

const ApplicationWebAudit: FC = (): ReactElement => {
  return (
    <WebAudit />
  );
};

export const Route = createFileRoute('/applications/$appId/scans/web-audit/')({
  component: ApplicationWebAudit,
});

export default ApplicationWebAudit;

