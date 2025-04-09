import { AppRoutes, appRoutesPaths } from "@/shared/const/router";
import { MenuItemType } from "../types/menu";

export enum MenuItem {
  shop = "shop",
  about = "about",
  journal = "journal",
}

export const menuItems: MenuItemType = {
  [MenuItem.shop]: {
    text: "shop",
  },
  [MenuItem.about]: {
    text: "about",
    path: appRoutesPaths[AppRoutes.ABOUT],
  },
  [MenuItem.journal]: {
    text: "journal",
    path: appRoutesPaths[AppRoutes.JOURNAL],
  },
};
