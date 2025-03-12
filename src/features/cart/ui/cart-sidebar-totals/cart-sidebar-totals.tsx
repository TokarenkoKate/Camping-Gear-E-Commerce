import { UiBox, UiHStack, UiText } from "@/shared/ui";
import cls from "../cart-sidebar/cart-sidebar.m.scss";

export const CartSidebarTotals = () => {
  return (
    <UiBox className={cls.cartSidebarTotals}>
      <UiHStack className={cls.cartSidebarTotalsRow} max justify="between">
        <UiText>Point Earn</UiText>
        <UiText>2550 pt</UiText>
      </UiHStack>
      <UiHStack className={cls.cartSidebarTotalsRow} max justify="between">
        <UiText>Subtotal</UiText>
        <UiText>$282.49</UiText>
      </UiHStack>
    </UiBox>
  );
};
