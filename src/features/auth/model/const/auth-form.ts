export enum AuthFormType {
  login = "login",
  signup = "signup",
}

export enum AuthFormInputName {
  email = "email",
  password = "password",
}

export const authFormPlaceholder = {
  [AuthFormInputName.email]: "Email",
  [AuthFormInputName.password]: "Password",
};

export const authFormName = {
  [AuthFormType.login]: "login-form",
  [AuthFormType.signup]: "signup-form",
};
