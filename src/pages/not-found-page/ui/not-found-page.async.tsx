import { lazy } from "react";

export const NotFoundPageAsync = lazy(() =>
  import("./not-found-page").then((module) => ({
    default: module.NotFoundPage,
  }))
);
