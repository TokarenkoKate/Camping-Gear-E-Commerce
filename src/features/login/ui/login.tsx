import classNames from "classnames";
import {
  UiButton,
  UiButtonSize,
  UiButtonVariant,
} from "@/shared/ui/ui-button/ui-button";
import cls from "./login.m.scss";

interface LoginProps {
  className?: string;
}

export const Login = ({ className }: LoginProps) => {
  return (
    <UiButton
      className={classNames(cls.login, className)}
      variant={UiButtonVariant.CLEAR}
      size={UiButtonSize.S}
    >
      Login
    </UiButton>
  );
};
