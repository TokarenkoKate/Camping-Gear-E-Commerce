import { useAuth } from "@/features/auth";
import { appRoutesPaths } from "@/shared/const/router";
import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { user } = useAuth();

  const location = useLocation();

  if (!user) {
    /**
     * Redirect user to the /login page, but save the current location they were
     * trying to go to when they were redirected. This allows us to send them
     * along to that page after they login, which is a nicer user experience
     * than dropping them off on the home page.
     */
    return (
      <Navigate to={appRoutesPaths.login} state={{ from: location }} replace />
    );
  }

  return children;
};
