import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../providers/query";
import { StoreProvider } from "../../providers/store";
import { AppRouter } from "../../providers/router";
import { toastCustomOptions } from "../../providers/toast";
import "../../styles/index.scss";

export const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <AppRouter />
          <ToastContainer {...toastCustomOptions} />
        </StoreProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};
