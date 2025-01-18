export enum AppRoutes {
  HOME = "home",
  SHOP = "shop",
  CATEGORY = "category",
  EVENTS = "events",
  COLLECTIONS = "collections",
  JOURNAL = "journal",
  NOT_FOUND = "not-found",
}

export const INDEX_ROUTE_PATH = "/";

export const appRoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.SHOP]: "/shop",
  [AppRoutes.CATEGORY]: "/shop/:category",
  [AppRoutes.EVENTS]: "/events",
  [AppRoutes.COLLECTIONS]: "/collections",
  [AppRoutes.JOURNAL]: "/journal",
  [AppRoutes.NOT_FOUND]: "*",
};
