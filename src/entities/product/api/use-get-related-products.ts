import { useQuery } from "@tanstack/react-query";
import { ProductsApi } from "./products-api";

const RELATED_PRODUCTS_QUERY_KEY = "related-products";

/**
 * Query request to get a few products related to a given product,
 * i.e. used in product details page
 */
export const useGetRelatedProducts = (productId: number | undefined) => {
  return useQuery({
    queryKey: [RELATED_PRODUCTS_QUERY_KEY, productId],
    refetchOnWindowFocus: false,
    enabled: Boolean(productId),
    queryFn: () => ProductsApi.getRelatedProducts(productId),
  });
};
