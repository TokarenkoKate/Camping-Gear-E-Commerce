import { UiButton } from "@/shared/ui";
import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";
import { CartSidebar } from "./cart-sidebar/cart-sidebar";

export const Cart = () => {
  const { isOpen, onClose, toggleOpen } = useDisclosure();

  return (
    <>
      <UiButton variant="outlined" size="small" round onClick={toggleOpen}>
        0
      </UiButton>
      <CartSidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
};
