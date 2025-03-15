import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLoader } from "../app-loader/app-loader";
import { getRouterConfig } from "../../model/lib/utils/get-router-config";

export const AppRouter = () => {
  const routerConfig = getRouterConfig();
  const router = createBrowserRouter(routerConfig);

  return <RouterProvider router={router} fallbackElement={<AppLoader />} />;
};
