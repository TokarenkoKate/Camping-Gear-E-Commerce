import { RouteObject } from "react-router-dom";

export type AppRouteType = RouteObject & {
  authOnly?: boolean;
  userRoles?: string[];
}