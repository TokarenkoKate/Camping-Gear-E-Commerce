import { RouteObject } from 'react-router-dom';
import { MainPage } from "../../../../pages/main";
import { AppRoutes } from "../../../../shared/const/router";
import { NotFoundPage } from '../../../../pages/not-found-page';

export const routerConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: "/",
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
