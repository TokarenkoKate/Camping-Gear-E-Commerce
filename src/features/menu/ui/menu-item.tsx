import { UiLink } from "@/shared/ui";
import { MenuItem } from "../model/const/menu";
import { MenuItemType } from "../model/types/menu";
import { ShopNavigationButton } from "@/features/shop-navigation";
import cls from "./menu.m.scss";

interface MenuItemProps {
  menuItemKey: MenuItem;
  menuItem: MenuItemType[MenuItem];
}

export const MenuItemComponent = ({ menuItem, menuItemKey }: MenuItemProps) => {
  if (menuItem.path) {
    return (
      <li className={cls.menuListItem} key={menuItem.text}>
        <UiLink to={menuItem.path} className={cls.menuLink} variant="withArrow">
          {menuItem.text}
        </UiLink>
      </li>
    );
  }

  if (menuItemKey === MenuItem.shop) {
    return (
      <li className={cls.menuListItem} key={menuItem.text}>
        <ShopNavigationButton className={cls.menuLink}>
          {menuItem.text}
        </ShopNavigationButton>
      </li>
    );
  }

  return null;
};
