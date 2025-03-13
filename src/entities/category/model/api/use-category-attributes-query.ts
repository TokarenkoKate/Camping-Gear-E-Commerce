import { useQuery } from "@tanstack/react-query";
import { CategoriesApi } from "./categories-api";

const CATEGORY_ATTRIBUTES_QUERY_KEY = "categoryAttributes";

/**
 * Query request to get a list of category attributes,
 * i.e. used in product filters
 */
export const useCategoryAttributesQuery = (categoryId: number | undefined) => {
  return useQuery({
    queryKey: [CATEGORY_ATTRIBUTES_QUERY_KEY, categoryId],
    refetchOnWindowFocus: false,
    enabled: Boolean(categoryId),
    queryFn: () => CategoriesApi.getCategoryAttributes(categoryId),
  });
};
