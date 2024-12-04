import { AppRoutes, appRoutesPaths } from "@/shared/const/router";
import { MenuItem } from "../types/menu";

export const menuItems: Array<MenuItem> = [
  {
    text: "shop",
    path: appRoutesPaths[AppRoutes.SHOP],
  },
  {
    text: "events",
    path: appRoutesPaths[AppRoutes.EVENTS],
  },
  {
    text: "collections",
    path: appRoutesPaths[AppRoutes.COLLECTIONS],
  },
  {
    text: "journal",
    path: appRoutesPaths[AppRoutes.JOURNAL],
  },
];
