import classNames from "classnames";
import { menuItems } from "../model/const/menu";
import MenuIcon from "@/shared/assets/icons/menu-20-20.svg";
import { UiLink } from "@/shared/ui/ui-link/ui-link";
import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import cls from "./menu.m.scss";

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  return (
    <UiBox className={classNames(cls.menu, className)}>
      <ul className={cls.menuList} role="list">
        {menuItems.map((menuItem) => (
          <li className={cls.menuListItem} key={menuItem.path}>
            <UiLink
              to={menuItem.path}
              className={cls.menuLink}
              variant="withArrow"
            >
              {menuItem.text}
            </UiLink>
          </li>
        ))}
      </ul>
      <UiBox className={cls.menuMobile}>
        <UiIcon Svg={MenuIcon} />
      </UiBox>
    </UiBox>
  );
};
