import { App } from "../../../../ui/app";
import { routerConfig } from "../../config/router-config";
import { INDEX_ROUTE_PATH } from "@/shared/const/router";
import { AppRouteType } from "@/shared/types/router";

export const getRouterConfig = (): AppRouteType[] => {
  const pages = Object.values(routerConfig);

  return [
    {
      element: <App />,
      path: INDEX_ROUTE_PATH,
      children: pages,
    },
  ];
};
