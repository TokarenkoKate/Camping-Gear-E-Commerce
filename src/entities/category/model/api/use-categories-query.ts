import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/app/providers/query";
import { CategoriesApi } from "./categories-api";
import { useAppDispatch } from "@/shared/lib/hooks/use-app-dispatch";
import { categoriesActions } from "../slice/categories-slice";

const CATEGORIES_QUERY_KEY = "categories";

const categoriesQuery = {
  queryKey: [CATEGORIES_QUERY_KEY],
  refetchOnWindowFocus: false,
  enabled: false,
  queryFn: () => {
    return CategoriesApi.getCategories();
  },
};

/**
 * Query request to get product categories
 */
export const useCategoriesQuery = () => {
  const dispatch = useAppDispatch();

  const categoriesQueryResult = useQuery(categoriesQuery);
  const categories = categoriesQueryResult.data;

  if (
    categoriesQueryResult.isSuccess &&
    Array.isArray(categories) &&
    categories.length
  ) {
    dispatch(categoriesActions.setCategories(categories));
  }
};

/**
 * Helper to fetch categories in app main loader
 */
export const handleFetchCategories = async () => {
  try {
    await queryClient.fetchQuery(categoriesQuery);
  } catch (err: unknown) {
    console.error(err);
  }
};
