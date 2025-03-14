import { ApiGet } from "@/shared/config/api/api-methods";
import { ProductsApiQueryParams } from "../types/product-api";
import { ApiResponseWithPager } from "@/shared/types/api/api-types";
import { ProductDetails, ProductSummary } from "../types/product";
import { ApiEndpoint } from "@/shared/config/api/api-enpoints";

export const ProductsApi = {
  getProducts: (queryParams?: ProductsApiQueryParams) =>
    ApiGet<ApiResponseWithPager<ProductSummary>>({
      endpoint: ApiEndpoint.products,
      queryParams,
    }),

  getProduct: (productId: number | undefined) =>
    ApiGet<ProductDetails>({
      endpoint: `${ApiEndpoint.products}/${productId}`,
    }),

  getRelatedProducts: (productId: number | undefined) =>
    ApiGet<Array<ProductSummary>>({
      endpoint: `${ApiEndpoint.products}/${productId}/related`,
    }),

  getSimilarProducts: (productId: number | undefined) =>
    ApiGet<Array<ProductSummary>>({
      endpoint: `${ApiEndpoint.products}/${productId}/similar`,
    }),
};
