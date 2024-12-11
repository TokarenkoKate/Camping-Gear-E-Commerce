import cls from "./navbar.m.scss";
import Logo from "@/shared/assets/icons/logo-86-20.svg";
import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { Menu } from "@/features/menu";
import { Search } from "@/features/search";
import { Login } from "@/features/login";
import { Cart } from "@/features/cart";

export const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <UiBox className={cls.navbarContent}>
        <UiIcon Svg={Logo} />
        <Menu />
        <UiHStack className={cls.navbarGroup} max>
          <Search />
          <Login />
          <Cart />
        </UiHStack>
      </UiBox>
    </nav>
  );
};
