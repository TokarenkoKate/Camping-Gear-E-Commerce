import { UiBox, UiVStack } from "@/shared/ui";
import {
  CartItem,
  updateCartQueryData,
  useCartMutations,
} from "@/entities/cart";
import { CartProductsListEmpty } from "./cart-products-list-empty";
import { CartProductCard } from "../cart-product-card/cart-product-card";
import cls from "../cart-sidebar/cart-sidebar.m.scss";

interface CardProductsListProps {
  cartItems: CartItem[] | undefined;
}

export const CardProductsList = ({ cartItems }: CardProductsListProps) => {
  const isEmptyCartItems = !cartItems || cartItems?.length === 0;

  const { addCartItemMutation, removeCartItemMutation } = useCartMutations();

  const onAddProduct = (productId: number) => {
    addCartItemMutation.mutate(
      { productId, quantity: 1 },
      {
        onSuccess(updatedCart) {
          updateCartQueryData(updatedCart);
        },
      }
    );
  };

  const onRemoveProduct = (cartItemId: number) => {
    removeCartItemMutation.mutate(cartItemId, {
      onSuccess(updatedCart) {
        updateCartQueryData(updatedCart);
      },
    });
  };

  if (isEmptyCartItems) {
    return <CartProductsListEmpty />;
  }

  return (
    <UiVStack as="ul" role="list" className={cls.cartProductsList}>
      {cartItems.map((cartItem) => {
        return (
          <UiBox key={cartItem.id} as="li" max>
            <CartProductCard
              cartItem={cartItem}
              onAddProduct={onAddProduct}
              onRemoveProduct={onRemoveProduct}
            />
          </UiBox>
        );
      })}
    </UiVStack>
  );
};
