import { createFileRoute, Link, Outlet, useParams } from '@tanstack/react-router'
import { Content } from 'antd/es/layout/layout';
import type { FC, ReactElement } from 'react';

export const ApplicationScans: FC = (): ReactElement => {
  const { appId } = useParams({
    strict: true,
    from: undefined
  });
  
  return (
    <Content>
      <h1>Scans</h1>
      <Link to={`/applications/${appId}/scans/web-audit`}>WebAudit</Link>
      <Outlet />
    </Content>
  );
}

export const Route = createFileRoute('/applications/$appId/scans/')({
  component: () => <ApplicationScans />,
});
