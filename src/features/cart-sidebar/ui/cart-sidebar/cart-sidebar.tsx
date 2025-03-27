import Close from "@/shared/assets/icons/close-20-20.svg";
import { UiButton, UiSidebar, UiHStack, UiVStack, UiText } from "@/shared/ui";
import { Cart } from "@/entities/cart";
import { CardProductsList } from "../cart-products-list/cart-products-list";
import { CartSidebarCheckout } from "../cart-sidebar-checkout/cart-sidebar-checkout";
import { CartSidebarTotals } from "../cart-sidebar-totals/cart-sidebar-totals";
import cls from "./cart-sidebar.m.scss";

interface CartSidebarProps {
  cart: Cart | undefined;
  isOpen: boolean;
  onClose: VoidFunction;
}

export const CartSidebar = ({ cart, isOpen, onClose }: CartSidebarProps) => {
  return (
    <UiSidebar
      isOpen={isOpen}
      onClose={onClose}
      renderChildren={(closeSidebar) => {
        return (
          <UiVStack className={cls.cartSidebar} align="normal">
            <UiHStack
              max
              justify="between"
              align="center"
              className={cls.cartSidebarHeader}
            >
              <UiText>Cart</UiText>
              <UiButton
                leftIconSvg={Close}
                onClick={closeSidebar}
                variant="plain"
                size="small"
                round
              />
            </UiHStack>
            <CardProductsList cartItems={cart?.items} />
            <CartSidebarTotals subtotal={cart?.subtotal} />
            <CartSidebarCheckout disabled={!cart?.items} onClose={onClose} />
          </UiVStack>
        );
      }}
    />
  );
};
