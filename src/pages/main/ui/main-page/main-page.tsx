import { UiBox } from "@/shared/ui";
import { MainPageHeader } from "../main-page-header/main-page-header";
import { MainPageArticles } from "../main-page-articles/main-page-articles";
import { MainPageLatestProducts } from "../main-page-latest-products/main-page-latest-products";
import cls from "./main-page.m.scss";

export const MainPage = () => {
  return (
    <UiBox className={cls.mainPage}>
      <MainPageHeader />
      <MainPageArticles />
      <MainPageLatestProducts />
    </UiBox>
  );
};
