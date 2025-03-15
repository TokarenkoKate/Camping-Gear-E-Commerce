import { StateSchema } from "@/app/providers/store";
import { createSelector } from "@reduxjs/toolkit";

export const userSelector = createSelector(
  (state: StateSchema) => state.user,
  (user) => user.user
);
