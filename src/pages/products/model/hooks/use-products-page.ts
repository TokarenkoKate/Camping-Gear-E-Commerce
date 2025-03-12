import { useParams } from "react-router-dom";
import { useGetCategoryByAlias } from "@/entities/category";
import { EMPTY_STRING } from "@/shared/const/common-string";
import { ProductsPageParams } from "../../types/products-page";
import { useGetProductsInfiniteQuery } from "@/entities/product/model/api/use-get-products-infinite-query";
import { useDelayedLoading } from "@/shared/lib/hooks/use-delayed-loading";
import { flatMapDataPages } from "@/shared/lib/helpers/api/flat-map-data-pages";
import { getTotalFoundAmount } from "@/shared/lib/helpers/api/get-total-found-amount";

export const useProductsPage = () => {
  const params = useParams<ProductsPageParams>();
  const categoryParamsAlias = params.category;
  const category = useGetCategoryByAlias(categoryParamsAlias);

  const categoryName = category?.name || EMPTY_STRING;

  const { data, isLoading, isFetchingNextPage, fetchNextPage } =
    useGetProductsInfiniteQuery({
      categoryId: category?.id,
    });

  const delayedLoading = useDelayedLoading(isLoading);

  const products = flatMapDataPages(data);
  const totalLength = getTotalFoundAmount(data);

  return {
    categoryName,
    isLoading: delayedLoading,
    products,
    totalLength,
    isFetchingNextPage,
    fetchNextPage,
  };
};
