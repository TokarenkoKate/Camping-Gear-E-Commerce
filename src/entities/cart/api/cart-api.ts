import { ApiEndpoint } from "@/shared/config/api/api-endpoints";
import { ApiDelete, ApiGet, ApiPost } from "@/shared/config/api/api-methods";
import { Cart, NewCartItemBody } from "../model/types/cart";

export const CartApi = {
  getCart: () => ApiGet<Cart>({ endpoint: ApiEndpoint.cart }),

  addCartItem: (body: NewCartItemBody) => ApiPost<Cart>(ApiEndpoint.cart, body),

  removeCartItem: (cartItemId: number) =>
    ApiDelete<Cart>(`${ApiEndpoint.cart}/${cartItemId}`),
};
