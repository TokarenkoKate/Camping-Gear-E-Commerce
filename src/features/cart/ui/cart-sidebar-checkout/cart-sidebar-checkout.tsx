import { useNavigate } from "react-router-dom";
import { UiVStack, UiButton, UiText } from "@/shared/ui";
import { AppRoutes } from "@/shared/const/router";
import cls from "../cart-sidebar/cart-sidebar.m.scss";

interface CartSidebarCheckoutProps {
  onClose: VoidFunction;
}

export const CartSidebarCheckout = ({ onClose }: CartSidebarCheckoutProps) => {
  const navigate = useNavigate();

  const onCheckoutClick = () => {
    navigate(AppRoutes.CART, { viewTransition: true });
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
