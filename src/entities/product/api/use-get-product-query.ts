import { useQuery } from "@tanstack/react-query";
import { ProductsApi } from "./products-api";

const PRODUCT_QUERY_KEY = "product";

/**
 * Query request to get a product with detailed information by product id,
 * i.e. used in product details page
 */
export const useGetProductQuery = (productId: number | undefined) => {
  return useQuery({
    queryKey: [PRODUCT_QUERY_KEY, productId],
    refetchOnWindowFocus: false,
    enabled: Boolean(productId),
    queryFn: () => ProductsApi.getProduct(productId),
  });
};
