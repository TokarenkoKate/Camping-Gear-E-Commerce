import { StrictMode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "../../providers/store";
import { AppRouter, AppRouterType } from "../../providers/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { toastCustomOptions } from "../../providers/toast";
import { queryClient } from "@/app/providers/query";
import "../../styles/index.scss";

export const App = ({ router }: { router: AppRouterType }) => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <AppRouter router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer {...toastCustomOptions} />
        </StoreProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};
