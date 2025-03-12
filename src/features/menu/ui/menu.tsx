import classNames from "classnames";
import { UiBox } from "@/shared/ui";
import { MenuDesktopList } from "./menu-list";
import { MenuMobile } from "./menu-mobile";
import cls from "./menu.m.scss";

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  return (
    <UiBox className={classNames(cls.menu, className)}>
      <MenuDesktopList />
      <MenuMobile />
    </UiBox>
  );
};
