import { Navigate } from "react-router-dom";
import { AppRouteType } from "@/shared/types/router";
import { AppRoutes, appRoutesPaths } from "@/shared/const/router";
import { MainPage } from "@/pages/main";
import { ProductsPage } from "@/pages/products";
import { ProductPage } from "@/pages/product";
import { CartPage } from "@/pages/cart";
import { NotFoundPage } from "@/pages/not-found-page";
import { LoginPage } from "@/pages/login";
import { SignUpPage } from "@/pages/signup";

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
  [AppRoutes.CART]: {
    path: appRoutesPaths[AppRoutes.CART],
    element: <CartPage />,
  },
  [AppRoutes.LOGIN]: {
    path: appRoutesPaths[AppRoutes.LOGIN],
    element: <LoginPage />,
  },
  [AppRoutes.SIGNUP]: {
    path: appRoutesPaths[AppRoutes.SIGNUP],
    element: <SignUpPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: appRoutesPaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
  [AppRoutes.NOT_FOUND_REDIRECT]: {
    path: appRoutesPaths[AppRoutes.NOT_FOUND_REDIRECT],
    element: <Navigate replace to={appRoutesPaths[AppRoutes.NOT_FOUND]} />,
  },
};
