import { useInfiniteQuery } from "@tanstack/react-query";
import { ApiResponseWithPager } from "@/shared/types/api/api-types";
import { getNextPageParam } from "@/shared/lib/helpers/api/get-next-page-param";
import { getNormalizedNumber } from "@/shared/lib/helpers/get-normalized-number";
import { ProductsApiQueryParams } from "../model/types/product-api";
import { ProductSummary } from "../model/types/product";
import { ProductsApi } from "./products-api";

const PRODUCTS_QUERY_KEY = "products";

export const useGetProductsInfiniteQuery = (query: ProductsApiQueryParams) => {
  return useInfiniteQuery<ApiResponseWithPager<ProductSummary>>({
    queryKey: [PRODUCTS_QUERY_KEY, query],
    refetchOnWindowFocus: false,
    queryFn: ({ pageParam = 1 }) => {
      const apiQuery = {
        ...query,
        perPage: 10,
        page: getNormalizedNumber(pageParam),
      };

      return ProductsApi.getProducts(apiQuery);
    },
    initialPageParam: 1,
    getNextPageParam,
  });
};
