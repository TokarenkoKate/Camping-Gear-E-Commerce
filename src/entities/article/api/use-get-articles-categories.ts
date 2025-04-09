import { useQuery } from "@tanstack/react-query";
import { ArticlesApi } from "./articles-api";

const ARTICLES_CATEGORIES_QUERY_KEY = "product";

/**
 * Query request to get a list of articles categories,
 * i.e. used in journal page for categories filter
 */
export const useGetArticlesCategories = () => {
  return useQuery({
    queryKey: [ARTICLES_CATEGORIES_QUERY_KEY],
    refetchOnWindowFocus: false,
    queryFn: () => ArticlesApi.getArticlesCategories(),
  });
};
