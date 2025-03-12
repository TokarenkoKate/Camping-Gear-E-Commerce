import { useParams } from "react-router-dom";
import { useGetCategoryByAlias } from "@/entities/category";
import { EMPTY_STRING } from "@/shared/const/common-string";
import { ProductsPageParams } from "../../types/products-page";
import { useGetProductsInfiniteQuery } from "@/entities/product/model/api/use-get-products-infinite-query";
import { flatMapDataPages } from "@/shared/lib/helpers/api/flat-map-data-pages";

export const useProductsPage = () => {
  const params = useParams<ProductsPageParams>();
  const categoryParamsAlias = params.category;
  const category = useGetCategoryByAlias(categoryParamsAlias);

  const categoryName = category?.name || EMPTY_STRING;

  const { data, isLoading } = useGetProductsInfiniteQuery({
    categoryId: category?.id,
  });

  const products = flatMapDataPages(data);

  return { categoryName, isLoading, products };
};
