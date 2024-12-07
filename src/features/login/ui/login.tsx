import cls from "./login.m.scss";
import { UiButton, UiButtonVariant } from "@/shared/ui/ui-button/ui-button";

export const Login = () => {
  return (
    <UiButton className={cls.login} variant={UiButtonVariant.CLEAR}>
      Login
    </UiButton>
  );
};
