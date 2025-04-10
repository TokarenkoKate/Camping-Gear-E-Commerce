import { ApiGet } from "@/shared/config/api/api-methods";
import { ApiResponseWithPager } from "@/shared/types/api/api-types";
import { ApiEndpoint } from "@/shared/config/api/api-endpoints";
import { ArticlesApiQueryParams } from "../model/types/articles-api";
import { Article, ArticlePreview } from "../model/types/article";

export const ArticlesApi = {
  getArticles: (queryParams?: ArticlesApiQueryParams) =>
    ApiGet<ApiResponseWithPager<ArticlePreview>>({
      endpoint: ApiEndpoint.articles,
      queryParams,
    }),

  getLatestArticles: (limit?: number) =>
    ApiGet<Array<ArticlePreview>>({
      endpoint: `${ApiEndpoint.articles}/latest`,
      queryParams: { limit },
    }),

  getArticlesCategories: () =>
    ApiGet<string[]>({
      endpoint: `${ApiEndpoint.articles}/categories`,
    }),

  getArticle: (articleId: number | undefined) =>
    ApiGet<Article>({
      endpoint: `${ApiEndpoint.articles}/${articleId}`,
    }),

  getSimilarArticles: (articleId: number | undefined) =>
    ApiGet<Array<ArticlePreview>>({
      endpoint: `${ApiEndpoint.articles}/${articleId}/similar`,
    }),
};
