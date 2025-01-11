import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { MainPageHeader } from "../main-page-header/main-page-header";
import { MainPageArticles } from "../main-page-articles/main-page-articles";
import { ProductsGallery } from "@/features/products-gallery";
import { mockProductsGallery } from "@/mocks/products/product";
import cls from "./main-page.m.scss";

export const MainPage = () => {
  return (
    <UiBox className={cls.mainPage}>
      <MainPageHeader />
      <MainPageArticles />
      <ProductsGallery products={mockProductsGallery} />
    </UiBox>
  );
};
