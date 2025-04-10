import { UiButton } from "@/shared/ui";
import cls from "./auth-form.m.scss";
import { authFormName, AuthFormType } from "../../model/const/auth-form";
import { useFormState } from "react-final-form";

interface AuthFormSubmitButtonProps {
  buttonText: string;
  type: AuthFormType;
}

export const AuthFormSubmitButton = ({
  buttonText,
  type,
}: AuthFormSubmitButtonProps) => {
  const { submitting } = useFormState();

  return (
    <UiButton
      variant="background"
      type="submit"
      form={authFormName[type]}
      className={cls.authSectionButton}
      disabled={submitting}
      loading={submitting}
    >
      {buttonText}
    </UiButton>
  );
};
