import { useParams } from "react-router-dom";
import { EMPTY_STRING } from "@/shared/const/common-string";
import { ProductsPageParams } from "../../types/products-page";
import { useGetCategoryByAlias } from "@/entities/category";
import { useGetProductsInfiniteQuery } from "@/entities/product/model/api/use-get-products-infinite-query";
import { useDelayedLoading } from "@/shared/lib/hooks/use-delayed-loading";
import { useProductsPageFilters } from "./use-products-page-filters";
import { flatMapDataPages } from "@/shared/lib/helpers/api/flat-map-data-pages";
import { getTotalFoundAmount } from "@/shared/lib/helpers/api/get-total-found-amount";

/**
 * Hook used to manage a list of products, products filters
 * for a given category
 */
export const useProductsPage = () => {
  /**
   * Get category form url search params
   */
  const params = useParams<ProductsPageParams>();
  const categoryParamsAlias = params.category;
  const category = useGetCategoryByAlias(categoryParamsAlias);
  const categoryName = category?.name || EMPTY_STRING;

  /**
   * Products filter
   */
  const {
    filterAttributes,
    initialFilterValues,
    isCategoryAttributesLoading,
    productsFilterQuery,
    onSubmitFilters,
  } = useProductsPageFilters(category?.id);

  /**
   * Products list request query
   */
  const {
    data,
    isLoading: isDataLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetProductsInfiniteQuery({
    categoryId: category?.id,
    ...productsFilterQuery,
  });

  const products = flatMapDataPages(data);
  const totalLength = getTotalFoundAmount(data);

  /**
   * Products list loading state,
   * delay loading indicator for a moment to avoid page flickering
   */
  const delayedLoading = useDelayedLoading(isDataLoading);
  const isLoading = delayedLoading || isCategoryAttributesLoading;

  return {
    categoryName,
    isLoading,
    products,
    totalLength,
    isFetchingNextPage,
    filterAttributes,
    initialFilterValues,
    fetchNextPage,
    onSubmitFilters,
  };
};
