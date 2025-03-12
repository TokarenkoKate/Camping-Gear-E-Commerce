import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { cartReducer } from "@/features/cart";
import { StateSchema } from "./state-schema";
import { categoriesReducer } from "@/entities/category/model/slice/categories-slice";

export function createReduxStore() {
  const rootReducer: ReducersMapObject<StateSchema> = {
    cart: cartReducer,
    categories: categoriesReducer,
  };

  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });

  return store;
}
