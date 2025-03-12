import { StateSchema } from "@/app/providers/store";
import { createSelector } from "@reduxjs/toolkit";

export const categoriesSelector = createSelector(
  (state: StateSchema) => state.categories,
  (categories) => categories.categories
);
