import { ApiGet } from "@/shared/config/api/api-methods";
import { ProductsApiQueryParams } from "../types/product-api";
import { ApiResponseWithPager } from "@/shared/types/api/api-types";
import { ProductSummary } from "../types/product";

const PRODUCTS_API_ENDPOINT = "products";

export const ProductsApi = {
  getProducts: (queryParams?: ProductsApiQueryParams) =>
    ApiGet<ApiResponseWithPager<ProductSummary>>({
      endpoint: PRODUCTS_API_ENDPOINT,
      queryParams,
    }),
};
