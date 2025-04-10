import classNames from "classnames";
import { UiButton } from "@/shared/ui";
import cls from "./login.m.scss";
import { appRoutesPaths } from "@/shared/const/router";

interface LoginProps {
  className?: string;
}

export const Login = ({ className }: LoginProps) => {
  return (
    <UiButton
      className={classNames(cls.login, className)}
      variant="clear"
      size="small"
      asLink
      to={appRoutesPaths.login}
    >
      Login
    </UiButton>
  );
};
