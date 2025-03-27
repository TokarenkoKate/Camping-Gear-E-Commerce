export enum AppRoutes {
  HOME = "home",
  PRODUCTS = "products",
  PRODUCT = "product",
  ABOUT = "about",
  COLLECTIONS = "collections",
  JOURNAL = "journal",
  CART = "cart",
  LOGIN = "login",
  SIGNUP = "signup",
  PROFILE = "profile",
  NOT_FOUND = "not-found",
  NOT_FOUND_REDIRECT = "not-found-redirect",
}

export const INDEX_ROUTE_PATH = "/";
export const NOT_FOUND_PATH = "/not_found";

export const appRoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: INDEX_ROUTE_PATH,
  [AppRoutes.PRODUCTS]: "/shop/:category",
  [AppRoutes.PRODUCT]: "/product/:id",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.COLLECTIONS]: "/collections",
  [AppRoutes.JOURNAL]: "/journal",
  [AppRoutes.CART]: "/cart",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.SIGNUP]: "/signup",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: NOT_FOUND_PATH,
  [AppRoutes.NOT_FOUND_REDIRECT]: "*",
};
