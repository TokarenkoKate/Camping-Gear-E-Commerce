import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { ArticlesApi } from "./articles-api";
import { ArticlePreview } from "../model/types/article";
import { queryClient } from "@/app/providers/query";

const LATEST_QUERY_KEY = "latests-articles";

const latestArticlesQuery = (
  limit?: number,
  enabled?: boolean
): UseQueryOptions<Array<ArticlePreview>> => ({
  queryKey: [LATEST_QUERY_KEY, limit],
  refetchOnWindowFocus: false,
  enabled,
  queryFn: () => ArticlesApi.getLatestArticles(limit),
});

/**
 * Query request to get a list of latest articles
 */
export const useGetLatestArticles = (
  limit?: number,
  enabled: boolean = false
) => {
  const latestArticlesQueryResult = useQuery(
    latestArticlesQuery(limit, enabled)
  );
  return latestArticlesQueryResult;
};

/**
 * Helper to fetch latest articles in app main loader
 */
export const handleFetchLatestArticles = async (limit?: number) => {
  try {
    await queryClient.fetchQuery(latestArticlesQuery(limit));
  } catch (err: unknown) {
    console.error(err);
  }
};
