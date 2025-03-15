import { lazy } from "react";

export const MainPageAsync = lazy(() =>
  import("./main-page").then((module) => ({ default: module.MainPage }))
);
