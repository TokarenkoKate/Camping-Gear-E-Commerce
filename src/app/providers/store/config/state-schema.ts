import { createReduxStore } from "./store";
import { CategoriesSchema } from "@/entities/category";
import { UserSchema } from "@/entities/user";

export interface StateSchema {
  categories: CategoriesSchema;
  user: UserSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
