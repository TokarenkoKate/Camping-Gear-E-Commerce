import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { useSelector } from "react-redux";
import { cartProductsCountSelector } from "../model/selectors/cart-selector";
import { CartSidebar } from "./cart-sidebar/cart-sidebar";
import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";

export const Cart = () => {
  const { isOpen, onClose, toggleOpen } = useDisclosure();
  const cartProductsCount = useSelector(cartProductsCountSelector);

  return (
    <>
      <UiButton variant="outlined" size="small" round onClick={toggleOpen}>
        {cartProductsCount}
      </UiButton>
      <CartSidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
};
