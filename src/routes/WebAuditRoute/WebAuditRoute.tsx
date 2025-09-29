import { createRoute } from '@tanstack/react-router'
import type { RootRoute } from '@tanstack/react-router'
import WebAuditPage from '../../pages/WebAuditPage/WebAuditPage'

export const WebAuditRoutePath = '/scans/web-audit';
export const parseWebAuditRoutePath = (application: string) => `/scans/web-audit`;

const WebAuditRoute = (parentRoute: RootRoute) =>
  createRoute({
    path: WebAuditRoutePath,
    component: WebAuditPage,
    getParentRoute: () => parentRoute,
  });

export default WebAuditRoute;
