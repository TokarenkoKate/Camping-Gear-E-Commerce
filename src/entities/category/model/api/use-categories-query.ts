import { useQuery } from "@tanstack/react-query";
import { CategoriesApi } from "./categories-api";
import { useAppDispatch } from "@/shared/lib/hooks/use-app-dispatch";
import { categoriesActions } from "../slice/categories-slice";

const CATEGORIES_QUERY_KEY = "categories";

export const useCategoriesQuery = () => {
  const dispatch = useAppDispatch();

  const { data: categories, isSuccess } = useQuery({
    queryKey: [CATEGORIES_QUERY_KEY],
    refetchOnWindowFocus: false,
    queryFn: () => CategoriesApi.getCategories(),
  });

  if (isSuccess && Array.isArray(categories) && categories.length) {
    dispatch(categoriesActions.setCategories(categories));
  }
};
