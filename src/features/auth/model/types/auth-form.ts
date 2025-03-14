import { AuthFormInputName } from "../const/auth-form";

export type AuthFormValues = {
  [AuthFormInputName.email]: string;
  [AuthFormInputName.password]: string;
};
