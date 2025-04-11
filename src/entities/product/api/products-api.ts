import { ApiGet } from "@/shared/config/api/api-methods";
import { ProductsApiQueryParams } from "../model/types/product-api";
import { ProductDetails, ProductSummary } from "../model/types/product";
import { ApiResponseWithPager } from "@/shared/types/api/api-types";
import { ApiEndpoint } from "@/shared/config/api/api-endpoints";

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

  getLatestProducts: () =>
    ApiGet<Array<ProductSummary>>({
      endpoint: `${ApiEndpoint.products}/latest`,
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
