import { createRoute } from '@tanstack/react-router'
import type { RootRoute } from '@tanstack/react-router'
import ApplicationPage from '../../pages/ApplicationPage/ApplicationPage';

export const ApplicationsPath = '/applications/$application';

const ApplicationRoute = (parentRoute: RootRoute) =>
  createRoute({
    path: ApplicationsPath,
    component: ApplicationPage,
    onEnter(match) {
        console.info('Entering application route with params:', match.fullPath, match.params);
    },
    getParentRoute: () => parentRoute,
  });

export default ApplicationRoute;
