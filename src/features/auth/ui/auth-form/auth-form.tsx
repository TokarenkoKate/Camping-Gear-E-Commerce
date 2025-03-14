import { useForm } from "@/shared/lib/hooks/ui/use-form";
import { UiFormField, UiInput } from "@/shared/ui";
import {
  AuthFormInputName,
  authFormName,
  authFormPlaceholder,
  AuthFormType,
} from "../../model/const/auth-form";
import { AuthFormValues } from "../../model/types/auth-form";
import cls from "./auth-form.m.scss";

interface AuthFormProps {
  type: AuthFormType;
  onSubmit(values: AuthFormValues): void;
}

export const AuthForm = ({ type, onSubmit }: AuthFormProps) => {
  const Form = useForm<AuthFormValues>();

  return (
    <Form
      onSubmit={onSubmit}
      name={authFormName[type]}
      id={authFormName[type]}
      className={cls.authForm}
    >
      <UiFormField
        name={AuthFormInputName.email}
        placeholder={authFormPlaceholder.email}
        type="email"
        component={UiInput}
      />
      <UiFormField
        name={AuthFormInputName.password}
        placeholder={authFormPlaceholder.password}
        type="password"
        component={UiInput}
      />
    </Form>
  );
};
