import { useAuth } from "@/features/auth";
import { appRoutesPaths } from "@/shared/const/router";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  children: JSX.Element;
}

/**
 * RequireGuest component used to ensure authenticated users can't access those pages,
 * such as login or signup
 */
export const RequireGuest = ({ children }: RequireAuthProps) => {
  const user = useAuth();

  if (user) {
    return <Navigate to={appRoutesPaths.profile} replace />;
  }

  return children;
};
