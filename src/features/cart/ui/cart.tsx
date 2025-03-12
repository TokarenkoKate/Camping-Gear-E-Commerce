import { useSelector } from "react-redux";
import { UiButton } from "@/shared/ui";
import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";
import { cartProductsCountSelector } from "../model/selectors/cart-selector";
import { CartSidebar } from "./cart-sidebar/cart-sidebar";

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
