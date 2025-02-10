import { PropsWithChildren } from "react";
import classNames from "classnames";
import { ClassnamesMods } from "@/shared/types/classnames";
import { UiOverlay } from "../ui-overlay/ui-overlay";
import { UiPortal } from "../ui-portal/ui-portal";
import { UiBox } from "../ui-box/ui-box";
import { useUiSidebar } from "@/shared/lib/hooks/ui/use-sidebar";
import cls from "./ui-sidebar.m.scss";

interface UiSidebarProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: VoidFunction;
  lazy?: boolean;
  className?: string;
}

const ANIMATION_DELAY = 200;

export const UiSidebar = ({
  isOpen,
  onClose,
  lazy,
  className,
  children,
}: UiSidebarProps) => {
  const { close, isClosing, isMounting } = useUiSidebar({
    isOpen,
    onClose,
    animationDelay: ANIMATION_DELAY,
  });

  const mods: ClassnamesMods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };
  console.log({ isOpen });

  if (lazy && !isMounting) {
    return null;
  }

  return (
    <UiPortal>
      <UiBox className={classNames(cls.uiSidebar, mods, className)}>
        <UiOverlay onClick={close} />
        <UiBox className={cls.uiSidebarContent}>{children}</UiBox>
      </UiBox>
    </UiPortal>
  );
};
