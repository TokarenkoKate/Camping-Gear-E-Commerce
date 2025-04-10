import { MenuItem, menuItems } from "../model/const/menu";
import { MenuItemComponent } from "./menu-item";
import { getTypedObjectKeys } from "@/shared/lib/helpers/get-typed-object";
import cls from "./menu.m.scss";
import { UiHStack } from "@/shared/ui";

export const MenuDesktopList = () => {
  const menuItemKeys = getTypedObjectKeys<MenuItem>(menuItems);

  return (
    <UiHStack className={cls.menuList} as="ul" role="list" justify="center">
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
    </UiHStack>
  );
};
