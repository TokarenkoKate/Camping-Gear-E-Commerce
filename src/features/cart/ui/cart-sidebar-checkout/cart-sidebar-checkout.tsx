import { useNavigate } from "react-router-dom";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { AppRoutes } from "@/shared/const/router";
import cls from "../cart-sidebar/cart-sidebar.m.scss";

interface CartSidebarCheckoutProps {
  onClose: VoidFunction;
}

export const CartSidebarCheckout = ({ onClose }: CartSidebarCheckoutProps) => {
  const navigate = useNavigate();

  const onCheckoutClick = () => {
    navigate(AppRoutes.CART);
    onClose();
  };

  return (
    <UiVStack className={cls.cartSidebarCheckout} max>
      <UiText>Shipping costs are calculated during checkout</UiText>
      <UiButton variant="background" max onClick={onCheckoutClick}>
        Checkout
      </UiButton>
    </UiVStack>
  );
};
