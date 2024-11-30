export enum AppRoutes {
  HOME = "home",
  SHOP = "shop",
  PLANT_CARE = "plant_care",
  BLOGS = "blogs",
  NOT_FOUND = "not_found",
}

export const INDEX_ROUTE_PATH = "/";

export const AppRoutesPaths = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.SHOP]: "/shop",
  [AppRoutes.PLANT_CARE]: "/plan-care",
  [AppRoutes.BLOGS]: "/blogs",
  [AppRoutes.NOT_FOUND]: "*",
};
