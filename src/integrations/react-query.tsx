import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

export function Provider({
  children,
  queryClient,
}: {
  children: ReactNode
  queryClient: QueryClient
}): ReactNode {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
};

