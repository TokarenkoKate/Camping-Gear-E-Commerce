import { useForm } from "@/shared/lib/hooks/ui/use-form";
import { UiFormField, UiInput } from "@/shared/ui";
import {
  AuthFormInputName,
  authFormName,
  authFormPlaceholder,
  AuthFormType,
} from "../../model/const/auth-form";
import { AuthFormValues } from "../../model/types/auth-form";
import { AuthFormSubmitButton } from "./auth-form-submit-button";
import { validateForm } from "@/shared/lib/helpers/form/validate-form";
import { authValidationSchema } from "../../model/lib/helpers/auth-validation-schema";
import cls from "./auth-form.m.scss";

interface AuthFormProps {
  type: AuthFormType;
  buttonText: string;
  onSubmit(values: AuthFormValues): void;
}

export const AuthForm = ({ type, buttonText, onSubmit }: AuthFormProps) => {
  const Form = useForm<AuthFormValues>();
  const validate = validateForm<AuthFormValues>(authValidationSchema);

  return (
    <Form
      name={authFormName[type]}
      id={authFormName[type]}
      className={cls.authForm}
      validate={validate}
      onSubmit={onSubmit}
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
      <AuthFormSubmitButton type={type} buttonText={buttonText} />
    </Form>
  );
};
