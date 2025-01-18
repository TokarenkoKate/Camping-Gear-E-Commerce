import { PropsWithChildren } from "react";
import { ShopNavigation } from "./shop-navigation";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";
import { useDisableBodyScroll } from "@/shared/lib/hooks/use-disable-scroll";

interface ShopNavigationButtonProps {
  className?: string;
}

export const ShopNavigationButton = ({
  children,
  className,
}: PropsWithChildren<ShopNavigationButtonProps>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useDisableBodyScroll(isOpen);

  return (
    <>
      <UiButton
        className={className}
        onClick={onOpen}
        size="small"
        variant="plainWithArrow"
      >
        {children}
      </UiButton>
      {isOpen && <ShopNavigation onClose={onClose} />}
    </>
  );
};
