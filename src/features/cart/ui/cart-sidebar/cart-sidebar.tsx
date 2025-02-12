import Close from "@/shared/assets/icons/close-20-20.svg";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { UiSidebar } from "@/shared/ui/ui-sidebar/ui-sidebar";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { CardProductsList } from "../cart-products-list/cart-products-list";
import { CartSidebarTotals } from "../cart-sidebar-totals/cart-sidebar-totals";
import { CartSidebarCheckout } from "../cart-sidebar-checkout/cart-sidebar-checkout";
import { mockProductCart } from "@/mocks/products/product";
import cls from "./cart-sidebar.m.scss";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
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
            <CardProductsList
              products={[
                mockProductCart,
                { ...mockProductCart, id: 2 },
                { ...mockProductCart, id: 3 },
              ]}
            />
            <CartSidebarTotals />
            <CartSidebarCheckout onClose={onClose} />
          </UiVStack>
        );
      }}
    />
  );
};
