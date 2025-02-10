import { StateSchema } from "@/app/providers/store";
import { createSelector } from "@reduxjs/toolkit";

export const cartProductsCountSelector = createSelector(
  (state: StateSchema) => state.cart,
  (cart) => {
    if (!cart.products) {
      return 0;
    }

    return Object.values(cart.products).reduce((acc, productCount) => {
      return acc + productCount;
    }, 0);
  }
);
