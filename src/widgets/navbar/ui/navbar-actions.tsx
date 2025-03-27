import { Login } from "@/features/login";
import { Search } from "@/features/search";
import { UiHStack } from "@/shared/ui";
import { CartButton } from "@/features/cart-sidebar";
import cls from "./navbar.m.scss";

export const NavbarActions = () => {
  return (
    <UiHStack className={cls.navbarActions} max justify="end">
      <Search />
      <Login className={cls.navbarActionsLogin} />
      <CartButton />
    </UiHStack>
  );
};
