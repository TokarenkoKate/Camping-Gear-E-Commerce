import { lazy } from "react";

export const SignupPageAsync = lazy(() =>
  import("./signup-page").then((module) => ({ default: module.SignUpPage }))
);
