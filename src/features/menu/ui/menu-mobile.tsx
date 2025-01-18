import { useRef } from "react";
import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";
import Menu from "@/shared/assets/icons/menu-20-20.svg";
import Close from "@/shared/assets/icons/close-20-20.svg";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { ShopNavigation } from "@/features/shop-navigation/ui/shop-navigation";
import cls from "./menu.m.scss";

export const MenuMobile = () => {
  const { isOpen, onClose, toggleOpen } = useDisclosure();
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <UiBox className={cls.menuMobile}>
      <UiButton
        variant="plain"
        size="small"
        IconSvg={!isOpen ? Menu : Close}
        ref={triggerButtonRef}
        onClick={toggleOpen}
      />
      {isOpen && (
        <ShopNavigation
          isOpen={isOpen}
          triggerButtonRef={triggerButtonRef}
          onClose={onClose}
        />
      )}
    </UiBox>
  );
};
