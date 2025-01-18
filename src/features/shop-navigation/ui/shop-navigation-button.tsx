import { PropsWithChildren, useRef } from "react";
import { ShopNavigation } from "./shop-navigation";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";

interface ShopNavigationButtonProps {
  className?: string;
}

export const ShopNavigationButton = ({
  children,
  className,
}: PropsWithChildren<ShopNavigationButtonProps>) => {
  const { isOpen, onClose, toggleOpen } = useDisclosure();
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <UiButton
        className={className}
        onClick={toggleOpen}
        size="small"
        variant="plainWithArrow"
        ref={triggerButtonRef}
      >
        {children}
      </UiButton>
      {isOpen && (
        <ShopNavigation
          isOpen={isOpen}
          triggerButtonRef={triggerButtonRef}
          onClose={onClose}
        />
      )}
    </>
  );
};
