import { AppRouteType } from "@/shared/types/router";
import { AppRoutes, appRoutesPaths } from "@/shared/const/router";
import { MainPage } from "@/pages/main";
import { ProductsPage } from "@/pages/products";
import { ProductPage } from "@/pages/product";
import { NotFoundPage } from "@/pages/not-found-page";

export const routerConfig: Record<AppRoutes, AppRouteType> = {
  [AppRoutes.HOME]: {
    path: appRoutesPaths[AppRoutes.HOME],
    element: <MainPage />,
  },
  [AppRoutes.PRODUCTS]: {
    path: appRoutesPaths[AppRoutes.PRODUCTS],
    element: <ProductsPage />,
  },
  [AppRoutes.PRODUCT]: {
    path: appRoutesPaths[AppRoutes.PRODUCT],
    element: <ProductPage />,
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
