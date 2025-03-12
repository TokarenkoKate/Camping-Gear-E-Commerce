import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesSchema } from "../types/categories-schema";
import { Category } from "../types/category";

const initialState: CategoriesSchema = {
  categories: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Array<Category>>) => {
      state.categories = action.payload;
    },
  },
});

export const { actions: categoriesActions } = categoriesSlice;
export const { reducer: categoriesReducer } = categoriesSlice;
