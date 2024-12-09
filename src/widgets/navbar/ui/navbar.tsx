import cls from "./navbar.m.scss";
import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import Logo from "@/shared/assets/icons/logo-86-20.svg";
import { Menu } from "@/features/menu";
import { Search } from "@/features/search";
import { Login } from "@/features/login";
import { Cart } from "@/features/cart";

export const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <UiIcon Svg={Logo} />
      <Menu />
      <div className={cls.navbarGroup}>
        <Search />
        <Login />
        <Cart />
      </div>
    </nav>
  );
};
