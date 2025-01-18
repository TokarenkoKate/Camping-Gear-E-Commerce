import classNames from "classnames";
import MenuIcon from "@/shared/assets/icons/menu-20-20.svg";
import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { MenuItem, menuItems } from "../model/const/menu";
import { MenuItemComponent } from "./menu-item";
import { getTypedObjectKeys } from "@/shared/lib/helpers/get-typed-object";
import cls from "./menu.m.scss";

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  const menuItemKeys = getTypedObjectKeys<MenuItem>(menuItems);

  return (
    <UiBox className={classNames(cls.menu, className)}>
      <ul className={cls.menuList} role="list">
        {menuItemKeys.map((menuItemKey) => {
          const menuItem = menuItems[menuItemKey];
          return (
            <MenuItemComponent
              menuItem={menuItem}
              menuItemKey={menuItemKey}
              key={menuItemKey}
            />
          );
        })}
      </ul>
      <UiBox className={cls.menuMobile}>
        <UiIcon Svg={MenuIcon} />
      </UiBox>
    </UiBox>
  );
};
