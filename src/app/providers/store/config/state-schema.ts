import { createReduxStore } from "./store";
import { CartSchema } from "@/features/cart";
import { CategoriesSchema } from "@/entities/category";

export interface StateSchema {
  cart: CartSchema;
  categories: CategoriesSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
