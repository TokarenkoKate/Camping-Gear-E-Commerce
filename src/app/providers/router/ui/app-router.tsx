import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerConfig } from "../config/router-config";

export const AppRouter = () => {
  const router = createBrowserRouter(Object.values(routerConfig));
  
  return <RouterProvider router={router} />
}