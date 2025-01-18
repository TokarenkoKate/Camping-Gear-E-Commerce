import { MenuItem, menuItems } from "../model/const/menu";
import { MenuItemComponent } from "./menu-item";
import { getTypedObjectKeys } from "@/shared/lib/helpers/get-typed-object";
import cls from "./menu.m.scss";

export const MenuDesktopList = () => {
  const menuItemKeys = getTypedObjectKeys<MenuItem>(menuItems);

  return (
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
  );
};
