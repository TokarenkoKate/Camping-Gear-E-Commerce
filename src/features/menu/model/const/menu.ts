import { AppRoutes, appRoutesPaths } from "@/shared/const/router";
import { MenuItemType } from "../types/menu";

export enum MenuItem {
  shop = "shop",
  events = "events",
  collections = "collections",
  journal = "journal",
}

export const menuItems: MenuItemType = {
  [MenuItem.shop]: {
    text: "shop",
  },
  [MenuItem.events]: {
    text: "events",
    path: appRoutesPaths[AppRoutes.EVENTS],
  },
  [MenuItem.collections]: {
    text: "collections",
    path: appRoutesPaths[AppRoutes.COLLECTIONS],
  },
  [MenuItem.journal]: {
    text: "journal",
    path: appRoutesPaths[AppRoutes.JOURNAL],
  },
};
