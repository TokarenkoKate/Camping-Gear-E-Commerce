import { Navigate } from "react-router-dom";
import { AppRoutes, appRoutesPaths } from "@/shared/const/router";
import { AppRouteType } from "../types/router";
import { MainPage } from "@/pages/main";
import { ProductsPage } from "@/pages/products";
import { ProductPage } from "@/pages/product";
import { CartPage } from "@/pages/cart";
import { NotFoundPage } from "@/pages/not-found-page";
import { LoginPage } from "@/pages/login";
import { SignUpPage } from "@/pages/signup";
import { ProfilePage } from "@/pages/profile";
import { AboutPage } from "@/pages/about";
import { JournalPage } from "@/pages/journal";
import { ArticlePage } from "@/pages/article";

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
  [AppRoutes.ABOUT]: {
    path: appRoutesPaths[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.JOURNAL]: {
    path: appRoutesPaths[AppRoutes.JOURNAL],
    element: <JournalPage />,
  },
  [AppRoutes.ARTICLE]: {
    path: appRoutesPaths[AppRoutes.ARTICLE],
    element: <ArticlePage />,
  },
  [AppRoutes.CART]: {
    path: appRoutesPaths[AppRoutes.CART],
    element: <CartPage />,
  },
  [AppRoutes.LOGIN]: {
    path: appRoutesPaths[AppRoutes.LOGIN],
    element: <LoginPage />,
    guestOnly: true,
  },
  [AppRoutes.SIGNUP]: {
    path: appRoutesPaths[AppRoutes.SIGNUP],
    element: <SignUpPage />,
    guestOnly: true,
  },
  [AppRoutes.PROFILE]: {
    path: appRoutesPaths[AppRoutes.PROFILE],
    element: <ProfilePage />,
    authOnly: true,
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
