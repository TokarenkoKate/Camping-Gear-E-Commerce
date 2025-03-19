import { useMutation } from "@tanstack/react-query";
import { CartApi } from "./cart-api";
import { NewCartItemBody } from "../model/types/cart";

const ADD_CART_ITEM_MUTATION_KEY = "add_cart_item";
const REMOVE_CART_ITEM_MUTATION_KEY = "remove_cart_item";

export const useCartMutations = () => {
  const addCartItemMutation = useMutation({
    mutationKey: [ADD_CART_ITEM_MUTATION_KEY],
    mutationFn: (body: NewCartItemBody) => CartApi.addCartItem(body),
  });

  const removeCartItemMutation = useMutation({
    mutationKey: [REMOVE_CART_ITEM_MUTATION_KEY],
    mutationFn: (cartItemId: number) => CartApi.removeCartItem(cartItemId),
  });

  return { addCartItemMutation, removeCartItemMutation };
};
