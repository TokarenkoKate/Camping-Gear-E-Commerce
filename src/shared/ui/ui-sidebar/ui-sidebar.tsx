import { ReactNode } from "react";
import classNames from "classnames";
import { ClassnamesMods } from "@/shared/types/classnames";
import { UiOverlay } from "../ui-overlay/ui-overlay";
import { UiPortal } from "../ui-portal/ui-portal";
import { UiBox } from "../ui-box/ui-box";
import { useUiSidebar } from "@/shared/lib/hooks/ui/use-sidebar";
import cls from "./ui-sidebar.m.scss";

interface UiSidebarProps {
  isOpen: boolean;
  onClose: VoidFunction;
  lazy?: boolean;
  className?: string;
  renderChildren(onClose: VoidFunction): ReactNode;
}

const ANIMATION_DELAY = 200;

export const UiSidebar = ({
  isOpen,
  onClose,
  lazy,
  className,
  renderChildren,
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

  if (lazy && !isMounting) {
    return null;
  }

  return (
    <UiPortal>
      <UiBox className={classNames(cls.uiSidebar, mods, className)}>
        <UiOverlay onClick={close} />
        <UiBox className={cls.uiSidebarContent}>{renderChildren(close)}</UiBox>
      </UiBox>
    </UiPortal>
  );
};
