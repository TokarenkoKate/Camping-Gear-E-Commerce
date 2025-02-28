import { useParams } from "react-router-dom";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { EMPTY_STRING } from "@/shared/const/common-string";
import { ProductsPageParams } from "../types/products-page";
import { ProductsPageHeader } from "./products-page-header";
import { ProductsGallery } from "@/features/products-gallery";
import { categoryItems } from "@/entities/category/model/const/shop-categories";
import { mockProductsGallery } from "@/mocks/products/product";
import cls from "./products-page.m.scss";

export const ProductsPage = () => {
  const params = useParams<ProductsPageParams>();
  const category = params.category;

  const categoryName =
    categoryItems.find((categoryItem) => categoryItem.href === category)
      ?.name || EMPTY_STRING;

  return (
    <UiBox className={cls.productsPage}>
      <ProductsPageHeader categoryName={categoryName} />
      <ProductsGallery
        products={mockProductsGallery}
        className={cls.productsPageGallery}
      />
    </UiBox>
  );
};
