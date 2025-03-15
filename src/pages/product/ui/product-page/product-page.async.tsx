import { lazy } from "react";

export const ProductPageAsync = lazy(() =>
  import("./product-page").then((module) => ({ default: module.ProductPage }))
);
