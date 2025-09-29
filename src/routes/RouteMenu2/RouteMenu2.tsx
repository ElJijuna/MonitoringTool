import { createRoute } from '@tanstack/react-router'
import type { RootRoute } from '@tanstack/react-router'
import Menu2 from '../../pages/Menu2/Menu2'

const RouteMenu2 = (parentRoute: RootRoute) =>
  createRoute({
    path: '/menu2',
    component: Menu2,
    getParentRoute: () => parentRoute,
  });

export default RouteMenu2;
