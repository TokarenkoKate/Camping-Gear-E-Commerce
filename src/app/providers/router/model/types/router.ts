import { RouteObject } from "react-router-dom";

/**
 * Custom type for Route object
 */
export type AppRouteType = RouteObject & {
  authOnly?: boolean;
  userRoles?: string[];
};
