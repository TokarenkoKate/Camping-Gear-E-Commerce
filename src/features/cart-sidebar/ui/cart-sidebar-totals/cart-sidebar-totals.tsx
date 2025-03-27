import { UiBox, UiHStack, UiText } from "@/shared/ui";
import cls from "../cart-sidebar/cart-sidebar.m.scss";

interface CartSidebarTotalsProps {
  subtotal: number | undefined;
}

export const CartSidebarTotals = ({ subtotal }: CartSidebarTotalsProps) => {
  return (
    <UiBox className={cls.cartSidebarTotals}>
      <UiHStack className={cls.cartSidebarTotalsRow} max justify="between">
        <UiText>Subtotal</UiText>
        <UiText>{`$${subtotal || 0}`}</UiText>
      </UiHStack>
    </UiBox>
  );
};
