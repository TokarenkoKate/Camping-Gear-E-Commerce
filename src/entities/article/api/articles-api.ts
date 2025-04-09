import { ApiGet } from "@/shared/config/api/api-methods";
import { ApiResponseWithPager } from "@/shared/types/api/api-types";
import { ApiEndpoint } from "@/shared/config/api/api-endpoints";
import { ArticlesApiQueryParams } from "../model/types/articles-api";
import { ArticlePreview } from "../model/types/article";

export const ArticlesApi = {
  getArticles: (queryParams?: ArticlesApiQueryParams) =>
    ApiGet<ApiResponseWithPager<ArticlePreview>>({
      endpoint: ApiEndpoint.articles,
      queryParams,
    }),

  getArticlesCategories: () =>
    ApiGet<string[]>({
      endpoint: `${ApiEndpoint.articles}/categories`,
    }),
};
