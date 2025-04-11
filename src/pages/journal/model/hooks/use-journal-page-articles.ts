import { useGetArticlesInfiniteQuery } from "@/entities/article";
import { useJournalPageArticlesFilters } from "./use-journal-page-articles-filters";
import { flatMapDataPages } from "@/shared/lib/helpers/api/flat-map-data-pages";
import { getTotalFoundAmount } from "@/shared/lib/helpers/api/get-total-found-amount";
import { useDelayedLoading } from "@/shared/lib/hooks/use-delayed-loading";
import { COMMA } from "@/shared/const/common-string";

/**
 * Hook used to manage a list of articles, articles filters
 * for given categories
 */
export const useJournalPageArticles = () => {
  /**
   * Articles filters
   */
  const {
    filterAttributes,
    initialFilterValues,
    articlesFilterQuery,
    onSubmitFilters,
    categories,
    isCategoriesLoading,
    selectedCategories,
    onChangeCategories,
  } = useJournalPageArticlesFilters();

  /**
   * Articles list request query
   */
  const {
    data,
    isLoading: isDataLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetArticlesInfiniteQuery({
    categories: selectedCategories?.join(COMMA),
    ...articlesFilterQuery,
  });

  const articles = flatMapDataPages(data);
  const totalLength = getTotalFoundAmount(data);

  /**
   * Articles list loading state,
   * delay loading indicator for a moment to avoid page flickering
   */
  const delayedLoading = useDelayedLoading(isDataLoading);
  const isLoading = delayedLoading || isCategoriesLoading;

  return {
    articles,
    filterAttributes,
    initialFilterValues,
    onSubmitFilters,
    categories,
    selectedCategories,
    onChangeCategories,
    isLoading,
    totalLength,
    isFetchingNextPage,
    fetchNextPage,
  };
};
