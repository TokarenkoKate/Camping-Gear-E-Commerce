import { APP_LOADER_VISIBLE_MIN_TIME } from "../../const/app";
import { fetchWithMinDelay } from "@/shared/lib/helpers/api/fetch-with-min-delay";
import { handleFetchProfile } from "@/features/auth";
import { handleFetchCart } from "@/entities/cart";
import { handleFetchCategories } from "@/entities/category";
import { handleFetchLatestArticles } from "@/entities/article";
import { MAIN_PAGE_ARTICLES_LIMIT } from "@/pages/main";

/**
 * Helper is used to prefetch necessary data before app renders on router level.
 * All the data processing is not performed in the current loader,
 * i.e. saving data in store, as soon as hooks are unavailable in loaders.
 * https://github.com/remix-run/react-router/discussions/9246
 * Data processing is performed in useAppInit hook.
 */
export const appLoader = () => async () => {
  /**
   * Show app loader for at least min time before resolving all promises
   * to avoid loader flickering.
   */
  await fetchWithMinDelay(
    [
      handleFetchProfile,
      handleFetchCart,
      handleFetchCategories,
      () => handleFetchLatestArticles(MAIN_PAGE_ARTICLES_LIMIT),
    ],
    APP_LOADER_VISIBLE_MIN_TIME
  );

  return null;
};
