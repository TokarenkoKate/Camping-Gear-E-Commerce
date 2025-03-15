import { lazy } from "react";

export const ProductsPageAsync = lazy(() =>
  import("./products-page").then((module) => ({ default: module.ProductsPage }))
);
