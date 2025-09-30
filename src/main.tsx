import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';
import App from './App';
import * as TanStackQueryProvider from './integrations/react-query'
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ApplicationLayout } from './components/ApplicationLayout/ApplicationLayout';
import reportWebVitals from './reportWebVitals';
import { getContext } from './integrations/react-query-context';
import WebAuditRoute from './routes/WebAuditRoute/WebAuditRoute';
import ApplicationsRoute from './routes/ApplicationsRoute/ApplicationsRoute';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <ApplicationLayout/>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  ApplicationsRoute(rootRoute),
  WebAuditRoute(rootRoute),
]);

const TanStackQueryProviderContext = getContext();
const router = createRouter({
  routeTree,
  context: {
    ...TanStackQueryProviderContext,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

const rootElement = document.getElementById('root');

if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <TanStackQueryProvider.Provider {...TanStackQueryProviderContext}>
        <RouterProvider router={router} />
      </TanStackQueryProvider.Provider>
    </StrictMode>,
  )
}

reportWebVitals();
