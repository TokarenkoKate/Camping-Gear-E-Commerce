import { ApiEndpoint } from "@/shared/config/api/api-endpoints";
import { Category, CategoryAttribute } from "../types/category";
import { ApiGet } from "@/shared/config/api/api-methods";

export const CategoriesApi = {
  getCategories: () =>
    ApiGet<Array<Category>>({ endpoint: ApiEndpoint.categories }),

  getCategoryAttributes: (categoryId: number | undefined) =>
    ApiGet<Array<CategoryAttribute>>({
      endpoint: `${ApiEndpoint.categories}/${categoryId}/attributes`,
    }),
};
