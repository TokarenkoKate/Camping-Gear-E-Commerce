import { ProductsGallery } from "@/features/products-gallery";
import { UiBox } from "@/shared/ui";
import { useProductsPage } from "../model/hooks/use-products-page";
import { ProductsPageHeader } from "./products-page-header";
import cls from "./products-page.m.scss";

export const ProductsPage = () => {
  const { products, isLoading, categoryName } = useProductsPage();

  return (
    <UiBox className={cls.productsPage}>
      <ProductsPageHeader categoryName={categoryName} />
      <ProductsGallery
        products={products}
        isLoading={isLoading}
        className={cls.productsPageGallery}
      />
    </UiBox>
  );
};
