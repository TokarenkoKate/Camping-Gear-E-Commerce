import cls from "./menu.m.scss";
import { menuItems } from "../model/const/menu";
import { UiLink } from "@/shared/ui/ui-link/ui-link";

export const Menu = () => {
  return (
    <ul className={cls.menu} role="list">
      {menuItems.map((menuItem) => (
        <li className={cls.menuItem} key={menuItem.path}>
          <UiLink to={menuItem.path} className={cls.menuLink} withArrow>
            {menuItem.text}
          </UiLink>
        </li>
      ))}
    </ul>
  );
};
