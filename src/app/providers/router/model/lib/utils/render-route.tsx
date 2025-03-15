import { PageWrapper } from "../../../ui/page-wrapper/page-wrapper";
import { RequireAuth } from "../../../ui/require-auth/require-auth";
import { AppRouteType } from "../../types/router";

/**
 * Helper to wrap each route with Suspense,
 * adds RequireAuth wrapper for protected routes
 */
export const renderRoute = (route: AppRouteType): AppRouteType => {
  const element = <PageWrapper path={route.path}>{route.element}</PageWrapper>;

  return {
    ...route,
    element: route.authOnly ? <RequireAuth>{element}</RequireAuth> : element,
  };
};
