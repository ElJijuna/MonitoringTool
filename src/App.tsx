import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import ReloadPrompt from './components/ReloadPrompt/ReloadPrompt';
import type { FC } from 'react';

const router = createRouter({
  basepath: import.meta.env.BASE_URL,
  routeTree,
})

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ReloadPrompt />
    </>
  );
}

export default App
