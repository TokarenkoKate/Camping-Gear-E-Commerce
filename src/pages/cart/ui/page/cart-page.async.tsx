import { lazy } from "react";

export const CartPageAsync = lazy(() =>
  import("./cart-page").then((module) => ({ default: module.CartPage }))
);
