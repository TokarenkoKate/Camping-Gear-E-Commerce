import { RouterProvider } from "react-router-dom";
import { AppRouterType } from "../../model/types/router";
import { AppLoader } from "../app-loader/app-loader";

export const AppRouter = ({ router }: { router: AppRouterType }) => {
  return <RouterProvider router={router} fallbackElement={<AppLoader />} />;
};
