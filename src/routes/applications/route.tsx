import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/applications')({
  component: () => <Outlet />,
  loader: () => ({
    crumb: 'Applications',
  }),
});
