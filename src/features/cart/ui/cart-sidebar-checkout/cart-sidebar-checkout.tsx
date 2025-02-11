import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import cls from "../cart-sidebar/cart-sidebar.m.scss";

export const CartSidebarCheckout = () => {
  return (
    <UiVStack className={cls.cartSidebarCheckout} max>
      <UiText>Shipping costs are calculated during checkout</UiText>
      <UiButton variant="background" max>
        Checkout
      </UiButton>
    </UiVStack>
  );
};
