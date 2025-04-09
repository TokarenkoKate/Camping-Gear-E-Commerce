import { useQuery } from "@tanstack/react-query";
import { ArticlesApi } from "./articles-api";

const SIMILAR_ARTICLES_QUERY_KEY = "similar-articles";

/**
 * Query request to get similar articles of the same category,
 * i.e. used in articles details page
 */
export const useGetSimilarArticles = (
  articleId: number | undefined,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: [SIMILAR_ARTICLES_QUERY_KEY, articleId],
    refetchOnWindowFocus: false,
    enabled: Boolean(articleId && enabled),
    queryFn: () => ArticlesApi.getSimilarArticles(articleId),
  });
};
