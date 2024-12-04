import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import Logo from "@/shared/assets/icons/logo-86-20.svg";
import cls from "./navbar.m.scss";
import { Menu } from "@/features/menu";
import { Search } from "@/features/search";
import { Login } from "@/features/login";

export const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <UiIcon Svg={Logo} />
      <Menu />
      <Search />
      <Login />
    </nav>
  );
};
