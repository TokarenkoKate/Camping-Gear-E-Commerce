import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./app/providers/router/ui/app-router";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Error initializing React App");
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
