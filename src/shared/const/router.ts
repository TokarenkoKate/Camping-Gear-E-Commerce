export enum AppRoutes {
  HOME = "home",
  PRODUCTS = "products",
  PRODUCT = "product",
  EVENTS = "events",
  COLLECTIONS = "collections",
  JOURNAL = "journal",
  NOT_FOUND = "not-found",
}

export const INDEX_ROUTE_PATH = "/";

export const appRoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.PRODUCTS]: "/shop/:category",
  [AppRoutes.PRODUCT]: "/product/:id",
  [AppRoutes.EVENTS]: "/events",
  [AppRoutes.COLLECTIONS]: "/collections",
  [AppRoutes.JOURNAL]: "/journal",
  [AppRoutes.NOT_FOUND]: "*",
};
