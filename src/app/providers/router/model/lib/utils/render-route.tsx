import { PageWrapper } from "../../../ui/page-wrapper/page-wrapper";
import { RequireAuth } from "../../../ui/require-auth/require-auth";
import { RequireGuest } from "../../../ui/require-guest/require-guest";
import { AppRouteType } from "../../types/router";

/**
 * Helper to wrap each route with Suspense,
 * adds RequireAuth wrapper for auth users only,
 * adds RequireGuest wrapper for guest users only
 */
export const renderRoute = (route: AppRouteType): AppRouteType => {
  const element = <PageWrapper path={route.path}>{route.element}</PageWrapper>;

  let elementWithWrapper: JSX.Element = element;
  if (route.authOnly) {
    elementWithWrapper = <RequireAuth>{element}</RequireAuth>;
  }

  if (route.guestOnly) {
    elementWithWrapper = <RequireGuest>{element}</RequireGuest>;
  }

  return {
    ...route,
    element: elementWithWrapper,
  };
};
