'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default Provider;
