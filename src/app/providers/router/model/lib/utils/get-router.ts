import { createBrowserRouter } from "react-router-dom";
import { getRouterConfig } from "./get-router-config";
import { AppRouterType } from "../../types/router";

/**
 * App router configuration.
 * It's obligatory to create router outside of the React tree
 * with a statically defined set of routes
 */
export const getAppRouter = (): AppRouterType => {
  const routerConfig = getRouterConfig();

  return createBrowserRouter(routerConfig);
};
