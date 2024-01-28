"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const ReactQueryContainer = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryContainer;
