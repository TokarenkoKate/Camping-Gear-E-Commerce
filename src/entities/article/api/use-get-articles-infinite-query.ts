import { useInfiniteQuery } from "@tanstack/react-query";
import { getNextPageParam } from "@/shared/lib/helpers/api/get-next-page-param";
import { getNormalizedNumber } from "@/shared/lib/helpers/get-normalized-number";
import { ArticlesApi } from "./articles-api";
import { ArticlePreview } from "../model/types/article";
import { ApiResponseWithPager } from "@/shared/types/api/api-types";
import { ArticlesApiQueryParams } from "../model/types/articles-api";

const ARTICLES_QUERY_KEY = "products";

export const useGetArticlesInfiniteQuery = (query: ArticlesApiQueryParams) => {
  return useInfiniteQuery<ApiResponseWithPager<ArticlePreview>>({
    queryKey: [ARTICLES_QUERY_KEY, query],
    refetchOnWindowFocus: false,
    queryFn: ({ pageParam = 1 }) => {
      const apiQuery = {
        ...query,
        perPage: 10,
        page: getNormalizedNumber(pageParam),
      };

      return ArticlesApi.getArticles(apiQuery);
    },
    initialPageParam: 1,
    getNextPageParam,
  });
};
