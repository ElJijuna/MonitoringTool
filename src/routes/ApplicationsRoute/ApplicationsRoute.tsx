import { createRoute } from '@tanstack/react-router'
import type { RootRoute } from '@tanstack/react-router'
import ApplicationsPage from '../../pages/ApplicationsPage/ApplicationsPage';

export const ApplicationsPath = '/applications';

const ApplicationsRoute = (parentRoute: RootRoute) =>
  createRoute({
    path: ApplicationsPath,
    component: ApplicationsPage,
    getParentRoute: () => parentRoute,
  });

export default ApplicationsRoute;
