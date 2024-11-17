import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getRouterConfig } from "../lib/utils/get-router-config";

export const AppRouter = () => {
  const routerConfig = getRouterConfig();
  const router = createBrowserRouter(routerConfig);

  return <RouterProvider router={router} />;
};
