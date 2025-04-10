import { Login } from "@/features/login";
import { UiButton, UiHStack, UiIcon } from "@/shared/ui";
import { CartButton } from "@/features/cart-sidebar";
import User from "@/shared/assets/icons/user.svg";
import { useAuth } from "@/features/auth";
import cls from "./navbar.m.scss";
import { appRoutesPaths } from "@/shared/const/router";

export const NavbarActions = () => {
  const user = useAuth();

  return (
    <UiHStack className={cls.navbarActions} max justify="end">
      {user ? (
        <UiButton
          variant="outlinedInverted"
          round
          size="small"
          asLink
          to={appRoutesPaths.profile}
        >
          <UiIcon Svg={User} className={cls.navbarActionsProfile} />
        </UiButton>
      ) : (
        <Login className={cls.navbarActionsLogin} />
      )}
      <CartButton />
    </UiHStack>
  );
};
