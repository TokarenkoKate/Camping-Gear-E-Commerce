import { createReduxStore } from "./store";
import { CartSchema } from "@/features/cart";
import { CategoriesSchema } from "@/entities/category";
import { UserSchema } from "@/entities/user";

export interface StateSchema {
  cart: CartSchema;
  categories: CategoriesSchema;
  user: UserSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
