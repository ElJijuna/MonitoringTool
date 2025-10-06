import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';
import type { FC } from 'react';

const router = createRouter({
  routeTree,
})

const App: FC =() => {
  return (
    <RouterProvider router={router} />
  );
}

export default App
