import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/applications/$appId/scans/web-audit')({
  component: () => <Outlet />,
  loader: () => ({
    crumb: 'web-audit',
  }),
});
