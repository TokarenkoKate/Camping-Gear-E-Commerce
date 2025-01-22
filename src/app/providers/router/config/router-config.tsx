import { AppRouteType } from "@/shared/types/router";
import { AppRoutes, appRoutesPaths } from "@/shared/const/router";
import { MainPage } from "@/pages/main";
import { ShopPage } from "@/pages/shop";
import { ProductsPage } from "@/pages/products";
import { NotFoundPage } from "@/pages/not-found-page";

export const routerConfig: Record<AppRoutes, AppRouteType> = {
  [AppRoutes.HOME]: {
    path: appRoutesPaths[AppRoutes.HOME],
    element: <MainPage />,
  },
  [AppRoutes.SHOP]: {
    path: appRoutesPaths[AppRoutes.SHOP],
    element: <ShopPage />,
  },
  [AppRoutes.PRODUCTS]: {
    path: appRoutesPaths[AppRoutes.PRODUCTS],
    element: <ProductsPage />,
  },
  [AppRoutes.EVENTS]: {
    path: appRoutesPaths[AppRoutes.EVENTS],
    element: <div />,
  },
  [AppRoutes.COLLECTIONS]: {
    path: appRoutesPaths[AppRoutes.COLLECTIONS],
    element: <div />,
  },
  [AppRoutes.JOURNAL]: {
    path: appRoutesPaths[AppRoutes.JOURNAL],
    element: <div />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: appRoutesPaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
