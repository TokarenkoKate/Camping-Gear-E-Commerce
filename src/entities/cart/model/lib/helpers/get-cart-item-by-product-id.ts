import { CartItem } from "../../types/cart";

export const getCartItemByProductId = (
  cartItems: CartItem[] | undefined,
  productId: number
) => {
  if (!cartItems || cartItems?.length < 1 || !productId) return null;

  return cartItems.find((cartItem) => cartItem.product?.id === productId);
};
