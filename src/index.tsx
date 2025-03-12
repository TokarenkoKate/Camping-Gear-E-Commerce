import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "@/app/providers/router";
import { StoreProvider } from "@/app/providers/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./app/providers/query/config/query-client-config";
import { ToastContainer } from "react-toastify";
import { toastCustomOptions } from "./shared/config/toast/toast";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Error initializing React App");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <AppRouter />
        <ToastContainer {...toastCustomOptions} />
      </StoreProvider>
    </QueryClientProvider>
  </StrictMode>
);
