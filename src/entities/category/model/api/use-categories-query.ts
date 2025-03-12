import { useQuery } from "@tanstack/react-query";
import { CategoriesApi } from "./categories-api";

const CATEGORIES_QUERY_KEY = "categories";

export const useCategoriesQuery = () => {
  const queryFn = () => CategoriesApi.getCategories();

  const { data: categories, isSuccess } = useQuery({
    queryKey: [CATEGORIES_QUERY_KEY],
    refetchOnWindowFocus: false,
    queryFn,
  });

  if (isSuccess) {
    console.log(categories);
  }
};
