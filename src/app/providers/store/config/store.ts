import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { cartReducer } from "@/features/cart";
import { StateSchema } from "./state-schema";

export function createReduxStore() {
  const rootReducer: ReducersMapObject<StateSchema> = {
    cart: cartReducer,
  };

  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });

  return store;
}
