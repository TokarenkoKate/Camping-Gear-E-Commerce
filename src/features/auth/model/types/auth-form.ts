import { AuthFormInputName } from "../const/auth-form";

/**
 * Login, signup form values
 */
export type AuthFormValues = {
  [AuthFormInputName.email]: string;
  [AuthFormInputName.password]: string;
};

/**
 * Credentials to send to server type
 */
export type Credentials = {
  email: string;
  password: string;
};
