import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { MainPageHeader } from "../main-page-header/main-page-header";
import { MainPageArticles } from "../main-page-articles/main-page-articles";
import cls from "./main-page.m.scss";
import {
  mockProductId1,
  mockProductId2,
  mockProductId3,
  mockProductId4,
  mockProductId5,
  mockProductId6,
  mockProductId7,
  mockProductId8,
} from "@/mocks/products/product";
import { ProductsGallery } from "@/features/products-gallery";

export const MainPage = () => {
  return (
    <UiBox className={cls.mainPage}>
      <MainPageHeader />
      <MainPageArticles />
      <ProductsGallery
        products={[
          mockProductId1,
          mockProductId2,
          mockProductId3,
          mockProductId4,
          mockProductId5,
          mockProductId6,
          mockProductId7,
          mockProductId8,
        ]}
      />
    </UiBox>
  );
};
