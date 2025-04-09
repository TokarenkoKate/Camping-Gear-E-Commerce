import { useParams } from "react-router-dom";
import { ArticlePageParams } from "../types/article-page";
import { useGetArticleQuery } from "@/entities/article";
import { useDelayedLoading } from "@/shared/lib/hooks/use-delayed-loading";

export const useArticlePage = () => {
  /**
   * Get articleId from search params
   */
  const { id } = useParams<ArticlePageParams>();
  const articleId = Number(id);

  /**
   * Article request query
   */
  const {
    data: article,
    isLoading: isArticleLoading,
    isError,
  } = useGetArticleQuery(articleId);

  /**
   * Product loading state,
   * delay loading indicator for a moment to avoid page flickering
   */
  const delayedLoading = useDelayedLoading(isArticleLoading);
  const isLoading = delayedLoading;

  return {
    article,
    isLoading,
    isError,
  };
};
