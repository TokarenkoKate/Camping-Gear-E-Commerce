import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { CartApi } from "./cart-api";
import { Cart } from "../model/types/cart";
import { queryClient } from "@/app/providers/query";

const CART_QUERY_KEY = "cart";

const cartQuery: UseQueryOptions<Cart> = {
  queryKey: [CART_QUERY_KEY],
  refetchOnWindowFocus: false,
  enabled: false,
  queryFn: () => CartApi.getCart(),
};

/**
 * Query request to get a cart, works both
 * for authenticated and anonymous users
 */
export const useGetCart = () => {
  const cartQueryResult = useQuery(cartQuery);
  return cartQueryResult;
};

/**
 * Helper to fetch cart in app main loader
 */
export const handleFetchCart = async () => {
  try {
    await queryClient.fetchQuery(cartQuery);
  } catch (err: unknown) {
    console.error(err);
  }
};
