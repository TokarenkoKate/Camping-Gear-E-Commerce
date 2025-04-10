import { lazy } from "react";

export const ProfilePageAsync = lazy(() =>
  import("./profile-page").then((module) => ({ default: module.ProfilePage }))
);
