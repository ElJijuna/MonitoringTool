import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/applications/$appId/scans')({
  component: () => <Outlet />,
  loader: () => ({
    crumb: 'scans'
  }),
});
