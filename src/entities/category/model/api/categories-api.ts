import { Category } from "../types/category";
import { ApiGet } from "@/shared/config/api/api-methods";

export const CategoriesApi = {
  getCategories: () => ApiGet<Array<Category>>({ endpoint: "categories" }),
};
