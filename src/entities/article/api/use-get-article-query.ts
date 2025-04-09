import { useQuery } from "@tanstack/react-query";
import { ArticlesApi } from "./articles-api";

const ARTICLE_QUERY_KEY = "article";

/**
 * Query request to get an article with detailed information by article id,
 * i.e. used in article details page
 */
export const useGetArticleQuery = (articleId: number | undefined) => {
  return useQuery({
    queryKey: [ARTICLE_QUERY_KEY, articleId],
    refetchOnWindowFocus: false,
    enabled: Boolean(articleId),
    queryFn: () => ArticlesApi.getArticle(articleId),
  });
};
