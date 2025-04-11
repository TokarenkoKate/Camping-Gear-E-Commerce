import { UiBox } from "@/shared/ui";
import { ListHeader } from "@/features/list-header";
import { ProductsGallery } from "@/features/products-gallery";
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
    initialFilterValues,
    fetchNextPage,
    onSubmitFilters,
  } = useProductsPage();

  return (
    <UiBox className={cls.productsPage}>
      <ListHeader
        title={categoryName}
        subtitle="Shop collection"
        filterAttributes={filterAttributes}
        initialFilterValues={initialFilterValues}
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
