import { useGetCart } from "@/entities/cart";
import { useCategoriesQuery } from "@/entities/category";
import { useGetUserProfile } from "@/features/auth";

/**
 * On app init, necessary data in prefetched in app-loader on router level.
 * Current hook is used to process that prefetched data,
 * i.e. save data in store. Cannot process data in loader directly,
 * as soon as hooks are unavailable in loaders.
 * https://github.com/remix-run/react-router/discussions/9246
 */
export const useAppInit = () => {
  /**
   * Fetch user profile to check user authorization
   */
  useGetUserProfile();

  /** Fetch cart */
  useGetCart();

  /** Fetch categories */
  useCategoriesQuery();
};
