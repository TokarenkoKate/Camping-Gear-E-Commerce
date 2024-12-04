import cls from "./menu.m.scss";
import { menuItems } from "../model/const/menu";
import { UiLink } from "@/shared/ui/ui-link/ui-link";

export const Menu = () => {
  return (
    <ul className={cls.menu}>
      {menuItems.map((menuItem) => (
        <UiLink
          key={menuItem.path}
          to={menuItem.path}
          className={cls.menuItem}
          withArrow
        >
          {menuItem.text}
        </UiLink>
      ))}
    </ul>
  );
};
