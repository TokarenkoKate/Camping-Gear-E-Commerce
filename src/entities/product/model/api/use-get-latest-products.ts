import { useQuery } from "@tanstack/react-query";
import { ProductsApi } from "./products-api";

const RELATED_PRODUCTS_QUERY_KEY = "latests-products";

/**
 * Query request to get a list of latest products,
 * i.e. used in main page
 */
export const useGetLatestProducts = (enabled: boolean = true) => {
  return useQuery({
    queryKey: [RELATED_PRODUCTS_QUERY_KEY],
    refetchOnWindowFocus: false,
    enabled,
    queryFn: () => ProductsApi.getLatestProducts(),
  });
};
