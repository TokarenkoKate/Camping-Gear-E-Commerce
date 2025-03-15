import { INDEX_ROUTE_PATH } from "@/shared/const/router";
import { APP_LOADER_VISIBLE_MIN_TIME } from "../../const/app";
import { AppLayout } from "@/app/ui/app-layout/app-layout";
import { AppRouteType } from "../../types/router";
import { useGetUserProfile } from "@/features/auth";
import { fetchWithMinDelay } from "@/shared/lib/helpers/api/fetch-with-min-delay";
import { renderRoute } from "./render-route";
import { routerConfig } from "../../config/router-config";

export const getRouterConfig = (): AppRouteType[] => {
  const pages = Object.values(routerConfig).map(renderRoute);

  /**
   * On App loading fetch user profile to check user authorization,
   * and save user profile in store;
   */
  const handleGetUserProfile = useGetUserProfile();
  /**
   * Show app loader for at least min time before resolving
   * to avoid loader flickering.
   */
  const loaderFunction = fetchWithMinDelay(
    handleGetUserProfile,
    APP_LOADER_VISIBLE_MIN_TIME
  );

  return [
    {
      element: <AppLayout />,
      path: INDEX_ROUTE_PATH,
      children: pages,
      loader: () => loaderFunction,
    },
  ];
};
