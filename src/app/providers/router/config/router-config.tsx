import { MainPage } from "@/pages/main";
import { AppRoutes, AppRoutesPaths } from "@/shared/const/router";
import { NotFoundPage } from '@/pages/not-found-page';
import { AppRouteType } from '@/shared/types/router';

export const routerConfig: Record<AppRoutes, AppRouteType> = {
  [AppRoutes.HOME]: {
    path: AppRoutesPaths[AppRoutes.HOME],
    element: <MainPage />,
  },
  [AppRoutes.SHOP]: {
    path: AppRoutesPaths[AppRoutes.SHOP],
    element: <div />,
  },
  [AppRoutes.PLANT_CARE]: {
    path: AppRoutesPaths[AppRoutes.PLANT_CARE],
    element: <div />,
  },
  [AppRoutes.BLOGS]: {
    path: AppRoutesPaths[AppRoutes.BLOGS],
    element: <div />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppRoutesPaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
