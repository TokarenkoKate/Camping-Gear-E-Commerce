import classNames from "classnames";
import { UiButton } from "@/shared/ui";
import cls from "./login.m.scss";

interface LoginProps {
  className?: string;
}

export const Login = ({ className }: LoginProps) => {
  return (
    <UiButton
      className={classNames(cls.login, className)}
      variant="clear"
      size="small"
    >
      Login
    </UiButton>
  );
};
