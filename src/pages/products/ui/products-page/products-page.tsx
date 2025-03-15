import { ProductsGallery } from "@/features/products-gallery";
import { UiBox } from "@/shared/ui";
import { ProductsPageHeader } from "../products-page-header/products-page-header";
import { useProductsPage } from "../../model/hooks/use-products-page";
import cls from "./products-page.m.scss";

export const ProductsPage = () => {
  const {
    products,
    isLoading,
    categoryName,
    totalLength,
    isFetchingNextPage,
    filterAttributes,
    fetchNextPage,
    onSubmitFilters,
  } = useProductsPage();

  return (
    <UiBox className={cls.productsPage}>
      <ProductsPageHeader
        categoryName={categoryName}
        filterAttributes={filterAttributes}
        onSubmitFilters={onSubmitFilters}
      />
      <ProductsGallery
        products={products}
        isLoading={isLoading}
        className={cls.productsPageGallery}
        totalLength={totalLength}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </UiBox>
  );
};
