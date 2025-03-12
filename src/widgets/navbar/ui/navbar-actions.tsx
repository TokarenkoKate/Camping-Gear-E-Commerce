import { Cart } from "@/features/cart";
import { Login } from "@/features/login";
import { Search } from "@/features/search";
import { UiHStack } from "@/shared/ui";
import cls from "./navbar.m.scss";

export const NavbarActions = () => {
  return (
    <UiHStack className={cls.navbarActions} max justify="end">
      <Search />
      <Login className={cls.navbarActionsLogin} />
      <Cart />
    </UiHStack>
  );
};
