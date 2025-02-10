import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSchema } from "../types/cart-schema";

const initialState: CartSchema = {
  products: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      if (!productId) {
        return;
      }

      if (!state.products) {
        state.products = {};
      }

      state.products[productId] = (state.products[productId] || 0) + 1;
    },
    decrementProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      if (!state.products || !state.products[productId]) {
        return;
      }

      const isLastItem = state.products[productId] === 1;

      if (isLastItem) {
        delete state.products[productId];
      } else {
        state.products[productId] -= 1;
      }
    },
  },
});

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;
