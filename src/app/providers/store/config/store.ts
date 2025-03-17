import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./state-schema";
import { userReducer } from "@/entities/user";
import { categoriesReducer } from "@/entities/category";

export function createReduxStore() {
  const rootReducer: ReducersMapObject<StateSchema> = {
    categories: categoriesReducer,
    user: userReducer,
  };

  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });

  return store;
}
