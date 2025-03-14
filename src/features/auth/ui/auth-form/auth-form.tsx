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
}

export const AuthForm = ({ type }: AuthFormProps) => {
  const Form = useForm<AuthFormValues>();

  return (
    <Form
      onSubmit={() => {}}
      name={authFormName[type]}
      className={cls.authForm}
    >
      <UiFormField
        name={AuthFormInputName.email}
        placeholder={authFormPlaceholder.email}
        component={UiInput}
      />
      <UiFormField
        name={AuthFormInputName.password}
        placeholder={authFormPlaceholder.password}
        component={UiInput}
      />
    </Form>
  );
};
