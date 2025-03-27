import { lazy } from "react";

export const AboutPageAsync = lazy(() =>
  import("./about-page").then((module) => ({ default: module.AboutPage }))
);
