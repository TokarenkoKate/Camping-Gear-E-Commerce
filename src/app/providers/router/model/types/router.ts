import { RouteObject, RouterProviderProps } from "react-router-dom";

/**
 * Custom type for Route object
 */
export type AppRouteType = RouteObject & {
  authOnly?: boolean;
  userRoles?: string[];
};

export type AppRouterType = RouterProviderProps["router"];
