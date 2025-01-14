import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { MainPageHeader } from "../main-page-header/main-page-header";
import { MainPageArticles } from "../main-page-articles/main-page-articles";
import { ProductsGallery } from "@/features/products-gallery";
import { mockProductsGallery } from "@/mocks/products/product";
import {
  bestSellersGalleryIntroCard,
  newInGalleryIntroCard,
} from "../../model/const/main-page";
import cls from "./main-page.m.scss";

export const MainPage = () => {
  return (
    <UiBox className={cls.mainPage}>
      <MainPageHeader />
      <MainPageArticles />
      <ProductsGallery
        products={mockProductsGallery}
        introCardProps={newInGalleryIntroCard}
        className={cls.mainPageProductGallery}
      />
      <ProductsGallery
        products={mockProductsGallery}
        introCardProps={bestSellersGalleryIntroCard}
        className={cls.mainPageProductGallery}
      />
    </UiBox>
  );
};
