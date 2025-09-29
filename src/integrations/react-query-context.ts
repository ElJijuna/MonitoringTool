import { QueryClient } from '@tanstack/react-query'

export const getContext = (): { queryClient: QueryClient } => {
  const queryClient = new QueryClient()
  return {
    queryClient,
  };
};

