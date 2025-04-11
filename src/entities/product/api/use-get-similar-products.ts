import { useQuery } from "@tanstack/react-query";
import { ProductsApi } from "./products-api";

const SIMILAR_PRODUCTS_QUERY_KEY = "similar-products";

/**
 * Query request to get similar products of the same category,
 * i.e. used in product details page
 */
export const useGetSimilarProducts = (
  productId: number | undefined,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: [SIMILAR_PRODUCTS_QUERY_KEY, productId],
    refetchOnWindowFocus: false,
    enabled: Boolean(productId && enabled),
    queryFn: () => ProductsApi.getSimilarProducts(productId),
  });
};
