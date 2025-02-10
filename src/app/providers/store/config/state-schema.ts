import { CartSchema } from "@/features/cart";
import { createReduxStore } from "./store";

export interface StateSchema {
  cart: CartSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
