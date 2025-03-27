import { UiButton } from "@/shared/ui";
import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";
import { CartSidebar } from "../cart-sidebar/cart-sidebar";
import { getCartQueryData } from "@/entities/cart";

export const CartButton = () => {
  const { isOpen, onClose, toggleOpen } = useDisclosure();

  const cart = getCartQueryData();

  return (
    <>
      <UiButton variant="outlined" size="small" round onClick={toggleOpen}>
        {cart?.size || 0}
      </UiButton>
      <CartSidebar cart={cart} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
