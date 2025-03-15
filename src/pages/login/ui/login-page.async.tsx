import { lazy } from "react";

export const LoginPageAsync = lazy(() =>
  import("./login-page").then((module) => ({ default: module.LoginPage }))
);
