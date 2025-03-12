import { Menu } from "@/features/menu";
import { Logo, UiBox } from "@/shared/ui";
import { NavbarActions } from "./navbar-actions";
import cls from "./navbar.m.scss";

export const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <UiBox className={cls.navbarContent}>
        <Logo className={cls.navbarLogo} />
        <Menu className={cls.navbarMenu} />
        <NavbarActions />
      </UiBox>
    </nav>
  );
};
