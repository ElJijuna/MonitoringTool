import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: () => {
    redirect({
      to: import.meta.env.BASE_URL + '/applications',
      throw: false,
    });
  },
});
