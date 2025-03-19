import { INDEX_ROUTE_PATH } from "@/shared/const/router";
import { AppLayout } from "@/app/ui/app-layout/app-layout";
import { AppRouteType } from "../../types/router";
import { renderRoute } from "./render-route";
import { routerConfig } from "../../config/router-config";
import { appLoader } from "./app-loader";

export const getRouterConfig = (): AppRouteType[] => {
  const pages = Object.values(routerConfig).map(renderRoute);

  return [
    {
      element: <AppLayout />,
      path: INDEX_ROUTE_PATH,
      children: pages,
      /**
       * fetching data before app render
       */
      loader: appLoader(),
    },
  ];
};
